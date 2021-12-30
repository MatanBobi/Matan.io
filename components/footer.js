import Container from "./container";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-brand-background dark:text-white transition-colors flex items-center justify-between md:justify-center">
      <span></span>
      <span>All rights reserved - 2021</span>
      <span className="scale-75">
        <Logo />
      </span>
    </footer>
  );
}
