import React from 'react'
import SwiperImg1 from '../assets/images/png/swiper-img-1.png'
import SwiperImg2 from '../assets/images/png/swiper-img-2.png'
import SwiperImg3 from '../assets/images/png/swiper-img-3.png'
import SwiperImg4 from '../assets/images/png/swiper-img-4.png'
import SwiperImg5 from '../assets/images/png/swiper-img-5.png'
import SwiperImg6 from '../assets/images/png/swiper-img-6.png'
import SwiperImg7 from '../assets/images/png/swiper-img-7.png'
import SwiperImg8 from '../assets/images/png/swiper-img-8.png'
const Swiper = () => {
    const LeftSwiper = [SwiperImg1, SwiperImg2, SwiperImg3, SwiperImg4];
    const RightSwiper = [SwiperImg5, SwiperImg6, SwiperImg7, SwiperImg8];

    const InfiniteLeftSwiper = Array(100).fill(LeftSwiper).flat()
    const InfiniteRightSwiper = Array(100).fill(RightSwiper).flat()

    return (
        <div className="flex justify-center items-center flex-col overflow-hidden">
            <div className="flex animate-forwardScroll">
                {InfiniteLeftSwiper.map((item, index) => (
                    <div className='overflow-hidden' id={index}>
                        <img className='max-w-[200px] sm:max-w-[280px] md:max-w-[320px] object-cover transition-transform duration-300 ease-in-out hover:scale-110' src={item} alt="images" />
                    </div>
                ))}
            </div>
            <div className="flex animate-reverseScroll">
                {InfiniteRightSwiper.map((item, index) => (
                    <div className='overflow-hidden' id={index}>
                        <img className='max-w-[200px] sm:max-w-[280px] md:max-w-[320px] object-cover transition-transform duration-300 ease-in-out hover:scale-110' src={item} alt="images" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Swiper