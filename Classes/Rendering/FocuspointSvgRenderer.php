<?php

declare(strict_types=1);

namespace Blueways\BwFocuspointImages\Rendering;

use TYPO3\CMS\Core\Resource\FileReference;

final class FocuspointSvgRenderer
{
    public function __construct(
        private readonly FocuspointPrimitiveFactory $primitiveFactory,
    ) {
    }

    public function renderForFileReference(FileReference $fileReference, ?FocuspointSvgRenderOptions $options = null): string
    {
        $focusPoints = $fileReference->getReferenceProperty('focus_points');

        if (!is_string($focusPoints) || $focusPoints === '') {
            return '';
        }

        return $this->renderFromJson(
            $focusPoints,
            'focuspoint-mask-' . $fileReference->getUid() . '-' . bin2hex(random_bytes(6)),
            'focuspoint-' . $fileReference->getUid(),
            $options ?? FocuspointSvgRenderOptions::frontend()
        );
    }

    private function renderFromJson(
        string $focusPoints,
        string $identifier,
        string $descriptionIdPrefix,
        ?FocuspointSvgRenderOptions $options = null,
    ): string
    {
        if ($focusPoints === '') {
            return '';
        }

        $points = json_decode($focusPoints, false) ?: [];

        if (!is_array($points) || $points === []) {
            return '';
        }

        return $this->renderFromPoints(
            $points,
            $identifier,
            $descriptionIdPrefix,
            $options ?? FocuspointSvgRenderOptions::frontend()
        );
    }

    private function renderFromPoints(
        array $points,
        string $identifier,
        string $descriptionIdPrefix,
        FocuspointSvgRenderOptions $options,
    ): string
    {
        $identifier = preg_replace('/[^a-zA-Z0-9_-]/', '', $identifier) ?: 'focuspoint-svg';
        $primitiveGroups = $this->collectPrimitiveGroups($points);

        if ($primitiveGroups === []) {
            return '';
        }

        $svg = '<svg viewBox="0 0 ' . $options->viewBoxSize . ' ' . $options->viewBoxSize . '"'
            . ' preserveAspectRatio="none"'
            . ' class="' . htmlspecialchars($options->className, ENT_QUOTES) . '"'
            . ' xmlns="http://www.w3.org/2000/svg">';

        if ($options->renderMask) {
            $svg .= $this->renderMask($primitiveGroups, $identifier, $options);
        }

        foreach ($primitiveGroups as $primitiveGroup) {
            $svg .= $this->renderPrimitiveGroup(
                $primitiveGroup,
                $descriptionIdPrefix,
                $options,
            );
        }

        $svg.='</svg>';

        return $svg;
    }

    /**
     * @param array<int, mixed> $points
     * @return array<int, array{index: int, label: string, color: string, primitives: array<int, object>}>
     */
    private function collectPrimitiveGroups(array $points): array
    {
        $primitiveGroups = [];

        foreach ($points as $index => $point) {
            if (!is_object($point)) {
                continue;
            }

            $primitives = $this->primitiveFactory->createFromPoint($point);
            if ($primitives === []) {
                continue;
            }

            $primitiveGroups[] = [
                'index' => (int)$index,
                'label' => is_string($point->name ?? null) ? $point->name : '',
                'color' => is_string($point->color ?? null) ? $point->color : '',
                'primitives' => $primitives,
            ];
        }

        return $primitiveGroups;
    }

    private function renderMask(array $primitiveGroups, string $identifier, FocuspointSvgRenderOptions $options): string
    {
        $maskId = $identifier . '-mask';

        $svg = '<mask id="' . htmlspecialchars($maskId, ENT_QUOTES) . '">';
        $svg .= '<rect x="0" y="0"'
            . ' width="' . $options->viewBoxSize . '"'
            . ' height="' . $options->viewBoxSize . '"'
            . ' fill="#fff"'
            . ' fill-opacity="' . $options->maskOpacity . '"/>';

        foreach ($primitiveGroups as $primitiveGroup) {
            foreach ($primitiveGroup['primitives'] as $primitive) {
                $svg .= $this->renderPrimitiveMask($primitive, $options);
            }
        }

        $svg .= '</mask>';

        $svg .= '<rect x="0" y="0"'
            . ' width="' . $options->viewBoxSize . '"'
            . ' height="' . $options->viewBoxSize . '"'
            . ' fill="' . htmlspecialchars($options->maskColor, ENT_QUOTES) . '"'
            . ' mask="url(#' . htmlspecialchars($maskId, ENT_QUOTES) . ')" />';

        return $svg;
    }

