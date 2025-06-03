import React from 'react'
import Line from './common/Line'
import SubHeading from './common/SubHeading'
import { TEAM_DATA } from '../utils/helper'

const Team = () => {
    return (
        <div className="flex justify-center items-center mb-10 sm:mb-16">
            <div className="max-w-[880px] mt-10 sm:mt-[61px] mx-auto">
                <Line LineClass="flex mx-auto" />
                <SubHeading SubHeadingClass={"mt-7 sm:mt-14"} SubHeadingText={"Team"} />
                <div className="flex flex-wrap gap-6 mt-9 max-md:px-3">
                    {TEAM_DATA.map((item, index) => (
                        <div className='flex mx-auto flex-col w-full max-md:max-w-[320px] max-w-[202px] mb-3' id={index}>
                            <img className='pointer-events-none' src={item.img} alt={item.name} />
                            <h3 className='font-Franklin font-normal text-2xl leading-[27px] text-center pt-2 md:pt-[23px] text-[#3586FF]'>{item.job}</h3>
                            <p className='font-sarabun mx-auto font-normal text-sm text-center leading-[18px] pt-[9px] text-[#D4E5FF] max-w-[202px]'>{item.name}</p>
                            <p className='font-sarabun font-normal mx-auto text-sm text-center leading-[18px] pt-2 text-[#D4E5FF] md:max-w-[202px]'>{item.para}</p>
                            <a className='flex justify-center mx-auto mt-4 max-w-max hover:scale-110 transition-all duration-200 ease-linear' href="https://x.com/" target='_blank'>{<item.icon />}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team