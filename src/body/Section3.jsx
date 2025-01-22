import React from 'react'
import abc from '../images/slider1.jpg'

const Section3 = () => {
  return (
    <div className='p-7'>
    <div className=' md:flex md:mt-10'>
      <div className='md:w-[50%] w-full  h-full md:p-7  '>
        <div className=' flex flex-col md:text-start text-center    '>
            <h3 className='w-full text-3xl md:text-2xl md:text-start text-center  gap-7  mt-5 font-semibold text-[#ff9600] md:mb-7 mb-4'>Our Benefits</h3>
            <h1 className='   md:text-5xl text-4xl font-bold mb-7'>What You Get</h1>
            <p className='   md:text-[18px] text-[17px] md:text-start text-center text-gray-600 '>Sed a dui at sapien porttitor placer pendssee rutrumo efficitur nibh condiment aci Nam lorem.</p>
            </div>
            <div className=' flex flex-col '>
            <div className=' flex md:flex-row flex-col items-center md:justify-start  justify-center md:text-start text-center md:gap-9 gap-5 mt-5'>
              <div><img src="src/images/benefit-icon1.png" alt="" /></div>
              <div className=' flex flex-col gap-3  w-[300px]'>
                <h1 className='  text-[20px] font-semibold   '>Memories & Friendship</h1>
                <p className=' text-[18px] text-gray-600'>Sed a dui at sapien porttitor placend rutrumo efficitu.</p>
              </div> 
              </div>  
              <div className=' flex md:flex-row flex-col items-center md:justify-start  justify-center md:text-start text-center md:gap-9 gap-5 mt-5'>
              <div><img src="src/images/benefit-icon2.png" alt="" /></div>
              <div className='  flex flex-col gap-3  w-[300px]'>
                <h1 className='text-[20px]  font-semibold   '>Building Self-Esteem</h1>
                <p className=' text-[18px] text-gray-600'>Sed a dui at sapien porttitor placend rutrumo efficitu.</p>
              </div> 
              </div> 
              <div className=' flex md:flex-row flex-col items-center md:justify-start  justify-center md:text-start text-center md:gap-9 gap-5 mt-5'>
              <div><img src="src/images/benefit-icon1.png" alt="" /></div>
              <div className=' flex flex-col gap-3  w-[300px]'>
                <h1 className='  text-[20px] font-semibold   '>Healthy Aerobic Exercise</h1>
                <p className=' text-[18px] text-gray-600'>Sed a dui at sapien porttitor placend rutrumo efficitu.</p>
              </div> 
              </div> 
              
            </div>
      </div>
     
      <div className=' h-full mt-10 '>
      <img src="src/images/benefit-img.png" alt="" /> 
   </div>
    </div>
   
  
    </div>
    
  )
}

export default Section3


{/* <img className=' absolute  w-10/12 h-full object-cover z-20  top-0 left-0' src={abc} alt="" />
<img className=' ring-8 ring-white absolute w-auto h-36 z-30 top-1/2 -right-5 -translate-y-1/2' src={abc} alt="" />
<img className=' ring-8 ring-white  absolute w-auto h-52 z-50  -bottom-20 right-2' src={abc} alt="" />
<img className=' absolute w-auto h-52 top-3 left-3 ' src={abc} alt="" />
<div className=' bg-[#ff9600] h-32 w-32 absolute  bottom-14 -right-2 '></div> */}