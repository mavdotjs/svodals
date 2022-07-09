<script lang="ts" context="module">
    import { Layout } from 'kitbook';
    import type { Load } from '@sveltejs/kit';
    export const load: Load = () => {
      const modules = import.meta.glob('./**/*.{md,svx}');
      return { stuff: { kitbook: { modules, root: '/' } } };
    };
</script>

<script>
    import "../app.css";
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
