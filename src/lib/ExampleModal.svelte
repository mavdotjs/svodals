<script lang=ts>
    import { fade, scale, fly } from "svelte/transition";
    // Whatever data you require
    export let data: any;
    //  Function
    export let close: (data: any) => null

    const fadedata = {
        duration: 300
    }
</script>


<div class="w-full h-full bg-[#000] bg-opacity-50 absolute z-50 flex items-center justify-center" in:fade={fadedata} out:fade={fadedata}>
    <div class="bg-white min-w-[30rem] min-h-[10rem] rounded-lg pl-4 flex flex-col" in:scale out:scale>
        <span class="text-3xl font-extrabold" in:fly={{ y: -500, delay: fadedata.duration }}>{data.title}</span>
        <span class="font-bold" in:fly={{ x: 500, delay: fadedata.duration }}>{data.body}</span>
        <div class="flex w-full flex-grow justify-end items-end pb-4 pr-4 divide-x-4 divide-transparent">
            <button class="bg-red-50 text-red-500 px-4 py-2 rounded-md" on:click={() => close(false)}>No</button>
            <button class="bg-green-50 text-green-500 px-4 py-2 rounded-md" on:click={() => close(true)}>Yes</button>
        </div>
    </div>
</div>