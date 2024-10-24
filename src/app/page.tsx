import Dashboard from "@/components/Dashboard";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="container">
              <Navbar/>
              <Dashboard/>
              <Skills/>
              <Experience/>
    </div>
  );
}
