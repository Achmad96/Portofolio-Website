import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex gap-10 p-10">
            <FaGithub className="w-6 h-6" />
            <FaLinkedin className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <FaYoutube className="w-6 h-6" />
        </footer>
    );
}
