import Image from "next/image";
import profilePic from "../public/assets/blog/authors/matan.jpeg";

export default function AboutMe(props) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 justify-center items-center">
        <div className="w-min p-8 border border-gray-300 rounded-full">
          <div
            className="rounded-full"
            style={{
              backgroundImage: `url(${profilePic.src})`,
              width: "250px",
              height: "350px",
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
      <div className="flex flex-col flex-1 justify-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
          Matan Borenkraout
        </h2>
        <h3 className="text-xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
          Frontend Developer
        </h3>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
