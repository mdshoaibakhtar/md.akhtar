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
        other_features: ["Role-Based Access Control", "Hiring talent - Job posting", "All type of Job searches", "Easy apply jobs", "AI Chatbot"],
        features: [],
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
        features: [],
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
            "Created a job web application with separate access for companies/HR (admin) and employees to manage job applications and postings.",
            "Implemented features for job seekers to easily apply for job roles and for admins to post job openings, streamlining the hiring process.",
            "Utilized Nextjs for the front end and Django REST Framework (DRF) for building robust APIs, along with PostgreSQL as the database.",
            "Currently integrating a new React Flow feature to streamline the hiring process, with plans to implement an AI chatbot for assistance and support.",
            "A visual workflow to allow recruiters to drag-and-drop applications through various hiring stages (e.g., Screening → Interview → Offer).",
            "The project is actively in development, with continuous improvements and optimizations to enhance user experience and platform functionality.."
        ]
    }

    const integration_details_json = {
        title: "Nicholas",
        description: "Cross-Platform Integration and Middleware Development",
        features: [
            "Led cross-platform integration projects, Implementation of middleware layer that automates data extraction, transformation, and loading (ETL) from the legacy database to AWS RDS.",
            "Ensured data consistency, integrity, and security while migrating complex ERP datasets across different platforms.",
            "Optimized database queries and indexing strategies to enhance migration speed and minimize operational disruptions.",
            "Developed secure, private GraphQL APIs using AWS AppSync to enable real-time, flexible, and efficient data access for ERP systems.",
            "Implemented fine-grained access control using AWS IAM roles and Secrets Manager, ensuring secure API interactions.",
            "Configured AWS VPC (Virtual Private Cloud) to keep API communication secure within a private network, restricting unauthorized access."
        ]
    }

    const app0_details_json = {
        title: "App0",
        description: "AI-powered multiparty messaging platform",
        features: [
            "Engineered high-performance, scalable web applications using ReactJS, Django REST Framework, and Node.js, ensuring seamless front-end and back-end integration.",
            "Designed and optimized efficient database architectures using PostgreSQL and DynamoDB, improving query performance and data retrieval speeds.",
            "Developed highly responsive and interactive UIs with ReactJS and Tailwind CSS, enhancing user experience and increasing engagement rates.",
            "Implemented server-side rendering (SSR) with Next.js to optimize SEO and improve page load speeds by 40%, leading to better user retention.",
            "Designed RESTful APIs with Django REST Framework (DRF) and Node.js (Express.js), ensuring seamless integration with front-end applications.",
            "Result: Improved overall application efficiency, increased product performance by 86%, and enhanced user engagement metrics."
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