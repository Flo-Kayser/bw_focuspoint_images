<?php

declare(strict_types=1);

namespace Blueways\BwFocuspointImages\DataProcessing;

use TYPO3\CMS\Core\LinkHandling\TypoLinkCodecService;

final class FocuspointDataNormalizer
{
    public function __construct(
        private readonly TypoLinkCodecService $typoLinkCodecService,
    ) {
    }

    /**
     * @return array<int, object>
     */
    public function normalizeForTemplate(mixed $value): array
    {
        $points = is_string($value) ? json_decode($value, false) : $value;

        if (!is_array($points)) {
            return [];
        }

        $normalizedPoints = [];

        foreach ($points as $point) {
            if (!is_object($point)) {
                continue;
            }

            $this->normalizeGeometry($point);
            $this->normalizeFields($point);
            $normalizedPoints[] = $point;
        }

        return $normalizedPoints;
    }

    private function normalizeGeometry(object $point): void
    {
        $point->x = (float)($point->x ?? 0) * 100;
        $point->y = (float)($point->y ?? 0) * 100;
        $point->height = (float)($point->height ?? 0) * 100;
        $point->width = (float)($point->width ?? 0) * 100;
        $point->textX = $point->x + ($point->width / 2);
        $point->textY = $point->y + ($point->height / 2);
    }

    private function normalizeFields(object $point): void
    {
        foreach (get_object_vars($point) as $fieldName => $fieldValue) {
            $fieldValue = $this->normalizeLegacyLink($fieldValue);
            $point->{$fieldName} = $fieldValue;

            if (!is_string($fieldValue) || !str_starts_with($fieldValue, 't3://')) {
                continue;
            }

            $linkValues = $this->typoLinkCodecService->decode($fieldValue);
            if (!empty($linkValues['target'])) {
                $point->{$fieldName . 'Target'} = $linkValues['target'];
            }
        }
    }

    private function normalizeLegacyLink(mixed $value): mixed
    {
        if (
            !is_object($value)
            || !property_exists($value, 'key')
            || !property_exists($value, 'uid')
        ) {
            return $value;
        }

        $link = 't3://' . $value->key . '?uid=' . $value->uid;

        if (property_exists($value, 'target') && $value->target) {
            $link .= ' ' . $value->target;
        }

        return $link;
    }
}
