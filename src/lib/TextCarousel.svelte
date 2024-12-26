<script lang="ts">
    import { onMount } from "svelte";

    export let name: string = ""; // Ending name prop

    let names: string[] = [];
    let currentIndex: number = 0;

    // Fetch names from the text file
    async function loadNames(): Promise<void> {
        try {
            const response = await fetch("/names.txt");
            const text = await response.text();
            const loadedNames = text
                .split("\n")
                .map((n) => n.trim())
                .filter((n) => n);

            // Add the provided name to the end of the list
            if (name && !loadedNames.includes(name)) {
                loadedNames.push(name);
            }

            names = loadedNames;
        } catch (err) {
            console.error("Error loading names:", err);
        }
    }

    // Automatically switch names at an interval
    onMount(() => {
        loadNames();
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % names.length; // Loop through names
        }, 2000); // Change name every 2 seconds
        return () => clearInterval(interval); // Clean up the interval on unmount
    });
</script>

<!-- Render names inline with animation -->
<span class="carousel-container">
    {#each names as name, i}
        <span
            class="name"
            style="transform: translateY(calc({currentIndex - i} * 100%));"
        >
            {name}
        </span>
    {/each}
</span>

<style>
    .carousel-container {
        display: inline-block;
        position: relative;
        overflow: hidden;
        height: 1em; /* Match the parent's line height */
    }

    .name {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 1s ease-in-out;
        white-space: nowrap; /* Prevent line breaks */
    }
</style>
