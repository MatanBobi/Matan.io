import classNames from "classnames";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { Header } from "../components/Header/";
import { useThemeMode, Theme, ThemeContext } from "../hooks/useThemeMode";

export default function Layout({ children }) {
  const [colorTheme, setTheme] = useThemeMode();

  return (
    <ThemeContext.Provider value={colorTheme}>
      <div className={classNames({ dark: colorTheme === Theme.Dark })}>
        <Meta />
        <div className="min-h-screen bg-white dark:bg-brand-background dark:text-white transition-colors">
          <Header
            isDarkMode={colorTheme === Theme.Dark}
            onClickChangeTheme={() => {
              setTheme(colorTheme === Theme.Dark ? Theme.Light : Theme.Dark);
            }}
          />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
