import Container from "./container";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{ viewTransitionName: "site-footer" }}
      className="bg-white dark:bg-brand-background dark:text-white transition-colors py-6 px-4 md:px-14"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <span className="text-sm text-brand-dark-grey dark:text-brand-light-grey">
          &copy; {new Date().getFullYear()} Matan Borenkraout. All rights
          reserved.
        </span>
        <span className="scale-75">
          <Logo />
        </span>
      </div>
    </footer>
  );
}
