import Dashboard from "@/components/Dashboard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Projects from "@/components/Developer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";

export default function Home() {

  const experienceData = [
    {
      id: 1,
      date: "September 2022 - Currently working",
      degree: "Software Engineer",
      institution: "Cloudkaptan | Kolkata",
    },
    {
      id: 2,
      date: "March 2022 - August 2022",
      degree: "Software Engineer Intern",
      institution: "Aviram Technology",
    }
  ];
  const educationData = [
    {
      id: 1,
      date: "July 2019 - June 2023",
      degree: "Bachelor of Science in Computer Science",
      institution: "Siliguri Institute Of Technology | Siliguri",
    },
    {
      id: 2,
      date: "June 2017 - March 2019",
      degree: "Senior Secondary (+2) in Science",
      institution: "VJ International School | Bhagalpur",
    }
  ];
  return (
    <div className="bg-black gradient">
              <Navbar/>
              <Dashboard/>
              <Timeline timelineData = {experienceData} title="Experience"/>
              <Timeline timelineData = {educationData} title="Education"/>
              {/* <Timeline/> */}
              <Experience/>
              <Projects/>
              <Skills/>
              <Footer/>
    </div>
  );
}
