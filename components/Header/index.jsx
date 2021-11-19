import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="flex">
      <Logo />
      <nav>
        <ul className="flex font-bold text-lg">
          <li className="my-11 mx-6">Blog</li>
          <li className="my-11 mx-6">About</li>
          <li className="my-11 mx-6">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
