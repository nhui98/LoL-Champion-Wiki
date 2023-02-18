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
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      ...colors.zinc,
      black: '#000000',
      white: '#ffffff',
      role: {
        mage: '#64AAF7',
        fighter: '#AF322B',
        assassin: '#6B00A5',
        marksmen: '#E7D45E',
        tank: '#B2D251',
        support: '#E7FFFF',
      },
    },
  },
  plugins: [],
};
