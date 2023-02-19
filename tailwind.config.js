const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: colors.transparent,
      zinc: colors.zinc,
      black: '#000000',
      white: '#ffffff',
      role: {
        all: colors.zinc[50],
        assassin: '#6B00A5',
        fighter: '#AF322B',
        mage: '#64AAF7',
        marksman: '#E7D45E',
        support: '#B5D6DF',
        tank: '#B2D251',
      },
    },
  },
  plugins: [],
};
