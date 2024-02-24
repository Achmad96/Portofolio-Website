"use client";
import { Variants, motion } from "framer-motion";

const itemVariant: Variants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: { type: "spring", stiffness: 300, damping: 50 },
  },
  closed: { opacity: 0, y: "100%" },
};

export default function About() {
  let delay = 0; // in seconds
  return (
    <div className="ml-60 flex flex-col gap-3 max-md:ml-20 max-sm:ml-5">
      <motion.div
        initial={"closed"}
        animate={"open"}
        variants={{
          open: {
            opacity: 1,
            y: "0%",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              delayChildren: 0.2,
              staggerChildren: 0.3,
            },
          },

          closed: {
            opacity: 0,
            y: "100%",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className="flex flex-col gap-2 overflow-hidden"
      >
        <motion.p
          variants={itemVariant}
          className="text-2xl font-bold text-teal-400"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={itemVariant}
          className="text-6xl font-bold max-md:text-4xl"
        >
          Achmad Raihan
        </motion.h1>
        <motion.h2
          variants={itemVariant}
          className="text-3xl font-bold max-md:text-2xl"
        >
          a tech enthusiast
        </motion.h2>
        <div className="flex flex-col gap-0">
          <motion.p
            variants={itemVariant}
            className="max-w-prose translate-y-[0%] text-base"
          >
            I am from Indonesia. I am currently pursuing my bachelor's degree at
          </motion.p>
          <motion.p
            variants={itemVariant}
            className="max-w-prose translate-y-[0%] text-base"
          >
            Sunan Ampel State Islamic University, Information Systems
            Department.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
