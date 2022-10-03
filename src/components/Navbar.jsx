import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>NEXT.Serve</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Support</li>
                        <li>Subscription</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>
                        Sign In
                    </button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden mr-4'>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            <ul className='absolute bg-zinc-200 w-full px-8'>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Service</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Subscription</li>

                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar