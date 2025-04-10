/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-850': '#18212f',
        'gray-900': '#0f172a',
        'gray-1000': '#0a101e',
      },
    },
  },
  plugins: [],
}

