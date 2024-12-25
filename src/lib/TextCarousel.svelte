<script lang="ts">
    import { onMount } from "svelte";

    let names: string[] = []; // Array to hold the names
    let currentIndex: number = 0; // Index for the currently displayed name
    let currentName: string = ""; // Store the name that is displayed

    // Function to transition to the next name
    function nextName(): void {
        currentIndex = (currentIndex + 1) % names.length; // Loop back to the first name when at the end
        currentName = names[currentIndex];
    }

    // Fetch names from the text file
    async function loadNames(): Promise<void> {
        try {
            const response = await fetch("/names.txt"); // Adjust path if necessary
            const text = await response.text();
            names = text
                .split("\n")
                .map((name) => name.trim())
                .filter((name) => name);
            currentName = names[currentIndex];
        } catch (err) {
            console.error("Error loading names:", err);
        }
    }

    // Automatically switch names at an interval
    onMount(() => {
        loadNames();
        const interval = setInterval(nextName, 2000); // Change name every 2 seconds
        return () => clearInterval(interval); // Clean up the interval on unmount
    });
</script>

<div class="carousel-wrapper">
    <div
        class="name enter"
        style="transition-delay: {currentIndex === 0 ? '0s' : '0.2s'}"
    >
        {currentName}
    </div>
</div>

<style>
    /* Root container of the name carousel */
    .carousel-wrapper {
        position: relative;
        overflow: hidden;
        width: 100%; /* Allow parent to control size */
        height: 1.5em; /* Adjust based on text size */
    }

    /* The name text container */
    .name {
        position: absolute;
        width: 100%;
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
        opacity: 0; /* Start with opacity 0 */
        transition:
            transform 0.5s ease,
            opacity 0.5s ease;
    }

    /* Apply the gradient effect */
    .name::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        z-index: 1;
        pointer-events: none;
    }

    /* Keyframe animation for sliding */
    .name.enter {
        opacity: 1;
        transform: translateX(100%); /* Start from right outside */
    }

    .name.exit {
        opacity: 0;
        transform: translateX(-100%); /* Slide out to the left */
    }
</style>
