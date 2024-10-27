'use client'
import Image from 'next/image'
import company_project_0 from '../images/company_project_0.webp'
import ml_project from '../images/ml_project.jpeg'
import middleware from '../images/middleware.jpg'
import jobscript from '../images/jobscriptt.png'

export default function Projects() {
    return (
        <div className="text-center flex flex-col items-center">
            <h3 className="text-white text-xl font-bold">My Recent Projects</h3>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-4 sm:py-12 flex-col sm:flex-row'>
                <div className="relative w-full h-56 sm:w-2/4 group mr-12 cursor-pointer mt-6">
                    <Image
                        src={jobscript}
                        alt=""
                        className="absolute w-full h-full left-0 rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30" />
                    <div className="absolute left-0 top-[150px] w-full text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex justify-around mt-6 flex-row h-10 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </div>
                </div>
                <div className='mt-4 sm:mt-0'>
                    <h3 className="text-white text-xl font-bold text-start">The Jobscript</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li>Created a job/employment web
                            application with separate access for
                            companies/HR (admin) and employees
                            (standard users).</li>
                        <li> Implemented functionalities for job
                            seekers to easily apply for job roles
                            and for admins to post job openings</li>
                        <li>  Utilized ReactJS for front-end
                            development and Django REST
                            Framework (DRF) for building robust
                            APIs.</li>
                        <li> Employed multiple types of hooks
                            and Material-UI components to
                            create a responsive and interactive
                            user interface.</li>
                    </ul>
                </div>
            </div>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-8 sm:py-12 flex-col-reverse sm:flex-row'>
                <div className=''>
                    <h3 className="text-white text-xl font-bold text-start mt-4 sm:mt-0">Cross-Platform Integration and Middleware Development</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li>Led cross-platform integration projects, focusing on middleware development to enable ERP data migration from an old database to AWS RDS.</li>
                        <li>Designed and implemented private GraphQL APIs using AppSync, VPC, Relational Database, and Secrets Manager.</li>
                        <li> Integrated these private GraphQL APIs using the Boomi platform, enabling seamless connectivity and efficient data handling across systems.</li>
                    </ul>
                </div>
                <div className="relative w-full h-56 sm:w-2/4 group sm:ml-12 cursor-pointer mt-6">
                    <Image
                        src={middleware}
                        alt=""
                        className="absolute w-full h-full left-0 rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30" />
                    <div className="absolute left-0 top-[150px] w-full text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex justify-around mt-6 flex-row h-10 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-8 sm:py-12 flex flex-col-reverse sm:flex-row-reverse sittinf_developer'>
                <div className=''>
                    <h3 className="text-white text-xl font-bold text-start mt-4 sm:mt-0">AI-powered multiparty messaging platform</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li> Designed and developed an AI-powered multiparty messaging platform,
                            enhancing communication and collaboration by 76% using ReactJS,
                            DRF(Django), and AWSservices such as LambdaFunction, API
                            Gateway, DynamoDB, and Secrets Manager.</li>
                        <li>Worked on PaymentGateway and DocumentUpload web app for end
                            users, with a customizable dashboard for bank authorities with full UI
                            configuration, and enabling banks to send sms via Twilio or Pinpoint.</li>
                        <li>  Integrated AWS WAFCaptcha and Multi-Factor Authentication (MFA)
                            via QR code, improving security by 76%.</li>
                    </ul>
                </div>
                <div className="relative w-full h-56 sm:w-11/12 group mr-12 cursor-pointer mt-6">
                    <Image
                        src={company_project_0}
                        alt=""
                        className="absolute w-full h-full left-0 rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30" />
                    <div className="absolute left-0 top-[150px] w-full text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex justify-around mt-6 flex-row h-10 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mx-30 w-full sm:w-3/4 sm:px-12 px-8 py-8 sm:py-12 flex-col-reverse sm:flex-row'>
                <div className=''>
                    <h3 className="text-white text-xl font-bold text-start mt-4 sm:mt-0">Crime data analysis against women</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li>Developed machine learning models to analyze crime data related to crimes against women, identifying patterns and trends for improved insights.</li>
                        <li>Conducted data preprocessing, feature engineering, and statistical analysis to enhance model accuracy and relevance in crime prediction and prevention.</li>
                        <li>Presented findings in visual reports to highlight risk factors and geographical hotspots, supporting data-driven decision-making for safety measures.</li>
                    </ul>
                </div>
                <div className="relative w-full h-56 sm:w-3/4 group sm:ml-12 cursor-pointer mt-6">
                    <Image
                        src={ml_project}
                        alt=""
                        className="absolute w-full h-full left-0 rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30" />
                    <div className="absolute left-0 top-[150px] w-full text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex justify-around mt-6 flex-row h-10 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}