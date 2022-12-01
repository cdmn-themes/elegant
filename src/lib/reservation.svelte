<script context="module">
  let form
</script>

<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  onMount(() => {
    // inject opentable script
    const script = document.createElement('script');
    script.src = `https://www.opentable.com/widget/reservation/loader?rid=${$page.data.site.content.reservation_link}&domain=de&lang=de-DE&type=standard&theme=standard&overlay=true&iframe=false`
    
    form.appendChild(script);
  })
</script>


<div class="fixed top-0 z-10 w-full h-full bg-dark/60 flex items-center justify-center" on:click|self>
  <div transition:fly={{y: 20}} class="bg-white/50 p-2 text-center">
    <div class="bg-white p-8 md:px-30 text-center md:text-lg">
      <h2>Ihre Reservierung</h2>
      <p class="mb-2">Telefonische Reservierung unter <b><a href="tel:+4922894556556">0228 94 556 556</a></b></p>
      <p>Gerne nehmen wir Ihre Reservierung online entgegen.<br>Nutzen Sie dazu das folgende Formular.</p>
      <hr class="mt-4">
      <div bind:this={form}></div>
    </div>
    
  </div>

</div>

<style>
  :global(iframe) {
    display: inline-block;
  }
  :global(.ot-dtp-picker) {
    width: 100% !important;
  }
  :global(.ot-dtp-picker input[type="submit"]) {
    background-color: rgb(119, 31, 68) !important;
    border: none !important;
    box-shadow: none !important;
  }
  :global(.ot-powered-by) {
    display: none;
  }
  hr {
    border-top: 1px solid #ddd;
    width: 100%;
  }
</style>