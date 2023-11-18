import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-10 justify-end mr-10 p-7">
            <Link href={"/"}>Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href="#work">Work</Link>
            <a href="#">Contact</a>
        </nav>
    );
}
