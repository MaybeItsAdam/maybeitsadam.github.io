<script lang="ts">
    import { onMount } from "svelte";

    let allNames: string[];
    let nameList: string[];
    export let finalName: string = "";

    let currentIndex = 0;
    const transitionSpeed = 500; // Time for the transition of each name in milliseconds
    const delay = 2000; // Time between name transitions

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
    });
</script>

<div id="cwrapper">
    {#each nameList as name}
        <div>{name}</div>
    {/each}
</div>

<style>
    #cwrapper {
        display: inline-flex;
        flex-direction: column;
        align-content: flex-start;
        width: 4ch;
    }
</style>
