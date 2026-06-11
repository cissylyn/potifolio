module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF8',
        card: '#F2F2EF',
        warm: '#FFFDF9',
        accent: '#B89B6A',
        glass: 'rgba(0,0,0,0.03)'
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'Helvetica Neue'],
        serif: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
