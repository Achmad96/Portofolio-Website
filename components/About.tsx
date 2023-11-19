import vector from "../public/vector.png";
import Image from "next/image";

export default function About() {
    return (
        <div className="flex max-md:flex-col max-md:mt-10 items-center h-screen gap-36 max-md:gap-20" id="about">
            <div className="flex flex-col gap-3 max-sm:ml-5 max-md:ml-20 ml-60">
                <div className="flex flex-col gap-2">
                    <p className="text-teal-200 font-extrabold text-2xl">Hi, my name is</p>
                    <h1 className="font-extrabold text-6xl max-md:text-4xl">Achmad Raihan</h1>
                    <h1 className="font-extrabold text-3xl max-md:text-2xl">a tech enthusiast</h1>
                </div>
                <p className="text-base max-w-prose">I am from Indonesia. I am currently pursuing my bachelor's degree at Sunan Ampel State Islamic University, Information Systems Department.</p>
            </div>
            <Image src={vector} alt="vectors" className="w-80 h-80 max-md:w-52 max-md:h-52" />
        </div>
    );
}
