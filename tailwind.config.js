module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,css,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // colors: {
      //   primary: "var(--color-primary)",
      //   secondary: "var(--color-secondary)",
      //   yellow: "var(--color-yellow)",
      //   red: "var(--color-red)",
      //   blue: {'DEFAULT': "#7680E6"},
      //   green: "var(--color-green)",
      // },
    },
  },
  variants: {},
  plugins: [],
};