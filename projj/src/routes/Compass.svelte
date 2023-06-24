<script lang="ts">
  export let page: number
</script>

<div class="compass slide-{page}-compass" style="--page: {page}">
  <img
    src="https://www.thewitcher.com/build/images/Compass-0c9152d4..svg"
    alt="Compass"
  />
</div>

<style lang="css">
  .compass {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 670px;
    height: 670px;
    overflow: hidden;
    transform: rotate(180deg);
  }
  .img {
    position: relative;
    width: 200%;
    height: 200%;
    rotate: (180deg);
  }
  .slide-1-compass {
    mix-blend-mode: overlay;
    opacity: 0.3;
  }
  .slide-2-compass {
    mix-blend-mode: color-burn;
    opacity: 1;
  }

  .slide-3-compass {
    mix-blend-mode: color-burn;
    opacity: 1;
  }
  .slide-4-compass {
    mix-blend-mode: color-burn;
    opacity: 1;
  }
</style>
