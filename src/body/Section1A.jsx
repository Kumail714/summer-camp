import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Section1A = () => {
  return (
    <div className=' md:flex-row  flex-col  flex w-[100%]'>
      <div className='md:w-[35%] h-full w-[100%] mx-auto '>
        <div className=' p-5 mt-24 flex flex-col md:gap-12 gap-6 items-center justify-center  '>
            <h1 className='text-4xl font-bold  font-roboto md:text-start text-center'>We are the best summer camp</h1>
            <p className='text-[20px] font-semibold text-center md:text-start  '>Sed a dui at sapien porttitor plpends see rutru morem efficitur nibh coent um aci Nam lorem libero, impmafrm entumy vehicula nulla.</p>
            <button className=' hover:bg-black text-white text-xl font-semibold  bg-[#ff9600] w-44 p-3 rounded-[30px] mt-5' >Find out more</button>

        </div>
      </div>
      <div className=' md:w-[25%] w-full h-[625px] bg-[#ff9600] '>
      <div className=' mt-24 p-5 flex flex-col gap-4 text-white font-semibold text-[18px]'>
      <h1 className='text-5xl font-bold text-center md:text-start '>Facilities</h1>
     
       <ArrowAndItems icon={<FaAngleRight/>} text={'Boys & Girls'}/>
       <ArrowAndItems icon={<FaAngleRight/>} text={'Ages 7-15'}/>
       <ArrowAndItems icon={<FaAngleRight/>} text={'Team & Individual Sports'}/>
       <ArrowAndItems icon={<FaAngleRight/>} text={'Performing & Creative Arts'}/>
       <ArrowAndItems icon={<FaAngleRight/>} text={'Waterfront Activities'}/>
       <ArrowAndItems icon={<FaAngleRight/>} text={' Special Events & Trips'}/>
       <ArrowAndItems icon={<FaAngleRight/>} text={' Professional Staff'}/>
      
      
      </div>
        
      </div>
      <div className=' md:w-[40%] w-full h-full bg-red'><img src="src/images/welcome-img.jpg" alt="" /></div>
    </div>
  )
}

export default Section1A


 const ArrowAndItems = ({icon , text}) =>{

  return (
    <h1 className='flex items-center gap-4 pl-5 md:pl-0'>{icon}  {text} </h1>
  )
 }