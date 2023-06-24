const daisyui = require('daisyui')
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}',     "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],

  theme: {
    extend: {},
  },

  plugins: ['flowbite/plugin', forms, typography, daisyui],  darkMode: 'class',

}


module.exports = config;