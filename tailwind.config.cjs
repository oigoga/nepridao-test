/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1840px'
    },
    colors: {
      'black': '#000000',
      'teal': '#008080',
      'bg-color': '#f7f7f8',
      'grey': '#c1c0b9',
      'gray': '#474744',
      'yellow': '#FFFF00',
      'mint': ' #acc6aa',
      'green': '#004445',
      'dark-mint': '#4c9173',
      'white': '#fff'
    },
    fontFamily: {
     Montserrat : ['Montserrat', 'sans-serif'],
    },
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh * 0.8)",
      }),
    },
  },
  plugins: [],
}
