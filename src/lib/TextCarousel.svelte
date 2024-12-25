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
    <!-- Render the current name with sliding and fading transitions -->
    <div
        class="name enter"
        transition:fly={{ y: 50 }}
        transition:fade={{ duration: 300 }}
    >
        {currentName}
    </div>
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
        transition:
            transform 0.6s ease,
            opacity 0.6s ease;
    }

    /* Entering animation for the name */
    .name.enter {
        opacity: 1;
        transform: translateY(0); /* Slide up into view */
    }

    /* Exiting animation for the name */
    .name.exit {
        opacity: 0;
        transform: translateY(-100%); /* Slide out upwards */
    }
</style>
