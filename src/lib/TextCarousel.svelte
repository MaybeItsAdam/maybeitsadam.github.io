<script lang="ts">
    import { onMount } from "svelte";

    export let name: string = ""; // Ending name prop

    let names: string[] = [];
    let finalIndex: number = 0; // Index of the final name
    let currentIndex: number = 0; // Current index for animation
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

            // Start fast animation
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

        // Slow down and settle on the final name
        setTimeout(() => {
            clearInterval(interval);
            isSettled = true;
            currentIndex = finalIndex; // Settle on the final name
        }, 2000); // Total animation time
    }

    onMount(() => {
        loadNames();
    });
</script>

<!-- Render names inline -->
<span class="carousel-container">
    <span class="name">{names[currentIndex]}</span>
</span>

<style>
    .carousel-container {
        display: inline-block;
        position: relative;
        white-space: nowrap; /* Prevent line breaks */
    }

    .name {
        display: inline;
        transition: transform 0.2s ease; /* Smooth transition for settling effect */
    }
</style>
