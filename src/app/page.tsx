import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="container">
              <Navbar/>
              <Dashboard/>
              <Skills/>
    </div>
  );
}
