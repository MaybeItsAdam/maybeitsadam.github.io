<script>
    import Carousel from "svelte-light-carousel";

    const slides = Array.from({ length: 10 }, (_, i) => ({
        title: `${i + 1}`,
    }));

    export let names = ["tetsname", "tof", "bimef"];
    export let finalName = "";
    names.push(finalName);
    let currentIndex = 0;
    const transitionSpeed = 500; // Time for the transition of each name in milliseconds
    const delay = 2000; // Time between name transitions

    // Cycle through names and stop at the last one
    setInterval(() => {
        if (currentIndex < names.length - 1) {
            currentIndex += 1;
        } else {
            currentIndex = names.length - 1; // Stop at the last item
        }
    }, delay);
</script>

<Carousel axis="y" {slides}>
    <div slot="slide" let:slide>{slide.title}</div>
</Carousel>
