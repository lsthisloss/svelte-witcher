<script lang="ts">
  import Compass from '../Compass.svelte'
  export let pageCount: number
  $: active = pageCount === 2 ? true : false
</script>

<div class="slide-content">
  <div class="content-container">
    <div class="compass-container">
      <Compass page={3} />
    </div>
    <div class="inner-wrapper">
      <div class="context {active ? 'active-slide' : 'inactive-slide'}">
        <h2 class="title">Открытый мир</h2>
        <p class="text">
          Свой путь в открытом мире «Дикой Охоты» вы выбираете сами. Вы охотник
          на чудовищ, человек дороги, а поэтому только вам решать, куда идти
          дальше. Помочь деревне, которую изводит чудище, или выполнить грязную
          работенку ради награды от местного князька? В «Ведьмаке» вы найдете
          себе занятие по душе.
        </p>
        <p />
      </div>
      <div class="tiles {active ? 'active-slide' : 'inactive-slide'}">
        <div class="tile">
          <img
            src="https://cdn-s-thewitcher.cdprojektred.com/witcher3/tiles/openworld-exploration-1.jpg"
            alt="Exploration"
          />
          <h3>Исследование</h3>
        </div>
        <div class="tile">
          <img
            src="https://cdn-s-thewitcher.cdprojektred.com/witcher3/tiles/openworld-places-1.jpg"
            alt="Regions"
          />
          <h3>Регионы</h3>
        </div>
        <div class="tile">
          <img
            src="https://cdn-s-thewitcher.cdprojektred.com/witcher3/tiles/openworld-inhabitants-1.jpg"
            alt="Inhabitants"
          />
          <h3>Местные жители</h3>
        </div>
        <div class="tile">
          <img
            src="https://cdn-s-thewitcher.cdprojektred.com/witcher3/tiles/openworld-activities-1.jpg"
            alt="Activities"
          />
          <h3>Занятия</h3>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .inactive-slide {
    opacity: 0 !important;
    transform: translate3d(-200px, 0px, 0px) !important;
  }
  .compass-container {
    z-index: 2;
  }
  .content-container::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 8px;
    right: 8px;
    top: 8px;
    bottom: 8px;
    mix-blend-mode: color-burn;
    opacity: 0.15;
    border: 1px solid #113950;
    z-index: 2;
    pointer-events: none;
  }
  .content-container {
    height: 100vw;
    background-image: url('https://www.thewitcher.com/build/images/bg-openworld-7ab028a0..jpg');
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    .inner-wrapper {
      position: absolute;
      max-width: 800px;
      width: 41.6666666667vw;
      left: 140px;
      top: calc(50% + 56px);
      transform: translateY(-50%);
      .context {
        transition-duration: 550ms;
        transition-delay: 0.15s;
        h2 {
          opacity: inherit;
          font-weight: 700;
          font-size: 48px;
          line-height: 56px;
          margin: 0 0 17px;
          color: rgb(0, 0, 0);
        }
        p {
          opacity: inherit;
          transition-timing-function: inherit;
          font-weight: 200;
          font-size: 16px;
          line-height: 28px;
          margin: 0;
          color: rgb(0, 0, 0);
        }
      }
      .tiles {
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
        gap: 40px;
        margin-top: 32px;
        transition-duration: 550ms;
        transition-delay: 0.25s;
        transform: translate3d(0px, 0px, 0px);
        .tile {
          position: relative;
          width: 100%;
          filter: drop-shadow(0 20px 32px rgba(0, 0, 0, 0.5));
          display: flex;
          align-items: flex-end;
          text-align: center;
          justify-content: center;
          cursor: pointer;
          aspect-ratio: 380/212;
          img {
            opacity: inherit;
            position: absolute;
            object-fit: cover;
            border-style: none;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            cursor: pointer;
          }
          h3 {
            opacity: inherit;
            position: relative;
            font-weight: 700;
            font-size: 20px;
            line-height: 34px;
            color: #fff;
            text-shadow: 0 2px 24px rgba(0, 0, 0, 0.6);
            margin: 0;
            padding: 26px;
            z-index: 5;
          }
        }
        .tile::after {
          opacity: inherit;
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 4px;
          right: 4px;
          top: 4px;
          bottom: 4px;
          border: 1px solid hsla(0, 0%, 100%, 0.2);
          z-index: 2;
          pointer-events: none;
        }
        .tile::before {
          opacity: inherit;
          content: '';
          position: absolute;
          height: 95px;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent, #000 69.27%);
          opacity: 0.6;
          z-index: 1;
        }
      }
    }
  }
</style>
