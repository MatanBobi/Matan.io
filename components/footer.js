import Container from "./container";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-brand-background dark:text-white transition-colors flex items-center justify-center md:justify-between">
      <span className="md:relative md:left-2/4 md:-translate-x-2/4">
        All rights reserved - {new Date().getFullYear()}
      </span>
      <span className="scale-75">
        <Logo />
      </span>
    </footer>
  );
}
