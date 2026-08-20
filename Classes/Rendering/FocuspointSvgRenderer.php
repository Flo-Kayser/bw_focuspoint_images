<?php

declare(strict_types=1);

namespace Blueways\BwFocuspointImages\Rendering;

use TYPO3\CMS\Core\Resource\FileReference;

final class FocuspointSvgRenderer
{
    public function __construct(
        private readonly FocuspointPrimitiveFactory $primitiveFactory,
    )
    {
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
            $options ?? FocuspointSvgRenderOptions::frontend()
        );
    }

    private function renderFromJson(string $focusPoints, string $identifier, ?FocuspointSvgRenderOptions $options = null): string
    {
        if ($focusPoints === '') {
            return '';
        }

        $points = json_decode($focusPoints, false) ?: [];

        if(!is_array($points) || $points === []) {
            return '';
        }

        return $this->renderFromPoints(
            $points,
            $identifier,
            $options ?? FocuspointSvgRenderOptions::frontend()
        );
    }

    private function renderFromPoints(array $points, string $identifier, FocuspointSvgRenderOptions $options): string
    {
        $identifier = preg_replace('/[^a-zA-Z0-9_-]/', '', $identifier) ?: 'focuspoint-svg';
        $primitives = $this->collectPrimitives($points);

        if($primitives === []){
            return '';
        }

        $svg = '<svg viewBox="0 0 ' . $options->viewBoxSize . ' ' . $options->viewBoxSize . '"'
            . ' preserveAspectRatio="none"'
            . ' class="' . htmlspecialchars($options->className, ENT_QUOTES) . '"'
            . ' xmlns="http://www.w3.org/2000/svg">';

        if ($options->renderMask) {
            $svg .= $this->renderMask($primitives, $identifier, $options);
        }

        if($options->renderFill && $options->fillColor !==null){
            foreach ($primitives as $primitive) {
                $svg .= $this->renderPrimitiveFill($primitive, $options);
            }
        }

        if($options->renderOutline){
            foreach ($primitives as $primitive) {
                $svg .= $this->renderPrimitiveOutline($primitive, $options);
            }
        }

        $svg.='</svg>';

        return $svg;
    }

    /**
     * @param array<int, mixed> $points
     * @return array<int, object>
     */
    private function collectPrimitives(array $points): array
    {
        $primitives = [];

        foreach ($points as $point) {
            if(!is_object($point)) {
                continue;
            }

            array_push($primitives,
            ...$this->primitiveFactory->createFromPoint($point)
            );
        }

        return array_values(array_filter(
            $primitives,
            static fn(mixed $primitive): bool => is_object($primitive)
        ));
    }

    private function renderMask(array $primitives, string $identifier, FocuspointSvgRenderOptions $options): string
    {
        $maskId = $identifier . '-mask';

        $svg = '<mask id="' . htmlspecialchars($maskId, ENT_QUOTES) . '">';
        $svg .= '<rect x="0" y="0"'
            . ' width="' . $options->viewBoxSize . '"'
            . ' height="' . $options->viewBoxSize . '"'
            . ' fill="#fff"'
            . ' fill-opacity="' . $options->maskOpacity . '"/>';

        foreach ($primitives as $primitive) {
            $svg .= $this->renderPrimitiveMask($primitive, $options);
        }

        $svg .= '</mask>';

        $svg .= '<rect x="0" y="0"'
            . ' width="' . $options->viewBoxSize . '"'
            . ' height="' . $options->viewBoxSize . '"'
            . ' fill="' . htmlspecialchars($options->maskColor, ENT_QUOTES) . '"'
            . ' mask="url(#' . htmlspecialchars($maskId, ENT_QUOTES) . ')" />';

        return $svg;
    }

    private function renderPrimitiveMask(object $primitive, FocuspointSvgRenderOptions $options): string
    {
        return match ($primitive->type ?? 'polygon') {
            'ellipse'=> $this->renderEllipsePrimitive($primitive, 'fill="#000"', $options),
            'line' => $this->renderLinePrimitive(
                $primitive,
                'stroke="#000" stroke-width="4" stroke-linecap="round"',
                $options
            ),
            default => $this->renderPolygonPrimitive($primitive, 'fill="#000"', $options),
        };
    }

    private function renderPrimitiveFill(object $primitive, FocuspointSvgRenderOptions $options): string
    {
        $fillColor = htmlspecialchars($options->fillColor, ENT_QUOTES);

        return match ($primitive->type ?? 'polygon') {
            'ellipse' => $this->renderEllipsePrimitive($primitive, 'fill="' . $fillColor . '"', $options),
            'line' => $this->renderLinePrimitive(
                $primitive,
                'stroke="' . $fillColor . '" stroke-width="' . $options->outlineWidth . '" stroke-linecap="round"',
                $options
            ),
            default => $this->renderPolygonPrimitive($primitive, 'fill="' . $fillColor . '"', $options),
        };
    }

    private function renderPrimitiveOutline(object $primitive, FocuspointSvgRenderOptions $options): string
    {
        $strokeColor=htmlspecialchars($options->outlineColor, ENT_QUOTES);
        $attributes = 'stroke="' .$strokeColor . '" stroke-width="' .$options->outlineWidth . '" fill="none"';

        return match ($primitive->type ?? 'polygon'){
            'ellipse'=>$this->renderEllipsePrimitive($primitive, $attributes, $options),
            'line' => $this->renderLinePrimitive($primitive, 'stroke="' . $strokeColor . '" stroke-width="4" fill="none" stroke-linecap="round"', $options),
            default=> $this->renderPolygonPrimitive($primitive,$attributes, $options),
        };
    }

    private function renderPolygonPrimitive(object $primitive, string $attributes, FocuspointSvgRenderOptions $options): string
    {
        $points = $primitive->points ?? [];

        if(!is_array($points)){
            return '';
        }

        $points = array_values(array_filter(
            $points,
            static fn(mixed $point): bool => is_object($point)
        ));

        if(count($points) <3){
            return '';
        }

        $pointString = implode(' ', array_map(
            fn (object $point): string => $this->toViewBox($point->x??0, $options) . ',' . $this->toViewBox($point->y??0, $options),
            $points
        ));

        return '<polygon points="' . htmlspecialchars($pointString, ENT_QUOTES) . '" ' . $attributes . '/>';
    }

    private function renderEllipsePrimitive(object $primitive,string $attributes, FocuspointSvgRenderOptions $options): string
    {
        $x = $this->toViewBox($primitive->x??0, $options);
        $y = $this->toViewBox($primitive->y??0, $options);
        $width = $this->toViewBox($primitive->width??0, $options);
        $height = $this->toViewBox($primitive->height??0, $options);

        $cx = $x + ($width / 2);
        $cy = $y + ($height / 2);
        $rx = $width / 2;
        $ry = $height / 2;

        return '<ellipse cx="'.$cx. '" cy="'.$cy.'" rx="'.$rx.'" ry="'.$ry.'" '.$attributes.'/>';

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
