<script lang="ts">
    import { onMount } from "svelte";

    let names: string[] = []; // Initialize an empty array for names
    let currentIndex = 0; // Track the current name
    let containerHeight = 50; // Height for each name item (you can adjust it)

    // Function to transition to the next name
    function nextName() {
        currentIndex = (currentIndex + 1) % names.length; // Loop back to the first name after reaching the end
    }

    // Fetch names from the text file and process them
    async function loadNames() {
        try {
            const response = await fetch("/names.txt"); // Adjust the path if needed
            const text = await response.text();
            // Split the text into an array of names (assuming each name is on a new line)
            names = text
                .split("\n")
                .map((name) => name.trim())
                .filter((name) => name); // Remove empty lines
        } catch (err) {
            console.error("Error loading names:", err);
        }
    }

    // Set up interval to automatically change the name every 2 seconds
    onMount(() => {
        loadNames();
        const interval = setInterval(nextName, 2000); // Change name every 2 seconds
        return () => clearInterval(interval); // Clean up the interval when the component is destroyed
    });
</script>

<div class="carousel-container">
    <div
        class="carousel-wrapper"
        style="transform: translateY(-{currentIndex * containerHeight}px)"
    >
        {#each names as name}
            <div class="name">{name}</div>
        {/each}
    </div>
</div>

<style>
    .carousel-container {
        width: 100px;
        height: calc(50px * 3); /* Show 3 names at a time */
        overflow: hidden;
        position: relative;
        margin: 20px auto;
        border: 2px solid #ccc;
        border-radius: 5px;
    }

    .carousel-wrapper {
        display: flex;
        flex-direction: column;
        transition: transform 0.5s ease-in-out;
    }

    .name {
        height: 50px; /* This matches the containerHeight */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        background: lightgray;
        border-bottom: 1px solid #ddd;
    }
</style>
