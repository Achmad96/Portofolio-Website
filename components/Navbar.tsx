import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-10 justify-end items-center h-[10vh] mr-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/posts"}>Posts</Link>
        </nav>
    );
}
