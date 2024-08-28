/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'sm-2': '740px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max-s': {'max': '420px'}, 
      'max-sm': {'max': '639px'}, 
      'max-sm-2': {'max': '740px'}, 
      'max-md': {'max': '767px'}, 
      'max-lg': {'max': '1023px'},
      'max-lg-2': {'max': '1094px'},
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula","winter"],
  }
};