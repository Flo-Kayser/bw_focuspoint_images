<?php

declare(strict_types=1);

namespace Blueways\BwFocuspointImages\Rendering;

final class FocuspointPrimitiveFactory
{
    /**
     * @return array<int, object>
     */
    public function createFromPoint(object $point): array
    {
        if (isset($point->primitive) && is_object($point->primitive)) {
            return [$point->primitive];
        }

        if (isset($point->primitives) && is_array($point->primitives)) {
            return array_values(array_filter(
                $point->primitives,
                static fn (mixed $primitive): bool => is_object($primitive)
            ));
        }

        return match ($point->shape ?? 'rectangle') {
            'ellipse', 'circle' => [$this->ellipseToPrimitive($point)],
            'line' => [$this->lineToPrimitive($point)],
            'crosshair' => $this->crosshairToLinePrimitives($point),
            'polygon' => [$this->polygonToPrimitive($point)],
            default => [$this->rectangleToPolygonPrimitive($point)],
        };
    }

    private function ellipseToPrimitive(object $point): object
    {
        return (object)[
            'type' => 'ellipse',
            'x' => $point->x ?? 0,
            'y' => $point->y ?? 0,
            'width' => $point->width ?? 0,
            'height' => $point->height ?? 0,
        ];
    }

    private function lineToPrimitive(object $point): object
    {
        return (object)[
            'type' => 'line',
            'x1' => $point->x ?? 0,
            'y1' => $point->y ?? 0,
            'x2' => $point->x2 ?? (($point->x ?? 0) + ($point->width ?? 0.2)),
            'y2' => $point->y2 ?? (($point->y ?? 0) + ($point->height ?? 0.2)),
        ];
    }

    private function polygonToPrimitive(object $point): object
    {
        return (object)[
            'type' => 'polygon',
            'points' => $point->vertices ?? [],
        ];
    }

    private function rectangleToPolygonPrimitive(object $point): object
    {
        $x = (float)($point->x ?? 0);
        $y = (float)($point->y ?? 0);
        $width = (float)($point->width ?? 0);
        $height = (float)($point->height ?? 0);

        return (object)[
            'type' => 'polygon',
            'points' => [
                (object)['x' => $x, 'y' => $y],
                (object)['x' => $x + $width, 'y' => $y],
                (object)['x' => $x + $width, 'y' => $y + $height],
                (object)['x' => $x, 'y' => $y + $height],
            ],
        ];
    }

    /**
     * @return array<int, object>
     */
    private function crosshairToLinePrimitives(object $point): array
    {
        $x = (float)($point->x ?? 0);
        $y = (float)($point->y ?? 0);
        $size = 0.05;

        return [
            (object)[
                'type' => 'line',
                'x1' => $x - $size,
                'y1' => $y,
                'x2' => $x + $size,
                'y2' => $y,
            ],
            (object)[
                'type' => 'line',
                'x1' => $x,
                'y1' => $y - $size,
                'x2' => $x,
                'y2' => $y + $size,
            ],

        ];
    }
}
