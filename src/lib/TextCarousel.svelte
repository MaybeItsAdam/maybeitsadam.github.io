<script lang="ts">
    import { onMount } from "svelte";

    export let finalName: string = "";
    export let numRandomNames: number = 3;

    let names: string[] = [];
    let currentName: string = "";
    let isAnimating: boolean = false;
    let nameQueue: string[] = [];

    async function loadNames() {
        const response = await fetch("names.txt");
        const text = await response.text();
        names = text.split("\n").filter((name) => name.trim());
    }

    function getRandomNames(): string[] {
        return Array(numRandomNames)
            .fill(0)
            .map(() => names[Math.floor(Math.random() * names.length)]);
    }

    async function animate() {
        if (isAnimating) return;
        isAnimating = true;
        nameQueue = getRandomNames();

        for (const name of nameQueue) {
            currentName = name;
            await new Promise((resolve) => setTimeout(resolve, 500));
        }

        currentName = finalName;
        isAnimating = false;
    }

    onMount(async () => {
        await loadNames();
        animate();
    });
</script>

<span class="carousel">
    <span class="mask">
        <span class="text" class:animate={isAnimating}
            >{currentName || finalName}</span
        >
    </span>
</span>

<style>
    .carousel {
        display: inline-block;
        position: relative;
    }
    .mask {
        display: inline-block;
        position: relative;
        overflow: hidden;
        -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
        );
        mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
        );
    }
    .text {
        display: inline-block;
        transform: translateX(0);
        opacity: 1;
    }
    .text.animate {
        transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
        transform: translateX(-100%);
        opacity: 0;
    }
</style>
