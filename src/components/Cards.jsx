import React from 'react'
import single from '../assets/single.png'
import souble from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = ({ image, title, price }) => {
    return (

        <div className='flex flex-col w-full p-4 my-8 text-center duration-500 border shadow-xl bg-gray-50 rounded-xl hover:scale-105'>
            <img src={image} alt="single" className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white' />
            <h2 className='py-6 text-2xl font-bold sm:text-3xl'>{title}</h2>
            <p className='text-3xl font-bold text-green-500 md:text-4xl'>{price}$</p>
            <div className='mt-2 font-medium'>
                <p className='w-full py-1 mt-6 font-serif border-b shadow-sm'>No tax asked</p>
                <p className='w-full py-1 font-serif border-b shadow-sm'>Monthly profits</p>
                <p className='w-full py-1 font-serif border-b shadow-sm'>Limitless transactions</p>
            </div>
            <button type='button' className='bg-gray-300 m-auto rounded-md font-serif font-bold my-6 w-[170px] py-3 px-6'>Join Now</button>
        </div>

    )
}

export default Cards