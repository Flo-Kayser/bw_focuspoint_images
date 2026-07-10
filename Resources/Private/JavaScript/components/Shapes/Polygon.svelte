<script>
    import {
        activateFocuspoint,
        focuspoints
    } from '../../store.svelte.js'

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

    function getEdgeMidpoints() {
        const vertices = focuspoint?.vertices ?? []

        return vertices.map((vertex, vertexIndex) => {
            const nextVertex = vertices[(vertexIndex + 1) % vertices.length]

            return {
                x: (vertex.x + nextVertex.x) / 2,
                y: (vertex.y + nextVertex.y) / 2,
                insertAfterIndex: vertexIndex,
            }
        })
    }

    function addVertex(insertAfterIndex, vertex) {
        focuspoints.update((items) =>
            items.map((point, currentIndex) => {
                if (currentIndex !== index) {
                    return point
                }

                const vertices = [...point.vertices]

                vertices.splice(insertAfterIndex + 1, 0, {
                    x: vertex.x,
                    y: vertex.y,
                })

                return {
                    ...point,
                    vertices,
                }
            })
        )
    }

    function removeVertex(vertexIndex) {
        focuspoints.update((items) =>
            items.map((point, currentIndex) => {
                if (
                    currentIndex !== index ||
                    !Array.isArray(point.vertices) ||
                    point.vertices.length <= 3
                ) {
                    return point
                }

                return {
                    ...point,
                    vertices: point.vertices.filter(
                        (_, currentVertexIndex) =>
                            currentVertexIndex !== vertexIndex
                    ),
                }
            })
        )
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
        class="polygon-shape"
        data-index={index}
        points={getPolygonPoints()}
        onclick={(event) => {
            event.stopPropagation()
            activateFocuspoint(index)
        }}
    />
</svg>

{#if focuspoint?.active}
    {#each focuspoint.vertices ?? [] as vertex, vertexIndex}
        <div
            class="polygon-vertex"
            class:opacity-0={!initialized}
            style="transform: translate3d({getVertexX(vertex)}px, {getVertexY(vertex)}px, 0);"
        >
            <button
                type="button"
                class="polygon-handle"
                data-index={index}
                data-vertex-index={vertexIndex}
                onclick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            activateFocuspoint(index)
        }}
                aria-label="Move polygon vertex {vertexIndex + 1}"
            ></button>

            {#if focuspoint.vertices.length > 3}
                <button
                    type="button"
                    class="polygon-remove-handle"
                    onclick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                removeVertex(vertexIndex)
            }}
                    aria-label="Remove polygon vertex {vertexIndex + 1}"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z" />
                        <path fill="currentColor" d="M9 10h2v8H9zm4 0h2v8h-2z" />
                    </svg>

                </button>
            {/if}
        </div>
    {/each}

    {#each getEdgeMidpoints() as midpoint}
        <button
            type="button"
            class="polygon-add-handle"
            class:opacity-0={!initialized}
            style="transform: translate3d({getVertexX(midpoint)}px, {getVertexY(midpoint)}px, 0) translate(-50%, -50%);"
            onclick={(event) => {
                event.preventDefault()
                event.stopPropagation()

                addVertex(
                    midpoint.insertAfterIndex,
                    midpoint
                )
            }}
            aria-label="Add polygon vertex"
        >
            +
        </button>
    {/each}
{/if}

<style>
    .focuspoint-polygon {
        position: absolute;
        inset: 0;
        pointer-events: none;
        transition: opacity 0.15s ease;
    }

    .focuspoint-polygon polygon {
        fill: rgba(0, 0, 0, 0.6);
        stroke: rgba(255, 255, 255, 0.9);
        stroke-width: 2;
        stroke-dasharray: 6 4;
        pointer-events: all;
        cursor: grab;
    }

    .focuspoint-polygon polygon:active {
        cursor: grabbing;
    }

    .focuspoint-polygon.active polygon {
        fill: rgba(0, 0, 0, 0.8);
        stroke: #ff8700;
        stroke-dasharray: none;
    }

    .polygon-vertex,
    .polygon-add-handle {
        position: absolute;
        top: 0;
        left: 0;
    }

    .polygon-vertex {
        z-index: 7;
    }

    .polygon-handle {
        position: absolute;
        top: 0;
        left: 0;

        width: 14px;
        height: 14px;
        padding: 0;

        border: 2px solid #ff8700;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.8);

        transform: translate(-50%, -50%);
        cursor: grab;
    }

    .polygon-handle:active {
        cursor: grabbing;
    }

    .polygon-handle:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 2px;
    }

    .polygon-add-handle {
        z-index: 6;

        display: grid;
        place-items: center;

        width: 18px;
        height: 18px;
        padding: 0;

        border: 1px solid rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.75);
        color: #fff;

        font-size: 14px;
        line-height: 1;

        cursor: pointer;
    }

    .polygon-add-handle:hover {
        border-color: #ff8700;
        color: #ff8700;
    }

    .polygon-remove-handle {
        position: absolute;
        top: 12px;
        left: 0;

        display: grid;
        place-items: center;

        width: 30px;
        height: 30px;
        padding: 0;

        border: 0;
        border-radius: 2px;
        background: #dc3545;
        color: #fff;

        transform: translateX(-50%);

        opacity: 0;
        pointer-events: none;
        cursor: pointer;
    }

    .polygon-remove-handle svg {
        width: 14px;
        height: 14px;
        fill: currentColor;
    }

    .polygon-vertex:focus-within .polygon-remove-handle {
        opacity: 1;
        pointer-events: auto;
    }

    .opacity-0 {
        opacity: 0;
    }
</style>
