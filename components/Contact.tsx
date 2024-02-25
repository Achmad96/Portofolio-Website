"use client";
import { sendEmailMessage } from "app/actions";
import { KeyboardEvent, FormEvent, useRef } from "react";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import { defaultToastConfig } from "constants/ToastConfig";

export default function Contact() {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ToastContainer {...defaultToastConfig} />
      <form
        autoComplete="off"
        className="flex w-[50%] flex-col justify-start gap-5 max-md:w-[80%]"
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await sendEmailMessage(new FormData(e.currentTarget));
          let theme = "light";
          try {
            theme = localStorage.getItem("theme") as string;
          } catch (e) {}
          if (res.success === true) {
            const elements = document.querySelectorAll(
              'input[name="username"], textarea[name="messages"]',
            );
            elements.forEach((v: any) => (v.value = ""));
            toast.success("Successfully sent an email!", {
              ...defaultToastConfig,
              theme: theme,
            });
          } else {
            toast.error("Failed to send email!", {
              ...defaultToastConfig,
              theme: theme,
            });
          }
        }}
      >
        <h1 className="text-3xl">Connect with me &#129303;</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Your name"
            autoComplete="off"
          />
        </label>
        <textarea
          placeholder="Messages"
          maxLength={200}
          ref={ref}
          name="messages"
          className="textarea textarea-bordered resize-none overflow-hidden"
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
          required
        />
        <div className="flex justify-end">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}
