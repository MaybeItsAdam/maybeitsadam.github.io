<script lang="ts">
    export let names: string[] = [];
    let currentIndex = 0;
    const transitionSpeed = 1500; // Time for the transition of each name in milliseconds
    const delay = 3000; // Time between name transitions

    // Cycle through names and stop at the last one
    setInterval(() => {
        if (currentIndex < names.length - 1) {
            currentIndex += 1;
        } else {
            currentIndex = names.length - 1; // Stop at the last item
        }
    }, delay);
</script>

<div class="carousel-wrapper">
    <div class="carousel" style="transform: translateX(-{currentIndex * 100}%)">
        {#each names as name, index}
            <div
                class="carousel-item {index === currentIndex
                    ? 'carousel-item-visible'
                    : ''}"
                style="width: fit-content;"
            >
                {name}
            </div>
        {/each}
    </div>
    <div class="mask"></div>
</div>

<style>
    .carousel-wrapper {
        width: fit-content; /* Will take the width of the last name only */
        height: 30px; /* Fixed height */
        overflow: hidden;
        position: relative;
        display: inline-block; /* Keeps it inline with other elements */
    }

    .carousel {
        display: flex;
        position: absolute;
        flex-direction: row; /* Names in a row, not stack */
        transition: transform 1s ease-in-out; /* Smooth transition */
    }

    .carousel-item {
        min-width: 100%; /* Each item takes up the entire width */
        opacity: 0;
        white-space: nowrap;
        transition: opacity 0.5s ease;
    }

    .carousel-item-visible {
        opacity: 1;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
        );
        pointer-events: none;
    }
</style>
