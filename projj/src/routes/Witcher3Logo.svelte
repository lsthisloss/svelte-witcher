<script lang="ts">
  export let pageCount: number
  const pages = [
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
    'https://www.thewitcher.com/build/images/tw3-logo-dark-ru@2x-ea500bc3..png',
  ]
</script>

<div class="witcher3-logo {pageCount ? 'active' : ''}">
  <a class="logo-link_2-iqK" href="/"
    ><img src={pages[pageCount]} class="logo_tSOFW" alt="The Witcher 3" /></a
  >
</div>

<style lang="scss">
  .witcher3-logo {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    z-index: 100;
    max-width: 100vw;
    width: 100%;
    top: 0;
    pointer-events: none;
    margin-top: 0;
    margin-bottom: 0;
    a {
      display: none;
      margin: 25px 0 0 134px;
      pointer-events: auto;
      img {
        max-width: 208px;
        max-height: 13.1313131313vh;
        min-height: 112px;
        filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.3));
      }
    }
  }

  .active {
    a {
      display: block;
    }
  }
</style>
