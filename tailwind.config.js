/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          cyan: '#06b6d4',
          emerald: '#10b981',
          violet: '#8b5cf6',
          dark: '#080c14',
          surface: '#0f172a',
          card: '#131d31',
          border: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
