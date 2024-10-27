'use client'
import Dashboard from "@/components/Dashboard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import { useRef } from "react";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

  const experienceData = [
    {
      id: 1,
      date: "September 2022 - Currently working | Kolkata",
      degree: "Software Engineer | Cloudkaptan",
      institution: "",
      dataList : ["Developed Scalable Web Applications: Engineered robust full-stack applications using ReactJS, Django REST Framework, and Node.js, significantly enhancing product performance and user engagement.",
         "Developed Scalable Web Applications: Engineered robust full-stack applications using ReactJS, Django REST Framework, and Node.js, significantly enhancing product performance and user engagement.",
        "Built Custom Dashboards & Payment Systems: Created customizable dashboards for banks and integrated a Payment Gateway and Document Upload web app, optimizing functionality for financial clients.",
        "Enhanced Security & User Authentication: Implemented security measures, including AWS WAF, captcha, MFA, and QR code authentication, ensuring safe and seamless user experiences.",
      "Workflow Automation with React Flow: Integrated React Flow to streamline workflows, enabling automated, intuitive business processes."]
    },
    {
      id: 2,
      date: "March 2022 - August 2022 | Remote",
      degree: "Software Engineer Intern | Aviram Technology",
      institution: "",
      dataList : ["Developed Interactive Web Components: Created dynamic, reusable React components using TypeScript, enhancing UI consistency and scalability across multiple applications.",
         "Optimized Frontend Performance: Implemented best practices in React for optimal rendering and state management, reducing page load times and improving user experience.",
        "Worked with State Management Tools: Utilized Redux Toolkit to manage complex state logic, resulting in smoother user interactions and reliable data flows.",
      "Implemented Responsive UI Designs: Translated Figma designs into responsive, accessible interfaces, ensuring cross-device compatibility."]
    }
  ];
  const educationData = [
    {
      id: 1,
      date: "July 2019 - June 2023 | Siliguri",
      degree: "Bachelor of Science in Computer Science",
      institution: "Siliguri Institute Of Technology",
      dataList:[]
    },
    {
      id: 2,
      date: "June 2017 - March 2019 | Bhagalpur",
      degree: "Senior Secondary (+2) in Science",
      institution: "VJ International School",
      dataList:[]
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
  const contactRef = useRef<HTMLDivElement>(null); // specify the type as HTMLDivElement
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
    }else if(targetedRef == 'contactRef'){
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center", });
    }
  };
  return (
    <div className="bg-black gradient">
      <div><Navbar handleScrollToDiv={handleScrollToDiv}/></div>
      <div><Dashboard /></div>
      <div ref={experienceRef} className="sm:pt-16"><Timeline timelineData={experienceData} title="Experience" /></div>
      <div ref={educationRef} className="sm:pt-16"><Timeline timelineData={educationData} title="Education" /></div>
      <div ref={experienceRefForMobile} className="pt-12 sm:pt-0"><Experience /></div>
      <div ref={educationRef} className="pt-2 sm:pt-0"><Education /></div>
      <div ref={projectsRef} className="pt-20"><Projects /></div>
      <div ref={skillsRef} className="pt-8 sm:pt-2"><Skills /></div>
      <div ref={contactRef} className="pt-12 sm:pt-2"><Contact /></div>
      <div><Footer /></div>
    </div>
  );
}
