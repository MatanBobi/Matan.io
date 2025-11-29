import Image from "next/image";
import profilePic from "../public/assets/blog/authors/matan.jpeg";
import { Button } from "./Button";

export default function AboutMe(props) {
  return (
    <div className="flex flex-col md:flex-row mt-20 mb-28">
      <div className="flex flex-initial justify-center items-center relative">
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
        <span className="absolute top-[calc(50%-2rem)] left-[calc(50%-3rem)] -translate-y-1/2 -translate-x-1/2 w-56 h-56 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 dark:bg-fuchsia-400 dark:opacity-20 dark:mix-blend-screen"></span>
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-56 h-56 md:w-72 md:h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-40 dark:bg-sky-400 dark:opacity-20 dark:mix-blend-screen"></span>
        <span className="absolute top-1/2 left-[calc(50%+2rem)] -translate-y-1/2 -translate-x-1/2 w-56 h-56 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 dark:bg-indigo-400 dark:opacity-20 dark:mix-blend-screen"></span>
      </div>
      <div className="flex flex-col flex-1 justify-center grow">
        <h2 className="dark:text-white text-brand-black font-title text-7xl md:text-7xl font-bold md:pr-8 z-10">
          Hello
        </h2>
        <h3 className="text-xl md:text-2xl tracking-tighter font-sans text-brand-dark-grey dark:text-brand-light-grey leading-tight md:pr-8 z-10">
          <div>Nice to meet you 👋</div>
          <div className="mb-6 z-10">
            I&apos;m Matan Borenkraout - a Sotfware Engineer, speaker & blogger.
          </div>
          Making better software, one word at a time 🔥
        </h3>
        <div className="my-8 z-10">
          <a href="#blog">
            <Button>Scroll to blog</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
