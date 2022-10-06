import React from 'react';
import { BiLike } from 'react-icons/bi';

const Subscription = () => {
    return (
        <div name='subscription' className='w-full text-white my-24'>
            <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

            <div className='max-w-[1240px] mx-auto py-12'>

                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Subscription</h2>
                    <h3 className='text-5xl font-bold text-white py-8'>The right price for your Company</h3>
                    <p className='text-3xl'>
                        Subscribe for a smooth and error free experience on software development journey
                    </p>
                </div>

                <div className='grid md:grid-cols-2'>

                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/year</span></p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Best for small startups</p>
                        <div className='text-2xl'>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Practice friendly</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Enviorment setup</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Scan proofing</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Solutions</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Easy Access</p>
                            <button className='w-full py-4 my-4'>Get Started</button>
                        </div>
                    </div>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/year</span></p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Convenient for large companies</p>
                        <div className='text-2xl'>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Build Software</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Security</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Debugging</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />Solutions</p>
                            <p className='flex py-4'><BiLike className='w-8 mr-5 mt-1 text-green-600' />
                                Service</p>
                            <button className='w-full py-4 my-4'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription