<script>
    import {focuspoints} from '../../store.svelte.js'
    import {convertFocuspointToShape} from '../../shapeRegistry.js'

    let {shapes, index} = $props()
    let options = $derived(shapes.map(value => ({
        value,
        label: value
    })))
    function selectShape(value) {
        focuspoints.update((items) => items.map((focuspoint, currentIndex) => {
            if (currentIndex !== index) {
                return focuspoint
            }

            return focuspoint.shape === value
                ? focuspoint
                : convertFocuspointToShape(focuspoint, value)
        }))
    }
</script>

<div class="form-group">

    <div
        class="shape-select"
        role="radiogroup"
    >
        {#each options as {value, label}}
            <button
                type="button"
                class="shape-select__button"
                class:shape-select__button--active={$focuspoints[index].shape === value}
                aria-pressed={$focuspoints[index].shape === value}
                title={label}
                onclick={(event) => {
                    event.preventDefault()
                    selectShape(value)
                }}
            >
                <span class="shape-select__icon" aria-hidden="true">
                    {#if value === 'rectangle'}
                        <svg viewBox="0 0 24 24">
                            <rect x="4" y="6" width="16" height="12" />
                        </svg>
                    {:else if value === 'circle' || value === 'ellipse'}
                        <svg viewBox="0 0 24 24">
                            <ellipse cx="12" cy="12" rx="8" ry="6" />
                        </svg>
                    {:else if value === 'line'}
                        <svg viewBox="0 0 24 24">
                            <line x1="5" y1="19" x2="19" y2="5" />
                        </svg>
                    {:else if value === 'crosshair'}
                        <svg viewBox="0 0 24 24">
                            <line x1="12" y1="4" x2="12" y2="20" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                        </svg>
                    {:else if value === 'polygon'}
                        <svg viewBox="0 0 24 24">
                            <polygon points="5,18 7,7 16,4 20,11 17,19 10,21"/>
                        </svg>
                    {:else}
                        {label}
                    {/if}
                </span>

                <span class="shape-select__label">
                    {label}
                </span>
            </button>
        {/each}
    </div>
</div>

<style>
    .shape-select {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .shape-select__button {
        display: flex;
        flex: 1 1 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        min-height: 4rem;
        padding: 0.5rem;
        border: 1px solid var(--typo3-component-border-color);
        border-radius: var(--typo3-component-border-radius);
        background: var(--typo3-component-bg);
        color: inherit;
        cursor: pointer;
    }

    .shape-select__button:hover,
    .shape-select__button--active {
        border-color: var(--typo3-state-primary-bg);
        box-shadow: inset 0 0 0 1px var(--typo3-state-primary-bg);
    }

    .shape-select__icon svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
    }

    .shape-select__label {
        font-size: 0.75rem;
    }
</style>
