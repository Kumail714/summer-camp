import React from 'react'

const Section8 = () => {
  return (
   
    <div className=' md:p-16 p-3 bg-white'>
      <h1 className='text-center p-10 md:text-5xl text-3xl font-bold md:pl-80 md:pr-80'>Stay up to date with our fresh News</h1>
      <div className='flex md:flex-row flex-col gap-7  '>
        <Section8Copm imgee={"src/images/post-img1.jpg"} txt={'The Favorite Family Holidays'}/>
        <Section8Copm imgee={"src/images/post-img2.jpg"} txt={'Dive Into Summer With Friends'}/>
        <Section8Copm imgee={"src/images/post-img3.jpg"} txt={'Guide to Power for Camping'}/>
      </div>
    </div>
 
  )
}

export default Section8

 
const Section8Copm = ({imgee , txt}) => {

    return(
     <div className=' md:pt-16 pt-14 w-[100%] '>
        <img src={imgee} alt="" />
         <div className='w-full  flex  justify-center md:gap-10 gap-16 mt-7 '>
            <div>
                <h1 className=' text-5xl font-bold'>8</h1>
                <h1 className=' text-[16px] ' >March</h1>
            </div>
            <div >
                <h1 className='  text-[#ff9600]  '>By summercamp1</h1>
                <h1 className=' cursor-pointer transition  duration-300 hover:text-[#ff9600] font-bold w-[85%] text-xl'>{txt}</h1>
            </div>
         </div>
     </div>
    )
}