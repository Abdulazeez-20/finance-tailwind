import React from 'react';
import { Typed } from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col max-w-[800px] text-center h-screen  mx-auto w-full justify-center items-center'>
                <p className='p-2 font-bold text-green-500 capitalize'>every point at your hand</p>
                <h1 className='text-3xl font-bold sm:text-4xl md:text-6xl md:p-6'>Put Your Trust Here</h1>
                <div className='flex'>
                    <p className='text-xl font-bold sm:text-3xl md:text-4xl'>Fast, Secure and Flexible for</p>
                    {/* <Typed className='text-xl font-bold sm:text-3xl md:text-4xl'
                        strings={['Sani', 'Shani', 'Brdani']}
                        typeSpeed={100}
                        backSpeed={120}
                        loop
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero