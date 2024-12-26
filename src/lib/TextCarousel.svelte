<script lang="ts">
    import { onMount } from "svelte";

    export let finalName = "";
    export let numRandomNames = 3;
    export let trigger = "load"; // 'load' or 'manual'

    let names: string[] = [];
    let currentName = "";
    let isAnimating = false;

    async function loadNames() {
        const response = await fetch("names.txt");
        const text = await response.text();
        names = text.split("\n").filter((name) => name.trim());
    }

    function getRandomNames() {
        return Array(numRandomNames)
            .fill(0)
            .map(() => names[Math.floor(Math.random() * names.length)]);
    }

    async function animate() {
        if (isAnimating) return;
        isAnimating = true;

        const namesToShow = getRandomNames();
        for (const name of namesToShow) {
            currentName = name;
            await new Promise((resolve) => setTimeout(resolve, 500));
        }

        currentName = finalName;
        isAnimating = false;
    }

    onMount(async () => {
        await loadNames();
        if (trigger === "load") animate();
    });
</script>

<div class="relative overflow-hidden w-fit">
    <div class="relative px-4 py-2">
        <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        ></div>
        <span class="relative transition-opacity duration-300">
            {currentName || finalName}
        </span>
    </div>
</div>

<style>
    .relative {
        position: relative;
    }
    .absolute {
        position: absolute;
    }
    .inset-0 {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .overflow-hidden {
        overflow: hidden;
    }
    .w-fit {
        width: fit-content;
    }
    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .bg-gradient-to-r {
        background: linear-gradient(to right, #ffffff00, #ffffff, #ffffff00);
    }
    .transition-opacity {
        transition: opacity 300ms;
    }
    .duration-300 {
        transition-duration: 300ms;
    }
</style>
