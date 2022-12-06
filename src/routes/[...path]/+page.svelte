<script>
  import { fly } from 'svelte/transition'
  import ChildPages from '$lib/child_pages.svelte';
    import Scrolltool from '../../lib/scrolltool.svelte';
    import { onMount } from 'svelte';

  export let data

  let fullvid = false
  let full_vid = data.content.full_video
  function full() {
    const vid = document.getElementsByTagName('video')[0];
    fullvid = true
    if (vid) {
      vid.src = `API_URL/attachments/${full_vid}?raw`;
      vid?.requestFullscreen();
      vid && (vid.muted = false)
      vid.loop = false
    }
  }

  onMount(function() {
    
					
    if (!data.content.geo_location) return

    var address = '53.575733, 9.997154';
  
    var map = new google.maps.Map(document.getElementById('ut_google_map_6386cc43e8131'), {
      
      zoom:14									
    });
  
    var geocoder = new google.maps.Geocoder();
  
    geocoder.geocode({
      'address': data.content.geo_location
    }, 
    function( results, status ) {

      if(status == google.maps.GeocoderStatus.OK) {

        new google.maps.Marker({
          position: results[0].geometry.location,
                            map: map
        });

        map.setCenter(results[0].geometry.location);

      }
      
      });
    
              
      
  })

  function reset() {
    fullvid = false
    const vid = document.getElementsByTagName('video')[0];
    document.exitFullscreen()
    vid.loop = true
    vid.src = `API_URL/attachments/${data.content.full_video}?raw`;
  }
  let scrollY
</script>

<svelte:window bind:scrollY></svelte:window>

<div class="absolute w-full h-screen">

  {#key data.content}
    <div class="relative h-screen w-full">
      <video style:top="{scrollY/2}px"  style:scale={1 + scrollY/4000} on:ended={reset} poster="API_URL/attachments/{data.content.images?.[0] || data.content.video}?h=1000" class="object-cover h-screen w-full absolute bg-dark" preload="auto" playsinline="" autoplay="autoplay" muted loop="loop" >
        <source type="video/mp4" src="API_URL/attachments/{data.content.images?.[0] || data.content.video}?raw">
      </video>
      <div class="absolute bottom-0 w-full h-3 bg-light/70"></div>
      <div class="relative w-full h-full" >
        <div class="absolute w-full h-full bg-black/30"></div>
        <div class="absolute bg-gradient-to-t from-transparent to-black/60 h-50 w-full">
        </div>
      </div>
    </div>
  {/key}
</div>



<section class="flex h-screen relative text-center text-white">
  
  {#if !fullvid}
    {#key data.content}
      <div class="uppercase tracking-widest" in:fly={{y: 30, duration: 1600, delay: 200}}>
        {data.content.tagline || data.site.content.tagline || ''}
      </div>
      <div class="px-2 text-size-10 md:text-size-18" in:fly={{y: 30, duration: 1600, delay: 400}}>
        {data.content.title || data.site.content.title || ''}
      </div>
      {#if data.content.video}
        
        <a on:click={full} class="button mt-12 bordered" in:fly={{y: 30, duration: 1600, delay: 600}}>
          <span class="i-material-symbols:play-arrow text-size-6 align-middle relative -pb-3px -top-2px h-6"></span> Video abspielen
        </a>
      {/if}
    {/key}
  {:else}
  
    <a on:click={reset} class="button mt-12 bordered fixed bottom-4 right-4" in:fly={{x: 40, duration: 600}}>
      <span class="i-clarity-volume-mute-line text-size-6 align-middle relative -pb-3px -top-2px h-6"></span> 
    </a>
  {/if}
</section>

<section class="relative bg-light text-center py-26 text-size-20px md:text-size-37px tracking-wide leading-1.6em lg:text-size-40px">
  <p class="pb-8 mx-8">
    Enjoy a quality lifestyle, an audience with nature.<br>Slowing the rhythm of life down to your perfect beat.
  </p>
</section>

{#if data.children.length}
  <div class="relative bg-light">
    <ChildPages children={data.children} />
  </div>
{/if}

<div class="bg-#f8f6f7 relative">
  <section class="flex py-24 container mx-auto">
    <h3 class="mb-20 tracking-4px">
      EXPERIENCE OF A LIFETIME
    </h3>

    <div class="grid grid-cols-2 container gap-8">
      <Scrolltool let:progress>
        
        <img src={"https://cms.cdmn.de/api/attachments/620"} class="object-cover w-full " alt="">
        <div class="flex gap-4 w-full relative">
          <img src={"https://cms.cdmn.de/api/attachments/619"} class="object-cover w-full " alt="">
          <!-- <img src={"https://cms.cdmn.de/api/attachments/623"} class="w-full object-cover" alt=""> -->

        </div>
        
      </Scrolltool>
    </div>
  </section>


  <section>
    <img src="https://cms.cdmn.de/api/attachments/595" alt="" class="w-full">
  </section>

{#if data.content.geo_location}
  <section id="ut_google_map_6386cc43e8131" class="h-160"></section>
{/if}

<section class="container mx-auto mt-32">
  <div class="mt-20 text-center">
    <h2 class="text-size-38px font-normal mb-12">Style & Interior</h2>
    <p class="leading-6 opacity-80">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
  <div class="md:grid grid-cols-4 gap-6 mt-12 pb-12">
  <div class="text-center mb-12 mb-12">
    <img src={"https://cms.cdmn.de/api/attachments/577"} class="object-cover w-full aspect-square " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">Interior</div>
    <div class="style mt-3 text-size-5.5">Design Parkvillen</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Premium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">ENTDECKEN</div>
  </div>
  <div class="text-center mb-12">
    <img src={"https://cms.cdmn.de/api/attachments/576"} class="object-cover w-full aspect-square " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">Interior</div>
    <div class="style mt-3 text-size-5.5">Design Sophienpalais</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Premium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">ENTDECKEN</div>
  </div>
  <div class="text-center mb-12">
    <img src={"/dummy/tide/Bild_3.jpg"} class="object-cover w-full aspect-square " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">Interior</div>
    <div class="style mt-3 text-size-5.5">Design Townhouses</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Premium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">ENTDECKEN</div>
  </div>
  <div class="text-center mb-12">
    <img src={"/dummy/tide/Bild_4.jpg"} class="object-cover w-full aspect-square " alt="">
    <div class="tagline uppercase tracking-3px text-size-2.5 mt-14">Interior</div>
    <div class="style mt-3 text-size-5.5">Design Alstervillen</div>
    <div class="desc leading-1.5em text-size-3 mx-5 mt-8 text-black/60">Premium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und so weiter.</div>
    <div class="inline-block mt-12 border-1 py-3 px-17 uppercase rounded text-size-3 hover:bg-black hover:text-white">ENTDECKEN</div>
  </div>
</div>
</section>
</div>
<section class="flex py-36 text-center">
  <img src="API_URL/attachments/{data.logo}?raw" class="invert w-30" alt="">
  <h3 class="mt-12 mb-8 tracking-4px">
    COPYRIGHT &copy; 2022 Frankonia Eurobau GmbH
  </h3>
  <div class="grid grid-cols-4">
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">Twitter</div>
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">Facebook</div>
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">YouTube</div>
    <div class="w-28 cursor-pointer transition-all hover:tracking-3px">Instagram</div>
  </div>
</section>
