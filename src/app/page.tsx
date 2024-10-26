'use client'
import Dashboard from "@/components/Dashboard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import { useRef } from "react";

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

  interface HandleScrollToDiv {
    (targetedRef:string): void; // No parameters, returns void
  }

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null); // specify the type as HTMLDivElement
  const skillsRef = useRef<HTMLDivElement>(null); // specify the type as HTMLDivElement
  const educationRef = useRef<HTMLDivElement>(null); // specify the type as HTMLDivElement
  const experienceRef = useRef<HTMLDivElement>(null); // specify the type as HTMLDivElement
  const experienceRefForMobile = useRef<HTMLDivElement>(null); // specify the type as HTMLDivElement
  // const contactRef = useRef<HTMLDivElement>(null); // specify the type as HTMLDivElement
  const handleScrollToDiv:HandleScrollToDiv = (targetedRef:string) => {
    if(targetedRef == 'skillsRef'){
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }else if(targetedRef == 'educationRef'){
      educationRef.current?.scrollIntoView({ behavior: "smooth" });
    }else if(targetedRef == 'experienceRef'){
      experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    }else if(targetedRef == 'projectsRef'){
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }else if(targetedRef == 'experienceRefForMobile'){
      experienceRefForMobile.current?.scrollIntoView({ behavior: "smooth", block: "center", });
    }
  };
  return (
    <div className="bg-black gradient">
      <div><Navbar handleScrollToDiv={handleScrollToDiv}/></div>
      <div><Dashboard /></div>
      <div ref={experienceRef} className="pt-16"><Timeline timelineData={experienceData} title="Experience" /></div>
      <div ref={educationRef} className="pt-16"><Timeline timelineData={educationData} title="Education" /></div>
      <div ref={experienceRefForMobile}><Experience /></div>
      <div ref={projectsRef} className="pt-20"><Projects /></div>
      <div ref={skillsRef} className="pt-2"><Skills /></div>
      <div><Footer /></div>
    </div>
  );
}
