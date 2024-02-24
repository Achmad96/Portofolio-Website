import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Mamad's Portofolio",
  description: "Made by Achmad Raihan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Suspense fallback={<p>Loading..</p>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
