<script lang="ts">
    import { onMount } from "svelte";

    export let name: string = ""; // Final name to settle on

    let names: string[] = [];
    let currentIndex: number = 0; // Current index during animation
    let finalIndex: number = 0; // Index of the final name
    let isSettled: boolean = false; // Tracks if animation has finished

    // Fetch names from the text file
    async function loadNames(): Promise<void> {
        try {
            const response = await fetch("/names.txt");
            const text = await response.text();
            const loadedNames = text
                .split("\n")
                .map((n) => n.trim())
                .filter((n) => n);

            // Add the provided name to the list and find its index
            if (name) {
                if (!loadedNames.includes(name)) {
                    loadedNames.push(name);
                }
                finalIndex = loadedNames.indexOf(name);
            }

            names = loadedNames;

            // Start animation
            startAnimation();
        } catch (err) {
            console.error("Error loading names:", err);
        }
    }

    function startAnimation(): void {
        const interval = setInterval(() => {
            if (!isSettled) {
                currentIndex = (currentIndex + 1) % names.length; // Loop through names
            }
        }, 50); // Fast animation interval

        // Settle on the final name
        setTimeout(() => {
            clearInterval(interval);
            isSettled = true;
            currentIndex = finalIndex; // Settle on the final name
        }, 2000); // Total animation duration
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
    .carousel-mask {
        display: inline-block;
        position: relative;
        overflow: hidden; /* Prevent names outside the mask from showing */
        height: 1em; /* Match the parent's line height */
        width: max-content; /* Allow only the final name width to be considered */
    }

    .carousel-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out; /* Smooth transition for the carousel */
    }

    .carousel-name {
        text-align: center;
        opacity: 0.8; /* Slightly transparent for the mask effect */
        transition: opacity 0.3s ease;
    }

    .carousel-mask::before,
    .carousel-mask::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 50%; /* Fade effect covers top and bottom */
        pointer-events: none;
        z-index: 1;
    }

    .carousel-mask::before {
        top: 0;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
        );
    }

    .carousel-mask::after {
        bottom: 0;
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
        );
    }
</style>
