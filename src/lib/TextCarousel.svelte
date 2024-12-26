<script lang="ts">
    export let names: string[] = ["testname43", "bim", "tofs"];
    export let finalName: string = "Adam";
    names.push(finalName);
    let currentIndex = 0;
    const delay = 1000;

    // Update index to cycle through names
    setInterval(() => {
        if (currentIndex < names.length - 1) {
            currentIndex += 1;
        } else {
            currentIndex = names.length - 1; // Stop at the last item
        }
    }, delay);
</script>

<div class="carousel-wrapper">
    <div class="carousel">
        {#each names as name, index}
            <div
                class="carousel-item {index === currentIndex
                    ? 'carousel-item-visible'
                    : ''}"
                style="width: max-content; white-space: nowrap;"
            >
                {name}
            </div>
        {/each}
    </div>
    <div class="mask"></div>
</div>

<style>
    .carousel-wrapper {
        width: fit-content;
        overflow: hidden;
        position: relative;
        display: inline;
    }

    .carousel {
        display: flex;
        flex-direction: column;
        position: absolute;
        animation: moveText 15s infinite;
    }

    .carousel-item {
        opacity: 0;
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
            to bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
        );
        pointer-events: none;
    }

    @keyframes moveText {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-100%);
        }
    }
</style>
