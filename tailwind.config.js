/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

