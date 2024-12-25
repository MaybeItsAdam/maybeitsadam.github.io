<script lang="ts">
    import { onMount } from "svelte";

    let names: string[] = []; // Array to hold the names
    let currentIndex: number = 0; // Index for the currently displayed name
    let currentName: string = ""; // Store the name that is displayed
    let isExiting: boolean = false; // Flag to track the exit state

    // Function to transition to the next name
    function nextName(): void {
        isExiting = true; // Trigger the exit animation
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % names.length; // Loop back to the first name when at the end
            currentName = names[currentIndex];
            isExiting = false; // Reset exit flag
        }, 1000); // Wait for the exit animation to complete (1s duration)
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
    <div class="name {isExiting ? 'name-exiting' : ''}">{currentName}</div>
</div>

<style>
    /* Carousel wrapper */
    .carousel-wrapper {
        display: inline;
        position: relative;
        width: 100%; /* Adjust width based on the container */
        overflow: hidden;
    }

    /* The name element */
    .name {
        position: absolute;
        display: inline;
        text-align: center;
        opacity: 0; /* Start with opacity 0 */
        transform: translateY(100%); /* Start below the viewport */
        animation: slideFadeIn 1s ease-in-out forwards; /* Apply the keyframe animation */
    }

    /* Keyframe animation for sliding in and fading in */
    @keyframes slideFadeIn {
        0% {
            opacity: 0;
            transform: translateY(100%); /* Start below */
        }
        50% {
            opacity: 1;
            transform: translateY(0); /* Slide into view */
        }
        100% {
            opacity: 1;
            transform: translateY(0); /* Stay in place */
        }
    }

    /* Keyframe animation for sliding out and fading out */
    @keyframes slideFadeOut {
        0% {
            opacity: 1;
            transform: translateY(0); /* Stay in place */
        }
        100% {
            opacity: 0;
            transform: translateY(-100%); /* Slide out upwards */
        }
    }

    /* Add the exit animation when leaving */
    .name-exiting {
        animation: slideFadeOut 1s ease-in-out forwards;
    }
</style>
