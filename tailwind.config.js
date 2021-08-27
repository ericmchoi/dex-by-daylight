/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/{components,features,pages}/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
      },
      colors: { red: colors.rose, gray: colors.trueGray },
      gridTemplateColumns: {
        index: '1fr 24rem',
        'perk-grid': 'repeat(auto-fill, minmax(8rem, 1fr))',
      },
      scale: {
        102: '1.02',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
