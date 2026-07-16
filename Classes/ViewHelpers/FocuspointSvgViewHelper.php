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
            'renderOutline',
            'bool',
            'Whether to render the focuspoint outline.',
            false,
            true
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
                renderOutline: (bool)$this->arguments['renderOutline'],
                outlineColor: (string)$this->arguments['outlineColor'],
                outlineWidth: (float)$this->arguments['outlineWidth'],
            )
        );
    }
}
