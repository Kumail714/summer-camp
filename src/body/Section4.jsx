import React from 'react'
import Section1 from './Section1'

const Section4 = () => {
  return (
   
     <div className=''>
     
     <section>
   <div className='flex md:flex-row flex-col  ' >
     <div className=' relative cursor-pointer group '>
       <img  src="src/images/project-1.jpg" alt="" />
       <h1 className=' group-hover:text-[#ff9600]  text-white absolute bottom-10 md:left-20 left-20 text-3xl font-bold '>Private Cottages</h1>
     </div>
     <div className=' relative cursor-pointer  group '>
       <img  src="src/images/project-2.jpg" alt="" />
       <h1 className=' group-hover:text-[#ff9600]   md:hover:text-[#ff9600] text-white absolute bottom-10 md:left-20 left-14  text-3xl font-bold '>Tents With Territory</h1>
     </div>
     <div className=' relative cursor-pointer group  '>
       <img  src="src/images/project-3.jpg" alt="" />
       <h1 className='  group-hover:text-[#ff9600]  text-white absolute bottom-10 md:left-20 left-20 text-3xl font-bold '>Compact Trailers</h1>
     </div>
     </div>
     </section> 
     <section>
    <div className='p-5 md:mt-16 mt-5'>
        <div className='flex justify-center items-center md:pl-80 md:pr-80'>
            <h1 className=' uppercase md:text-5xl text-2xl font-bold text-center mb-10'>reasons to join us this Camping</h1>
        </div>
        <div className=' flex flex-row gap-5  p-10 flex-wrap   '>
        <ImgAndText imgeee={`src/images/camping-list-1.png`} txt={'Quick Roadside Assistance'} />
        <ImgAndText imgeee={`src/images/camping-list-2.png`} txt={'Free '}  txt2={'Wifi'}/>
        <ImgAndText imgeee={`src/images/camping-list-3.png`} txt={'Sports'} txt2='Grounds'  />
        <ImgAndText imgeee={`src/images/camping-list-4.png`} txt={'Pets'} txt2='Friendly' />
        <ImgAndText imgeee={`src/images/camping-list-5.png`} txt={'Relax & Enjoy'} txt2='Holidays' />
        </div>
    </div>
     </section>
    </div>
  )
}




export default Section4

   const ImgAndText = ({imgeee,txt , txt2=''}) =>{
    return (
      <div className='  team flex flex-col md:gap-7 gap-14 w-full md:w-[calc(20%-20px)] sm:w-[calc(33.333%-20px)]  mb-10 justify-center items-center '>
       <div className=' typo  transition-all duration-300  flex items-center justify-center hover:bg-[#ff9600]  bg-white w-52 h-52 rounded-[100px] '>
        <img className=' filter  h-20 w-20 ' src={imgeee} alt="" />
        
       </div>
       <div>
       <h1 className=' text-[20px] font-bold text-center '>{txt}</h1>
       <h1 className=' text-[20px] font-bold text-center '>{txt2}</h1>
       </div>
      </div>
    )
   }




{/* <h1 className='md:hidden text-white absolute top-10 left-16 text-4xl font-bold'>Where To Stay</h1> */}