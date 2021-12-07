module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      navy: {
        DEFAULT: #0a192f,
        light: #112240,
        lightest: #233554,
      },
      slate: {
        DEFAULT: #8892b0,
        light: #a8b2d1,
        lightest: #ccd6f6,
      },
      white: ,
      green: #64ffda 
    },  
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


// Slate	 #8892b0
// Light Slate	 #a8b2d1
// Lightest Slate	 #ccd6f6
// White	#e6f1ff #e6f1ff
// Green	#64ffda 