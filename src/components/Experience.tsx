'use client'

export default function Experience() {
    return (
        <div className="w-9/12 my-4 mx-auto lg:w-8/12">
            <div className="py-4 text-lg text-center font-bold text-white">
                <h4>My Experience</h4>
            </div>
            <ol className="relative text-white border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4 text-white">
                    <div className="text-white absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-white text-lg font-semibold text-gray-900 dark:text-white">Software Engineer | Cloudkaptan</h3>
                    <time className="text-white mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Kokata | September 2024 - Present</time>
                    <ul className="list-disc ml-4">
                        <li>Designed and implemented web applications using ReactJS, Django
                            RESTFramework, Node.js, and FastAPI for development, increasing
                            efficiency by 86% and ensuring seamless user experiences.</li>
                        <li> Implemented various AWS services such as DynamoDB, Cognito,
                            Elasticsearch, Lambda, Secret Manager, CloudWatch, and API Gateway
                            to build scalable, secure, and high-performance applications, enhancing
                            overall system reliability and user engagement by 77%.</li>
                        <li> Engaged in continuous learning and solutions design, expanding skills to
                            include Boomi Platform and additional AWS services, resulting in a 55%
                            improvement in project delivery times</li>
                        <li> Gained experience in professional ethics, collaboration by working with
                            large teams and effectively coordinating with team members.</li>
                    </ul>
                </li>
                <li className="mb-10 ms-4">
                    <div className="text-white absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-white text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern | Aviram Technology</h3>
                    <time className="text-white mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022 - August 2022 | Remote</time>
                    <ul className="list-disc ml-4">
                        <li>Analyzed requirements and engineered a web application using ReactJS
                            and TypeScript, enhancing user interaction by 75%.</li>
                        <li>Successfully interfaced with backend APIs, implementing efficient data
                            retrieval and seamless display mechanisms to enhance user interaction.</li>
                        <li> Delivered projects on time with 98% accuracy, enhancing team
                            efficiency by 30% while gaining hands-on experience with
                            industry-standard tools under high-pressure conditions.</li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}