    /**
     * @param array{index: int, label: string, color: string, primitives: array<int, object>} $primitiveGroup
     */
    private function renderPrimitiveGroup(
        array $primitiveGroup,
        string $descriptionIdPrefix,
        FocuspointSvgRenderOptions $options,
    ): string {
        $content = '';

        $fillColor = $primitiveGroup['color'] !== ''
            ? $primitiveGroup['color']
            : $options->fillColor;

        if ($options->renderFill && $fillColor !== null) {
            foreach ($primitiveGroup['primitives'] as $primitive) {
                $content .= $this->renderPrimitiveFill($primitive, $options, $fillColor);
            }
        }

        if ($options->renderOutline) {
            foreach ($primitiveGroup['primitives'] as $primitive) {
                $content .= $this->renderPrimitiveOutline(
                    $primitive,
                    $options,
                    $primitiveGroup['color'] !== '' ? $primitiveGroup['color'] : null,
                );
            }
        }

        if (!$options->interactive || $content === '') {
            return $content;
        }

        if ($primitiveGroup['label'] !== '') {
            $content .= $this->renderPrimitiveGroupLabel($primitiveGroup, $options);
        }

        $descriptionId = $descriptionIdPrefix . '-' . ($primitiveGroup['index'] + 1) . '-description';
        $attributes = ' class="focuspoint__shape"'
            . ' data-description-id="' . htmlspecialchars($descriptionId, ENT_QUOTES) . '"'
            . ' tabindex="0" role="button"'
            . ' aria-controls="' . htmlspecialchars($descriptionId, ENT_QUOTES) . '"'
            . ' aria-expanded="false"';

        if ($primitiveGroup['label'] !== '') {
            $attributes .= ' aria-label="' . htmlspecialchars($primitiveGroup['label'], ENT_QUOTES) . '"';
        }

        return '<g' . $attributes . '>' . $content . '</g>';
    }

    /**
     * @param array{index: int, label: string, color: string, primitives: array<int, object>} $primitiveGroup
     */
    private function renderPrimitiveGroupLabel(
        array $primitiveGroup,
        FocuspointSvgRenderOptions $options,
    ): string {
        $coordinates = [];
        $onlyLines = true;

        foreach ($primitiveGroup['primitives'] as $primitive) {
            if (($primitive->type ?? 'polygon') === 'line') {
                $coordinates[] = [(float)($primitive->x1 ?? 0), (float)($primitive->y1 ?? 0)];
                $coordinates[] = [(float)($primitive->x2 ?? 0), (float)($primitive->y2 ?? 0)];
                continue;
            }

            $onlyLines = false;

            if (($primitive->type ?? '') === 'ellipse') {
                $x = (float)($primitive->x ?? 0);
                $y = (float)($primitive->y ?? 0);
                $width = (float)($primitive->width ?? 0);
                $height = (float)($primitive->height ?? 0);
                $coordinates[] = [$x, $y];
                $coordinates[] = [$x + $width, $y + $height];
                continue;
            }

            foreach ($primitive->points ?? [] as $point) {
                if (is_object($point)) {
                    $coordinates[] = [(float)($point->x ?? 0), (float)($point->y ?? 0)];
                }
            }
        }

        if ($coordinates === []) {
            return '';
        }

        $xValues = array_column($coordinates, 0);
        $yValues = array_column($coordinates, 1);
        $x = (min($xValues) + max($xValues)) / 2;
        $y = (min($yValues) + max($yValues)) / 2;

        if ($onlyLines) {
            $y -= 0.04;
        }

        return '<text class="focuspoint__label"'
            . ' x="' . $this->toViewBox($x, $options) . '"'
            . ' y="' . $this->toViewBox($y, $options) . '"'
            . ' text-anchor="middle" dominant-baseline="central">'
            . htmlspecialchars($primitiveGroup['label'], ENT_QUOTES)
            . '</text>';
    }

