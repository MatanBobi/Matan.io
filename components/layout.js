import { useState } from "react";
import classNames from "classnames";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { Header } from "../components/Header/";
import { useThemeMode, Theme } from "../hooks/useThemeMode";

export default function Layout({ children }) {
  const [colorTheme, setTheme] = useThemeMode();

  return (
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
  );
}
