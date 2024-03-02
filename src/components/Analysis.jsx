import React from 'react'
import labtob from '../assets/laptop.jpg'

const Analysis = () => {
    return (
        <div className='w-full px-8 py-16 bg-white '>
            <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img src={labtob} alt="labtob" className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col items-start justify-center gap-2 md:gap-3'>
                    <p className='font-bold text-green-400 uppercase text-md md:text-2xl'>Data analysis dashbord</p>
                    <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>Manage Data Analysis Centrally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Velit molestias quidem non unde! Culpa itaque sed voluptate,
                        dicta mollitia expedita asperiores! Accusantium dolore cumque
                        magni temporibus officia quos, enim dolorum!
                    </p>
                    <button className='px-4 py-2 bg-black rounded-lg w-[200px] mx-auto md:mx-0 text-green-500 text-[17px] font-bold'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analysis