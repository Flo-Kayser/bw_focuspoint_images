<?php

declare(strict_types=1);

namespace Blueways\BwFocuspointImages\ViewHelpers;

use Blueways\BwFocuspointImages\Rendering\FocuspointSvgRenderer;
use Blueways\BwFocuspointImages\Rendering\FocuspointSvgRenderOptions;
use TYPO3\CMS\Core\Resource\FileReference;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

final class FocuspointSvgViewHelper extends AbstractViewHelper
{
    protected $escapeOutput = false;

    public function __construct(
        private readonly FocuspointSvgRenderer $focuspointSvgRenderer,
    ) {
    }

    public function initializeArguments(): void
    {
        parent::initializeArguments();

        $this->registerArgument(
            'fileReference',
            FileReference::class,
            'The file reference containing the focus_points reference property.',
            true
        );

        $this->registerArgument(
            'class',
            'string',
            'CSS class for the generated SVG.',
            false,
            'focuspoint__svg'
        );

        $this->registerArgument(
            'outlineColor',
            'string',
            'SVG outline color.',
            false,
            'currentColor'
        );

        $this->registerArgument(
            'outlineWidth',
            'float',
            'SVG outline stroke width.',
            false,
            2.0
        );

        $this->registerArgument(
            'renderFill',
            'bool',
            'Whether to render filled focuspoint areas.',
            false,
            true
        );

        $this->registerArgument(
            'fillColor',
            'string',
            'Fallback SVG fill color.',
            false,
            'currentColor'
        );

        $this->registerArgument(
            'fillOpacity',
            'float',
            'SVG fill opacity.',
            false,
            0.5
        );

        $this->registerArgument(
            'renderOutline',
            'bool',
            'Whether to render the focuspoint outline.',
            false,
            false
        );

        $this->registerArgument(
            'renderMask',
            'bool',
            'Whether to render the dark overlay mask.',
            false,
            false
        );

        $this->registerArgument(
            'maskColor',
            'string',
            'Mask overlay color.',
            false,
            '#000'
        );

        $this->registerArgument(
            'maskOpacity',
            'float',
            'Mask opacity.',
            false,
            0.5
        );

        $this->registerArgument(
            'interactive',
            'bool',
            'Whether focuspoints can reveal associated descriptions.',
            false,
            true
        );
    }

    public function render(): string
    {
        /** @var FileReference $fileReference */
        $fileReference = $this->arguments['fileReference'];

        return $this->focuspointSvgRenderer->renderForFileReference(
            $fileReference,
            new FocuspointSvgRenderOptions(
                className: (string)$this->arguments['class'],
                renderMask: (bool)$this->arguments['renderMask'],
                maskColor: (string)$this->arguments['maskColor'],
                maskOpacity: (float)$this->arguments['maskOpacity'],
                renderFill: (bool)$this->arguments['renderFill'],
                fillColor: (string)$this->arguments['fillColor'],
                fillOpacity: (float)$this->arguments['fillOpacity'],
                renderOutline: (bool)$this->arguments['renderOutline'],
                outlineColor: (string)$this->arguments['outlineColor'],
                outlineWidth: (float)$this->arguments['outlineWidth'],
                interactive: (bool)$this->arguments['interactive'],
            )
        );
    }
}
