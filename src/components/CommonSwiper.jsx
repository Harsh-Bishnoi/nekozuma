import React from 'react'
import swiperImgOne from '../assets/images/png/swiper-img-1.png'
import swiperImgTwo from '../assets/images/png/swiper-img-2.png'
import swiperImgThree from '../assets/images/png/swiper-img-3.png'
import swiperImgFour from '../assets/images/png/swiper-img-4.png'
import swiperImgFive from '../assets/images/png/swiper-img-5.png'
import swiperImgSix from '../assets/images/png/swiper-img-6.png'
import swiperImgSeven from '../assets/images/png/swiper-img-7.png'
import swiperImgEight from '../assets/images/png/swiper-img-8.png'
const CommonSwiper = () => {
    const LeftSwiper = [swiperImgOne, swiperImgTwo, swiperImgThree, swiperImgFour];
    const RightSwiper = [swiperImgFive, swiperImgSix, swiperImgSeven, swiperImgEight];

    const InfiniteLeftSwiper = Array(100).fill(LeftSwiper).flat()
    const InfiniteRightSwiper = Array(100).fill(RightSwiper).flat()

    return (
        <div id='overview' className="flex justify-center items-center flex-col overflow-hidden">
            <div className="flex animate-forwardScroll">
                {InfiniteLeftSwiper.map((item, index) => (
                    <div className='overflow-hidden group' id={index}>
                        <img className='max-w-[200px] sm:max-w-[280px] md:max-w-[320px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 pointer-events-none' src={item} alt="images" />
                    </div>
                ))}
            </div>
            <div className="flex animate-reverseScroll">
                {InfiniteRightSwiper.map((item, index) => (
                    <div className='overflow-hidden group' id={index}>
                        <img className='max-w-[200px] sm:max-w-[280px] md:max-w-[320px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 pointer-events-none' src={item} alt="images" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommonSwiper