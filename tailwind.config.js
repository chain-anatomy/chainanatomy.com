const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#001321',
        'main-white': '#FFFFFF',
        'main-black': '#000000',
        'main-gray': '#959595',
        'main-green': '#00E3B4',
        'main-blue': '#1159C6',
        'main-footer-bg': '#314B64',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.8xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.6xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
      })
    }),
  ],
}
