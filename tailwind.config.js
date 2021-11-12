module.exports = {
  mode: "jit",
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "ils": "url('./src/assets/my-bg1.gif')"
      },
      fontFamily: {
        "stm": ["Share Tech Mono", "monospace"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
