/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{vue,js,ts,tsx}',
    './src/layouts/**/*.{vue,js,ts,tsx}',
    './src/pages/**/*.{vue,js,ts,tsx}',
  ],
  fontFamily: {
    sans: ['Urbanist', 'sans-serif'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
