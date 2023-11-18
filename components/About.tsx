import vector from "@/public/vector.png";
import Image from "next/image";

export default function About() {
    return (
        <div className="flex items-center h-screen gap-36" id="about">
            <div className="flex flex-col gap-3 max-sm:ml-5 max-md:ml-20 ml-60">
                <div className="flex flex-col gap-2">
                    <p className="text-teal-200 font-extrabold text-2xl">Hi, my name is</p>
                    <h1 className="font-extrabold text-6xl">Achmad Raihan</h1>
                    <h1 className="font-extrabold text-3xl">a junior developer</h1>
                </div>
                <p className="text-base max-w-prose">
                    I am from Indonesia. I am currently pursuing my bachelor's degree at Sunan Ampel State Islamic University, Information Systems Department. Currently I am learning{" "}
                    <span>ReactJS</span>, <span>TailwindCSS</span>, <span>NextJS</span>.
                </p>
            </div>
            <Image src={vector} alt="vectors" className="w-80 h-80" />
        </div>
    );
}
