import Image from "next/image";
import profilePic from "../public/assets/blog/authors/matan.jpeg";
import { Button } from "./Button";

export default function AboutMe(props) {
  return (
    <div className="flex mt-20 mb-28">
      <div className="flex flex-initial justify-center items-center">
        <div className="w-min border-12 border-brand-blue rounded-full md:mx-16">
          <div
            className="rounded-full"
            style={{
              backgroundImage: `url(${profilePic.src})`,
              width: "224px",
              height: "304px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "40% 50%",
            }}
          />
          {/* <Image
            className="rounded-3xl p-6 border border-gray-300"
            src={profilePic}
            height="320"
            width="320"
          /> */}
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center flex-grow">
        <div className="z-0 bg-gradient-to-t h-80 w-80 absolute">
          {/* <div className="w-20 h-32 bg-brand-blue rounded-4xl top-0 right-1 transform rotate-12 absolute"></div>
          <div className="w-20 h-32 bg-brand-blue rounded-4xl top-4 right-32 transform rotate-12 absolute"></div>
          <div className="w-20 h-32 bg-brand-blue rounded-4xl top-8 right-64 transform rotate-12 absolute"></div>
          <div className="w-20 h-32 bg-brand-blue rounded-4xl top-56 right-1 transform rotate-12 absolute"></div>
          <div className="w-20 h-32 bg-brand-blue rounded-4xl top-60 right-32 transform rotate-12 absolute"></div>
          <div className="w-20 h-32 bg-brand-blue rounded-4xl top-64 right-64 transform rotate-12 absolute"></div> */}
        </div>
        <h2 className="font-title text-7xl md:text-7xl font-bold md:pr-8 z-10">
          Hello
        </h2>
        <h3 className="text-xl md:text-2xl tracking-tighter font-sans text-brand-light-grey leading-tight md:pr-8 z-10">
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
