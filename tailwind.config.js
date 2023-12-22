/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',

  ],
  theme: {
    extend: {
      maxWidth: {
        '110': '110%',
      },
      width: {
        '120': '30rem',
      }
    },
  },
  plugins: [],
}

