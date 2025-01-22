import React, { useState } from 'react'
import Section1A from './Section1A';

const Section1 = () => {
const [currentImg , setCurrentimg] = useState('first');


  return (
    <>
    <div className=' md:h-screen h-[35vh] relative'>
      <img  className={` object-cover transition-all duration-500 w-full h-full absolute top-0 left-0  ${currentImg === 'first' ? 'opacity-100':'opacity-0' }`} src="src/images/slider1.jpg" alt="" />
      <img  className={` object-cover transition-all duration-300  w-full h-full absolute top-0 left-0  ${currentImg === 'second' ? 'opacity-100':'opacity-0' }`} src="src/images/slider3.jpg" alt="" />
      <img  className={` object-cover transition-all duration-250  w-full h-full absolute top-0 left-0  ${currentImg === 'third' ? 'opacity-100':'opacity-0' }`} src="src/images/slider2.jpg" alt="" />
      <div className=' flex items-center justify-center gap-4 absolute bottom-0 left-1/2 -translate-x-1/2   mb-7'>
        <button className={`  w-4 h-4 bg-white rounded-full ${currentImg === 'first' ? 'bg-yellow-400' : 'bg-red-400'} `} onClick={()=>setCurrentimg('first')}></button>
        <button className={` w-4 h-4 bg-white rounded-full ${currentImg === 'second' ? 'bg-yellow-400' : 'bg-red-400'} `} onClick={()=>setCurrentimg('second')}></button>
        <button className={` w-4 h-4 bg-white rounded-full ${currentImg === 'third' ? 'bg-yellow-400' : 'bg-red-400'} `} onClick={()=>setCurrentimg('third')}></button>
      </div>
      <div className=' w-full text-[20px] flex flex-col items-center md:text-[50px] font-bold text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <p className=' md:w-[45%] '> Family Time Weekend  & Picnic</p>

       <button className='  hover:bg-black md:text-xl text-base font-semibold  bg-[#ff9600]  md:py-3 md:px-10 px-5 py-2 rounded-[30px] mt-5' >Read More</button>
      </div>
      
    </div>
    <Section1A/>
   </>
  )
}

export default Section1


