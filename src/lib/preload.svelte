<script>
  // import { browser } from '$app/environment'
  import { onMount } from "svelte";
  export let src
  
  let loaded = false
  $: if (loaded && loaded !== src) load()

  function load() {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      loaded = src
    }
  }

  onMount(load)
</script>

{#if loaded == src}
  <slot {src} />
{/if}