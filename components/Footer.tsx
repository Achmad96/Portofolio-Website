import Link from "next/link";
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex border-t-[1px] border-t-slate-800 justify-between items-center h-[10vh] px-10 my-7 max-sm:flex-col">
            <div className="flex gap-10 justify-center max-sm:gap-7">
                <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/Achmad96"}>
                    <FaGithub className="w-6 h-6" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/achmad-raihan-185b6124b/"}>
                    <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/mamadd_aja/"}>
                    <FaInstagram className="w-6 h-6" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/channel/UC-WV52r-BjAKP79CLf5F7QQ"}>
                    <FaYoutube className="w-6 h-6" />
                </Link>
            </div>
            <p>
                Made by <strong>Achmad Raihan</strong>
            </p>
        </footer>
    );
}
