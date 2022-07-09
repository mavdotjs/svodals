import type { SvelteComponentTyped } from "svelte";
import { writable } from "svelte/store";
export type ModalData = {
    data: any,
    id: string,
    close: (data: any) => void
}

export type ModalInit = {
    id: string,
    component: SvelteComponentTyped<{ data: any, opened: boolean }>
}

export type InitModals = Array<ModalInit>
export type OpenModals = Array<ModalData>

const openmodals = writable<OpenModals>([])

export default openmodals