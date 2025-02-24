/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      screens: {
        'md-lg': { min: '1024px', max: '1200px' }, // Custom screen range
      },
    },
  },
  plugins: [],
};