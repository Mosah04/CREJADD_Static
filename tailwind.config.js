/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#447E58',
        'secondary': '#FC0505'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

