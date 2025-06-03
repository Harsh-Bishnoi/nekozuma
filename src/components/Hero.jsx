import React from 'react'
import { Discord, Twitter } from '../utils/icons'
import BlueImg from '../assets/images/png/bg.png'

const Hero = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="max-w-[880px] w-full px-3">
                    <div className="flex sm:justify-end items-center flex-wrap">
                        <a href="#">
                            <img className='w-full max-w-[300px] md:max-w-[424px] absolute start-0 top-0' src={BlueImg} alt="logo" /></a>
                        <ul className=' gap-8 flex items-center justify-end max-sm:pt-22 py-5 md:py-8.5'>
                            <li><a className='font-sarabun font-normal text-base leading-[100%] text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#swiper">Overview</a></li>
                            <li><a className='font-sarabun font-normal text-base leading-[100%] text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#story">Story</a></li>
                            <li><a className='font-sarabun font-normal text-base leading-[100%] text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#team">Team</a></li>
                            <div className="flex gap-4.5">
                                <li className='hover:scale-110 transition-all duration-200 ease-linear'><a href="https://discord.com/" target='_blank'><Discord /></a></li>
                                <li className='hover:scale-110 transition-all duration-200 ease-linear'><a href="https://x.com/" target='_blank'><Twitter /></a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero