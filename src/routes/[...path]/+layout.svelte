<script>
  
  import Burger from '$lib/burger.svelte'

  import { fade, slide } from 'svelte/transition'
  import { afterNavigate, goto } from '$app/navigation'
  export let data

  let navShown
  let scrollY = 0, oldScrollY= 0
  let transitioning = false
  
  $: {
    navShown = scrollY <= oldScrollY
    oldScrollY = scrollY
  }
  
  afterNavigate(function() {
    transitioning = false
  })
  

  function transition(ev) {
    if (ev.target.dataset.fslightbox) return
    if (ev.target.parentNode.dataset.fslightbox) return
    const href = ev.target.href || ev.target.parentNode.href
    if (href) {
      ev.preventDefault()
      if (transitioning) return
      transitioning = true
      
      setTimeout(function() {
        
        if (href.includes(document.location.host)) goto(href)
        else {
          window.location = href
          transitioning = false
          scrollY = 0
        }
      }, 900)
    }
  }
  let formOpen = false
  let open
</script>

<svelte:window bind:scrollY />
<svelte:body on:click={transition} />

{#if transitioning}
  <div transition:fade={{duration:800}} class="fixed w-full h-screen bg-white z-200" />
{/if}

{#if formOpen}
<div transition:fade={{duration:600}} class="fixed backdrop-blur w-full h-screen bg-white/50 z-2000"/>
<main id="content" role="main" class=" fixed h-full w-full flex items-center justify-center z-2000"  on:click|self={() => formOpen = false}>
  <div transition:slide={{duration:600}}  class="mt-7 shadow-lg dark:bg-gray-800 border-white/50 border-12">
    <div class="p-12 md:px-24 bg-#f8f6f7 ">
      <div class="text-center">
        <img src="API_URL/attachments/{data.site.content.logo}?raw" alt="{data.site.content.title}" class="w-30 mb-5" />
        <!-- <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Join the Tide</h1> -->
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Get in touch and experience Sophienterrassen Hamburg
        </p>
      </div>

      <div class="mt-5">
        <form action="">
          <div class="flex flex-col md:grid grid-cols-2 gap-6 md:w-200">
            <input class="border-1 border-black/50 p-2 bg-#f8f6f7" placeholder="First name">
            <input class="border-1 border-black/50 p-2 bg-#f8f6f7" placeholder="Last name">
            <input class="border-1 border-black/50 p-2 bg-#f8f6f7" placeholder="Email">
            <input class="border-1 border-black/50 p-2 bg-#f8f6f7" placeholder="Phone">
            <input class="border-1 border-black/50 p-2 bg-#f8f6f7 col-span-2" placeholder="Reason for contact">
            <textarea class="border-1 border-black/50 p-2 bg-#f8f6f7 col-span-2" placeholder="Message..." />
            <button class="button border-1 text-center p-4 col-span-2 cursor-pointer">SEND INQUIRY</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
{/if}

<nav class:navShown class="text-center" class:top={scrollY == 0}>
  <div class="burger p-5 md:p-8 absolute">
    <Burger {open} on:click={() => open = !open}/>
  </div>
  <a href="/" rel="external" class="brand">
    <img src="API_URL/attachments/{data.site.content.logo}?raw" alt="" class="p-4 h-16 md:p-8 md:h-26">
  </a>
  <a class="button bordered right-4 top-4 md:right-7 md:top-7 absolute" on:click={() => formOpen = true}>
    KONTAKT
  </a>
</nav>


<div class="relative min-h-screen" in:fade={{duration:1000}}>
  <slot />
</div>


<footer class="container mx-auto mt-12">
  <a href="legal" class="text-size-11px text-center text-sm">Datenschutz / Impressum</a>
  
  <div class="text-size-11px border-t border-black mt-2 mb-12 pt-3 md:flex">
    <div class="relative">
      Platzhalterstrasse 123, 12345 Stadt, Tel: +49 1234-567890, E-Mail: 
    </div>
  
  </div>

</footer>

<style>
nav {
  backdrop-filter: blur(10px);
  /* backdrop-filter: brightness(50%);
    backdrop-filter: contrast(50%);
    backdrop-filter: drop-shadow(0 0 5px #000);
    backdrop-filter: grayscale(100%);
    backdrop-filter: hue-rotate(90deg);
    backdrop-filter: invert(100%);
    backdrop-filter: opacity(50%);
    backdrop-filter: sepia(100%); */
    
    /* backdrop-filter: saturate(100%); */
  box-shadow: 0 0 10px #ccc;
  top: -132px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  background-color: #fffb;

  transition: all 0.5s ease-in-out;
}
nav.top {
  box-shadow: none;
  backdrop-filter: blur(0) brightness(1);
  background-color: transparent;
}
nav.navShown {
  top: 0;
}
nav img {
  transition: all 0.5s ease-in-out;
  filter: invert(0);
}
nav.top img {
  filter: invert(1) brightness(2);
}
nav .button {
  transition: all 0.5s ease-in-out;
  color: black;
  border-color: black;
}
nav.top .button {
  color: white;
  border-color: white;
}
nav .burger {
  transition: all 0.5s ease-in-out;
  filter: invert(0);
}
nav.top .burger {
  filter: invert(1);
}
img {
  object-position: center;
}

</style>