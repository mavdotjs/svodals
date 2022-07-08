<script>
    import { getModalContext } from "$lib";

    const modalAPI = getModalContext()

    function create() {
        modalAPI.addModal('modal', console.log, {
        title: "test",
        body: "test"
        })
    }
</script>

<button on:click={create}>
    Create Modal
</button>
