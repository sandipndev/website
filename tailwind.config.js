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
        spotify: "#1ed760",
        spotifyGreen: "#1db954",
        spotifyBlack: "#191414",
        twitter: "#1da1f2",
        twitterBlack: "#14171a"
      },
      scale: {
        '102': '1.02'
      },
      fontFamily: {
        body: ['Nunito'],
        sans: ['"Open Sans"']
      },
      animation: {
        hi: 'hi 1s ease-in-out infinite',
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
