<script>
    import ModalList from "$lib/ModalList.svelte";
    import ExampleModal from "$lib/ExampleModal.svelte";
    const modals = [
        {
            id: 'modal',
            component: ExampleModal
        }
    ]
</script>


<ModalList modals={modals}>
    <slot />
</ModalList>