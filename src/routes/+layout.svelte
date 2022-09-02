<script>
    import "../app.css";
    import { Layout } from 'kitbook';
    import ModalList from "$lib/ModalList.svelte";
    import ExampleModal from "$lib/ExampleModal.svelte";
    const modals = [
        {
            id: 'modal',
            component: ExampleModal
        }
    ]
</script>


<Layout githubURL="https://github.com/mavthedev/svodals" title="Svodals">
    <ModalList modals={modals}>
        <slot />
    </ModalList>
</Layout>
