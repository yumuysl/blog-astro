/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
// const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs,css}'],
  darkMode: 'class', // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
}
