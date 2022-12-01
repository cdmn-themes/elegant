<script>
  import {slide} from 'svelte/transition';
  import { page } from '$app/stores'
  export let sections
  export let expandable
</script>

<div class="sections">
{#if sections?.length > 1 || expandable}
  <div class="flex gap-1">
    {#each sections || [] as section}
      {@const active = $page.url.hash == '#'+section.hash}
      <a href={active ? '#' : `#${section.hash}`} class="relative grow bg-light uppercase p-2 cursor-pointer">
        {section.title}
        <span class="absolute right-4 top-3 i-akar-icons:chevron-up transition-all" class:rotate-180={active}></span>
      </a>
    {/each}
  </div>
  {#each sections || [] as section}
    {#if $page.url.hash == ('#'+section.hash)}
      <div transition:slide class="content bg-light p-8 text-left">
        <div class="text">
          {@html section.content}
        </div>
        {#if section.download}
          <a href="API_URL/attachments/{section.download}" target="_blank" class="button-filled"><span class="i-bytesize:external -top-1 relative"></span> {section.title}</a>
        {/if}
      </div>
    {/if}
  {/each}
{:else if sections?.length == 1}
  <div class="bg-light p-8 text-left content">
    <div class="text">
      {@html sections[0].content}
    </div>
    {#if sections[0].download}
      <a href="API_URL/attachments/{sections[0].download}" target="_blank" class="button-filled"><span class="i-bytesize:external -top-1 relative"></span> {sections[0].title}</a>
    {/if}
  </div>
{/if}
</div>

<style>
  .sections :global(p) {
    margin-bottom: 1rem;
    font-size: 17px;
  }
  .text :global(a) {
    color: rgb(119, 31, 68);
    border-bottom: 1px solid rgb(119, 31, 68);
  }
  .sections .content {
    max-height: 80vh;
    overflow-y: auto;
  }
</style>