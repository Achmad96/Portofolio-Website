"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function Contact() {
    const ref = useRef<HTMLInputElement | null>(null);
    const submitRef = useRef<HTMLInputElement | null>(null);
    const [index, setIndex] = useState(0);
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <form autoComplete="off" method="post" name="contactPerson" className="flex flex-col w-[50%] max-md:w-[80%] justify-start gap-5">
                <h1 className="text-3xl">Please give me an advice &#129303;</h1>
                <motion.label whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }}>
                    <input
                        placeholder="Enter your name..."
                        name="username"
                        type="text"
                        className="p-3 text-lg bg-transparent"
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                ref.current?.focus();
                                setIndex(1);
                            }
                        }}
                    />
                </motion.label>
                <motion.label animate={index >= 1 ? { x: 0, opacity: 1 } : {}} initial={{ x: -100, opacity: 0 }}>
                    <input
                        ref={ref}
                        placeholder="Enter your message..."
                        name="messages"
                        type="text"
                        className="p-3 text-lg bg-transparent"
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                submitRef.current?.click();
                            }
                        }}
                    />
                </motion.label>
                <input ref={submitRef} type="submit" className="hidden" />
            </form>
        </div>
    );
}
