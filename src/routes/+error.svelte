<script>
  import { fly } from 'svelte/transition'
  import { page } from '$app/stores';
</script>

<div in:fly={{delay: 500, y:30, duration: 900}} class="color-black flex flex-col relative w-full h-full items-center justify-center text-center">
  <h1>{$page.status}: {$page.error.message}</h1>
  <p>
    Hoppla, diese Seite ist noch nicht ganz fertiggestellt.<br>Bitte versuchen Sie es später noch einmal.
  </p>
</div>
