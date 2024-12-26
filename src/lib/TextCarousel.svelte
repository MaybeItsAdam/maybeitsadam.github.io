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
        nameList = await generateNames(3);
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

<div id="cwrapper" style="--chwidth: {finalName.length}ch">
    <div id="mask">
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
        width: var(--chwidth);
        height: 1em;
    }

    .mover {
        position: relative;
        transition: top 0.3s ease;
        top: var(--shift);
    }

    #mask {
        position: absolute;
        top: -1em;
        left: 0;
        right: -100%;
        mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
        pointer-events: none;
    }
</style>
