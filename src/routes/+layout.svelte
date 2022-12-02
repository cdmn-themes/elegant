<script>
  import '$lib/global.css'
  import 'virtual:uno.css'
  
  export let data
  
</script>

<svelte:head>
  <title>{data.content.title}</title>
  <link rel="icon" href="API_URL/attachments/{data.content.favicon}" />
  <meta name="twitter:card" content="summary_large_image" />

  {#if data.content.meta_description}
    <meta name="description" content="{data.content.meta_description}" />
    <meta name="og:description" content="{data.content.meta_description}" />
    <meta name="twitter:description" content="{data.content.meta_description}" />
  {/if}

  {#if data.content.meta_image}
    <meta name="og:image" content="API_URL/attachments/{data.content.meta_image}?w=1200" />
    <meta name="twitter:image" content="API_URL/attachments/{data.content.meta_image}?w=1200" />
  {/if}
  
</svelte:head>
  
<slot />

