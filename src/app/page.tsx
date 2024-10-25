import Dashboard from "@/components/Dashboard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Projects from "@/components/Developer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-black gradient">
              <Navbar/>
              <Dashboard/>
              {/* <TimeLine/> */}
              <Experience/>
              <Projects/>
              <Skills/>
              <Footer/>
    </div>
  );
}
