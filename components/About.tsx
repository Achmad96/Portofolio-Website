"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="ml-60 flex flex-col gap-3 max-md:ml-20 max-sm:ml-5">
      <div className="flex flex-col gap-2">
        <motion.p
          // initial={{
          //   opacity: 0,
          //   y: 50,
          // }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          // }}
          className="text-2xl font-bold text-teal-200"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          // initial={{
          //   opacity: 0,
          //   y: 50,
          // }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          // }}
          className="text-6xl font-bold max-md:text-4xl"
        >
          Achmad Raihan
        </motion.h1>
        <motion.h2
          // initial={{
          //   opacity: 0,
          //   y: 50,
          // }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          // }}
          className="text-3xl font-bold max-md:text-2xl"
        >
          a tech enthusiast
        </motion.h2>
      </div>
      <p className="max-w-prose text-base">
        I am from Indonesia. I am currently pursuing my bachelor's degree at
        Sunan Ampel State Islamic University, Information Systems Department.
      </p>
    </div>
  );
}
