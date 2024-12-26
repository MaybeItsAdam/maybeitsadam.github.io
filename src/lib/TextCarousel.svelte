<script lang="ts">
    import { onMount } from "svelte";

    export let finalName: string = "";

    let names: string[] = [];
    let currentName: string = "";
    let index: number = 0;
    let isSettling: boolean = false;

    // Function to load names from a text file
    onMount(async () => {
        try {
            const response = await fetch("/names.txt");
            const text = await response.text();
            names = text
                .split("\n")
                .map((name) => name.trim())
                .filter((name) => name);

            startCarousel();
        } catch (error) {
            console.error("Error loading names:", error);
        }
    });

    // Function to start the carousel
    function startCarousel() {
        let interval = setInterval(
            () => {
                if (isSettling) {
                    currentName = finalName;
                } else {
                    currentName = names[index];
                    index = (index + 1) % names.length;
                }
            },
            isSettling ? 100 : 50,
        );

        setTimeout(() => {
            isSettling = true;
            clearInterval(interval);
            setTimeout(startCarousel, 2000); // Delay before starting to settle
        }, 3000); // Adjust timing for how long names cycle fast
    }
</script>

<div class="carousel">
    <div class="mask"></div>
    <div class="name">{currentName}</div>
</div>

<style>
    .carousel {
        position: relative;
        overflow: hidden;
        display: inline-block;
        height: 50px; /* Set a fixed height for visibility */
    }

    .name {
        position: absolute;
        bottom: 0;
        animation:
            slideIn 0.5s forwards,
            settle 2s 3s forwards;
        white-space: nowrap;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
        );
        pointer-events: none;
    }

    @keyframes slideIn {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes settle {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
