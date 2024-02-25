import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const reqBody = await req.formData();
  const username = reqBody.get("username") as string;
  const messages = reqBody.get("messages") as string;

  if (!username && !messages) {
    return NextResponse.json(
      {
        success: false,
        messages: "Please enter the username and the messages",
      },
      { status: 400 },
    );
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

  const res = await transporter.sendMail(emailOptions);
  if (!res) {
    return NextResponse.json(
      {
        success: false,
        messages: "Failed to send an email",
      },
      { status: 402 },
    );
  }

  return NextResponse.json({ success: true });
}
