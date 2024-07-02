import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/providers/Provider";

export const metadata: Metadata = {
  title: "Achmad's Portofolio",
  description: "Achmad Raihan's portofolio",
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
        <Provider>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
