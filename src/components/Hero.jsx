import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='flex mt-[-100px] flex-col max-w-[800px] text-center h-screen  mx-auto w-full justify-center items-center'>
                <p className='p-2 font-bold text-green-500 capitalize sm:text-2xl md:text-3xl'>every point at your hand</p>
                <h1 className='text-3xl font-bold sm:text-4xl md:text-6xl md:p-6'>Put Your Trust Here</h1>
                <div className='flex items-center justify-center mt-2'>
                    <p className='text-base font-bold sm:text-3xl md:text-4xl'>Fast, Secure and Flexible for</p>
                    <ReactTyped className='pl-3 text-lg font-bold text-green-500 sm:text-3xl md:text-4xl'
                        strings={['Sani', 'Shani', 'Brdani']}
                        typeSpeed={175}
                        backSpeed={200}
                        loop
                    ></ReactTyped>
                </div>
                <p className='mt-2 text-xl text-gray-600 md:text-2xl md:mt-4'>The new gate that will open your vision to a new banking system</p>
                <button type='button' className='bg-green-400 md:w-[200px] w-[150px] py-3 mt-4 rounded-xl text-xl text-black font-bold'>Join Us</button>
            </div>
        </div>
    )
}

export default Hero