import ContactComponent from "components/ContactComponent";
import WorkComponent from "@/components/WorkComponent";
import Hero from "components/Hero";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WorkComponent />
      <ContactComponent />
    </main>
  );
};
export default HomePage;
