"use client";
import { BASE_URL } from "context/EnvContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Contact() {
    const ref = useRef<HTMLInputElement | null>(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (ref.current !== null && index < 1) {
            ref.current.disabled = true;
        } else if (ref.current !== null && index >= 1) {
            ref.current.disabled = false;
            ref.current.focus();
        }
    }, [index]);
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <form autoComplete="off" method="post" action={`${BASE_URL}/contact`} name="contactPerson" className="flex flex-col w-[50%] max-md:w-[80%] justify-start gap-5 text-white">
                <h1 className="text-3xl">Please give me an advice &#129303;</h1>
                <motion.input
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    placeholder="Enter your name..."
                    name="username"
                    type="text"
                    className="p-3 text-lg bg-transparent"
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            setIndex(1);
                            e.preventDefault();
                        }
                    }}
                />
                <motion.input
                    initial={{ x: -100, opacity: 0 }}
                    animate={index >= 1 ? { x: 0, opacity: 1 } : {}}
                    ref={ref}
                    placeholder="Enter your message..."
                    name="messages"
                    type="text"
                    className="p-3 text-lg bg-transparent"
                />
                <input type="submit" className="hidden" />
            </form>
        </div>
    );
}
