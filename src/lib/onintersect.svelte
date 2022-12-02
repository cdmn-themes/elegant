<script>
  import { onMount } from "svelte";
  export let rootMargin='0px'
  export let root
  export let threshold
  
  let intersected;
  let el
  let observer
  function onIntersect(entries){
    if (entries[0].isIntersecting) {
      intersected = true
      observer.unobserve(el)
      observer = null
    }
  }  
  
  onMount(function() {
    observer = new IntersectionObserver(onIntersect,{rootMargin, root, threshold});
    observer.observe(el);
    return {
      destroy() {
        observer.unobserve(el)
      }
    }
  })
  </script>
  
  {#if intersected}
    <slot />
  {:else}
    <div class="invisible" bind:this={el}>
      <slot />
    </div>
  {/if}