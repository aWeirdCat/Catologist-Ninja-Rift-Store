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
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        surface: {
          base: '#09090c',
          card: '#121217',
          cardHover: '#17171e',
          border: '#23232b',
          borderHover: '#33333e',
          input: '#0d0d12'
        }
      }
    },
  },
  plugins: [],
}

