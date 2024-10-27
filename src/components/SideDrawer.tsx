'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

interface DrawerProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
}

const SideDrawer: React.FC<DrawerProps> = ({ open, setOpen }) => {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-1 w-screen sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg fill="#000000" className='w-25px' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40 h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80 C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72 c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64 c0,4.424,3.584,8,8,8h64V384z"></path> </g> </g> <g> <g> <path d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48 z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8 S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44 c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96 V160z"></path> </g> </g> <g> <g> <rect x="248" y="72" width="40" height="16"></rect> </g> </g> <g> <g> <rect x="248" y="104" width="48" height="16"></rect> </g> </g> <g> <g> <rect x="312" y="104" width="40" height="16"></rect> </g> </g> <g> <g> <rect x="248" y="136" width="104" height="16"></rect> </g> </g> <g> <g> <rect x="144" y="200" width="64" height="16"></rect> </g> </g> <g> <g> <rect x="224" y="200" width="48" height="16"></rect> </g> </g> <g> <g> <rect x="288" y="200" width="80" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="232" width="64" height="16"></rect> </g> </g> <g> <g> <rect x="192" y="232" width="128" height="16"></rect> </g> </g> <g> <g> <rect x="336" y="232" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="264" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="160" y="264" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="272" y="264" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="296" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="160" y="296" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="272" y="296" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="328" width="72" height="16"></rect> </g> </g> <g> <g> <rect x="200" y="328" width="112" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="360" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="160" y="360" width="136" height="16"></rect> </g> </g> </g></svg>
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Resume
                                    </DialogTitle>
                                    <div className="relative hidden sm:flex mt-2 flex-1 px-4 sm:px-6 w-full sm:h-[88vh] top-4">
                                        <iframe
                                            src='/assets/pdfs/Resume.pdf'
                                            allow="autoplay"
                                            width={'500'}
                                            height={'640'}
                                        />
                                    </div>
                                    <div className="relative flex sm:hidden mt-2 flex-1 px-4 sm:px-6 w-full h-[48vh] top-4">
                                        <iframe
                                            src='/assets/pdfs/Resume.pdf'
                                            allow="autoplay"
                                            width={'300'}
                                            height={'340'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            {/* <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                Deactivate
                            </button> */}
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default SideDrawer

