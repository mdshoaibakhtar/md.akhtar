import Image from 'next/image'
import myImage from '../images/my-image.jpg'
import { PresentationChartLineIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/20/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/16/solid'

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
    return (
        <div className="max-w-full py-24 sm:pt-32 gradient">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            {/* <h2 className="text-base font-semibold leading-7 text-gray-100">Hello</h2> */}
                            {/* <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
                                Hello  👋,
                            </p> */}
                            <div className="text-white">
                                <h1 className="text-2xl font-bold animate-typing whitespace-nowrap">
                                Hello  👋, I&apos;m Md Shoaib Akhtar
                                </h1>
                            </div>

                            <p className="mt-6 text-lg leading-8 text-gray-100">
                                A passionate Full-Stack Developer and technology enthusiast based in Kolkata, India📍. The drive to innovate and create is deeply rooted in me, just as much as my passion for sharing knowledge and helping others grow.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
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
