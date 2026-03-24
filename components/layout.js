import classNames from "classnames";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { Header } from "../components/Header/";
import { useThemeMode, Theme, ThemeContext } from "../hooks/useThemeMode";
import { Databuddy } from "@databuddy/sdk/react";

export default function Layout({ children }) {
  const [colorTheme, setTheme] = useThemeMode();

  return (
    <ThemeContext.Provider value={colorTheme}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-blue focus:text-white"
      >
        Skip to content
      </a>
      <div className={classNames({ dark: colorTheme === Theme.Dark })}>
        <Meta />
        <div className="min-h-screen bg-white dark:bg-brand-background dark:text-white transition-colors">
          <Header
            isDarkMode={colorTheme === Theme.Dark}
            onClickChangeTheme={() => {
              setTheme(colorTheme === Theme.Dark ? Theme.Light : Theme.Dark);
            }}
          />
          <main id="main-content">{children}</main>
        </div>
        <Footer />
      </div>

      <Databuddy clientId="547b908f-52c7-4699-b1ec-dba9c567facf" />
    </ThemeContext.Provider>
  );
}
