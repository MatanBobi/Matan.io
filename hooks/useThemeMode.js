import { useEffect, useState, createContext } from "react";

const ThemeContext = createContext();

function useThemeMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.theme
        ? localStorage.theme
        : Theme.Dark
      : Theme.Dark
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.querySelector("html").setAttribute("data-theme", theme);
    }
  }, [theme]);

  return [theme, setTheme];
}

const Theme = {
  Dark: "dark",
  Light: "light",
};

export { useThemeMode, Theme, ThemeContext };
