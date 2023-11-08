/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'baseballRed': '#E63946',
      }
    },
  },

  plugins: [],
};

module.exports = config;
