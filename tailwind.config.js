module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#91FF80",
        spotify: "#1ed760"
      },
      fontFamily: {
        body: ['Nunito'],
        sans: ['"Open Sans"']
      },
      animation: {
        hi: 'hi 1s ease-in-out infinite',
        breathe: 'breathe 5s ease-out infinite normal'
      },
      keyframes: {
        hi: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        breathe: {
          '0%, 60%, 100%': { transform: 'scale(0.9' },
          '25%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