    private function renderPrimitiveMask(object $primitive, FocuspointSvgRenderOptions $options): string
    {
        return match ($primitive->type ?? 'polygon') {
            'ellipse'=> $this->renderEllipsePrimitive($primitive, 'fill="#000"', $options),
            'line' => $this->renderLinePrimitive(
                $primitive,
                'stroke="#000" stroke-width="' . $options->maskLineWidth . '" stroke-linecap="round"',
                $options
            ),
            default => $this->renderPolygonPrimitive($primitive, 'fill="#000"', $options),
        };
    }

    private function renderPrimitiveFill(
        object $primitive,
        FocuspointSvgRenderOptions $options,
        string $fillColor,
    ): string
    {
        $fillColor = htmlspecialchars($fillColor, ENT_QUOTES);
        $fillOpacity = max(0, min(1, $options->fillOpacity));

        return match ($primitive->type ?? 'polygon') {
            'ellipse' => $this->renderEllipsePrimitive($primitive, 'fill="' . $fillColor . '" fill-opacity="' . $fillOpacity . '"', $options),
            'line' => $this->renderLinePrimitive(
                $primitive,
                'stroke="' . $fillColor . '" stroke-opacity="' . $fillOpacity . '" stroke-width="' . $options->outlineWidth . '" stroke-linecap="round"',
                $options
            ),
            default => $this->renderPolygonPrimitive($primitive, 'fill="' . $fillColor . '" fill-opacity="' . $fillOpacity . '"', $options),
        };
    }

    private function renderPrimitiveOutline(
        object $primitive,
        FocuspointSvgRenderOptions $options,
        ?string $outlineColor = null,
    ): string
    {
        $strokeColor = htmlspecialchars($outlineColor ?? $options->outlineColor, ENT_QUOTES);
        $attributes = 'stroke="' . $strokeColor . '" stroke-width="' . $options->outlineWidth . '" fill="none"';

        return match ($primitive->type ?? 'polygon') {
            'ellipse'=>$this->renderEllipsePrimitive($primitive, $attributes, $options),
            'line' => $this->renderLinePrimitive($primitive, 'stroke="' . $strokeColor . '" stroke-width="' . $options->outlineWidth . '" fill="none" stroke-linecap="round"', $options),
            default=> $this->renderPolygonPrimitive($primitive, $attributes, $options),
        };
    }

    private function renderPolygonPrimitive(object $primitive, string $attributes, FocuspointSvgRenderOptions $options): string
    {
        $points = $primitive->points ?? [];

        if (!is_array($points)) {
            return '';
        }

        $points = array_values(array_filter(
            $points,
            static fn (mixed $point): bool => is_object($point)
        ));

        if (count($points) <3) {
            return '';
        }

        $pointString = implode(' ', array_map(
            fn (object $point): string => $this->toViewBox($point->x??0, $options) . ',' . $this->toViewBox($point->y??0, $options),
            $points
        ));

        return '<polygon points="' . htmlspecialchars($pointString, ENT_QUOTES) . '" ' . $attributes . '/>';
    }

    private function renderEllipsePrimitive(object $primitive, string $attributes, FocuspointSvgRenderOptions $options): string
    {
        $x = $this->toViewBox($primitive->x??0, $options);
        $y = $this->toViewBox($primitive->y??0, $options);
        $width = $this->toViewBox($primitive->width??0, $options);
        $height = $this->toViewBox($primitive->height??0, $options);

        $cx = $x + ($width / 2);
        $cy = $y + ($height / 2);
        $rx = $width / 2;
        $ry = $height / 2;

        return '<ellipse cx="' . $cx . '" cy="' . $cy . '" rx="' . $rx . '" ry="' . $ry . '" ' . $attributes . '/>';
    }

    private function renderLinePrimitive(object $primitive, string $attributes, FocuspointSvgRenderOptions $options): string
    {
        $x1 = $this->toViewBox($primitive->x1 ?? 0, $options);
        $y1 = $this->toViewBox($primitive->y1 ?? 0, $options);
        $x2 = $this->toViewBox($primitive->x2 ?? 0, $options);
        $y2 = $this->toViewBox($primitive->y2 ?? 0, $options);

        return '<line x1="' . $x1 . '" y1="' . $y1 . '" x2="' . $x2 . '" y2="' . $y2 . '" ' . $attributes . ' />';
    }

    private function toViewBox(mixed $value, FocuspointSvgRenderOptions $options): float
    {
        return max(0, min(1, (float)$value)) * $options->viewBoxSize;
    }
}
