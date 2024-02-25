import vector from "../public/vector.png";
import Image from "next/image";
import About from "./About";

export default function Hero() {
  return (
    <div
      className="flex h-screen items-center gap-36 max-md:mt-10 max-md:flex-col max-md:gap-20"
      id="about"
    >
      <About />
      <Image
        src={vector}
        alt="vectors"
        className="h-80 w-80 max-md:h-52 max-md:w-52"
        priority
      />
    </div>
  );
}
