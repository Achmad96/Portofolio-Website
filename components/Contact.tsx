"use client";
import { motion } from "framer-motion";
import { KeyboardEvent, FormEvent, useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        autoComplete="off"
        className="flex w-[50%] flex-col justify-start gap-5 max-md:w-[80%]"
      >
        <h1 className="text-3xl">Please give me an advice &#129303;</h1>
        <input
          placeholder="Your name"
          name="username"
          type="text"
          className="input w-full"
          maxLength={30}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <textarea
          placeholder="Messages"
          maxLength={200}
          ref={ref}
          name="messages"
          className="textarea resize-none overflow-hidden"
          onInput={(e: FormEvent<HTMLTextAreaElement>) => {
            if (ref.current && e.currentTarget.scrollHeight <= 120) {
              ref.current.style.height = "auto";
              ref.current.style.height = `${e.currentTarget.scrollHeight}px`;
            }
          }}
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (ref.current && e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
}
