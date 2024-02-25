"use server";
import nodemailer from "nodemailer";

export async function sendEmailMessage(formData: FormData) {
  const username = formData.get("username") as string;
  const messages = formData.get("messages") as string;

  if (!username && !messages) {
    return { success: false };
  }

  const emailOptions = {
    from: process.env.NEXT_GMAIL_FROM_EMAIL,
    to: process.env.NEXT_GMAIL_TO_EMAIL,
    subject: `New messages from ${username}`,
    text: messages,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.NEXT_GMAIL_FROM_EMAIL,
      pass: process.env.NEXT_GMAIL_PASS,
    },
  });

  transporter.sendMail(emailOptions, (err: any, info: any) => {
    if (err) {
      console.log(err);
      return { success: false };
    }
  });

  return { success: true };
}
