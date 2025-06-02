import React from 'react'
import SubHeading from './common/SubHeading'
import { Discord, Twitter } from '../utils/icons'

const Hero = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="max-w-[880px] px-3 py-7 w-full">
                    <div className="flex justify-between items-center flex-wrap">
                        <a className="mr-8" href='#'><SubHeading SubHeadingClass={"text-white font-Franklin tracking-[2.20px] !text-[21.64px]"} SubHeadingText={"NEKOZUMA"} /></a>
                        <ul className='gap-6 sm:gap-8 flex items-center'>
                            <li><a className='font-sarabun font-normal text-base leading-[100%] text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Overview</a></li>
                            <li><a className='font-sarabun font-normal text-base leading-[100%] text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Story</a></li>
                            <li><a className='font-sarabun font-normal text-base leading-[100%] text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Team</a></li>
                            <div className="flex gap-4.5">
                                <li><a className='' href="https://discord.com/" target='_blank'><Discord /></a></li>
                                <li><a className='' href="https://x.com/" target='_blank'><Twitter /></a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero