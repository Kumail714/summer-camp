import React from 'react'

import { FaAngleRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-[#14212a] text-[#d6d8de] h-full px-8  '>
     <div>
        <div className='flex   md:flex-row flex-col gap-9 md:fl justify-between items-center md:px-5 md:py-11 py-12 border-b border-b-[#8c8f95] '>
        <img className='w-52' src="src/images/Footer-logo.png" alt="" />
          <div className='flex gap-2'>
          <FooterIcon iconss={<FaFacebookF/>} />
          <FooterIcon iconss={<FaTwitter/>}/>
          <FooterIcon iconss={<FiInstagram/>}/>
          <FooterIcon iconss={<TfiYoutube/>}/>
          <FooterIcon iconss={<FaLinkedin/>}/>
          
          </div>
        </div>
     </div>
     <div className='flex md:flex-row flex-col w-full md:px-8 md:py-14 md:gap-4 gap-8 border-b border-b-[#8c8f95] '>
       <div className=' flex flex-col gap-9 md:w-[25%]'>
        <h1 className=' text-2xl font-bold text-white'>About Us</h1>
        <p className=' text-[16px] leading-7'>Suspendisse interdum, nisi nec effiitur auctor, odio lcongue ligula, se sodales tortor turpis at elit. Aliquam iacipsum ut odio variusid interdum lac dictum. Mauris a maximusey dolovestibulum. Morbi non vestibulum nisi. Isuscipitiy felis sollicitudin venenatis molestieay</p>
       </div>
       <div className='   flex flex-col  md:w-[25%]'>
        <h1 className='text-white ml-5 text-2xl font-bold'>Camp Activities</h1>
         <div className='md:px-5 md:py-10 flex flex-col md:gap-3 items-start '>
            <ArrowAndTxt text={'Team & Individual Sports'}/>
            <ArrowAndTxt text={'Performing & Creative Art'}/>
            <ArrowAndTxt text={'Waterfront Activities'}/>
            <ArrowAndTxt text={'Special Events & Treaps'}/>
            <ArrowAndTxt text={'Sunbathing'}/>
            <ArrowAndTxt text={'Summer Fire'}/>
         </div>
       </div>
       <div className='   flex flex-col  md:w-[25%]'>
        <h1 className='text-white ml-5 text-2xl font-bold'>Quick Links</h1>
         <div className='md:px-5 md:py-10 flex flex-col md:gap-3 items-start '>
            <ArrowAndTxt text={'Home'} color='text-[#ff9600]'/>
            <ArrowAndTxt text={'About'}/>
            <ArrowAndTxt text={'Activities'}/>
            <ArrowAndTxt text={'Blog'}/>
            <ArrowAndTxt text={'Shop'}/>
            <ArrowAndTxt text={'Contact'}/>
         </div>
       </div>
       <div className=' md:w-[25%] flex flex-col gap-6 px-7 '>
       <h1 className='text-white text-2xl font-bold'>Contact Info</h1>
       <p className='leading-7 text-[15px] mt-5'>Street 238,52 tempor
       Donec ultricies mattis nulla, suscipit risus tristique ut.</p>
       <div className='flex flex-col gap-3'>
        <p>Phone:  1.800.555.6789</p>
        <p>PE-mail: support@sitename.com</p>
        <p>Website: sktthemes.net</p>
       </div>
       </div>
     </div>
        <div className='flex md:flex-row flex-col justify-between text-[15px] items-center  py-9'>
     <h1 className='text-center'>© Copyright 2021 <span className='text-[#ff9600]'>The Summer Camp.</span> All Rights Reserved</h1>
      <h1>Design by <span className='text-[#ff9600]'>SKT Themes</span></h1>       
        </div> 
    </div>
  )
}

export default Footer


const FooterIcon = ({iconss})=>{
    return (
     <div className=' flex justify-center items-center  bg-[#151515] hover:bg-[#ff9600] h-14 w-14 rounded-[50px]'>{iconss}</div>
    )
}

const ArrowAndTxt = ({text , color='text-[#d6d8de]'}) =>{

    return (
      
      <div className={` ${color} cursor-pointer hover:text-[#ff9600] flex items-center justify-center md:gap-7  md:p-0 px-3 py-2`} >
       <h1 className=''><FaAngleRight/> </h1>  
      <h1 className=' items-center pl-4 md:pl-0 '>{text} </h1>
     
      </div>
     
    )
   }          