import { Logo } from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "../Button/IconButton";

export const Header = ({ onClickChangeTheme }) => {
  return (
    <header className="flex justify-between md:justify-start">
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>
      <nav className="hidden md:flex">
        <ul className="flex font-bold text-lg">
          <li className="my-11 mx-6">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="my-11 mx-6">About</li>
          <li className="my-11 mx-6">Contact</li>
        </ul>
      </nav>
      <div className="ml-auto">
        <IconButton className="my-6 mx-6" onClick={onClickChangeTheme}>
          <Image
            src="/assets/icons/dark-mode.svg"
            width={24}
            height={24}
            alt="Dark mode toggle"
          />
        </IconButton>
      </div>
      <div className="block md:hidden">
        <div className="m-9">
          <Image
            src="/assets/icons/menu.svg"
            height={32}
            width={32}
            alt="Menu"
          />
        </div>
      </div>
    </header>
  );
};
