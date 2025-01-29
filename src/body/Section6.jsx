import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { FaChevronLeft , FaChevronRight } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const Section6 = () => {
  return (
    
    <div className='   relative bg-[url(src/images/slide-bg-img.jpg)] md:h-screen h-[450px] '>
             <div className='  absolute md:top-24 top-10 md:left-1/2 left-16 md:gap-4  md:-translate-x-1/2  flex flex-col  items-center justify-center'>
            <h3 className='  text-white text-[18px] font-bold  '>Watch our Summer Slideshow</h3>
            <h1 className=' text-white text-3xl font-bold '>Camping Gallery</h1>
            </div>
         <div className='sec7 absolute md:-bottom-32 bottom-32  md:left-1/2 md:-translate-x-1/2  md:w-10/12 w-[100%] md:h-[80%] h-[200px] '>
         <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="src/images/slide-img1.jpg" alt="" className='  ring-[15px] ring-white ' /></SwiperSlide>
        <SwiperSlide><img src="src/images/slide-img2.jpg" alt="" className='  ring-[15px] ring-white ' /></SwiperSlide>
        <NextButton icon={<FaChevronLeft/>}/>
        <PrevButton icon={<FaChevronRight/>}/>
      </Swiper>
     
         </div>
    </div>
    
  )
}

export default Section6



const NextButton = ({icon}) => {
  const swiperRef = useSwiper();
  return (
    <button onClick={() => swiperRef.slideNext()} className=' text-white md:pl-12 flex justify-center items-center text-xl absolute top-1/2  md:-left-[22px] md:-translate-y-1/2  z-30 bg-[#ff9600]  md:w-28 md:h-28  px-2 py-3 '>{icon}</button>
  )
}

const PrevButton = ({icon}) => {
  const swiperRef = useSwiper();
  console.log(swiperRef)
  return (
    <button onClick={() => swiperRef.slidePrev()} className=' flex items-center justify-center text-white   text-xl absolute top-1/2  md:-right-[22px] -right-0 md:-translate-y-1/2  z-30 bg-[#ff9600]  md:w-28  md:h-28 px-2 py-3  '>{icon}</button>
  )
}