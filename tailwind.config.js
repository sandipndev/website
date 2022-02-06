module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#91FF80"
      },
      fontFamily: {
        body: ['Nunito'],
        sans: ['"Open Sans"']
      },
      animation: {
        hi: 'hi 1s ease-in-out infinite'
      },
      keyframes: {
        hi: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(12deg)' },
        }
      }
    },
  },
  plugins: [],
}
