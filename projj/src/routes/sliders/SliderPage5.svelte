<script lang="ts">
  export let pageCount: number
  $: active = pageCount === 4 ? true : false
</script>

<div class="slide-content">
  <div class="wrapper">
    <div class="content-container {active ? 'active-slide' : 'inactive-slide'}">
      <h2>Новости</h2>
      <div class="latest-news">
        <a
          class="item"
          href="https://www.thewitcher.com/en/news/46745/the-witcher-school-quiz"
          ><img
            alt="The Witcher School Quiz"
            src="https://static.cdprojektred.com/cms.cdprojektred.com/16x9_middle/b0a0ac5c8232106459879215a30914a8c08dfbf5-592x334.jpg"
            class="image"
          />
          <h3 class="title">Экзамен по Ведьмаку</h3></a
        >
        <a
          class="item"
          href="https://www.thewitcher.com/en/news/46681/the-witcher-3-wild-hunt-next-gen-update-trailer-and-redstreams-summary"
          ><img
            alt="The Witcher 3: Wild Hunt — Next-Gen Update Trailer and REDstreams summary"
            src="https://static.cdprojektred.com/cms.cdprojektred.com/16x9_middle/b28e9f25430bc739e27987f33f9072721e81dfff-592x334.jpg"
            class="image"
          />
          <h3 class="title">REDstreams</h3></a
        >
        <div class="section">
          <ul class="list">
            <li>
              <a
                href="https://www.thewitcher.com/en/news/46552/the-witcher-3-wild-hunt-gets-a-free-next-gen-update-on-december-14th"
                >Патч 4.01 — список изменений</a
              >
            </li>
            <li>
              <a href="/en/news/46225/the-witcher-remake-is-in-development"
                >Вышел второй хотфикс для ПК</a
              >
            </li>
            <li>
              <a
                href="/en/news/46165/community-party-at-lucca-comics-games-2022"
                >Участвуйте в конкурсе скриншотов по «Ведьмак 3: Дикая Охота»</a
              >
            </li>
            <li>
              <a
                href="/en/news/45754/thank-you-for-celebrating-20-years-of-cd-projekt-red"
                >Вышел хотфикс для ПК</a
              >
            </li>
          </ul>
          <a class="see-more" href="https://www.thewitcher.com/en/news"
            >Больше</a
          >
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
  .see-more {
    text-decoration: underline;
    font-weight: 400;
    margin-top: auto;
    color: #000;
    font-size: 20px;
    line-height: 1.2;
    transition: color 0.15s;
    background-color: transparent;
  }
  .section {
    margin-bottom: 90px;
    min-height: 400px;
    background: rgba(0, 0, 0, 0.05);
    display: flex;
    padding: 40px 48px;
    flex-direction: column;
    box-sizing: border-box;
    ul {
      padding-inline-start: 0;
      line-height: normal;
      li {
        display: flex;
        list-style: none;
        margin-bottom: 25px;
        a {
          text-decoration: none;
          color: #000;
          font-size: 18px;
          line-height: 1.5;
          transition: color 0.15s;
          background-color: transparent;
          font-weight: lighter;
        }
      }
      li::before {
        content: '';
        background-image: url('https://www.thewitcher.com/build/images/list-icon-987cedb4..svg');
        width: 20px;
        height: 20px;
        margin-inline-end: 16px;
        flex-shrink: 0;
        margin-top: 5px;
      }
    }
  }
  .latest-news {
    justify-content: center;
    flex-direction: column;
    margin: 20px auto;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 40px;
    position: relative;
    line-height: normal;
    .item {
      text-decoration: none;
      color: #000;
      transition: color 0.15s;
      background-color: transparent;
      line-height: normal;
      img {
        filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.2));
        height: 290px;
        display: block;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        object-fit: cover;
        margin-bottom: 20px;
        width: 100%;
        border-style: none;
      }
      h3 {
        letter-spacing: 0.01rem;
        margin: 0;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 700;
        font-style: normal;
      }
    }
  }
  .content-container {
    transition-duration: 550ms;
    transition-delay: 0.25s;
    position: relative;
    max-width: 1640px;
    padding: 0 20px;
    margin-left: auto;
    margin-right: auto;
    h2 {
      font-style: normal;
      font-weight: 700;
      margin: 0;
      font-size: 50px;
      line-height: 56px;
      text-transform: none;
      letter-spacing: normal;
      text-align: center;
    }
  }
  .wrapper {
    position: relative;
    z-index: 2;
    padding-top: calc(10vh + 112px);
    padding-left: 120px;
    padding-right: 120px;
  }
  .slide-content::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 8px;
    right: 8px;
    top: 8px;
    bottom: 8px;
    mix-blend-mode: normal;
    opacity: 0.1;
    border: 1px solid #000;
    z-index: 2;
    pointer-events: none;
  }
  .slide-content {
    height: 100vh;
    position: relative;
  }
</style>
