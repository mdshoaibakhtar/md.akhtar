import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import myImage from '../images/home_animated_gif.gif'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function Dashboard() {
    return (
        <div className="max-w-full py-24 sm:py-32 gradient">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            {/* <h2 className="text-base font-semibold leading-7 text-gray-100">Hello</h2> */}
                            <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
                                Hello, <br/>I&apos;m Md Shoaib Akhtar
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-100">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-200">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    {/* <div className='flex justify-end'> */}
                    <Image
                        alt="Product screenshot"
                        src={myImage}
                        width={900}
                        height={100}
                        className=""
                    />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
