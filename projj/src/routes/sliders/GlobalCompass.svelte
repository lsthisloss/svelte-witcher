<script lang="ts">
  export let page: number
</script>

<div
  class="compass slide-{page}-compass"
  style="transform: rotate(calc({page} * 15deg));
		transition-duration: 0.4s;"
>
  <img
    src="https://www.thewitcher.com/build/images/Compass-0c9152d4..svg"
    alt="Compass"
  />
</div>

<style lang="scss">
  .compass {
    pointer-events: none;
    position: fixed;
    top: -670px;
    left: -670px;
    width: 1340px;
    height: 1340px;
    z-index: 1;
    mix-blend-mode: multiply;
    opacity: 0.7;
    img {
      pointer-events: none;
      border-style: none;
    }
  }
</style>
