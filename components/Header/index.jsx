import { Logo } from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "../Button/IconButton";
import { useReadingProgress } from "../../hooks/useReadingProgress";
import { useRouter } from "next/dist/client/router";
import { HamburgerMenu } from "../HamburgerMenu";
import { useState } from "react";

export const Header = ({ onClickChangeTheme, isDarkMode }) => {
  const completion = useReadingProgress();
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isInPostPage = router.pathname.includes("/posts/[slug]");
  return (
    <>
      {isInPostPage && (
        <div className="sticky z-50 top-0 w-full">
          <span
            id="progress-bar"
            style={{
              transform: `translateX(${completion - 100}%)`,
            }}
            className={`absolute top-0 w-full transition-transform duration-150 h-1 bg-brand-blue`}
          />
        </div>
      )}
      <header className="flex px-4 justify-between items-center relative z-20 md:justify-start">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex font-bold text-lg">
            <li className="my-11 mx-6">
              <Link href="/posts">Blog</Link>
            </li>
            {/* <li className="my-11 mx-6">About</li>
            <li className="my-11 mx-6">Contact</li> */}
          </ul>
        </nav>
        <div className="md:ml-auto">
          <IconButton
            className="md:my-6 md:mx-6 overflow-hidden relative w-14 h-14"
            onClick={onClickChangeTheme}
          >
            <span
              className="absolute flex translate-x-16 rotate-180 transition-transform duration-300 origin-center dark:translate-x-0 dark:rotate-0 hover:!rotate-45"
              aria-hidden={!isDarkMode}
            >
              <Image
                src="/assets/icons/dark-mode.svg"
                width={24}
                height={24}
                alt="Dark mode toggle"
              />
            </span>
            <span
              className="absolute flex translate-x-0 transition-transform duration-300 rotate-0 origin-center dark:rotate-180 dark:-translate-x-16 hover:!rotate-45"
              aria-hidden={isDarkMode}
            >
              <Image
                src="/assets/icons/light-mode.svg"
                width={24}
                height={24}
                alt="Light mode toggle"
              />
            </span>
          </IconButton>
        </div>
        <div className="block md:hidden z-20">
          <div className="m-6">
            <HamburgerMenu
              onChange={() => setMenuOpen((prevValue) => !prevValue)}
              value={isMenuOpen}
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed z-10 md:hidden inset-0 bg-white dark:bg-brand-background text-white">
            <nav className="flex flex-col">
              <Link href="/" passHref>
                <a className="m-4">
                  <Logo />
                </a>
              </Link>
              <ul className="flex flex-col font-bold text-2xl">
                <li className="my-11 mx-auto border-b">
                  <Link href="/posts">Blog</Link>
                </li>
                {/* <li className="my-11 mx-6">About</li>
            <li className="my-11 mx-6">Contact</li> */}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
