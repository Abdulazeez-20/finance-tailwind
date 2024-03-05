import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGitSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='w-max-[1240px] mx-auto py-16 px-4 gap-8 grid md:grid-cols-3 items-center text-gray-300'>
            <div>
                <h1 className='text-3xl font-bold text-green-400 '>Finance</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non temporibus ea nostrum atque optio odit cumque quos, tempora in et. </p>
                <div className='flex my-5 text-5xl justify-evenly'>
                    <FaGitSquare />
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaTwitterSquare />
                    <FaDribbbleSquare />
                </div>
            </div>
            <div className='flex justify-around col-span-2'>
                <div>
                    <h5 className='font-serif text-lg text-green-400 border-b text'>Support</h5>
                    <ul>
                        <li className='py-2'>Document</li>
                        <li className='py-2'>links</li>
                        <li className='py-2'>Chat</li>
                    </ul>
                </div>

                <div>
                    <h5 className='font-serif text-lg text-green-400 border-b text'>Legal</h5>
                    <ul>
                        <li className='py-2'>Privacy</li>
                        <li className='py-2'>Rules</li>
                        <li className='py-2'>Terms</li>
                        <li className='py-2'>Policy</li>
                    </ul>
                </div>
                <div>
                    <h5 className='font-serif text-lg text-green-400 border-b text'>Company</h5>
                    <ul>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Jobs</li>
                    </ul>
                </div>
                <div>
                    <h5 className='font-serif text-lg text-green-400 border-b text'>About</h5>
                    <ul>
                        <li className='py-2'>Analysis</li>
                        <li className='py-2'>marketing</li>
                        <li className='py-2'>Pricing</li>
                        <li className='py-2'>Period</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer