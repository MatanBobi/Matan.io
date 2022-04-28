import { useEffect, useState } from "react";

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
    }
  }, [theme]);

  return [theme, setTheme];
}

const Theme = {
  Dark: "dark",
  Light: "light",
};

export { useThemeMode, Theme };
