module.exports = {
  // darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '380px',
        xs: '510px',
      },
      fontFamily: {
        primary: '"Inter", sans-serif',
        logo: '"Quicksand", sans serif',
      },
      colors: {
        'purple-pantone': {
          500: '#2C245D',
        },
        'pink-pantone': {
          500: '#E3025E',
        },
        'black-pantone': {
          500: '#191919',
        },
        'discord': {
          500: '#5865F2',
          400: '#87a4ff',
        },
      },
    },
  },
  plugins: [],
}
