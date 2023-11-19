import Contact from "components/Contact";
import About from "../components/About";
import Work from "../components/Work";

export default function Home() {
    return (
        <main className="min-h-screen">
            <About />
            <Work />
            <Contact />
        </main>
    );
}
