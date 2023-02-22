/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        keyframes:{
          wavy:{
            "0%,100%" : {
              transform: "rotate(0)"
            },
            "50%" : {
              transform: "rotate(45deg)"
            },

  
  
          },
          profile:{
            "0%" : {
              transform: "scale(0)",
              opacity:"0"
            },
            "75%" : {
              transform: "scale(1.3)",
              opacity: "0.7"
            },
            "100%" : {
              transform: "scale(1)",
              opacity:"1"
            },
  



          },
          fadeup:{
            "0%" : {
              transform: "translateY(50px)",
              opacity:"0"
            },
            "75%" : {
              transform: "translateY(0px)",
              opacity:"0.4"

            },
            "100%" : {
              transform: "translateY(0px)",
              opacity:"1"

            }


  
  
          },

        },
        
  
  
    },
  },
  plugins: [],
}
