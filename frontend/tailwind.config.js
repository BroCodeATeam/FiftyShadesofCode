/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'sm': '400px',
        'md': '725px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px'
      },
      fontFamily: {
        'sans-serif': ['Russo One'],
        'cursive': ['Tapestry']
      }
    },
  },
  plugins: [],
}
