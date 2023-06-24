<script lang="ts">
  import Compass from '../Compass.svelte'
</script>

<div class="slide-content">
  <div class="content-container">
    <Compass page={1} />
    <div class="inner-wrapper">
      <img
        src="https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png"
        alt="The Witcher 3 Logo"
      />
      <h1 class="title">
        Одна из самых прославленных ролевых игр своего времени<br />возвращается
        в версии для нового поколения<br />
      </h1>
      <div class="buttons">
        <a
          href="https://buy.thewitcher.com"
          rel="noopener noreferrer"
          target="_blank"><button class="button-buy">УЖЕ В ПРОДАЖЕ</button></a
        >
        <a
          href="https://www.youtube.com/watch?v=nBT2SP21f3Q"
          rel="noopener noreferrer"
          target="_blank"><button class="button-trailer">ТРЕЙЛЕР</button></a
        >
      </div>
    </div>
    <div class="scroll-down">вниз</div>
  </div>
</div>

<style lang="scss">
  .content-container {
    height: 100vw;
    background-image: url('https://www.thewitcher.com/build/images/bg-nextgen-d60ae44e..jpg');
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }

  .content-container::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 8px;
    right: 8px;
    top: 8px;
    bottom: 8px;
    mix-blend-mode: normal;
    opacity: 0.2;
    border: 1px solid #fff;
    z-index: 2;
    pointer-events: none;
  }

  .inner-wrapper {
    position: absolute;
    z-index: 2;
    right: 11.9791666667vw;
    top: calc(38% + 96px);
    transform: translateY(-50%);
    min-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;

    img {
      display: block;
      max-height: 280px;
      min-height: 160px;
      height: 30vh;
      border-style: none;
    }

    h1 {
      margin: 0;
      font-size: 30px;
      line-height: 53px;
      text-transform: none;
      text-align: center;
      letter-spacing: 0.00001rem;
      word-spacing: 0.00001rem;
      color: #fff;
      filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.85))
        drop-shadow(0 6px 28px rgba(0, 0, 0, 0.7));
    }
    h1 {
      font-style: normal;
      font-weight: 700;
    }

    .subtitle {
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
      font-size: 38px;
      line-height: 53px;
      text-align: center;
      letter-spacing: normal;
      color: #fff;
      filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.85))
        drop-shadow(0 6px 28px rgba(0, 0, 0, 0.7));
      sup {
        text-transform: none;
      }
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 32px 16px;
      justify-content: center;

      a {
        text-decoration: none;
        background-color: transparent;

        .button-buy {
          font-family: inherit;
          color: #e60000;
          background-image: url('https://www.thewitcher.com/build/images/middle-33abf525..png');
          position: relative;
          min-width: 174px;
          height: 52px;
          box-shadow: 0 20px 32px rgba(63, 101, 97, 0.5);
          border: none;
          padding-top: 0px;
          padding-right: 10px;
          padding-bottom: 0px;
          padding-left: 10px;
          margin-top: 0px;
          margin-right: 23px;
          margin-bottom: 0px;
          margin-left: 23px;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 22px;
          line-height: 1.5;
          background-repeat: repeat-x;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: pointer;
          -webkit-appearance: button;
          overflow: visible;
        }
        .button-buy::before {
          background-image: url('https://www.thewitcher.com/build/images/left-bc2cd3e3..png');
          background-repeat: no-repeat;
          content: '';
          display: block;
          position: absolute;
          height: 52px;
          width: 23px;
          top: 0;
          left: -23px;
        }

        .button-buy::after {
          background-image: url('https://www.thewitcher.com/build/images/right-26e93501..png');
          background-repeat: no-repeat;
          content: '';
          display: block;
          position: absolute;
          height: 52px;
          width: 23px;
          top: 0;
          right: -23px;
        }

        .button-trailer {
          font-family: inherit;
          color: #f0fff0;
          background-image: url('https://www.thewitcher.com/build/images/middle-c820a1f0..png');
          position: relative;
          min-width: 174px;
          height: 52px;
          box-shadow: 0 20px 32px rgba(63, 101, 97, 0.5);
          border: none;
          padding-top: 0px;
          padding-right: 10px;
          padding-bottom: 0px;
          padding-left: 10px;
          margin-top: 0px;
          margin-right: 23px;
          margin-bottom: 0px;
          margin-left: 23px;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 22px;
          line-height: 1.5;
          background-repeat: repeat-x;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: pointer;
          -webkit-appearance: button;
          overflow: visible;
        }

        .button-trailer::before {
          background-image: url('https://www.thewitcher.com/build/images/left-21ea7f5d..png');
          background-repeat: no-repeat;
          content: '';
          display: block;
          position: absolute;
          height: 52px;
          width: 23px;
          top: 0;
          left: -23px;
        }

        .button-trailer::after {
          background-image: url('https://www.thewitcher.com/build/images/right-4c2ebbb4..png');
          background-repeat: no-repeat;
          content: '';
          display: block;
          position: absolute;
          height: 52px;
          width: 23px;
          top: 0;
          right: -23px;
        }
      }
    }
  }

  .scroll-down {
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    opacity: 0.7;
    pointer-events: none;
  }

  .scroll-down::after {
    content: '';
    width: 1px;
    height: 44px;
    display: block;
    margin-left: 50%;
    margin-top: 3px;
    background: #fff;
  }
</style>
