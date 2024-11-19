/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        
         
          headingColor: "#44474d",
          textColor: "#6F6F6F",
          secondaryColor:"#7A5299",
          thirdColor:'#8871A9',
          redColor:'#B22222',
          footerColor:'#F8F8F8'

       
      }
      ,
      screens: {
        'md-lg': { 'min': '1000px', 'max': '1400px' }, // Custom breakpoint between 1000px and 1400px
      },
    },
  },
  plugins: [
    require('tailwind-extended-shadows'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
