import { Logo } from "../Logo";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
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
