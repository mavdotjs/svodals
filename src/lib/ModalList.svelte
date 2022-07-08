<script lang=ts>
    import openmodals from '$lib/store'
    import type { InitModals } from '$lib/store'
    import type { ModalContext } from './context';
    import { setContext } from 'svelte';
    import contextkey from '$lib/context'

    export let modals: InitModals;

    export const modaldata = openmodals

    function finder(id: any) {
        return (obj: any) => obj.id === id
    }

    const modalContext: ModalContext = {
        addModal<T>(id: string, callback: (data: T) => unknown, data: any) {
            modaldata.update((md) => {
                md.push({
                    id,
                    data,
                    close: callback
                })
                return md
            })

        },
        closeModal<T>(id: string, data: T) {
            modaldata.update((md) => {
                const modal = md.find(finder(id))

                modal?.close(data)
                delete md[md.findIndex(finder(id))]
                return md.filter((v) => {
                    return !!v
                })
            })
        }
    }
    setContext(contextkey, modalContext)
</script>

{#each $modaldata as modal }
    <!-- IF an error happens, its the users fault. -->
    {@const component = modals.find((v) => {
        return v.id == modal.id
    })?.component }
    <svelte:component this={component} data={modal.data} close={(d) => {modalContext.closeModal(modal.id, d)}}></svelte:component>
{/each}

<slot /> 