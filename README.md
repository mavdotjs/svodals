# Svodals
**For Installation, Follow [this tutorial](https://itnext.io/setting-up-github-packages-for-npm-2bc9f8e4b11e#d520)** <br>
*Slightly based off of [[svelte-notifications]](https://github.com/keenethics/svelte-notifications)*


## Usage
### __layout.svelte
```html
<script>
    import ModalList from "@mavthedev/svodals";
    import AModal from "$lib/AModal.svelte"
    const modals = [
        {
            id: 'auth',
            component: AModal
        }
    ]
</script>

<ModalList modals={modals}>
    <slot />
</ModalList>
```


### $lib/AModal
```html
<script>
    // Whatever data you require
    export let data;
    //  Function close(data) => callback(data)
    export let close;
</script>

{data.info}
<button on:click={() => close(true)}>
    OK
</button>
<buttton on:click={() => close(false)}>
    No
</button>
```

### index.svelte (or any other route)
```html
<script>
    import { getModalContext } from "@mavthdev/svodals";

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
```