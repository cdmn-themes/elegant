<script>
  export let open
</script>

<div class:open class="hamburger-icon" on:click>
  <div class="icon-1" />
  <div class="icon-3" />
</div>

<style>
  .hamburger-icon {
    position: relative;
    height: 32px;
    width: 32px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .icon-1, .icon-3 {
    position: absolute;
    top: 50%;
    width: 32px;
    height: 3px;
    background-color: black;
    transition: all 400ms cubic-bezier(.84,.06,.52,1.8);
  }
  .icon-1 {
    transform: translateY(-6px);
    animation-delay: 100ms;
  }

  .icon-3 {
    transform: translateY(6px);
    animation-delay: 250ms;
  }

  .open .icon-1 {
    transform: rotate(40deg);
  }
  .open .icon-3 {
    transform: rotate(-40deg);
  }
  .open .icon-2 {
    opacity: 0;
  }
</style>