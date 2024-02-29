import Link from "next/link";
import ToogleThemeButton from "./ToogleThemeButton";

export default function Navbar() {
  return (
    <nav className="mr-10 flex h-[10vh] items-center justify-end gap-10 font-bold">
      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Posts</Link>
      <ToogleThemeButton />
    </nav>
  );
}
