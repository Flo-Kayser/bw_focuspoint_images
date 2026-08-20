<script>
    import SvgOverlay from '../rendering/SvgOverlay.svelte'

    let {image, points} = $props()
</script>

<style>
    .wrapper {
        display: flex;
        margin-bottom: 1rem;
    }

    .preview {
        display: inline-block;
        position: relative;
    }

    img {
        display: block;
        max-width: 200px;
        max-height: 200px;
    }

    :global(.focuspoint__svg) {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>

<div class="wrapper">
    <div class="preview">
        <img src={image} alt="Preview" />
        <SvgOverlay {points} />
    </div>
</div>
