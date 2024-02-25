import Link from "next/link";
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mt-5 flex h-[10vh] items-center justify-between border-t-[1px] border-t-slate-800 px-10 max-md:flex-col max-md:gap-3 max-md:pt-5">
      <div className="flex justify-center gap-10 max-sm:gap-7">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/Achmad96"}
        >
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/achmad-raihan-185b6124b/"}
        >
          <FaLinkedin className="h-6 w-6" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.instagram.com/mamadd_aja/"}
        >
          <FaInstagram className="h-6 w-6" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.youtube.com/@Achmad325"}
        >
          <FaYoutube className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex flex-col text-xs max-md:items-center">
        <p>Copyright © 2024 by Achmad Raihan</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
