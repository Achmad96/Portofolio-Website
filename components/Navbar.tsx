import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mr-10 flex h-[10vh] items-center justify-end gap-10">
      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Posts</Link>
    </nav>
  );
}
