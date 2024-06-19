/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#426B29',
        secondary: '#ABDB8F',
        accent: '#F4EAA9',
        'almost-white': '#F4F8F1',
        'almost-black': '#050F00',
      }
    },
  },
  plugins: [],
}

