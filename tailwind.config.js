module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        bgBlack: "#101010",
        blackk: "#14171A",
        bgWhite: "#f2f2f2",
        redish: "#fb4f4f",
        elg: "#E1E8ED",
        eelg: "#F5F8FA",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      transitionProperty: {
        padding: "padding",
        margin: "margin",
        menu: "margin width",
      },
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: ".75em",
      sm: ".875em",
      tiny: ".875em",
      base: "1em",
      lg: "1.125em",
      xl: "1.25em",
      "2xl": "1.5em",
      "3xl": "1.875em",
      "4xl": "2.25em",
      "5xl": "3em",
      "6xl": "4em",
      "7xl": "5em",
    },
    boxShadow: {
      xs: "0 0 0 1px rgb(0 0 0 / 5%)",
      md: "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
    },
    variants: {
      extend: {
        // ...
        transform: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
