import calculator from "@/public/images/calculator.png";
import todolist from "@/public/images/todolist.png";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";

export default function Work() {
    const projects = [
        {
            title: "Calculator",
            thumbnail: calculator,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            iconTypes: ["react", "css", "js"],
            href: "https://calculator-web-umber.vercel.app/",
        },
        {
            title: "Todolist",
            thumbnail: todolist,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            iconTypes: ["react", "css", "js"],
            href: "https://todolist-app-three-jet.vercel.app/",
        },
    ];

    const iconComponents: Record<string, any> = {
        react: FaReact,
        html: FaHtml5,
        css: FaCss3,
        js: FaJs,
    };

    return (
        <div className="h-screen" id="work">
            <div className="flex gap-10 w-full justify-center">
                {projects.map(project => (
                    <div className="flex flex-col bg-zinc-900 p-10 rounded-xl gap-5 w-96" key={project.title}>
                        <h3 className="text-2xl opacity-80">{project.title}</h3>
                        <Image className="w-96 h-48" src={project.thumbnail} alt={project.title} />
                        <p className="opacity-75">{project.description}</p>
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
        </div>
    );
}
