<script lang="ts">
  let dropdownActive = false
  $: dropdownClass = dropdownActive ? 'dropdown-menu-active' : ''
  export let pageCount: number
  const pages = [
    'navbar-black',
    'navbar-white',
    'navbar-black',
    'navbar-white',
    'navbar-black',
    'navbar-white',
    'navbar-white',
  ]

  function ToggleDropdown() {
    dropdownActive = !dropdownActive
  }
  import { currentUser, pb } from '$lib/pocketbase'
  import { applyAction, enhance } from '$app/forms'
</script>

<header class={pages[pageCount]}>
  <nav>
    <ul>
      <li
        class="dropdown-container {dropdownClass}"
        on:click={ToggleDropdown}
        on:keypress={ToggleDropdown}
      >
        <span>ИГРЫ</span>
        <ul class="dropdown-menu {dropdownClass}">
          <li>
            <a href="https://www.thewitcher.com/monster-slayer"
              >THE WITCHER: MONSTER SLAYER</a
            >
          </li>
          <li>
            <a href="https://thewitcher.com/thronebreaker-witchertales"
              >THRONEBREAKER: THE WITCHER TALES</a
            >
          </li>
          <li>
            <a href="https://playgwent.com/"
              >GWENT<sup>®</sup>: The Witcher Card Game</a
            >
          </li>
          <li>
            <a href="http://thewitcher.com/witcher3">THE WITCHER 3: WILD HUNT</a
            >
          </li>
          <li>
            <a href="http://thewitcher.com/witcher2"
              >THE WITCHER 2: ASSASSINS OF KINGS</a
            >
          </li>
          <li>
            <a href="http://thewitcher.com/witcher1"
              >THE WITCHER: ENHANCED EDITION</a
            >
          </li>
          <li>
            <a href="https://thewitcher.com/adventuregame/"
              >THE WITCHER ADVENTURE GAME</a
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="https://thewitcher.com/">НОВОСТИ</a>
      </li>

      <li>
        {#if $currentUser}
          <span
            ><form
              method="POST"
              action="/logout"
              use:enhance={() => {
                return async ({ result }) => {
                  pb.authStore.clear()
                  await applyAction(result)
                }
              }}
            >
              <button>ВЫЙТИ</button>
            </form>
          </span>
        {:else}
          <a href="/login">
            <button> ВОЙТИ </button>
          </a>
        {/if}
      </li>
    </ul>
  </nav>
</header>

<style lang="scss" scoped>
  header {
    font-weight: 600;
    letter-spacing: 0.22rem;
    position: fixed;
    right: 4rem;
    z-index: 100;
    transition: color 0.15s;
    user-select: none;
  }

  .dropdown-menu {
    text-align: start;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 20px;
    width: 100vw;
    max-width: 430px;
    background: hsla(0, 0%, 100%, 0.7);
    border: 1px solid #91a198;
    border-top-color: rgb(145, 161, 152);
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgb(145, 161, 152);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(145, 161, 152);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(145, 161, 152);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    box-sizing: border-box;
    box-shadow: 0 20px 32px rgba(63, 101, 97, 0.3);
    position: absolute;
    transform: translateY(-10px);
    top: 30px;
    left: -32px;
    display: flex;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0px;
    @supports not (
      (backdrop-filter: blur(32px)) and (-webkit-backdrop-filter: blur(32px))
    ) {
      background: hsla(0, 0%, 100%, 0.8);
    }
    @supports (backdrop-filter: blur(32px)) {
      backdrop-filter: blur(32px);
    }
    li {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .dropdown-container {
    position: relative;

    span {
      margin-right: 2px;
    }
  }

  .dropdown-container::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    right: 0;
    width: 0;
    height: 0;
    transition: border 0.2s;
    border: 4px solid transparent;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 4px;
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    border-bottom: 0;
    border-top: 4px solid #000;
    pointer-events: none;
  }

  .dropdown-menu-active {
    ul {
      color: black !important;
      opacity: 1;
      pointer-events: all;
      top: 30px;
      transform: translateY(0);
    }

    span {
      top: 2px;
      height: 22px;
    }
  }

  .dropdown-menu-active::before {
    border-top: 0;
  }

  .navbar-black {
    color: black;
    .dropdown-menu-active {
      border-bottom: 2px solid #000;
    }
    .dropdown-menu-active::before {
      border-bottom: 4px solid #000;
    }
    span {
      &:hover {
        color: #e60000;
      }
    }
    a {
      &:hover {
        color: #e60000;
      }
    }
  }

  .navbar-white {
    color: white;
    .dropdown-menu-active {
      border-bottom: 2px solid rgb(255, 255, 255);
    }
    .dropdown-menu-active::before {
      border-bottom: 4px solid rgb(255, 255, 255);
    }
    .dropdown-container::before {
      border-top-color: white;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: inherit;
    height: 5.5rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: inherit;
    li {
      margin-left: 20px;
      margin-right: 20px;
      list-style-type: none;
      display: flex;
      transition: inherit;

      span {
        padding-inline-end: 12px;
        cursor: pointer;
        transition: inherit;
      }
      a {
        color: inherit;
        transition: inherit;
        text-decoration: none;

        button {
          font-family: inherit;
          font-weight: 600;
          letter-spacing: 0;
          color: rgb(230, 0, 0);
          font-size: 16px;
          min-width: 108px;
          height: 32px;
          margin-left: 14px;
          margin-right: 14px;
          background-size: contain;
          background-image: url('https://www.thewitcher.com/build/images/middle-33abf525..png');
          background-repeat: repeat-x;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
          cursor: pointer;
          border: none;
          position: relative;
          box-shadow: 0 12px 24px rgba(63, 101, 97, 0.3);
        }

        button::before {
          content: '';
          display: block;
          position: absolute;
          height: 32px;
          width: 15px;
          background-size: contain;
          background-image: url('https://www.thewitcher.com/build/images/left-bc2cd3e3..png');
          background-repeat: no-repeat;
          left: -14px;
        }

        button::after {
          content: '';
          display: block;
          position: absolute;
          height: 32px;
          width: 15px;
          background-size: contain;
          background-image: url('https://www.thewitcher.com/build/images/right-26e93501..png');
          background-repeat: no-repeat;
          right: -14px;
        }
      }
    }
  }
</style>
