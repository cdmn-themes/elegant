<script>
  import Preload from '$lib/preload.svelte'
  import { fly, slide } from 'svelte/transition'

  export let children
  let projectEls = []
  let activeChild = children[0]
</script>

<section class="pb-26 container mx-auto hidden md:flex">
  <div class="my-8 w-full w-auto text-center text-size-3">
    {#each children as child}
      <div class="child-btn uppercase" on:click={() => activeChild=child} class:active={activeChild==child}>
        <div class="projectname">{child.content.title}</div>
        <div class="underline" />
      </div>
    {/each}
  </div>
  
  {#if activeChild}
  
    {#each [activeChild] as _ (activeChild)}
      <div class="grid grid-cols-12 gap-8 mt-8 items-end max-w-full min-h-500px lg:min-h-600px relative">
        <div class="text-left pr-12 col-span-5 flex flex-col">
          <div class="py-24">
            <h3 in:fly|local={{y: 40, duration: 1600}} class="projectname">
              {activeChild.content.title}
            </h3>
            <h4 in:fly|local={{y: 40, duration: 1600, delay: 160}} class="tagline mb-6">
              {activeChild.content.tagline}
            </h4>
            <p in:fly|local={{y: 40, duration: 1600, delay: 320}} class="leading-6 text-size-0.9em text-black/50">
              {activeChild.content.description}
            </p>
          </div>
          <!-- <a href="child?child={children.indexOf(activeChild)}" class="button bordered dark w-50%" in:fly|local={{y: 40, duration: 1600, delay: 400}}>Explore</a> -->
          <a href="/" class="button bordered dark w-50%" in:fly|local={{y: 40, duration: 1600, delay: 400}}>Explore</a>
        </div>
        <div class="col-span-7 h-full overflow-hidden">
          <Preload src="API_URL/attachments/{activeChild.content.images?.[0]}?w=600" let:src>
            <img in:fly|local={{x: 40, duration: 1600}} {src} alt={activeChild.content.title} class="object-cover w-full h-full">  
          </Preload>
        </div>
      </div>  
    {/each}
  {/if}

</section>

<section class="mx-8 mb-20 md:hidden border-t">

  {#each children as child, index (child)}
    <div class="border-b pt-4" bind:this={projectEls[index]}>
      <div class="uppercase pb-4 flex space-between" on:click={() => {(activeChild=activeChild == child ? null : child)}} class:active={activeChild==child}>
        <div class="projectname grow">{child.content.title}</div>
        <div class="toggle relative text-size-33px -top-12px">
          <div class:-scale-y-100={activeChild == child} class="transition absolute right-0">
            <span class="i-fluent-chevron-down-20-regular" />
          </div>
        </div>
      </div>
      {#if activeChild == child}
        <div in:slide|local={{duration: 1000}} out:slide|local={{duration: 500}}>
          <img src="API_URL/attachments/{activeChild.content.image}?w=600" alt={activeChild.title} class="object-cover aspect-square w-full">  
          <div class="text-left col-span-5 flex flex-col">
            <div class="md:py-24">
              <h4 class="tagline mb-6  mt-3 !text-size-9">
                {child.content.tagline}
              </h4>
              <p class="mb-12 leading-6 text-size-0.9em">
                {child.content.description}
              </p>
            </div>
            <a href="child?child={index}" class="button mb-8 bordered dark">Explore</a>
          </div>
        </div>  
      {/if}
    </div>
  {/each}


</section>

<style>
  
.child-btn {
  display: inline-block;
  background: none;
  color: lightgray;
  border: none;
  padding: 10px 0;
  letter-spacing: 4px;
  margin: 20px;
  transition: all 0.4s;
  position: relative;
  cursor: pointer;
}
.child-btn .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  background: gray;
  transition: all 0.4s;
}
.child-btn:hover .underline, .child-btn.active .underline {
  width: 100%;
}
.child-btn:hover, .child-btn.active {
  color: black;
}
</style>