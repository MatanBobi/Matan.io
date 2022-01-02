import Container from "./container";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-brand-background dark:text-white transition-colors flex items-center justify-center md:justify-between">
      <span></span>
      <span>All rights reserved - {new Date().getFullYear()}</span>
      <span className="scale-75">
        <Logo />
      </span>
    </footer>
  );
}
