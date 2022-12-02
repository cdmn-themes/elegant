<script>
  import Preload from '$lib/preload.svelte'
  import { fly, slide } from 'svelte/transition'

  export let projects
  let projectEls = []
  let activeProject = projects[0]
</script>

<section class="pb-26 container mx-auto hidden md:flex">
  <div class="my-8 w-full w-auto text-center text-size-3">
    {#each projects as project}
      <div class="project-btn uppercase" on:click={() => activeProject=project} class:active={activeProject==project}>
        <div class="projectname">{project.title}</div>
        <div class="underline" />
      </div>
    {/each}
  </div>

  {#if activeProject}
    {#each [activeProject] as _ (activeProject)}
      <div class="grid grid-cols-12 gap-8 mt-8 items-end max-w-full min-h-500px lg:min-h-600px relative">
        <div class="text-left pr-12 col-span-5 flex flex-col">
          <div class="py-24">
            <h3 in:fly|local={{y: 40, duration: 1600}} class="projectname">
              {activeProject.title}
            </h3>
            <h4 in:fly|local={{y: 40, duration: 1600, delay: 160}} class="tagline mb-6">
              {activeProject.tagline}
            </h4>
            <p in:fly|local={{y: 40, duration: 1600, delay: 320}} class="leading-6 text-size-0.9em text-black/50">
              {activeProject.description}
            </p>
          </div>
          <!-- <a href="project?project={projects.indexOf(activeProject)}" class="button bordered dark w-50%" in:fly|local={{y: 40, duration: 1600, delay: 400}}>Explore</a> -->
          <a href="/" class="button bordered dark w-50%" in:fly|local={{y: 40, duration: 1600, delay: 400}}>Explore</a>
        </div>
        <div class="col-span-7 h-full overflow-hidden">
          <Preload src="API_URL/attachments/{activeProject.image}?w=600" let:src>
            <img in:fly|local={{x: 40, duration: 1600}} {src} alt={activeProject.name} class="object-cover w-full h-full">  
          </Preload>
        </div>
      </div>  
    {/each}
  {/if}

</section>

<section class="mx-8 mb-20 md:hidden border-t">

  {#each projects as project, index (project)}
    <div class="border-b pt-4" bind:this={projectEls[index]}>
      <div class="uppercase pb-4 flex space-between" on:click={() => {(activeProject=activeProject == project ? null : project)}} class:active={activeProject==project}>
        <div class="projectname grow">{project.title}</div>
        <div class="toggle relative text-size-33px -top-12px">
          <div class:-scale-y-100={activeProject == project} class="transition absolute right-0">
            <span class="i-fluent-chevron-down-20-regular" />
          </div>
        </div>
      </div>
      {#if activeProject == project}
        <div in:slide|local={{duration: 1000}} out:slide|local={{duration: 500}}>
          <img src="API_URL/attachments/{activeProject.image}?w=600" alt={activeProject.name} class="object-cover aspect-square w-full">  
          <div class="text-left col-span-5 flex flex-col">
            <div class="md:py-24">
              <h4 class="tagline mb-6  mt-3 !text-size-9">
                {project.tagline}
              </h4>
              <p class="mb-12 leading-6 text-size-0.9em">
                {project.description}
              </p>
            </div>
            <a href="project?project={index}" class="button mb-8 bordered dark">Explore</a>
          </div>
        </div>  
      {/if}
    </div>
  {/each}


</section>

<style>
  
.project-btn {
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
.project-btn .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  background: gray;
  transition: all 0.4s;
}
.project-btn:hover .underline, .project-btn.active .underline {
  width: 100%;
}
.project-btn:hover, .project-btn.active {
  color: black;
}
</style>