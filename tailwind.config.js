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
        "brand-black": "#222831",
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
        "blob-1": "blob1 8s ease-in-out infinite",
        "blob-2": "blob2 10s ease-in-out infinite",
        "blob-3": "blob3 12s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s ease-out both",
      },
      scale: {
        35: "0.35",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        blob1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 15px) scale(0.9)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-25px, 25px) scale(0.9)" },
          "66%": { transform: "translate(20px, -15px) scale(1.1)" },
        },
        blob3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(15px, 30px) scale(1.1)" },
          "66%": { transform: "translate(-30px, -10px) scale(0.9)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
          },
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
