<script lang="ts">
    import { onMount } from "svelte";

    export let name: string = ""; // Final name to settle on

    let names: string[] = [];
    let currentIndex: number = 0; // Tracks the currently displayed name
    let finalIndex: number = 0; // Index of the final name
    let isAnimating: boolean = true; // Tracks if the animation is active

    // Fetch names and initialize animation
    async function loadNames(): Promise<void> {
        try {
            const response = await fetch("/names.txt");
            const text = await response.text();
            const loadedNames = text
                .split("\n")
                .map((n) => n.trim())
                .filter((n) => n);

            // Add the final name if it's not already included
            if (name && !loadedNames.includes(name)) {
                loadedNames.push(name);
            }

            names = loadedNames;
            finalIndex = names.indexOf(name);

            // Start animation
            startAnimation();
        } catch (err) {
            console.error("Error loading names:", err);
        }
    }

    function startAnimation(): void {
        const interval = setInterval(() => {
            if (isAnimating) {
                currentIndex = (currentIndex + 1) % names.length;
            }
        }, 150); // Slower spinning effect

        setTimeout(() => {
            clearInterval(interval);
            isAnimating = false;
            currentIndex = finalIndex; // Settle on the final name
        }, 5000); // Longer total animation duration for a smoother effect
    }

    onMount(() => {
        loadNames();
    });
</script>

<!-- Carousel Wrapper -->
<div class="carousel-mask">
    <div
        class="carousel-container"
        style="transform: translateY(calc(-100% * {currentIndex}));"
    >
        {#each names as name}
            <div class="carousel-name">{name}</div>
        {/each}
    </div>
</div>

<style>
    /* The mask ensures the animation remains constrained to the final name's height */
    .carousel-mask {
        display: inline-block;
        position: relative;
        overflow: hidden;
        height: 1em; /* Matches the line height of the final name */
        width: max-content; /* Ensure the width only fits the final name */
    }

    /* The container holds all names and animates vertically */
    .carousel-container {
        display: flex;
        flex-direction: column;
        position: relative;
        transition: transform 0.5s ease-in-out; /* Slower, smoother transition */
    }

    /* Individual names */
    .carousel-name {
        text-align: center;
        white-space: nowrap; /* Prevent names from breaking lines */
    }

    /* Fade effect for top and bottom of the mask */
    .carousel-mask::before,
    .carousel-mask::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 50%; /* Half the height of the mask */
        z-index: 1;
        pointer-events: none;
    }

    .carousel-mask::before {
        top: 0;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0)
        );
    }

    .carousel-mask::after {
        bottom: 0;
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0)
        );
    }
</style>
