"use client";
import { Projects } from "./ProjectsMetadata";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Work() {
  const iconComponents: Record<string, IconType> = {
    html: FaHtml5,
    css: FaCss3,
    js: FaJs,
    tailwind: SiTailwindcss,
    nodejs: FaNodeJs,
    react: FaReact,
    nextjs: TbBrandNextjs,
  };

  const control = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div
      ref={ref}
      className="flex w-full flex-wrap justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-5"
    >
      {Projects.map((project, i) => (
        <motion.div
          initial="hidden"
          animate={control}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 90,
                damping: 30,
                delay: i / 20,
              },
            },
            hidden: {
              x: -100,
              opacity: 0,
            },
          }}
          className="flex w-[23rem] flex-col rounded-xl bg-zinc-900 p-7"
          key={project.title}
        >
          <div className="flex h-[33rem] flex-col gap-5">
            <h3 className="text-2xl opacity-80">{project.title}</h3>
            <Image
              className="h-48 w-96"
              src={project.thumbnail}
              alt={project.title}
            />
            <p className="opacity-75">{project.description}</p>
          </div>
          <div className="mt-3 flex justify-between">
            <div className="flex items-center gap-5">
              {project.iconTypes.map((iconType, index) => {
                const IconComponent = iconComponents[iconType];
                return (
                  <span key={index}>
                    <IconComponent size={25} />
                  </span>
                );
              })}
            </div>
            <Link href={project.href} className="hover:underline">
              Click to see
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
