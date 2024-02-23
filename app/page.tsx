import Contact from "components/Contact";
import About from "../components/About";
import Work from "../components/Work";
import Hero from "components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Work />
      <Contact />
    </main>
  );
}
