/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors:{
          'seance': {  DEFAULT: '#7E2A9F',  50: '#D784DE',  100: '#CB6CD8',  200: '#AE3BCB',  300: '#7E2A9F',  400: '#602383',  500: '#451B66',  600: '#2D144A',  700: '#190C2E',  800: '#090512',  900: '#000000',  950: '#000000'},
        }
     },
  },
  plugins: [ ],
}

