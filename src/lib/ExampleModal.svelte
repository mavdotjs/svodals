<script>
    // Whatever data you require
    export let data;
    //  Function
    export let close;
</script>

<div>
    {data.title}
    {data.body}
    <button on:click={() => close(false)}>No</button>
    <button on:click={() => close(true)}>Yes</button>
</div>