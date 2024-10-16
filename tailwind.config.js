/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#212738",
        red: "#F97068",
        green: "#D1D646",
        light: "#F9F9F9",
        blue: "#57C4E5",
      },
      fontFamily: {
        jktlight: ["JakartaSans-Light", "sans-serif"],
        jktextralight: ["JakartaSans-ExtraLight", "sans-serif"],
        jktregular: ["JakartaSans-Regular", "sans-serif"],
        jktmedium: ["JakartaSans-Medium", "sans-serif"],
        jktsemibold: ["JakartaSans-SemiBold", "sans-serif"],
        jktbold: ["JakartaSans-Bold", "sans-serif"],
        jktextrabold: ["JakartaSans-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
