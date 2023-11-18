import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex justify-between items-center h-[10vh] mx-10 max-sm:flex-col">
            <div className="flex gap-10 justify-center max-sm:gap-7">
                <FaGithub className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
                <FaYoutube className="w-6 h-6" />
            </div>
            <p>
                Made by <strong>Achmad Raihan</strong>
            </p>
        </footer>
    );
}
