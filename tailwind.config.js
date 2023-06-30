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
      'gamno': 'linear-gradient(to bottom, #E52729, #ED6869, #F8F8F8)',
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
        '555px': '555px',
        '688px': '688px',
        '708px': '708px',
      },
      fontSize: {
        'monserat': ['78px', '112.4%'],
        'xxs' : ['10px','16px'],
      },
      gridTemplateColumns: {
        'goals': '500px minmax(0, 1fr) minmax(0, 1fr)',
      },
      rotate: {
        '40': '40deg',
        '36': '36deg',
        '30': '30deg'
      },
      spacing: {
        '200px': '200px',
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
        '1050px': '1050px',
        '400px':'400px',
        '1600px': '1600px',
        '920px':'920px',
        '296px': '296px',
        '900px': '900px',
        '370px': '370px',
        '800px': '800px',
        '980px':'980px',
        
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

