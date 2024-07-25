/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey' : "#292C27"
      },
      backgroundSize: {
        '50' : '%50'
      }
    },
  },
  plugins: [],
}