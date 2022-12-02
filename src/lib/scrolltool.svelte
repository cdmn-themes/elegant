<script>
  import { onMount } from "svelte";

  let topEl
  let progress
  function onScroll() {
    progress = 1 - ((topEl.getBoundingClientRect().bottom + window.innerHeight) / window.innerHeight)
    progress = Math.max(-1, Math.min(1, progress))
  }
  onMount(onScroll)
</script>

<svelte:window on:scroll={onScroll} />

<div bind:this={topEl} class="absolute top-0" />


<slot {progress} />