import Image from "next/image";
import profilePic from "../public/assets/blog/authors/matan.jpeg";
import { Button } from "./Button";

export default function AboutMe(props) {
  return (
    <div className="flex mt-20 mb-28">
      <div className="flex flex-1 justify-center items-center">
        <div className="w-min border-12 border-brand-blue rounded-full">
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
        <h2 className="font-title text-7xl md:text-7xl font-bold md:pr-8">
          Hello
        </h2>
        <h3 className="text-xl md:text-2xl tracking-tighter font-sans text-brand-light-grey leading-tight md:pr-8">
          <div>Nice to meet you 👋</div>
          <div className="mb-6">
            I'm Matan Borenkraout - a Frontend Engineer, speaker & blogger.
          </div>
          Making better software, one word at a time 🔥
        </h3>
        <div className="my-8">
          <Button>Scroll to blog</Button>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
