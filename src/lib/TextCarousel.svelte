<script lang="ts">
    import { onMount } from "svelte";

    export let finalName: string = "Adam"; // Default name to settle on
    export let numNames: number = 3; // Default number of names to choose
    export let nameFile: string = "/names.txt"; // Path to names.txt in the static folder

    let names: string[] = [];
    let displayedNames: string[] = [];
    let currentName: string = "";
    let transitionDuration: number = 500; // Time for each name to be displayed in ms
    let carouselInterval: number;

    // Fetch names from the txt file
    const fetchNames = async (): Promise<void> => {
        const response = await fetch(nameFile);
        const text = await response.text();
        names = text
            .split("\n")
            .map((name) => name.trim())
            .filter((name) => name.length > 0);
    };

    // Randomly select a set of names
    const getRandomNames = (count: number): string[] => {
        const shuffled = [...names].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };

    // Start the carousel
    const startCarousel = (): void => {
        let index = 0;
        displayedNames = getRandomNames(numNames);
        displayedNames.push(finalName);

        currentName = displayedNames[index];
        carouselInterval = setInterval(() => {
            index = (index + 1) % displayedNames.length;
            currentName = displayedNames[index];
            // When cycling through, apply exit effect to the name that's being replaced
            displayedNames = [
                ...displayedNames.slice(1),
                displayedNames[index],
            ]; // Reorder names for smooth cycling
        }, transitionDuration);
    };

    // Stop carousel when final name is reached
    const settleOnFinalName = (): void => {
        clearInterval(carouselInterval);
        currentName = finalName;
    };

    // Trigger carousel on mount
    onMount(async () => {
        await fetchNames();
        startCarousel();
        setTimeout(
            settleOnFinalName,
            transitionDuration * displayedNames.length,
        );
    });
</script>

<div class="carousel-container">
    {#each displayedNames as name, i (name)}
        <div
            class="carousel-name {i === 0
                ? 'enter'
                : i === displayedNames.length - 1
                  ? 'show'
                  : 'exit'}"
            style="transition-duration: {transitionDuration}ms"
        >
            {name}
        </div>
    {/each}
</div>

<style>
    .carousel-container {
        display: inline-block;
        position: relative;
        height: 3rem; /* Adjust based on font size */
        overflow: hidden;
    }

    .carousel-name {
        font-size: 3rem;
        opacity: 0;
        transition:
            opacity 0.5s ease-in-out,
            transform 0.5s ease-in-out;
        position: absolute;
        white-space: nowrap;
    }

    .show {
        opacity: 1;
        transform: translateY(0);
    }

    .enter {
        opacity: 0;
        transform: translateY(100%);
    }

    .exit {
        opacity: 0;
        transform: translateY(-100%);
    }
</style>
