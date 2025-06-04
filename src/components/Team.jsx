import React from 'react'
import SubHeading from './common/SubHeading'
import { TEAM_DATA } from '../utils/helper'
import HeaderBorder from './common/HeaderBorder'
import { Twitter } from '../utils/icons'

const Team = () => {
    return (
        <div id='team' className="flex justify-center items-center mb-10 sm:mb-16">
            <div className="max-w-[880px] mt-10 sm:mt-[61px] mx-auto px-3">
                <HeaderBorder lineClass="flex mx-auto" />
                <SubHeading subHeadingClass={"mt-7 sm:mt-14"} subHeadingText={"Team"} />
                <div className="flex flex-wrap -mx-3 flex-row justify-center items-center mt-6 sm:mt-9">
                    {TEAM_DATA.map((item, index) => (
                        <div key={index} className="max-w-[350px] md:max-w-[320px] lg:max-w-[222px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-7 md:mb-9">
                            <img className="pointer-events-none w-full" src={item.img} alt={item.name} />
                            <h3 className="font-franklin text-2xl leading-[27px] text-center pt-2 md:pt-[23px] text-[#3586FF]">
                                {item.job}
                            </h3>
                            <p className="font-sarabun mx-auto text-sm text-center leading-[18px] pt-[9px] text-[#D4E5FF] max-w-[202px]">
                                {item.name}
                            </p>
                            <p className="font-sarabun mx-auto text-sm text-center leading-[18px] pt-2 text-[#D4E5FF] md:max-w-[202px]">
                                {item.para}
                            </p>
                            <a className="flex justify-center mx-auto mt-4 max-w-max hover:scale-110 transition-all duration-200 ease-linear team-svg-size" href="https://x.com/" target="_blank" >
                                <Twitter />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team