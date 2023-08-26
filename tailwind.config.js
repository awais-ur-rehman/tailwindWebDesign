/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        reddishBrown: '#302926',
        darkBrown: '#0d0b0a',
        white: 'white',
        black: 'black',
        yellow: '#ab7a57',
        lightBrown: '#f0b286',
        gray: 'gray', 
        lightBlack: 'rgb(0,0,0,0.6)',
        darkGreen : '#3E3D38',
        cream : '#A79986'
      },
      backgroundImage: {
        'foodHome': "url('/images/foodHome.jpg')",
        'food1': "url('/images/food1.jpg')",
        'food2': "url('/images/food2.jpg')",
        'food3': "url('/images/food3.jpg')",
        'food4': "url('/images/food4.jpg')",
        'resturant1': "url('/images/resturant1.jpg')",
        'resturant2': "url('/images/resturant2.jpg')",
        'contactFood': "url('/images/contactFood.jpg')",
      },
    },
  },
  plugins: [],
}

