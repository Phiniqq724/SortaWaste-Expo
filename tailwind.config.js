/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{js,jsx,ts,tsx}",
  ],
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
        jktlightitalic: ["JakartaSans-LightItalic", "sans-serif"],
        jktextralight: ["JakartaSans-ExtraLight", "sans-serif"],
        jktextralightitalic: ["JakartaSans-ExtraLightItalic", "sans-serif"],
        jktregular: ["JakartaSans-Regular", "sans-serif"],
        jktitalic: ["JakartaSans-Italic", "sans-serif"],
        jktmedium: ["JakartaSans-Medium", "sans-serif"],
        jktmediumitalic: ["JakartaSans-MediumItalic", "sans-serif"],
        jktsemibold: ["JakartaSans-SemiBold", "sans-serif"],
        jktsemibolditalic: ["JakartaSans-SemiBoldItalic", "sans-serif"],
        jktbold: ["JakartaSans-Bold", "sans-serif"],
        jktbolditalic: ["JakartaSans-BoldItalic", "sans-serif"],
        jktextrabold: ["JakartaSans-ExtraBold", "sans-serif"],
        jktextrabolditalic: ["JakartaSans-ExtraBoldItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
