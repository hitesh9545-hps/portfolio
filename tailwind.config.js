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
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        charcoal: '#17191C',
        graphite: '#202328',
        card: '#25292E',
        subtleborder: '#343940',
        primary: '#F2F3F4',
        secondary: '#A5ABB3',
        accent: {
          DEFAULT: '#7895B2',
          hover: '#8FAAC4',
          muted: 'rgba(120, 149, 178, 0.15)',
        },
        ai: {
          dark: '#17191C',
          card: '#25292E',
          cardborder: '#343940',
          accent: '#7895B2',
        }
      },
    },
  },
  plugins: [],
}
