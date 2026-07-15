<?php

declare(strict_types=1);

namespace Blueways\BwFocuspointImages\Rendering;

final class FocuspointSvgRenderOptions
{
    public function __construct(
        public readonly string $className = 'focuspoint__svg',
        public readonly int $viewBoxSize = 200,
        public readonly bool $renderMask = false,
        public readonly string $maskColor = '#000',
        public readonly float $maskOpacity = 0.5,
        public readonly float $maskLineWidth = 4.0,
        public readonly bool $renderFill = false,
        public readonly ?string $fillColor = null,
        public readonly bool $renderOutline = true,
        public readonly string $outlineColor = '#ff8700',
        public readonly float $outlineWidth = 1.5,
    ) {
    }

    public static function backendPreview():self
    {
        return new self(
            renderMask: true,
            maskColor: '#000',
            maskOpacity: .5,
            maskLineWidth: 4.0,
            renderFill: false,
            renderOutline: true,
            outlineColor: '#ff8700',
            outlineWidth: 1.5,
        );
    }

    public static function frontend():self
    {
        return new self(
            renderMask: false,
            renderFill: false,
            renderOutline: true,
            outlineColor: 'currentColor',
            outlineWidth: 2.0,
        );
    }
}
