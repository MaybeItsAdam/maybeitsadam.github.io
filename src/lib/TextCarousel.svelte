<script lang="ts">
    import { onMount } from "svelte";

    let allNames: string[];
    let nameList: string[] = $state([]);
    let { finalName } = $props();

    const generateNames = async (numOfNames: number): Promise<string[]> => {
        const response = await fetch("/names.txt");
        const text = await response.text();
        allNames = text.split("\n");

        let shuffled = [...allNames].sort(() => Math.random() - 0.5);

        return shuffled.slice(0, numOfNames);
    };

    onMount(async () => {
        nameList = await generateNames(4);
        nameList.push(finalName);
        await measureBoxHeight();
        startShifting();
    });

    let currentShift = 0;
    let shiftVal = $state(0);
    let shiftInterval: number;

    let moverHeight: number;

    async function measureBoxHeight() {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const mover = document.querySelector(".mover");
                if (mover) {
                    moverHeight = mover.getBoundingClientRect().height;
                } else {
                    moverHeight = 0;
                }
                resolve();
            }, 0);
        });
    }

    function startShifting() {
        shiftInterval = setInterval(() => {
            if (currentShift < nameList.length - 1) {
                shiftVal -= moverHeight;
                currentShift++;
            } else {
                clearInterval(shiftInterval);
            }
        }, 800);
    }
</script>

<div id="main" style="--chwidth: {finalName.length}ch">
    <div id="cwrapper">
        {#each nameList as name}
            <div class="mover" style="--shift: {shiftVal}px">{name}</div>
        {/each}
    </div>
</div>

<style>
    #cwrapper {
        display: inline-flex;
        position: relative;
        flex-direction: column;
        align-content: flex-start;
        height: 2em;
        overflow: visible;
        width: 600px;
        mask-image: linear-gradient(
            to bottom,
            transparent,
            black 10%,
            black 60%,
            transparent 70%
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 10%,
            black 60%,
            transparent 70%
        );
    }

    .mover {
        position: relative;
        transition: top 0.3s ease;
        top: var(--shift);
        white-space: nowrap;
    }

    #main {
        display: inline-block;
        width: var(--chwidth);
        overflow: visible;
    }
</style>
