import React from 'react'
import Description from './common/Description'
import imgOne from '../assets/images/png/hero-img.png'
import leftLighting from '../assets/images/png/left-lighting.png'
import rightLighting from '../assets/images/png/right-lighting.png'
import Heder from './Header'
import HeaderBorder from './common/HeaderBorder'

const Hero = () => {
    return (
        <>
            <div className="relative min-h-[635px]">
                <div className="w-full">
                    <Heder />
                </div>
                <img className='absolute left-0 bottom-[-12px] hidden lg:block max-h-[411px] pointer-events-none' src={leftLighting} alt="left-lighting" />
                <img className='absolute right-0 bottom-0 z-1 pointer-events-none' src={rightLighting} alt="right-lighting" />
                <div className="max-w-[880px] px-3 w-full mx-auto">
                    <div className="flex flex-wrap -mx-3 flex-row items-center mt-[50px] md:mt-[100px] lg:mt-[164px]">
                        <div className="w-full px-3">
                            <HeaderBorder />
                            <h1 className='font-franklin text-[56px] sm:text-[64px] leading-[100%] text-[#3586FF]'>NEKOZUMA</h1>
                            <Description descriptionClass={"lg:max-w-[510px] pt-3"} descriptionText={"The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."} />
                            <button className='font-sarabun cursor-pointer leading-[130%] mt-6 md:mt-[43px] text-white py-2 px-6 bg-[#245AAB] rounded-[9px] hover:bg-white hover:text-[#245AAB] transition-all duration-200 ease-linear'>Connect Wallet</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <img className='w-full max-w-[510px] xl:max-w-[557px] lg:absolute right-0 bottom-0 pointer-events-none' src={imgOne} alt="header-img" />
                </div>
            </div>
        </>
    )
}

export default Hero