/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f2f5f7",
        primaryText: "#333333",
        secondaryBg: "#111111",
      },
      fontFamily: {
        lora: ["Lora", "serif"], // Add Lora to the theme
      },
    },
  },
  plugins: [],
};
