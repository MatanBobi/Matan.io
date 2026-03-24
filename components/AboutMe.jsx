import Image from "next/image";
import profilePic from "../public/assets/blog/authors/matan.jpeg";

export default function AboutMe(props) {
  return (
    <div className="flex flex-col md:flex-row mt-20 mb-28">
      <div
        className="flex flex-initial justify-center items-center relative animate-fade-up"
        style={{ animationDelay: "0ms" }}
      >
        <div className="w-min rounded-full md:mx-16">
          <div
            className="rounded-full h-56 w-40 md:h-72 md:w-56 z-10 relative"
            style={{
              backgroundImage: `url(${profilePic.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "40% 50%",
            }}
          />
        </div>
        <span className="absolute top-[calc(50%-2rem)] left-[calc(50%-3rem)] -translate-y-1/2 -translate-x-1/2 w-56 h-56 md:w-72 md:h-72">
          <span className="block w-full h-full bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 dark:bg-fuchsia-400 dark:opacity-20 dark:mix-blend-screen animate-blob-1"></span>
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-56 h-56 md:w-72 md:h-72">
          <span className="block w-full h-full bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-40 dark:bg-sky-400 dark:opacity-20 dark:mix-blend-screen animate-blob-2"></span>
        </span>
        <span className="absolute top-1/2 left-[calc(50%+2rem)] -translate-y-1/2 -translate-x-1/2 w-56 h-56 md:w-72 md:h-72">
          <span className="block w-full h-full bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 dark:bg-indigo-400 dark:opacity-20 dark:mix-blend-screen animate-blob-3"></span>
        </span>
      </div>
      <div
        className="flex flex-col flex-1 justify-center grow animate-fade-up"
        style={{ animationDelay: "150ms" }}
      >
        <h2 className="dark:text-white text-brand-black font-title text-5xl md:text-7xl font-bold md:pr-8 z-10">
          Hello
        </h2>
        <div className="text-xl md:text-2xl tracking-tighter font-sans text-brand-dark-grey dark:text-brand-light-grey leading-tight md:pr-8 z-10">
          <p>Nice to meet you 👋</p>
          <p className="mb-6">
            I&apos;m Matan Borenkraout - a Software Engineer, speaker &amp;
            blogger.
          </p>
          <p>Making better software, one word at a time 🔥</p>
        </div>
        <div className="mt-10 z-10">
          <a
            href="#blog"
            className="group inline-flex items-center gap-2 text-lg text-brand-dark-grey dark:text-brand-light-grey hover:text-brand-black dark:hover:text-white transition-colors"
          >
            Read the blog
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden="true"
            >
              <path
                d="M9 3.5v11m0 0l-4.5-4.5M9 14.5l4.5-4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
