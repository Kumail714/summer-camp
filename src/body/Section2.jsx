import React from 'react'

const Section2 = () => {
  return (
    <div className='w-[100%] md:flex p-10 gap-9 '>

     <div className='md:w-[50%] flex flex-col gap-9 md:text-start text-center md:items-start items-center mt-14  '>
      <div><h1 className=' md:text-5xl text-4xl font-bold md:w-96 text-center   font-roboto md:text-start '>Camp Activities</h1></div>
      <p className='md:w-120  text-[20px] text-gray-600   '>Sed a dui at sapien porttitor plpends see rutru morem efficitur nibh coentum aci Nam lorem libero, impmam entumy vehicula nulla.</p>
      <button className='   w-[200px] h-14 hover:bg-black text-white text-base font-semibold  bg-[#ff9600] px-6 py-4 rounded-[30px] mt-5' >View All Activities</button>
     <img className='mt-10 ' src="src/images/activity-column-img.jpg" alt="" />
     </div>
     <div className='md:w-[50%] md:flex-row flex flex-col gap-7 mt-24 '>
        <div className=' flex flex-col gap-7'>
            <div className='transition-all duration-300 team  bg-white flex flex-col items-center gap-7 py-12 hover:bg-[#ff9600] hover:text-white md:px-2 '>
                <img className='filter' src="src/images/service-icon1.png" alt="" />
                <h1 className='md:text-2xl text-xl font-bold text-center'>Team & Individual Sports</h1>
            </div>
            <div className=' h-full transition-all duration-300 team hover:bg-[#ff9600] hover:text-white  bg-white flex flex-col items-center gap-7 py-12 md:px-2  '>
                <img className='filter' src="src/images/service-icon3.png" alt="" />
                <h1 className=' md:text-2xl  text-xl font-bold text-center md:px-5'>Waterfront Activities</h1>
            </div>
        </div>
        <div className='md:w-[50%]  '>
        <div className=' md:items-stretch flex flex-col gap-7'>
            <div className=' transition-all duration-300 team hover:bg-[#ff9600] hover:text-white bg-white flex flex-col items-center gap-7 py-12  md:px-2 '>
                <img className='filter' src="src/images/service-icon2.png" alt="" />
                <h1 className=' md:text-2xl text-xl font-bold text-center'>Performing & Creative Art</h1>
            </div>
            <div  className=' transition-all duration-300 team  hover:bg-[#ff9600] hover:text-white  bg-white flex flex-col items-center gap-7 py-12 md:px-2  '>
                <img className='filter' src="src/images/service-icon4.png" alt="" />
                <h1 className='md:text-2xl text-xl font-bold text-center'>Special Events & Treaps</h1>
            </div>
        </div>

        </div>
     </div>
    
    </div>
  )
}

export default Section2
