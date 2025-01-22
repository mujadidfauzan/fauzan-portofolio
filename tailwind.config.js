/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffc727',
        dark: '#111111',
        dark1: '#212A31',
        dark2: '#2E3944',
        blue1: '#124E66',
        blue2: '#748D92',
        light1: '#D3D9D4',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
};
