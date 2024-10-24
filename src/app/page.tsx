import Dashboard from "@/components/Dashboard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-black">
              <Navbar/>
              <Dashboard/>
              <Skills/>
              <Experience/>
              <Footer/>
    </div>
  );
}
