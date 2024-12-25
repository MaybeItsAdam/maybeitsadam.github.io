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
            const response = await fetch("/names.txt");
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
    <!-- The name element will slide in and fade out -->
    <div class="name">{currentName}</div>
</div>

<style>
    /* Carousel wrapper */
    .carousel-wrapper {
        position: relative;
        height: 2em; /* Adjust height based on the font size */
        width: 100%; /* Adjust width based on the container */
        overflow: hidden;
    }

    /* The name element */
    .name {
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        color: black;
        opacity: 0; /* Start with opacity 0 */
        transform: translateY(100%); /* Start below the viewport */
        animation: slideFade 1s ease-in-out forwards; /* Apply the keyframe animation */
    }

    /* Keyframe animation for sliding and fading */
    @keyframes slideFade {
        0% {
            opacity: 0;
            transform: translateY(100%); /* Start below */
        }
        50% {
            opacity: 1;
            transform: translateY(0); /* Slide into view */
        }
        100% {
            opacity: 0;
            transform: translateY(-100%); /* Slide out upwards */
        }
    }

    @keyframes slideFadeExit {
        0% {
            opacity: 1;
            transform: translateY(0); /* Start at the current position */
        }
        100% {
            opacity: 0;
            transform: translateY(-100%); /* Slide out upwards */
        }
    }
</style>
