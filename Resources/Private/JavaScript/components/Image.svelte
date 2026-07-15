<script>
    import {activateFocuspoint,deactivateAllFocuspoints, focusPointName, focuspoints} from "../store.svelte";
    import {onDestroy, onMount} from "svelte";
    import '../registerBuiltinShapes.js'
    import {resolveShapeComponent} from "../shapeRegistry";


    let {image} = $props()
    let canvasHeight = $state(0)
    let canvasWidth = $state(0)
    let focuspointName = $derived((focuspoint, index) => focusPointName(index))
    let img
    let initialized = $state(false)
    let isDarkMode = $state(false)


    // Handle keyboard navigation
    function handleKeyDown(event) {
        // Find the active focuspoint
        const activeIndex = $focuspoints.findIndex(point => point.active);
        if (activeIndex === -1) return;

        // Set step size - larger with shift key
        const step = event.shiftKey ? 10 : 1;

        // Move based on arrow key
        switch(event.key) {
            case 'ArrowUp':
                event.preventDefault();
                movePoint(activeIndex, 0, -step);
                break;
            case 'ArrowDown':
                event.preventDefault();
                movePoint(activeIndex, 0, step);
                break;
            case 'ArrowLeft':
                event.preventDefault();
                movePoint(activeIndex, -step, 0);
                break;
            case 'ArrowRight':
                event.preventDefault();
                movePoint(activeIndex, step, 0);
                break;
        }
    }

    // Helper function to move a point by x,y pixels
    function movePoint(index, deltaX, deltaY) {
        // Calculate the new positions in pixels
        const newX = ($focuspoints[index].x * canvasWidth) + deltaX;
        const newY = ($focuspoints[index].y * canvasHeight) + deltaY;

        // Convert back to relative coordinates (0-1 range)
        $focuspoints[index].x = Math.max(0, Math.min(1, newX / canvasWidth));
        $focuspoints[index].y = Math.max(0, Math.min(1, newY / canvasHeight));
    }

    onMount(() => {
        if (img.complete) {
            setCanvasSizes()
        } else {
            img.addEventListener('load', setCanvasSizes)
        }


        window.addEventListener('resize', updateCanvasSizes)
        window.addEventListener('keydown', handleKeyDown)

        const colorScheme = document.querySelector('html').getAttribute('data-color-scheme');
        const theme = document.querySelector('html').getAttribute('data-theme');
        const darkModePrefer = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (colorScheme === 'dark' || (theme === 'auto' && darkModePrefer && colorScheme !== 'light')) {
            isDarkMode = true
        }
    })

    onDestroy(() => {

        window.removeEventListener('resize', updateCanvasSizes)
        window.removeEventListener('keydown', handleKeyDown)
    })

    function setCanvasSizes() {
        setTimeout(() => {
            updateCanvasSizes()
        }, 300)
    }

    export function updateCanvasSizes() {
        canvasHeight = img.parentElement.getBoundingClientRect().height
        canvasWidth = img.parentElement.getBoundingClientRect().width
        initialized = true
    }

    const getPositionX = $derived((index) => {
        return $focuspoints[index].x * canvasWidth
    })

    const getPositionY = $derived((index) => {
        return $focuspoints[index].y * canvasHeight
    })

    const getFocuspointWidth = $derived((index) => {
        return $focuspoints[index].width * canvasWidth
    })

    const getFocuspointHeight = $derived((index) => {
        return $focuspoints[index].height * canvasHeight
    })

</script>

<style>


    img {
        pointer-events: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        max-width: 100%;
        max-height: calc(100vh - 200px);
    }

    .cropper-bg {
        padding: 20px;
        display: flex;
        justify-content: center;

        --chess-color: rgba(0, 0, 0, 0.1);
        opacity: 0.8;
        background-image: linear-gradient(45deg, var(--chess-color) 25%, transparent 25%), linear-gradient(-45deg, var(--chess-color) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--chess-color) 75%), linear-gradient(-45deg, transparent 75%, var(--chess-color) 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0;
    }

    .cropper-bg--dark {
        --chess-color: rgba(255, 255, 255, 0.1);
    }

    .wrapper {
        position: relative;
        align-self: center;
    }


</style>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="cropper-bg"
    class:cropper-bg--dark={isDarkMode}
    touch-action="none"
    onclick={(event) => {
        if (event.target === event.currentTarget) {
            deactivateAllFocuspoints()
        }
    }}
>
    <div class="wrapper" onclick={(event) => {
        if (event.target === event.currentTarget) {
            deactivateAllFocuspoints()
        }
    }}>
        {#each $focuspoints as focuspoint, index}
            {@const Component = resolveShapeComponent(focuspoint.shape ?? 'rectangle')}

            {#key focuspoint.shape ?? 'rectangle'}
                <!-- svelte-ignore svelte_component_deprecated -->
                <svelte:component
                    this={Component}
                    {focuspoint}
                    {index}
                    {initialized}
                    {canvasWidth}
                    {canvasHeight}
                    {getPositionX}
                    {getPositionY}
                    {getFocuspointWidth}
                    {getFocuspointHeight}
                />
            {/key}
        {/each}
        <img bind:this={img} src={image} alt="Selected" unselectable="on" />
    </div>
</div>
