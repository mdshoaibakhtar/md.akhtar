import Image from 'next/image'
import mobile from '../images/mobile.png'
import security from '../images/security.png'
import performance from '../images/performance.png'
import react from '../images/react.png'
import html from '../images/html-5.png'
import css from '../images/css.png'
import js from '../images/js.png'
import java from '../images/java.png'
import nextjs from '../images/next.png'
import nodejs from '../images/nodejs.png'
import aws from '../images/aws.png'
import tailwind from '../images/tailwind.png'
import graphql from '../images/graphql.png'
import typescript from '../images/typescript.png'
import jira from '../images/jira.png'
import vscode from '../images/vscode.png'
import github from '../images/github.png'
import sql from '../images/sql.png'
import fastapi from '../images/fastapi.svg'
import practitionerbadge from '../images/practitionerbadge.png'
import certifieddeveloper from '../images/certifieddeveloper.png'
import accredition from '../images/accredition.png'
import share from '../images/share.png'
import locked from '../images/locked.png'
import code from '../images/code.png'
// import DeveloperProfile from './DeveloperProfile'


export default function Skills() {
  return (
    <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-200">
            Technology and Tools
          </h2>
          <div className="mx-auto mt-10 grid lg:flex sm:grid md:justify-around max-w-lg grid-cols-2 gap-x-12 sm:grid-cols-4 sm:items-center sm:gap-x-8 gap-y-10 sm:max-w-full sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Transistor"
                src={html}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>HTML</h4>
            </div>
            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Reform"
                src={css}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>CSS</h4>
            </div>
            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>

              <Image
                alt="Tuple"
                src={js}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>Javascript</h4>
            </div>
            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="SavvyCal"
                src={java}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              />
              <h4 className='mt-2'>Java</h4>
            </div>

          </div>
          <div className="mx-auto mt-10 grid lg:flex sm:grid md:justify-around max-w-lg grid-cols-2 gap-x-12 sm:grid-cols-4 sm:items-center sm:gap-x-8 gap-y-10 sm:max-w-full sm:gap-x-10 lg:mx-0 lg:max-w-none">

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Transistor"
                src={react}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />

              <h4 className='mt-2'>React.Js</h4>
            </div>

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={nextjs}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />

              <h4 className='mt-2'>Next.Js</h4>
            </div>

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={nodejs}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />

              <h4 className='mt-2'>Node.Js</h4>
            </div>

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={aws}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>AWS</h4>
            </div>
          </div>
          <div className="mx-auto mt-10 grid lg:flex sm:grid md:justify-around max-w-lg grid-cols-2 gap-x-12 sm:grid-cols-4 sm:items-center sm:gap-x-8 gap-y-10 sm:max-w-full sm:gap-x-10 lg:mx-0 lg:max-w-none">


            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={tailwind}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 p-2"
              />
              <h4 className='mt-2'>Tailwind</h4>
            </div>


            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={graphql}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>GraphQL</h4>
            </div>

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={github}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />

              <h4 className='mt-2'>Github</h4>
            </div>

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={jira}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>Jira</h4>
            </div>
          </div>
          <div className="mx-auto mt-10 grid lg:flex sm:grid md:justify-around max-w-lg grid-cols-2 gap-x-12 sm:grid-cols-4 sm:items-center sm:gap-x-8 gap-y-10 sm:max-w-full sm:gap-x-10 lg:mx-0 lg:max-w-none">

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={vscode}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />

              <h4 className='mt-2'>Vs Code</h4>
            </div>

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={typescript}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>Typescript</h4>
            </div>


            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={sql}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>SQL</h4>
            </div>

            <div className='w-full sm:w-full lg:w-[10%] bg-white rounded p-2 text-center cursor-pointer flip'>
              <Image
                alt="Statamic"
                src={fastapi}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2'>FastAPI</h4>
            </div>
          </div>
        </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-200">
          AWS badges and Accredition
        </h2>
        <div className="mx-auto mt-10 grid lg:flex sm:grid md:justify-around max-w-64 sm:max-w-3xl grid-cols-1 gap-x-12 sm:grid-cols-3 sm:items-center sm:gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          <div className='w-full sm:w-full lg:w-[20%] p-2 text-center'>
            <div className='bg-white rounded p-2 text-center cursor-pointer hover-effect'>
              <Image
                alt="Statamic"
                src={practitionerbadge}
                width={200}
                height={70}
                className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2 text-xs'>AWS Certified Cloud Practitioner</h4>
            </div>
            <div className='mt-4 mx-auto items-center rounded-xl border-2 flex justify-center hover:bg-gray-900 transition cursor-pointer'>
              <h3 className='text-white text-base max-w-full'>Show Credentials</h3>
              <Image
                alt="Statamic"
                src={share}
                width={200}
                height={70}
                className="col-span-2 max-h-5 max-w-5 w-full lg:col-span-1 ml-2"
              />
            </div>
          </div>
          {/* <div className='w-full sm:w-full lg:w-[20%] bg-white rounded p-2 text-center cursor-pointer hover-effect'>
            <Image
              alt="Statamic"
              src={accredition}
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            />
            <h4 className='mt-2 text-xs'>AWS Partner: Technical Accredited</h4>
          </div> */}
          <div className='w-full sm:w-full lg:w-[20%] p-2 text-center'>
            <div className='bg-white rounded p-2 text-center cursor-pointer hover-effect'>
              <Image
                alt="Statamic"
                src={accredition}
                width={200}
                height={70}
                className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
              />
              <h4 className='mt-2 text-xs'>AWS Partner: Technical Accredited</h4>
            </div>
            <div className='mt-4 mx-auto items-center rounded-xl border-2 flex justify-center hover:bg-gray-900 transition cursor-pointer'>
              <h3 className='text-white text-base max-w-full'>Show Credentials</h3>
              <Image
                alt="Statamic"
                src={share}
                width={200}
                height={70}
                className="col-span-2 max-h-5 max-w-5 w-full lg:col-span-1 ml-2"
              />
            </div>
          </div>
          {/* <div className='w-full sm:w-full lg:w-[20%] bg-white rounded p-2 text-center cursor-not-allowed'>
            <Image
              alt="Statamic"
              src={certifieddeveloper}
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1  filter: blur"
            />
            <h4 className='mt-2 text-xs'>AWS Certified Developer</h4>
          </div> */}
          <div className='w-full sm:w-full lg:w-[20%] p-2 text-center'>
            <div className='bg-white rounded p-2 text-center cursor-not-allowed'>
              <Image
                alt="Statamic"
                src={certifieddeveloper}
                width={200}
                height={70}
                className="col-span-2 max-h-36 w-full object-contain lg:col-span-1 filter: blur"
              />
            <h4 className='mt-2 text-xs'>AWS Certified Developer</h4>
            </div>
            <div className='mt-4 mx-auto items-center rounded-xl border-2 flex justify-center hover:bg-gray-900 transition cursor-pointer'>
              <h3 className='text-white text-base max-w-full'>Not Unlocked</h3>
              <Image
                alt="Statamic"
                src={locked}
                width={200}
                height={70}
                className="col-span-2 max-h-4 max-w-4 w-full lg:col-span-1 ml-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mt-8">
        <p className="mx-auto mt-2 max-w-4xl text-xs text-center text-xl font-semibold tracking-tight text-gray-100 sm:text-xl">
        Experienced web developer skilled in modern technologies and frameworks, with a proven track record of delivering high-performance, secure APIs. Built and optimized numerous robust APIs, ensuring scalability, reliability, and enhanced security for seamless user experiences 
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Skilled in creating mobile-friendly, high-quality UI with ReactJS, NextJS, Tailwind, and modern frontend frameworks.
                                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    className="size-full object-cover object-top"
                    src={mobile}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Driven to build fast, high-performance web apps with optimized loading and responsive interactions.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs"
                  src={performance}
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Dedicated to enforcing strong security measures and best practices to safeguard applications and user data.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src={security}
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Proficient in building powerful APIs that ensure high performance, scalability, security and seamless integration.
                </p>
                              </div>
              <div className="relative min-h-[30rem] w-full grow">
                {/* <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        app.py
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">create_user.py</div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6 text-white">
                    <DeveloperProfile/>
                  </div>
                </div> */}
                  <Image
                  className="h-fit pl-10 mt-2 object-cover object-center"
                  src={code}
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
