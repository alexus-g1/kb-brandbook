/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*',
    "./index.html",
    "./dist/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    backgroundImage: {
      'blya' : 'linear-gradient(to-bottom, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
      'gamno': 'linear-gradient(to bottom, #E52729, #ED6869, #FFF)',
      'mockup' : "url('/img/MockUp.png')",
    },
    container: {
      center: true,
    },
    colors : {
      'darkred': '#B81516',
      'red': '#E52729',
      'pink': '#ED6869',
      'black':'#1D1D1B',
      'darkgray':'#666666',
      'gray':'#C4C4C4',
      'lightgray':'#EEEEEE',
      'white': '#FFFFFF',
      'bg' : '#F8F8F8',
      'typo' : '#989898',
      'hover-gray': '#e2e2e2',
    },
    fontFamily: {
      Montserrat: ["Montserrat"],
      Inter: ["Inter"]
    },
    extend: {
      borderWidth: {
        '1px': '1px',
      },
      maxWidth: {
        '623px': '623px',

      },
      fontSize: {
        'monserat': ['78px', '112.4%'],
        'xxs' : ['10px','16px'],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        'goals': '500px minmax(0, 1fr) minmax(0, 1fr)',
        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      rotate: {
        '40': '40deg',
        '36': '36deg',
        '30': '30deg'
      },
      spacing: {
        'container': '200px',
        'goals' : '40px',
        'roadmap': '3000px',
        '75px' : '75px',
        '240px': '240px',
        '500px': '500px',
        '100px': '100px',
        '180px': '180px',
        '550px': '550px',
        '120px': '120px',
        '248px': '248px',
        '14px' : '14px',
        '10px': '10px',
        '19px': '19px',
        '18px': '18px',
        '2px': '2px',
        '3px': '3px',
        '6px': '6px',
        '115px': '155px',
        '758px': '758px',
        '1000px': '1000px',
      },
      container: {
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1520px',
        },
      }
      
    },
  },
  plugins: [],
}

