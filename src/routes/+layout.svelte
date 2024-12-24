<script lang="ts">
    import { base } from "$app/paths";
    let { children } = $props();
</script>

<nav>
    <a href="{base}/">home</a>
    <a href="{base}/projects">projects</a>
    <a href="{base}/scrap">scrap</a>
</nav>

{@render children()}
