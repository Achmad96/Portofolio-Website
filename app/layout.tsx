import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mamad's Portofolio",
    description: "Made by Achmad Raihan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
