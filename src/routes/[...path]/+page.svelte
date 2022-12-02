<script>
  import { fly } from 'svelte/transition'
  import FeaturedSections from '$lib/_featured_sections.svelte';
    import Scrolltool from '../../lib/scrolltool.svelte';

  export let data

  let fullvid = false
  function full() {
    const vid = document.getElementsByTagName('video')[0];
    fullvid = true
    if (vid) {
      vid.src = `API_URL/attachments/${data.full_video}?raw`;
      // vid?.requestFullscreen();
      vid && (vid.muted = false)
      vid.loop = false
    }
  }

  function reset() {
    fullvid = false
    const vid = document.getElementsByTagName('video')[0];
    document.exitFullscreen()
    vid.loop = true
    vid.src = `API_URL/attachments/${data.video}?raw`;
  }
</script>

<div class="absolute w-full h-screen">


<video on:ended={reset} poster="API_URL/attachments/{data.site.content.video}?raw" class="object-cover h-screen w-full absolute bg-dark" preload="auto" playsinline="" autoplay="autoplay" muted loop="loop" >
  <source type="video/mp4" src="API_URL/attachments/{data.site.content.video}?raw">
</video>
<div class="absolute w-full h-full bg-black/30"></div>
<div class="absolute bg-gradient-to-t from-transparent to-black/60 h-50 w-full">

</div>
</div>



<section class="flex h-screen relative text-center text-white">
  <div class="h-1/6 relative"></div>
  {#if !fullvid}
  
  <div class="uppercase tracking-widest" in:fly={{y: 80, duration: 1200, delay: 200}}>
    Experience the very special
  </div>
  
  <div class="px-2 text-size-10 md:text-size-18" in:fly={{y: 80, duration: 1200, delay: 400}}>
    Sophienterrassen
  </div>
  <a on:click={full} class="button mt-12 bordered" in:fly={{y: 80, duration: 1200, delay: 600}}>
    <span class="i-clarity-volume-up-line text-size-6 align-middle relative -pb-3px -top-2px h-6"></span> Play full video
  </a>
  {:else}
 
  <a on:click={reset} class="button mt-12 bordered fixed bottom-4 right-4" in:fly={{x: 40, duration: 600}}>
    
    <span class="i-clarity-volume-mute-line text-size-6 align-middle relative -pb-3px -top-2px h-6"></span> 
  </a>
  {/if}
</section>

<section class="text-center py-26 text-size-20px md:text-size-37px tracking-wide leading-1.6em lg:text-size-40px">
  <p class="mb-8 mx-8">
    Enjoy a quality lifestyle, an audience with nature.<br>Slowing the rhythm of life down to your perfect beat.
  </p>
</section>

<FeaturedSections projects={data.content.projects} />

<div class="bg-#f8f6f7">
  <section class="flex py-24 container mx-auto">
    <h3 class="mb-20 tracking-4px">
      THE AUSSENALSTER - EXPERIENCE OF A LIFETIME
    </h3>

    <div class="grid grid-cols-2 container gap-8">
      <Scrolltool let:progress>
        
        <img src={"/dummy/tide/Lage_1.jpg"} class="object-cover w-full " alt="">
        <img src={"/dummy/tide/Lage_2.jpg"} class="object-cover w-full " alt="">
      </Scrolltool>
    </div>
  </section>

<section class="">
  <img src={"/dummy/tide/map.jpg"} class="object-cover w-full object-center" alt="">
</section>

<section class="container mx-auto mt-32">
  <div class="mt-20 text-center">
    <h2 class="text-size-38px font-normal mb-12">Experience the Design of Hamburg</h2>
    <p class="leading-6 opacity-80">
      Design of your lifetime. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.
    </p>
  </div>
  <div class="md:grid grid-cols-4 gap-6 mt-12 pb-12">
  <div class="text-center mb-12 mb-12">
    <img src={"/dummy/tide/Bild_1.jpg"} class="object-cover w-full " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">UK - SOUL</div>
    <div class="style mt-3 text-size-5.5">Design Style One</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">Pick</div>
  </div>
  <div class="text-center mb-12">
    <img src={"/dummy/tide/Bild_2.jpg"} class="object-cover w-full " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">Theuerkauf Home</div>
    <div class="style mt-3 text-size-5.5">Design Style Two</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">Pick</div>
  </div>
  <div class="text-center mb-12">
    <img src={"/dummy/tide/Bild_3.jpg"} class="object-cover w-full " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">Piet Boon</div>
    <div class="style mt-3 text-size-5.5">Design Style Three</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">Pick</div>
  </div>
  <div class="text-center mb-12">
    <img src={"/dummy/tide/Bild_4.jpg"} class="object-cover w-full " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">CDMN-STUDIOS</div>
    <div class="style mt-3 text-size-5.5">Design Style Four</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">Pick</div>
  </div>
</div>
</section>
</div>
<section class="flex py-36 text-center">
  <img src="API_URL/attachments/{data.logo}?raw" class="invert w-30" alt="">
  <h3 class="mt-12 mb-8 tracking-4px">
    COPYRIGHT &copy; 2022 ECE
  </h3>
  <div class="grid grid-cols-4">
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">Twitter</div>
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">Facebook</div>
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">YouTube</div>
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">Instagram</div>
  </div>
</section>
