import Cards from "./Card"
import "../../app/project.css"
import Details from "./Details"
import { features, title } from "process"

const Projects = () => {
    const jobdotjs = {
        logo: "",
        title: "Jobdotjs",
        description: "Find your dream job with Jobdotjs",
        tech_stack: ["Nextjs", "Django Rest Framework", "PostgreSQL", "TailwindCSS", "Vercel"],
        status: "Available",
        other_features: ["Separate UI for Job seeker & Hiring talent", "Hiring talent - Job posting", "All type of Job searches", "Easy apply jobs", "AI Chatbot"],
        features: [
            "Created a job/employment web application with separate access for companies/HR (admin) and employees (standard users) to manage job applications and postings.",
            "Implemented features for job seekers to easily apply for job roles and for admins to post job openings, streamlining the hiring process.",
            "Utilized Nextjs for the front end and Django REST Framework (DRF) for building robust APIs, along with PostgreSQL as the database.",
            "Currently integrating a new React Flow feature to streamline the hiring process, with plans to implement an AI chatbot for assistance and support.",
            "Project is currently in progress with ongoing feature enhancements and optimizations."
        ],
        live_link: "https://jobdotjs.vercel.app/",
        github_link: "https://github.com/mdshoaibakhtar/Job.js"
    }
    const integration = {
        logo: "",
        title: "Nicholas",
        description: "Integration and Middleware Development",
        tech_stack: ["Python", "Django Rest Framework", "PostgreSQL", "AWS", "GraphQL", "AppSync", "VPC", "Relational Database", "Secrets Manager", "Lambda"],
        status: "Available",
        other_features: ["Cross platform integration", "GraphQL API development", "Data migration", "Boomi platform integration", "Utilization of aws services"],
        features: [
            "Led cross-platform integration projects, focusing on middleware development to enable ERP data migration from an old database to AWS RDS.",
            "Designed and implemented private GraphQL APIs using AppSync, VPC, Relational Database, and Secrets Manager.",
            "Integrated these private GraphQL APIs using the Boomi platform, enabling seamless connectivity and efficient data handling across systems."
        ],
        live_link: "",
        github_link: ""
    }
    const app0 = {
        logo: "",
        title: "App0",
        description: "AI-powered multiparty messaging platform",
        tech_stack: ["Python", "Django Rest Framework", "PostgreSQL", "AWS", "DynamoDb", "Lambda", "VPC", "Cognito", "Secrets Manager", "API Gateway"],
        status: "Available",
        other_features: ["Payment collection easyApp", "Document upoad easyApp", "Customize SMS template", "Customize Email template", "Customize Dashboard for banks"],
        features: [],
        live_link: "",
        github_link: ""
    }
    const jobdotjs_details_json = {
        title: "Jobdotjs",
        description: "Find your dream job with Jobdotjs",
        features: [
            "Created a job/employment web application with separate access for companies/HR (admin) and employees (standard users) to manage job applications and postings.",
            "Implemented features for job seekers to easily apply for job roles and for admins to post job openings, streamlining the hiring process.",
            "Utilized Nextjs for the front end and Django REST Framework (DRF) for building robust APIs, along with PostgreSQL as the database.",
            "Currently integrating a new React Flow feature to streamline the hiring process, with plans to implement an AI chatbot for assistance and support.",
            "Project is currently in progress with ongoing feature enhancements and optimizations."
        ]
    }

    const integration_details_json = {
        title: "Nicholas",
        description: "Cross-Platform Integration and Middleware Development",
        features: [
            "Led cross-platform integration projects, focusing on middleware development to enable ERP data migration from an old database to AWS RDS.",
            "Designed and implemented private GraphQL APIs using AppSync, VPC, Relational Database, and Secrets Manager.",
            "Integrated these private GraphQL APIs using the Boomi platform, enabling seamless connectivity and efficient data handling across systems."
        ]
    }

    const app0_details_json = {
        title: "App0",
        description: "AI-powered multiparty messaging platform",
        features: [
            "Designed and developed an AI-powered multiparty messaging platform, enhancing communication and collaboration by 76% using ReactJS, DRF(Django), and AWSservices such as LambdaFunction, API Gateway, DynamoDB, and Secrets Manager.",
            "Worked on PaymentGateway and DocumentUpload web app for end users, with a customizable dashboard for bank authorities with full UI configuration, and enabling banks to send sms via Twilio or Pinpoint.",
            "Integrated AWS WAFCaptcha and Multi-Factor Authentication (MFA) via QR code, improving security by 76%."
        ]
    }
    return (
        <div className="text-center flex flex-col items-center">
            <h3 className="text-white text-xl font-bold">My Recent Projects</h3>
            <div className="cards mt-2 sm:flex flex-col justify-between w-4/5">
                {/* <div className="sm:mt-6 mt-8 flex flex-col sm:flex-row justify-between sm:gap-10"> */}
                <div className='card w-full flex flex-col sm:flex-row justify-between mt-4 sm:mt-8 p-1 sm:p-4 rounded bg-[#07182E] border-white/20 bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]'>
                    <Cards card_json={jobdotjs} />
                    <Details details_json={jobdotjs_details_json} />
                </div>
                {/* <div className="sm:mt-6 mt-8 flex flex-col-reverse sm:flex-row justify-between sm:gap-10"> */}
                <div className='card w-full flex flex-col-reverse sm:flex-row justify-between mt-4 sm:mt-8 p-1 sm:p-4 rounded bg-[#07182E] border-white/20 bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]'>
                    <Details details_json={integration_details_json} />
                    <Cards card_json={integration} />
                </div>
                {/* <div className="sm:mt-6 mt-8 flex flex-col sm:flex-row justify-between sm:gap-10"> */}
                <div className='card w-full flex flex-col sm:flex-row justify-between mt-4 sm:mt-8 p-1 sm:p-4 rounded bg-[#07182E] border-white/20 bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]'>
                    <Cards card_json={app0} />
                    <Details details_json={app0_details_json} />
                </div>
            </div>
        </div>
    )
}

export default Projects