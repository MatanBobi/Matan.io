import Image from "next/image";
import profilePic from "../public/assets/blog/authors/matan.jpeg";
import { Button } from "./Button";

export default function AboutMe(props) {
  return (
    <div className="flex flex-col md:flex-row mt-20 mb-28">
      <div className="flex flex-initial justify-center items-center">
        <div className="w-min border-12 border-brand-blue rounded-full md:mx-16">
          <div
            className="rounded-full h-56 w-40 md:h-72 md:w-56"
            style={{
              backgroundImage: `url(${profilePic.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "40% 50%",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center flex-grow">
        <h2 className="font-title text-7xl md:text-7xl font-bold md:pr-8 z-10">
          Hello
        </h2>
        <h3 className="text-xl md:text-2xl tracking-tighter font-sans text-brand-dark-grey dark:text-brand-light-grey leading-tight md:pr-8 z-10">
          <div>Nice to meet you 👋</div>
          <div className="mb-6 z-10">
            I'm Matan Borenkraout - a Frontend Engineer, speaker & blogger.
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
