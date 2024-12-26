<script lang="ts">
    import { onMount } from "svelte";

    let allNames: string[];
    let nameList: string[] = [];
    export let finalName: string = "";

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
        startShifting(); // Call startShifting after the names are ready
    });

    let currentShift = 0;
    let shiftVal = 0;
    let shiftInterval: number;

    function startShifting() {
        shiftInterval = setInterval(() => {
            if (currentShift < nameList.length - 1) {
                shiftVal -= 2;
                currentShift++;
            } else {
                clearInterval(shiftInterval);
            }
        }, 800); // Interval time (in milliseconds)
    }
</script>

<div id="cwrapper" style="--chwidth: {finalName.length}ch">
    {#each nameList as name}
        <div class="mover" style="--shift: {shiftVal}ch">{name}</div>
    {/each}
</div>

<style>
    #cwrapper {
        display: inline-flex;
        position: relative;
        flex-direction: column;
        align-content: flex-start;
        width: var(--chwidth);
        height: 1ch;
    }

    .mover {
        padding: 0;
        margin: 0;
        position: relative;
        transition: top 0.3s ease;
        top: var(--shift);
    }
</style>
