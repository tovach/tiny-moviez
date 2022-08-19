/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    colors: {
      'bg1': '#16181e',
      'bg2': '#21242d',
      'primary': '#f9f9f9',
      'secondary': '#00b9ae',
      'border': 'rgba(249, 249, 249, 0.1)',
      'headings': 'rgba(249, 249, 249, 0.67)'
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
