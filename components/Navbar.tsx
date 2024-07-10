import Link from "next/link";
import ToggleThemeButton from "@/components/ToggleThemeButton";

export default function Navbar() {
  return (
    <nav className="flex h-[10dvh] items-center justify-end gap-10 pr-10 max-sm:pr-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/articles"}>Articles</Link>
      <ToggleThemeButton />
    </nav>
  );
}
