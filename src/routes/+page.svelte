<script>
    import TextCarousel from "$lib/TextCarousel.svelte";
</script>

<div id="main"><p>MaybeIts<TextCarousel finalName="Adam" /></p></div>

<style>
    @import url("https://fonts.cdnfonts.com/css/cascadia-code");
    #main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    p {
        font-family: "Cascadia Code", sans-serif;
        font-size: 6em;
    }
</style>
