import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../sec7.swiper.css';

// import required modules
import {Navigation, Pagination  } from 'swiper/modules';

const Section7 = () => {
  return (
    
    <div className='md:pt-52 pt-14 '>
    <div className=' flex flex-col justify-center items-center gap-4 '>
   <h1 className='text-[#ff9600] text-2xl font-semibold'> Feedback</h1>
   <h1  className=' md:pl-64 md:pr-64  md:text-5xl text-3xl text-center font-bold'>Trusted By More Than 25,000 Travelers Every Year</h1>
   </div> 
   <div className='sec8 flex gap-8 md:mt-24 md:p-10 p-1 md:items-center md:justify-center'>
   <Swiper 
      
        loop={true} 
        navigation={true}
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup:1
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup:2
          },
          // 1024: {
          //   slidesPerView: 1,
           
          // },
        }}
        modules={[Pagination , Navigation ]}
        className="mySwiper"
      >
        <SwiperSlide><ForSwiper txt1={'John Doe'} imeg1={'src/images/person1.jpg'}/></SwiperSlide>
        <SwiperSlide><ForSwiper txt1={'kristen'} imeg1={'src/images/person2.jpg'}/></SwiperSlide>
        <SwiperSlide><ForSwiper txt1={'John Doe'} imeg1={'src/images/person3.jpg'}/></SwiperSlide>
        <SwiperSlide><ForSwiper txt1={'Alexa'} imeg1={'src/images/person4.jpg'}/></SwiperSlide>
        <SwiperSlide><ForSwiper txt1={'David'} imeg1={'src/images/person5.jpg'}/></SwiperSlide>
        <SwiperSlide><ForSwiper txt1={'Prince'} imeg1={'src/images/person6.jpg'}/></SwiperSlide>
   
       
       
      </Swiper>
   </div> 
    </div>
  )
}

export default Section7
 


const ForSwiper = ({imeg1 , txt1 , txt2}) =>{

  return(
    <div className='flex flex-col bg-white w-[550px] gap-10 md:p-10 p-6  rounded-md md:shadow-lg shadow-sm  '>
     <div className='flex justify-between'>
       <div className='flex gap-5 md:justify-start md:items-center ' >
       <img className=' rounded-[50%] w-16 h-16' src={imeg1} alt="" />
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold'>{txt1}</h1>
        <h1 className='text-[16px]'>Happy Customer</h1>
      </div>
       </div>
      <img className=' h-16 w-16' src={"src/images/qoute-img.png"} alt="" />
     
    </div>
    <div>
      <p className=' text-gray-500 text-[21px]'>Volutpat sit amet leo id, efficitur mattis turpisune cing bibendum est. Proin ligula nisl, mattiss ollicit udin and magnaet, rhon venena ipsum. Maecen as in tempor ipsum.</p>
    </div>
    
  
    </div>
  )
}