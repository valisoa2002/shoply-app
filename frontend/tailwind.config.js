const { DefaultTheme } = require("react-native-paper");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "2DD4BF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", DefaultTheme.fontFamily.sans],
      },
    },
  },
  presets: [require("nativewind/preset")],
  plugins: [],
};
