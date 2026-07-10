<script>
    import interact from 'interactjs'
    import {activateFocuspoint, focusPointName, focuspoints} from '../../store.svelte.js'

    let {
        focuspoint,
        index,
        initialized,
        canvasWidth,
        canvasHeight,
        getPositionX,
        getPositionY,
        getFocuspointWidth,
        getFocuspointHeight
    } = $props()

    function getFocuspointName() {
        return focusPointName(index)
    }

    function clamp(value) {
        return Math.max(0, Math.min(1, value))
    }

    function rectangleInteraction(node) {
        const interactable = interact(node)
            .resizable({
                edges: {
                    left: true,
                    right: true,
                    bottom: true,
                    top: true,
                },
                modifiers: [
                    interact.modifiers.restrictEdges({
                        outer: 'parent',
                        endOnly: true
                    })
                ],
                listeners: {
                    move(event) {
                        if (canvasWidth <= 0 || canvasHeight <= 0) {
                            return
                        }

                        focuspoints.update(items =>
                            items.map((point, currentIndex) => {
                                if (currentIndex !== index) {
                                    return point
                                }

                                const x = ((point.x ?? 0) * canvasWidth) + event.deltaRect.left
                                const y = ((point.y ?? 0) * canvasHeight) + event.deltaRect.top

                                return {
                                    ...point,
                                    width: event.rect.width/canvasWidth,
                                    height: event.rect.height/canvasHeight,
                                    x: clamp(x/canvasWidth),
                                    y: clamp(y/canvasHeight)
                                }
                            })
                        )
                    },
                    end(){
                        activateFocuspoint(index)
                    }
                }
            })
            .draggable({
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                autoScroll: true,
                listeners: {
                    move(event) {
                        if (canvasWidth <= 0 || canvasHeight <= 0) {
                            return
                        }

                        focuspoints.update((items) =>
                            items.map((point, currentIndex) => {
                                if (currentIndex !== index) {
                                    return point
                                }

                                const x =
                                    ((point.x ?? 0) * canvasWidth) +
                                    event.dx

                                const y =
                                    ((point.y ?? 0) * canvasHeight) +
                                    event.dy

                                return {
                                    ...point,
                                    x: clamp(x / canvasWidth),
                                    y: clamp(y / canvasHeight)
                                }
                            })
                        )
                    },

                    end() {
                        activateFocuspoint(index)
                    }
                }
            })

        return {
            destroy() {
                interactable.unset()
            }
        }
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    use:rectangleInteraction
    onclick={() => activateFocuspoint(index)}
    class:active={focuspoint.active}
    class:opacity-0={!initialized}
    class="draggable style1 resizable focuspoint-shape focuspoint-shape--{focuspoint.shape ?? 'rectangle'}"
    style="transform:translate3d({getPositionX(index)}px, {getPositionY(index)}px, 0); width: {getFocuspointWidth(index)}px; height: {getFocuspointHeight(index)}px;"
    data-x="{getPositionX(index)}"
    data-y="{getPositionY(index)}"
>
    <span class="text-break">{focusPointName(index)}</span>

    <span class="ui-resizable-handle ui-resizable-nw"></span>
    <span class="ui-resizable-handle ui-resizable-ne"></span>
    <span class="ui-resizable-handle ui-resizable-sw"></span>
    <span class="ui-resizable-handle ui-resizable-se"></span>
</div>

<style>

    .focuspoint-shape--ellipse,
    .focuspoint-shape--circle {
        border-radius: 50%;
    }

    .draggable {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.15s ease;
        user-select: none;
    }

    .style1 {
        display: inline-grid;
        background-color: rgba(0, 0, 0, 0.6);
        border: 1px dashed rgba(255, 255, 255, 0.8);
        color: white;
        padding: 10px;
        --typo3-state-primary-bg: rgba(255, 255, 255, 0.8);
    }

    .opacity-0 {
        opacity: 0;
    }

    .style1.active {
        border-color: #ff8700;
        --typo3-state-primary-bg: #ff8700;
        border-style: solid;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .ui-resizable-handle.ui-resizable-nw, .ui-resizable-handle.ui-resizable-ne {
        top: -3px;
    }

    .ui-resizable-handle.ui-resizable-sw, .ui-resizable-handle.ui-resizable-se {
        bottom: -3px;
    }

    .ui-resizable-handle.ui-resizable-ne, .ui-resizable-handle.ui-resizable-se {
        right: -3px;
    }

    .ui-resizable-handle.ui-resizable-nw, .ui-resizable-handle.ui-resizable-sw {
        left: -3px;
    }
</style>
