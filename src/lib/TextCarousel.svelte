<script lang="ts">
    import { onMount } from "svelte";

    let names: string[] = []; // Array to hold the names
    let currentIndex: number = 0; // Index for the currently displayed name

    function nextName(): void {
        currentIndex = (currentIndex + 1) % names.length; // Loop back to the first name when at the end
    }

    async function loadNames(): Promise<void> {
        try {
            const response = await fetch("/names.txt"); // Adjust path if necessary
            const text = await response.text();
            names = text
                .split("\n")
                .map((name) => name.trim())
                .filter((name) => name);
        } catch (err) {
            console.error("Error loading names:", err);
        }
    }

    onMount(() => {
        loadNames();
        const interval = setInterval(nextName, 2000);
        return () => clearInterval(interval);
    });
</script>

<div id="carousel">{names[currentIndex]}</div>

<style>
    #carousel {
        display: inline;
    }
</style>
