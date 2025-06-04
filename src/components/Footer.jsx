import React from 'react'
import SubHeading from './common/SubHeading'
import { Discord, Twitter } from '../utils/icons'
import FooterLeftLighting from '../assets/images/png/footer-left-lighting.png'
import FooterRightLighting from '../assets/images/png/footer-right-lighting.png'

const Footer = () => {
    return (
        <>
            <div className="flex bg-[#245AAB] py-11.5 relative min-h-[174px]">
                <img className='absolute left-0 bottom-0 max-w-[230px] sm:max-w-[350px] xl:max-w-[436px] pointer-events-none' src={FooterLeftLighting} alt="leftlighting" />
                <img className='absolute bottom-0 right-0 max-w-[230px] sm:max-w-[350px] md:max-w-[460px] pointer-events-none xl:max-w-[575px]' src={FooterRightLighting} alt="rightlighting" />
                <div className="max-w-[880px] px-3 mx-auto z-1">
                    <a href='/'><SubHeading subHeadingClass={"text-white font-franklin tracking-[2.20px] !text-[21.64px] text-center mb-6"} subHeadingText={"NEKOZUMA"} /></a>
                    <div className="flex gap-6 mx-auto justify-center">
                        <a className='hover:scale-110 transition-all duration-200 ease-linear footer-svg-size' href="https://discord.com/" target='_blank'><Discord /></a>
                        <a className='hover:scale-110 transition-all duration-200 ease-linear footer-svg-size' href="https://x.com/" target='_blank'><Twitter /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer