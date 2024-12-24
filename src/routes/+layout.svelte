<script lang="ts">
    import { base } from "$app/paths";
    let { children } = $props();
</script>

<div id="nav">
    <a href="{base}/">home</a>
    <a href="{base}/projects">projects</a>
    <a href="{base}/scrap">scrap</a>
</div>

{@render children()}

<style>
    #nav {
        z-index: 1100;
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
        background-color: aqua;
    }
</style>
