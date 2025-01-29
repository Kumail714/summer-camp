import React from 'react'


const Section9 = () => {
  return (
   
    <div className='md:p-16 '>
     <div className='flex flex-col md:p-12 p-3 my-10 md:my-0  gap-3 items-center'>
        <h1 className='text-[#ff9600] pb-2 text-xl font-semibold '>Explore Together</h1>
        <h1 className='md:text-5xl text-[28px] font-bold uppercase '>Our Top Products</h1>
     </div>
     <div className='flex md:flex-row flex-col gap-8 '>
        <Section9Comp imgee={'src/images/product-img1.jpg'} txt={'Trekking Shoe'}/>
        <Section9Comp imgee={'src/images/product-img2.jpg'} txt={'Rechargeable Torch'}/>
        <Section9Comp imgee={'src/images/product-img3.jpg'} txt={'Portable Barbecue Oven'}/>
        <Section9Comp imgee={'src/images/product-img4.jpg'} txt={'Adventure Binocular'}/>
     </div>
    </div>
   
   
  )
}

export default Section9


const Section9Comp = ({imgee , txt}) => {
 
    return(
        <div className='flex flex-col items-center gap-6 group'>
         <div className=' w-full cursor-pointer'><img  className=' ' src={imgee} alt="" /></div>
        <h1 className='tr group-hover:text-[#ff9600]  text-xl cursor-pointer '>{txt}</h1>
        <h1 className='cursor-pointer -mt-3 text-[#ff9600]'>£30.00</h1>
        <button className=' cursor-pointer  hover:bg-black text-white text-sm  bg-[#ff9600] w-40 p-4 rounded-[30px] ' >ADD TO CARD</button>



        </div>
    )

}