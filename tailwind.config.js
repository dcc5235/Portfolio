module.exports = {
  purge: {
    mode: 'layers',
    // looks at all html files in directory
    content: ['./**/*.html', './src/**/*.html', './src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    }
  },
  variants: {
    transform: ['focus', 'hover'],
    extend: {
      transform: ['focus', 'hover'],
    },
  },
  plugins: [],
}
