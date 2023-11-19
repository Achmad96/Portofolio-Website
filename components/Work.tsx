import calculator from "../public/images/calculator.png";
import todolist from "../public/images/todolist.png";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const projects = [
    {
        title: "Calculator",
        thumbnail: calculator,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        iconTypes: ["react", "css"],
        href: "https://calculator-web-umber.vercel.app/",
    },
    {
        title: "Todolist",
        thumbnail: todolist,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        iconTypes: ["react", "css"],
        href: "https://todolist-app-three-jet.vercel.app/",
    },
];

export default function Work() {
    const iconComponents: Record<string, IconType> = {
        html: FaHtml5,
        css: FaCss3,
        js: FaJs,
        tailwind: SiTailwindcss,
        nodejs: FaNodeJs,
        react: FaReact,
        nextjs: TbBrandNextjs,
    };

    return (
        <div className="flex flex-wrap justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-5 w-full">
            {projects.map(project => (
                <div className="flex flex-col bg-zinc-900 p-7 rounded-xl w-[23rem]" key={project.title}>
                    <div className="flex flex-col h-[33rem] gap-5">
                        <h3 className="text-2xl opacity-80">{project.title}</h3>
                        <Image className="w-96 h-48" src={project.thumbnail} alt={project.title} />
                        <p className="opacity-75">{project.description}</p>
                    </div>
                    <div className="flex mt-3 justify-between">
                        <div className="flex items-center gap-5">
                            {project.iconTypes.map((iconType, index) => {
                                const IconComponent = iconComponents[iconType];
                                return (
                                    <span key={index}>
                                        <IconComponent size={25} />
                                    </span>
                                );
                            })}
                        </div>
                        <Link href={project.href} className="hover:underline">
                            Show me
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
