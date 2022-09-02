// import type { SvelteComponentTyped } from "svelte";
import { writable } from "svelte/store";
export type ModalData = {
    data: any,
    id: string,
    close: (data: any) => void
}

export type ModalInit = {
    id: string,
    component: unknown // if anyone has a good type to use for svelte components let me know
}

export type InitModals = Array<ModalInit>
export type OpenModals = Array<ModalData>

const openmodals = writable<OpenModals>([])

export default openmodals