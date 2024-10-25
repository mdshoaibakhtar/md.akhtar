'use client'
import Image from 'next/image'
import developer_image from '../images/developer-image.webp'
import development from '../images/coding.png'
import sittinf_developer from '../images/sitting-developer.webp'

export default function Projects() {
    return (
        <div className="text-center flex flex-col items-center">
            <h3 className="text-white text-xl font-bold">My Recent Projects</h3>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-8 sm:py-12 flex-col sm:flex-row'>
                <Image
                    alt=''
                    width={1000}
                    height={1000}
                    src={developer_image}
                    className='h-full w-full sm:h-2/5 sm:w-1/3'
                />
                <div>
                    <h3 className="text-white text-2xl font-bold text-start">The Semicolon</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li>Analyzed requirements and engineered a web application using ReactJS
                            and TypeScript, enhancing user interaction by 75%.</li>
                        <li>Successfully interfaced with backend APIs, implementing efficient data
                            retrieval and seamless display mechanisms to enhance user interaction.</li>
                        <li> Delivered projects on time with 98% accuracy, enhancing team
                            efficiency by 30% while gaining hands-on experience with
                            industry-standard tools under high-pressure conditions.</li>
                        <div className='flex justify-around mt-6 flex-col sm:flex-row h-32 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-8 sm:py-12 flex-col-reverse sm:flex-row'>
                <div className=''>
                    <h3 className="text-white text-2xl font-bold text-start mt-4 sm:mt-0">The Jobscropt</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li>Analyzed requirements and engineered a web application using ReactJS
                            and TypeScript, enhancing user interaction by 75%.</li>
                        <li>Successfully interfaced with backend APIs, implementing efficient data
                            retrieval and seamless display mechanisms to enhance user interaction.</li>
                        <li> Delivered projects on time with 98% accuracy, enhancing team
                            efficiency by 30% while gaining hands-on experience with
                            industry-standard tools under high-pressure conditions.</li>
                            <div className='flex justify-around mt-6 flex-col sm:flex-row h-32 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </ul>
                </div>
                <Image
                    alt=''
                    width={1000}
                    height={1000}
                    src={development}
                    className='h-full w-full sm:h-2/5 sm:w-1/3 ml-0 sm:ml-8'
                />
            </div>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-8 sm:py-12 flex flex-col-reverse sm:flex-row-reverse sittinf_developer'>
                <div className=''>
                    <h3 className="text-white text-2xl font-bold text-start mt-4 sm:mt-0">AI-powered multiparty messaging platform</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li>Analyzed requirements and engineered a web application using ReactJS
                            and TypeScript, enhancing user interaction by 75%.</li>
                        <li>Successfully interfaced with backend APIs, implementing efficient data
                            retrieval and seamless display mechanisms to enhance user interaction.</li>
                        <li> Delivered projects on time with 98% accuracy, enhancing team
                            efficiency by 30% while gaining hands-on experience with
                            industry-standard tools under high-pressure conditions.</li>
                            <div className='flex justify-around mt-6 flex-col sm:flex-row h-32 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </ul>
                </div>
                <Image
                    alt=''
                    width={1000}
                    height={1000}
                    src={sittinf_developer}
                    className='h-full w-full sm:h-3/5 sm:w-1/3 mr-6 sm:mr-12'
                />
            </div>
        </div>
    )
}