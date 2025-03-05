import Image from 'next/image'
import myImage from '../images/my-image.jpeg'
import { PresentationChartLineIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/20/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/16/solid'
import SideDrawer from './SideDrawer'
import { useState } from 'react'

const features = [
    {
        name: 'Currently,',
        description:
            'I am thriving as a Software Engineer at Cloudkaptan in Kolkata, where I specialize in cutting-edge development frameworks like ReactJS, Next.js, Django REST Framework, Node.js, GraphQL, Tailwind, and FastAPI.',
        icon: PresentationChartLineIcon,
    },
    {
        name: 'I have hands-on',
        description: ' experience with state management using Redux Toolkit, building intuitive UIs with Material-UI (MUI), and creating dynamic workflows using React Flow',
        icon: HandThumbUpIcon,
    },
    {
        name: 'As a certified AWS Cloud',
        description: ' Practitioner, I’ve successfully harnessed the power of various AWS services including DynamoDB, Cognito, Lambda, Secret Manager, CloudWatch, API Gateway, AppSync, and RDS to architect scalable and robust solutions.',
        icon: CodeBracketSquareIcon,
    },
]

export default function Dashboard() {
    const [open, setOpen] = useState(false)
    return (
        <div className="max-w-full py-24 sm:pt-32 gradient">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <div className="text-white">
                                <h1 className="text-2xl font-bold animate-typing whitespace-nowrap">
                                    Hello  👋, I&apos;m Md Shoaib Akhtar
                                </h1>
                            </div>

                            <p className="mt-6 text-lg leading-8 text-gray-100">
                                A passionate Full-Stack Developer and technology enthusiast based in Kolkata, India📍. The drive to innovate and create is deeply rooted in me, just as much as my passion for sharing knowledge and helping others grow.
                            </p>
                            <div className="flex flex-row w-full justify-end mt-4 sm:px-4">
                                <div className="flex flex-col justify-end w-36 mr-8 h-full">
                                    <div className="bg-[#43005d99] text-white text-base px-2 py-3 rounded-md text-center transition-all duration-500 ease-in-out hover:pr-8 relative overflow-hidden cursor-pointer group">
                                        <span className="relative transition-all duration-500 group-hover:pr-6" onClick={() => setOpen(true)}>Resume
                                            <span className="absolute opacity-0 top-[-4px] right-[-1.25rem] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:right-0">
                                                <svg viewBox="0 0 1024 1024" width={"15px"} className='ml-12 mt-1.5' xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></g></svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <a href='mailto:imdshoaibakhtar@gmail.com' target='_blank'><svg className='w-10 mr-2 cursor-pointer' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"></path> <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"></path> <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"></path> <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"></path> <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"></path> <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"></path> <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"></path> <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"></path> </g></svg></a>
                                    <a href='https://github.com/mdshoaibakhtar/' target='_blank'><svg className='w-12 cursor-pointer' viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(3.6000000000000014,3.6000000000000014), scale(0.7)"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path> </g> </g></svg>
                                    </a>
                                    <a href='https://www.linkedin.com/in/mdshoaibakhtar/' target='_blank'><svg className='w-12 cursor-pointer rotate linear infinite' viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(3.5199999999999996,3.5199999999999996), scale(0.56)"><rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="0" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0a57a3" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
                                    </a> </div>
                            </div>
                            <div>
                                <SideDrawer open={open} setOpen={setOpen} />
                            </div>
                            <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-200">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline text-white">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className='flex justify-end round'>
                        <Image
                            alt="Product screenshot"
                            src={myImage}
                            width={460}
                            height={100}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
