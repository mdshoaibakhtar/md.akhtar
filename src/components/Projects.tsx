'use client'
import Image from 'next/image'
import semicolon from '../images/semicolon.png'

export default function Projects() {
    return (
        <div className="text-center flex flex-col items-center">
            <h3 className="text-white text-xl font-bold">My Recent Projects</h3>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-8 sm:py-12 flex-col sm:flex-row'>
                <div className="relative w-3/4 h-56 group mr-12 cursor-pointer">
                    <Image
                        src={semicolon}
                        alt=""
                        className="absolute w-full h-full left-0 rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30" />
                    <div className="absolute left-0 top-[150px] w-full text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex justify-around mt-6 flex-col sm:flex-row h-32 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </div>
                </div>
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
                    </ul>
                </div>
            </div>
            <div className='flex mx-30 w-full sm:w-4/5 sm:px-12 px-8 py-8 sm:py-12 flex-col-reverse sm:flex-row'>
                <div className=''>
                    <h3 className="text-white text-2xl font-bold text-start mt-4 sm:mt-0">The Jobscript</h3>
                    <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                        <li>Analyzed requirements and engineered a web application using ReactJS
                            and TypeScript, enhancing user interaction by 75%.</li>
                        <li>Successfully interfaced with backend APIs, implementing efficient data
                            retrieval and seamless display mechanisms to enhance user interaction.</li>
                        <li> Delivered projects on time with 98% accuracy, enhancing team
                            efficiency by 30% while gaining hands-on experience with
                            industry-standard tools under high-pressure conditions.</li>
                    </ul>
                </div>
                <div className="relative w-3/4 h-56 group ml-12 cursor-pointer">
                    <Image
                        src={semicolon}
                        alt=""
                        className="absolute w-full h-full left-0 rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30" />
                    <div className="absolute left-0 top-[150px] w-full text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex justify-around mt-6 flex-col sm:flex-row h-32 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </div>
                </div>
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
                    </ul>
                </div>
                <div className="relative w-3/4 h-56 group mr-12 cursor-pointer">
                    <Image
                        src={semicolon}
                        alt=""
                        className="absolute w-full h-full left-0 rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30" />
                    <div className="absolute left-0 top-[150px] w-full text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex justify-around mt-6 flex-col sm:flex-row h-32 sm:h-full'>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Link</button>
                            <button className='bg-yellow-400 text-gray-600 rounded-xl cursor-pointer hover-effect py-2 px-12'>Source code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}