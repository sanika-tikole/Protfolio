/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#050a30', // Define a name for the color
        customNavy:'#000c66',
        customBluee:'#0000ff',
        customBabyblue:'#7ec8e3',
      },
      boxShadow:{
        babyblue:"0 0 5px theme('colors.purple.200')"
      },
      height: {
        'custom': '400px', // You can replace '600px' with any value you need
        'half-screen': '50vh', // For example, to create a height that is half of the screen height
      },
      width: {
        'custom': '800px',  // Custom width of 800px
        'half-screen': '50vw', // Width of 50% of the viewport width
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}
