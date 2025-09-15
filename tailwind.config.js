/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2e8555",
          dark: "#29784c",
          darker: "#277148",
          darkest: "#205d3b",
          light: "#33925d",
          lighter: "#359962",
          lightest: "#3cad6e",
        },
        "primary-dark-mode": {
          DEFAULT: "#25c2a0",
          dark: "#21af90",
          darker: "#1fa588",
          darkest: "#1a8870",
          light: "#29d5b0",
          lighter: "#32d8b4",
          lightest: "#4fddbf",
        },
        "docusaurus-bg": "#ffffff",
        "docusaurus-bg-dark": "#1b1b1d",
        "docusaurus-navbar": "#ffffff",
        "docusaurus-navbar-dark": "#24292e",
        "docusaurus-footer": "#303846",
        "docusaurus-footer-dark": "#1c1e21",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "sans-serif",
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
