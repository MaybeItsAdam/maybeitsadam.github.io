<script lang="ts">
    import { onMount } from "svelte";

    export let name: string = ""; // Final name to settle on

    let names: string[] = [];
    let currentIndex: number = 0; // Tracks the currently displayed name
    let finalIndex: number = 0; // Index of the final name
    let isAnimating: boolean = true; // Tracks if the animation is active
    let animationDuration: number = 5000; // Total animation duration in ms
    let intervalTime: number = 150; // Time between name changes in ms

    async function loadNames(): Promise<void> {
        try {
            const response = await fetch("/names.txt");
            const text = await response.text();
            const loadedNames = text
                .split("\n")
                .map((n) => n.trim())
                .filter((n) => n);

            if (name && !loadedNames.includes(name)) {
                loadedNames.push(name);
            }

            names = loadedNames;
            finalIndex = names.indexOf(name);
            startAnimation();
        } catch (err) {
            console.error("Error loading names:", err);
        }
    }

    function startAnimation(): void {
        const steps = Math.ceil(animationDuration / intervalTime);
        let step = 0;

        const interval = setInterval(() => {
            if (step >= steps) {
                clearInterval(interval);
                isAnimating = false;
                currentIndex = finalIndex; // Precisely align with the final name
                return;
            }

            currentIndex = (currentIndex + 1) % names.length;
            step++;
        }, intervalTime);
    }

    onMount(() => {
        loadNames();
    });
</script>

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
        overflow: hidden;
        height: 1em; /* Matches the line height of the final name */
        width: max-content;
    }

    .carousel-container {
        display: flex;
        flex-direction: column;
        position: relative;
        transition: transform 0.3s ease-in-out;
    }

    .carousel-name {
        text-align: left;
        white-space: nowrap;
    }

    .carousel-mask::before,
    .carousel-mask::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 50%;
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
