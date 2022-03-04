import { useState } from "react";
import classNames from "classnames";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { Header } from "../components/Header/";

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={classNames({ dark: isDarkMode })}>
      <Meta />
      <div className="min-h-screen bg-white dark:bg-brand-background dark:text-white transition-colors">
        <Header
          isDarkMode={isDarkMode}
          onClickChangeTheme={() => {
            setIsDarkMode((prevState) => !prevState);
          }}
        />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
