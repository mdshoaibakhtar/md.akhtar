'use client'

export default function Education() {
    return (
        <div className="w-9/12 my-4 mx-auto lg:w-8/12 block sm:hidden">
            <div className="py-4 text-lg text-center font-bold text-white">
                <h4>My Education</h4>
            </div>
            <ol className="relative text-white border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4 text-white">
                    <div className="text-white absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-white text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science                    </h3>
                    <time className="text-white mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Siliguri Institute Of Technology <br/></time>
                    <time className="text-white mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2019 - June 2023 | Siliguri</time>
                </li>
                <li className="mb-10 ms-4 text-white">
                    <div className="text-white absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-white text-lg font-semibold text-gray-900 dark:text-white">Senior Secondary (+2) in Science                    </h3>
                    <time className="text-white mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">VJ International School

<br/></time>
                    <time className="text-white mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2017 - March 2019 | Bhagalpur

</time>
                </li>
            </ol>
        </div>
    )
}