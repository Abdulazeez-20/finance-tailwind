import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    const toggleHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div className='flex items-center justify-between h-24 px-4 mx-auto text-white'>
            <h1 className='text-3xl font-bold text-green-400 '>Finance</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Chart</li>
                <li className='p-4'>Associates</li>
                <li className='p-4'>Contacts</li>
            </ul>
            <div onClick={toggleHandler}>
                {!toggle ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={toggle ? 'fixed top-0 left-0 w-[20%] h-full border-r ease duration-500 border-r-green-500' : 'fixed top-[-90%]'}>
                <ul className='pt-24 ml-6 uppercase'>
                    <li className='p-4 border-b border-b-gray-600'>Home</li>
                    <li className='p-4 border-b border-b-gray-600'>About</li>
                    <li className='p-4 border-b border-b-gray-600'>Chart</li>
                    <li className='p-4 border-b border-b-gray-600'>Associates</li>
                    <li className='p-4'>Contacts</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar