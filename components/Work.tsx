"use client";
import { Projects } from "../constants/ProjectsMetadata";
import { IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Image from "next/image";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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
          className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer"
          key={project.title}
          onClick={() => router.push(project.href)}
        >
          <figure>
            <Image
              className="h-48 w-96"
              src={project.thumbnail}
              alt={project.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {project.title}
              <div className="badge badge-primary">{project.type}</div>
            </h2>
            <p>{project.description}</p>
            <div className="card-actions justify-start">
              <div className="mt-1 flex items-center gap-3">
                {project.iconTypes.map((iconType, index) => {
                  const IconComponent = iconComponents[iconType];
                  return (
                    <span key={index}>
                      <IconComponent size={25} />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
