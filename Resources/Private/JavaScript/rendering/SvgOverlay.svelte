<script module>
    let overlaySequence = 0
</script>

<script>
    import {collectPrimitives} from './primitiveFactory.js'

    let {
        points = [],
        viewBoxSize = 200,
        renderMask = true,
        maskColor = '#000',
        maskOpacity = 0.5,
        maskLineWidth = 4,
        renderFill = false,
        fillColor = null,
        renderOutline = true,
        outlineColor = '#ff8700',
        outlineWidth = 1.5,
        class: className = 'focuspoint__svg',
    } = $props()

    const maskId = `focuspoint-preview-mask-${++overlaySequence}`
    const primitives = $derived(collectPrimitives(points))

    function coordinate(value) {
        return Math.max(0, Math.min(1, Number(value) || 0)) * viewBoxSize
    }

    function polygonPoints(primitive) {
        if (!Array.isArray(primitive.points)) {
            return ''
        }

        return primitive.points
            .map((point) => `${coordinate(point.x)},${coordinate(point.y)}`)
            .join(' ')
    }
</script>

{#snippet primitive(primitive, fill, stroke, strokeWidth)}
    {#if primitive.type === 'ellipse'}
        <ellipse
            cx={coordinate(primitive.x) + coordinate(primitive.width) / 2}
            cy={coordinate(primitive.y) + coordinate(primitive.height) / 2}
            rx={coordinate(primitive.width) / 2}
            ry={coordinate(primitive.height) / 2}
            {fill}
            {stroke}
            stroke-width={strokeWidth} />
    {:else if primitive.type === 'line'}
        <line
            x1={coordinate(primitive.x1)}
            y1={coordinate(primitive.y1)}
            x2={coordinate(primitive.x2)}
            y2={coordinate(primitive.y2)}
            {stroke}
            stroke-width={strokeWidth}
            stroke-linecap="round" />
    {:else if Array.isArray(primitive.points) && primitive.points.length >= 3}
        <polygon
            points={polygonPoints(primitive)}
            {fill}
            {stroke}
            stroke-width={strokeWidth} />
    {/if}
{/snippet}

<svg
    viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    preserveAspectRatio="none"
    class={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    {#if renderMask}
        <mask id={maskId}>
            <rect
                x="0"
                y="0"
                width={viewBoxSize}
                height={viewBoxSize}
                fill="#fff"
                fill-opacity={maskOpacity} />

            {#each primitives as currentPrimitive}
                {@render primitive(currentPrimitive, currentPrimitive.type === 'line' ? 'none' : '#000', '#000', maskLineWidth)}
            {/each}
        </mask>

        <rect
            x="0"
            y="0"
            width={viewBoxSize}
            height={viewBoxSize}
            fill={maskColor}
            mask={`url(#${maskId})`} />
    {/if}

    {#if renderFill && fillColor}
        {#each primitives as currentPrimitive}
            {@render primitive(currentPrimitive, currentPrimitive.type === 'line' ? 'none' : fillColor, fillColor, outlineWidth)}
        {/each}
    {/if}

    {#if renderOutline}
        {#each primitives as currentPrimitive}
            {@render primitive(currentPrimitive, 'none', outlineColor, outlineWidth)}
        {/each}
    {/if}
</svg>
