import React from 'react'

import supportImg from '../assets/support.jpg'

const Support = () => {
    return (
        <div>
            <div name='support' className='w-full mt-6'>
                <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
                </div>
                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                        <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                        <p className='py-4 text-3xl text-slate-300 text-center'>Customer service is the assistance and advice provided by a company to those people who buy or use its products or services. Each industry requires different levels of customer service, but in the end, the idea of a well-performed service is that of increasing revenues.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>

                                <h3 className='font-bold text-2xl my-6'>Sales</h3>
                                <p className='text-gray-600 text-xl text-justify'>In the financial markets, our sale is an agreement between us and seller involving the price of a security and its delivery for agreed-upon compensation.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-indigo-600'>Contact Us<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-5 ml-2'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>

                                <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                                <p className='text-gray-600 text-xl text-justify'>Technical support workers help maintain, manage and repair IT systems. The role also involves  solving the issues over the phone or in person.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-indigo-600'>Contact Us<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-5 ml-2'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg></p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>

                                <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                                <p className='text-gray-600 text-xl text-justify'>Press enquiries are sent by journalists, bloggers and influencers to brands, in order to help them with their articles. Through this contact information provided.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-indigo-600'>Contact Us<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-5 ml-2'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support