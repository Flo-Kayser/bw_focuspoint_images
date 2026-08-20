<?php

declare(strict_types=1);

namespace Blueways\BwFocuspointImages\DataProcessing;

use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\DataProcessing\FilesProcessor;

final class FocuspointProcessor extends FilesProcessor
{
    public function __construct(
        private readonly FocuspointDataNormalizer $focuspointDataNormalizer,
    ) {
    }

    /**
     * Inject images and normalized focuspoints into the template.
     */
    public function process(
        ContentObjectRenderer $cObj,
        array $contentObjectConfiguration,
        array $processorConfiguration,
        array $processedData,
    ): array {
        $processedData = parent::process($cObj, $contentObjectConfiguration, $processorConfiguration, $processedData);

        if (!isset($processedData['images']) || !is_array($processedData['images'])) {
            return $processedData;
        }

        $processedData['points'] = [];

        // The TCA allows one image, but FilesProcessor always returns a collection.
        foreach ($processedData['images'] as $key => $file) {
            $processedData['points'][$key] = $this->focuspointDataNormalizer->normalizeForTemplate(
                $file->getProperty('focus_points') ?: '[]',
            );
        }

        return $processedData;
    }
}
