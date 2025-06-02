import React from 'react'
import Hero from './Hero'
import Line from './common/Line'
import Description from './common/Description'
import Img_1 from '../assets/images/png/header-img.png'
import LeftLighting from '../assets/images/png/left-lighting.png'
import RightLighting from '../assets/images/png/right-lighting.png'

const Header = () => {
    return (
        <>
            <div className="relative min-h-[635px]">
                <div className="w-full">
                    <Hero />
                </div>
                <img className='absolute left-0 bottom-0 hidden sm:block max-h-[411px]' src={LeftLighting} alt="left-lighting" />
                <img className='absolute right-0 bottom-0 hidden sm:block z-1' src={RightLighting} alt="right-lighting" />
                <div className="max-w-[880px] px-3 w-full mx-auto">
                    <div className="flex flex-wrap -mx-3 flex-row items-center mt-[50px] md:mt-[100px] lg:mt-[164px]">
                        <div className="w-full px-3">
                            <Line />
                            <h1 className='font-Franklin font-normal text-[56px] sm:text-[64px] leading-[100%] text-[#3586FF]'>NEKOZUMA</h1>
                            <Description DescriptionClass={"lg:max-w-[510px] pt-3"} DescriptionText={"The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."} />
                            <button className='font-sarabun font-normal cursor-pointer text-base leading-[130%] mt-[43px] text-white py-2 px-6 bg-[#245AAB] rounded-[9px]'>Connect Wallet</button>
                        </div>
                        <div className="w-full px-3">
                            <img className='w-full max-w-[557px] lg:absolute right-0 bottom-0' src={Img_1} alt="header-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header