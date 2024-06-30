import { IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconComponents: Record<string, IconType> = {
  html: FaHtml5,
  css: FaCss3,
  js: FaJs,
  tailwind: SiTailwindcss,
  nodejs: FaNodeJs,
  react: FaReact,
  nextjs: TbBrandNextjs,
};

export { iconComponents };
