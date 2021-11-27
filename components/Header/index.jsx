import { Logo } from "../Logo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex">
      <Logo />
      <nav>
        <ul className="flex font-bold text-lg">
          <li className="my-11 mx-6">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="my-11 mx-6">About</li>
          <li className="my-11 mx-6">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
