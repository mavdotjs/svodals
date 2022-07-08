import { getContext } from 'svelte';

const context = {
  addModal: null,
  closeModal: null,
};

export type ModalContext = {
    addModal<T>(id: string, callback: (data: T) => unknown, data: any): void,
    closeModal<T>(id: string, data: T): void
}

export const getModalContext = (): ModalContext => getContext(context);

export default context;