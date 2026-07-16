<?php

namespace Blueways\BwFocuspointImages\Preview;

use Blueways\BwFocuspointImages\Rendering\FocuspointSvgRenderer;
use Blueways\BwFocuspointImages\Rendering\FocuspointSvgRenderOptions;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Backend\Preview\StandardContentPreviewRenderer;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Backend\View\BackendLayout\Grid\GridColumnItem;
use TYPO3\CMS\Core\Domain\RecordInterface;
use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Core\Resource\Collection\LazyFileReferenceCollection;
use TYPO3\CMS\Core\Resource\FileReference;
use TYPO3\CMS\Core\Resource\ProcessedFile;
use TYPO3\CMS\Core\Utility\GeneralUtility;

#[Autoconfigure(public: true)]
class FocuspointPreviewRenderer extends StandardContentPreviewRenderer
{
    public function __construct(
        private readonly PageRenderer $pageRenderer,
        private readonly FocuspointSvgRenderer $focuspointSvgRenderer,
    ) {
    }

    public function renderPageModulePreviewContent(GridColumnItem $item): string
    {
        $record = $item->getRecord();

        // TYPO3 v13: getRecord() returns array; v14+: returns RecordInterface
        // @phpstan-ignore-next-line
        if (is_array($record)) {
            return $this->renderFromRow($record);
        }

        /** @var RecordInterface $record */
        return $this->renderFromRecord($record);
    }

    /**
     * TYPO3 v13 rendering path.
     *
     * @param array<string, mixed> $row
     */
    private function renderFromRow(array $row): string
    {
        $content = '';

        if (!$row['assets']) {
            return '';
        }

        $fileReferences = BackendUtility::resolveFileReferences('tt_content', 'assets', $row);
        if ($fileReferences === null || $fileReferences === []) {
            return '';
        }

        $firstReference = $fileReferences[array_key_first($fileReferences)];
        $focuspoints = $firstReference->getReferenceProperty('focus_points');
        if ($focuspoints === null || $focuspoints === '') {
            // @phpstan-ignore argument.type
            return $this->linkEditContent($content, $row);
        }

        $content = $this->buildPreviewHtml($fileReferences);

        // @phpstan-ignore argument.type
        return $this->linkEditContent($content, $row);
    }

    /**
     * TYPO3 v14+ rendering path.
     */
    private function renderFromRecord(RecordInterface $record): string
    {
        $content = '';

        if (!$record->has('assets')) {
            return '';
        }

        /** @var LazyFileReferenceCollection|null $fileReferences */
        $fileReferences = $record->get('assets');
        if ($fileReferences === null || $fileReferences->count() === 0) {
            return '';
        }

        $firstReference = $fileReferences->offsetGet(0);
        $focuspoints = $firstReference->getReferenceProperty('focus_points');
        if ($focuspoints === null || $focuspoints === '') {
            return $this->linkEditContent($content, $record);
        }

        $content = $this->buildPreviewHtml($fileReferences);

        return $this->linkEditContent($content, $record);
    }

    /**
     * Builds the preview thumbnail HTML for a set of file references.
     * Shared between v13 and v14 rendering paths.
     *
     * @param iterable<FileReference> $fileReferences
     */
    private function buildPreviewHtml(iterable $fileReferences): string
    {
        $content = '<div class="preview-thumbnails" style="--preview-thumbnails-size: 200px">';

        foreach ($fileReferences as $reference) {
            $image = $reference->getOriginalFile()->process(
                ProcessedFile::CONTEXT_IMAGECROPSCALEMASK,
                [
                    'maxWidth' => 200,
                    'maxHeight' => 200,
                ]
            );

            $attributes = [
                'src' => $image->getPublicUrl() ?? '',
                'width' => $image->getProperty('width'),
                'height' => $image->getProperty('height'),
                'alt' => $reference->getAlternative() ?: $reference->getName(),
                'loading' => 'lazy',
            ];

            $content .= '<div class="preview-thumbnails-element">';
            $content .= '<div class="preview-thumbnails-element-image">';
            $content .= '<div class="bw-focuspoint-image">';
            $content .= '<img ' . GeneralUtility::implodeAttributes($attributes, true) . '/>';
            $content .= $this->focuspointSvgRenderer->renderForFileReference(
                $reference,
                FocuspointSvgRenderOptions::backendPreview()
            );
            $content .= '</div>';
            $content .= '</div>';
            $content .= '</div>';
        }

        $content .= '</div>';

        $this->pageRenderer->addCssFile('EXT:bw_focuspoint_images/Resources/Public/Css/BackendPreview.css');

        return $content;
    }
}
