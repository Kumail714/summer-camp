import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Section5 = () => {
  return (
    <>
    <div className='flex md:flex-row flex-col w-full'>
      
     
    <div className=' md:w-1/2 w-full bg-white md:p-8 px-4 py-8  '> 
    <h1 className=' md:text-5xl text-3xl md:text-start text-center font-bold mt-14 mb-10 '>Meet The Mountain Campground!</h1>
    <p className=' text-xl text-gray-600 md:w-10/12 w-full md:text-start md:mt-10 text-center leading-7  '>Sed a dui at sapien porttitor plpends see rutru morem efficitur nibh coent um aci Nam lorem libero, impmafrm entumy vehicula nulla.</p>
    <div className=' md:mt-10 grid md:grid-cols-4 grid-cols-1 md:w-[141%] w-full md:gap-0 gap-5  relative  '>
       <GridItems txt={'Tents Rent'} imgee={'src/images/camping-list-3.png'}/>  
       <GridItems txt={'Firewoods'} imgee={'src/images/service-icon7.png'}/>  
       <GridItems txt={'Accessories'} imgee={'src/images/service-icon7.png'}/>  
       <GridItems txt={'Food Stands'} imgee={'src/images/food-stand.png'}/>  
       <GridItems txt={'Swimming Pool'} imgee={'src/images/service-icon6.png'} color='bg-[#33c8c6]'/>  
    </div>
      
    </div>
    <div className=''>
      <img src="src/images/campground-column-img.jpg" alt="" />
    </div>
      
    </div>
     
     <section>
        <div className=' flex md:flex-row flex-col w-full mt-20 '>
          <div className='md:w-1/2 w-full mt-10 md:mt-0 md:p-14'>
            <img src="src/images/territory-img.png" alt="" />
          </div>
          <div className='md:w-1/2 w-full  bg-white '>
            <div className='flex flex-col md:items-start items-center md:p-[60px]  '>
            <h5 className=' text-[#ff9600] md:text-start text-center  text-xl mb-4 mt-10'>Map Info</h5>
            <h1 className=' md:text-4xl text-3xl font-bold uppercase mb-7 md:text-start text-center '>overview our camp territory</h1>
            <p className=' md:text-start text-center text-gray-500 mb-7 md:text-[18px] text-[18px]'>Sed a dui at sapien porttior plpends see rutru morem efficitur nibh coentu aci Nam lorem libero, impmafrm entumy vehicula nulla</p>
            <div className='flex flex-col items-start md:gap-4   font-semibold text-[18px] mb-5'>
               <ArrowAndItems icon={<FaAngleRight/>} text={'We Teach Your Kids that Responibility is Fun'}/>
                     <ArrowAndItems icon={<FaAngleRight/>} text={'The Widest Range of Activities for Everyone'}/>
                     <ArrowAndItems icon={<FaAngleRight/>} text={'Only the Best Equipment and Supplies for Your'}/>
            </div>
            
            <button className='  hover:bg-black text-white text-xl font-semibold  bg-[#ff9600] w-44 p-3 rounded-[30px] mt-5' >Find out more</button>
           
            </div>
            <div className='flex justify-end md:-mt-5 mt-7 md:w-full w-[90%] ml-5 md:ml-0'>
              <img src="src/images/territory-camp.png" alt="" />
            </div>
          </div>
        </div>
     </section>
     
    </>
  )
}




export default Section5

const GridItems = ({txt , imgee , color=''}) =>{
   return(
        <div className={`${color||'bg-white '} md:shadow-lg    transition-all duration-300 team  flex flex-col items-center gap-7 py-7 hover:bg-[#ff9600] hover:text-white md:px-2 `}>
                <img  className='filter h-20' src={imgee} alt="" />
                <h1 className='md:text-2xl text-xl  text-center'>{txt}</h1>
                </div>
                )
               }



               const ArrowAndItems = ({icon , text}) =>{

                return (
                  
                  <div className='flex items-center justify-center md:gap-7  md:p-0 px-3 py-2' >
                   <h1 className=' text-[#ff9600]'>{icon} </h1>  
                  <h1 className='items-center pl-4 md:pl-0 '>{text} </h1>
                 
                  </div>
                 
                )
               }          