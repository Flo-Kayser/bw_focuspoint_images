<script>
    import {activateFocuspoint} from '../../store.svelte.js'

    let {
        focuspoint,
        index,
        initialized,
        canvasWidth,
        canvasHeight
    } = $props()

    function getPolygonPoints() {
        return (focuspoint?.vertices ?? [])
            .map((vertex) => `${vertex.x * canvasWidth},${vertex.y * canvasHeight}`)
            .join(' ')
    }

    function getVertexX(vertex) {
        return vertex.x * canvasWidth
    }

    function getVertexY(vertex) {
        return vertex.y * canvasHeight
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<svg
    class="focuspoint-polygon"
    class:active={focuspoint?.active}
    class:opacity-0={!initialized}
    width={canvasWidth}
    height={canvasHeight}
>
    <polygon
        points={getPolygonPoints()}
        onclick={(event) => {
            event.stopPropagation()
            activateFocuspoint(index)
        }}
    />
</svg>

{#if focuspoint?.active}
    {#each focuspoint.vertices ?? [] as vertex, vertexIndex}
        <button
            type="button"
            class="polygon-handle"
            class:opacity-0={!initialized}
            data-index={index}
            data-vertex-index={vertexIndex}
            style="transform: translate3d({getVertexX(vertex)}px, {getVertexY(vertex)}px, 0) translate(-50%, -50%);"
            onclick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                activateFocuspoint(index)
            }}
            aria-label="Move polygon vertex {vertexIndex + 1}"
        ></button>
    {/each}
{/if}

<style>
    .focuspoint-polygon {
        position: absolute;
        inset: 0;
        overflow: visible;
        pointer-events: none;
        transition: opacity 0.15s ease;
    }

    .focuspoint-polygon polygon {
        fill: rgba(0, 0, 0, 0.6);
        stroke: rgba(255, 255, 255, 0.9);
        stroke-width: 2;
        stroke-dasharray: 6 4;
        vector-effect: non-scaling-stroke;
        pointer-events: all;
        cursor: pointer;
    }

    .focuspoint-polygon.active polygon {
        fill: rgba(0, 0, 0, 0.8);
        stroke: #ff8700;
        stroke-dasharray: none;
    }

    .polygon-handle {
        position: absolute;
        z-index: 6;
        width: 14px;
        height: 14px;
        padding: 0;
        border: 2px solid #ff8700;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.8);
        cursor: grab;
    }

    .polygon-handle:active {
        cursor: grabbing;
    }

    .opacity-0 {
        opacity: 0;
    }
</style>
