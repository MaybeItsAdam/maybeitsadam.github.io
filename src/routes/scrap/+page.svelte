<script lang="ts">
    let count = 0;

    function inc() {
        count += 2;
    }
</script>

<h>{count}</h>
<button on:click={inc}>add two</button>
