const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      ptSerif: "'PT serif', serif",
      ptSans: "'Pt sans', sans"
    },
    lineHeight:{
      '80': "5.5rem",
      '9': "2.2rem",
      "10": "2.3rem",
      "11": "2.5rem",
      '12': "3rem",
      "13": "3.5rem",
      "14": "4rem"
    },
    height:{
      "28": "28rem"
    },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#13DEAD',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     
     }),
     
     backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#13DEAD',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'footer-color': '#EFEFEF',
     }),

     animation: {
       blob: "blob 10s infinite"
     },

    keyframes:{
      blob:{
        "0%": {
          transform: "scale(1)",
          
        },
        "33%": {
          transform: "scale(1.2)",
        },
        "66%": {
          transform: "scale(0.8)",
        },
        "100%": {
          transform: "scale(1)",

        }
      }
    }

    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],

}
