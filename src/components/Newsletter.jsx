import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full px-4 py-16 text-white'>
            <div className='w-max-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='py-2 text-xl font-bold sm:text-2xl md:text-4xl'>Tips & Tricks to Optimaze Your flow !</h1>
                    <p className='pb-2 pl-2'>sign up for mor information</p>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-between sm:flex-row'>
                        <input type="email" placeholder='Enter email' className='w-full p-2 text-black rounded-md' />
                        <button type='button' className='px-4 ml-2 py-2 my-2 w-[150px] font-bold rounded-lg text-black bg-green-500'>Join Us</button>
                    </div>
                    <p>you are in good hands read our <span className='text-green-400'>privacy policy</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter