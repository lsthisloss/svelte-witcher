<script lang="ts">
  let res: any
  import { currentUser, pb } from '$lib/pocketbase'
  // @ts-ignore
  import Header from './Header.svelte'
  import Witcher3Logo from './Witcher3Logo.svelte'
  import { onMount } from 'svelte'

  //Slider Pages
  import SliderPage1 from './sliders/SliderPage1.svelte'
  import SliderPage2 from './sliders/SliderPage2.svelte'
  import SliderPage3 from './sliders/SliderPage3.svelte'
  import SliderPage4 from './sliders/SliderPage4.svelte'
  import SliderPage5 from './sliders/SliderPage5.svelte'

  //Slider logic
  let pageCount = 0
  let isScroolable = true
  let viewport_height = 0
  import '$lib/app.postcss'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import GlobalCompass from './sliders/GlobalCompass.svelte'

  const scrollableYPosition = tweened(0, {
    duration: 400,
    easing: cubicOut,
  })

  onMount(() => {
    viewport_height = window.innerHeight
    viewport_height = window.innerHeight
  })

  function scrollHandler(event: any) {
    if (isScroolable) {
      if (event.deltaY > 0) pageCount = pageCount === 6 ? 6 : ++pageCount
      else pageCount = pageCount === 0 ? 0 : --pageCount
      if (pageCount == 5) {
        pageCount = 0
      }
      scrollableYPosition.set(viewport_height * pageCount)

      isScroolable = false
      setTimeout(() => {
        isScroolable = true
      }, 500)
    }
  }

  function resizeListener() {
    viewport_height = window.innerHeight
    scrollableYPosition.set(viewport_height * pageCount)
  }
</script>

<svelte:window on:resize={resizeListener} />

<Header {pageCount} />
<Witcher3Logo {pageCount} />
<GlobalCompass page={pageCount} />

<main
  class="container"
  on:wheel={scrollHandler}
  style="--scrollableYPosition: {$scrollableYPosition};min-width: -webkit-fill-available;"
>
  <div class="slider-page-container">
    <SliderPage1 />
  </div>
  <div class="slider-page-container">
    <SliderPage2 {pageCount} />
  </div>
  <div class="slider-page-container ">
    <SliderPage3 {pageCount} />
  </div>
  <div class="slider-page-container">
    <SliderPage4 {pageCount} />
  </div>
  <div class="slider-page-container">
    <SliderPage5 {pageCount} />
  </div>
</main>

<style scoped lang="scss">
  :global(body) {
    margin: 0;
  }

  @media only screen and (min-width: 1000px) {
    :global(body) {
      overflow: hidden;
      background-image: url('https://www.thewitcher.com/build/images/background-19d968e4..webp');
      background-size: 100vw 100vh;
      background-position: bottom;
    }
  }
  .container {
    width: 100vw;
    position: relative;
    transform: translate3d(0px, calc(var(--scrollableYPosition) * -1px), 0px);
    z-index: 1;
    display: flex;
    flex-direction: column;
    transition-property: transform;
    box-sizing: content-box;
  }

  .slider-page-container {
    margin: 0;
    height: 100vh;
    width: 100%;

    span {
      position: absolute;
      z-index: 10;
    }
  }
</style>
