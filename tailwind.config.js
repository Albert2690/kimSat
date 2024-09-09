/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        
         
          headingColor: "#44474d",
          textColor: "#6F6F6F",
          secondaryColor:"#8871A9",
          redColor:'#B22222',

       
      }
    },
  },
  plugins: [
    require('tailwind-extended-shadows'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
