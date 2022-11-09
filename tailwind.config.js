/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'primary': '#00B19D',
        'amarillo': '#FFAA00',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
