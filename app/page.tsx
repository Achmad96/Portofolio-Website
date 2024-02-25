import Contact from "components/Contact";
import Work from "../components/Work";
import Hero from "components/Hero";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Work />
      <Contact />
    </main>
  );
}
