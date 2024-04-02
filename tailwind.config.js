/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'maro-red': '#CF392C'
      },
      backgroundImage: {
        'main-logo': 'url("./assets/images/logo.png")'
      }
    }
  },
  plugins: []
};
