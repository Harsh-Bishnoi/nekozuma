import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import storyImg from '../assets/images/png/story-img.png'
const Story = () => {
    return (
        <>
            <div id='story' className="flex justify-center items-center flex-col">
                <div className="max-w-[880px] max-lg:px-3 w-full">
                    <SubHeading subHeadingClass={"mt-10 sm:mt-12"} subHeadingText={"Story"} />
                    <Description descriptionClass={"text-center max-sm:text-sm pt-[23px]"} descriptionText={"Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos."} />
                    <Description descriptionClass={"text-center leading-[16px] text-sm pt-4 sm:pt-6 md:pt-9 w-full"} descriptionText={"However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated."} />
                </div>
                <img className='w-full object-cover pt-6 md:pt-9 lg:pt-14.5 max-h-[557px] max-2xl:max-h-[357px] pointer-events-none' src={storyImg} alt="story-img" />
            </div>
        </>
    )
}

export default Story