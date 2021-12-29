module.exports = {
  content: [
    "./components/**/*.js",
    "./pages/**/*.js",
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "brand-blue": "#00ADB5",
        "brand-background": "#222831",
        "brand-light-grey": "#E6E6E6",
        "brand-dark-grey": "#393E46",
        "brand-black": "#222831"
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "3xl": "1.875rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      borderWidth: {
        12: "12px",
      },
      borderRadius: {
        "4xl": "200px",
      },
      fontFamily: {
        sans: "Karla, sans-serif",
        logo: "Montserrat, sans-serif",
        title: "Rubik, sans-serif",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        fade: "fade 1s linear infinite",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  darkMode: "class",
};
