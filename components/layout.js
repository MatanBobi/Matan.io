import { useState } from "react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { Header } from "../components/Header/";

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="dark">
      <Meta />
      <div className="min-h-screen bg-white dark:bg-brand-background dark:text-white transition-colors">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
