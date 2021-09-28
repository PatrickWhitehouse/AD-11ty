module.exports = {
  purge: ['./src/**/*.njk'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
        gray: {
          DEFAULT: '#3E4653',
          light: '#7F8C8C'
        },
        white: {
          DEFAULT: '#FDFDFD'
        },
        green: {
          DEFAULT: '#34D0B2',
          light: '#60FCA2'
        }
    },
      fontFamily: {
          sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont']
      }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
      themes: false
  }
}

