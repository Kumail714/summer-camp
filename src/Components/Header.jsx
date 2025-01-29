import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <div className=' h-full w-full flex  md:justify-between px-5 justify-between  md:my-0 my-5  '>
       <div className=' w-[40%] md:w-[30%] md:ml-10 p-[13px] '>
        <img src="src/images/logo.png" alt="" />
        </div>
       
        <HiOutlineShoppingBag  className='  md:hidden text-[30px] ml-24 mt-2'/>
        <IoMdMenu className='  md:hidden text-[40px]  mt-2 text-[#ff9600]' />
      
        <div className=' w-[70%]  md:flex hidden items-center list-none gap-10 text-[19px] font-semibold  '>
           
            <NavLink to={'/'}><li className='cursor-pointer text-[#ff9600] py-5'>Home</li></NavLink>
            <NavLink to={'/about'}><li className='cursor-pointer hover:text-[#ff9600] py-5'>About</li></NavLink>
            <NavLink to={'/activites'}><li className='cursor-pointer hover:text-[#ff9600] py-5'>Activities</li></NavLink>
            <li className='cursor-pointer hover:text-[#ff9600] py-5'>RTL Tested</li>
            <li className='cursor-pointer hover:text-[#ff9600] '>
             <div className='  relative group'>
             <div className=' cursor-pointer flex items-end group py-5'>Blog <RiArrowDropDownLine />
            </div>
            <ul className=' cursor-pointer top-[70px] text-[18px]  font-thi group-hover:block z-50 dropdown-menu hidden absolute text-gray-500 pt-1 shadow-md'>
                <li><a href="#" className='  hover:bg-black text-white w-45   bg-[#ff9600] py-2 px-4 block whitespace-nowrap'>Blog left Sidebar</a></li>
                <li><a href="#" className='hover:bg-black text-white  w-45  bg-[#ff9600]  py-2 px-4 block whitespace-nowrap'>Blog left Sidebar</a></li>             
                <li><a href="#" className='hover:bg-black text-white  w-45   bg-[#ff9600]  py-2 px-4 block whitespace-nowrap'>Blog No Sidebar</a></li>
                <li><a href="#" className='hover:bg-black text-white  w-45   bg-[#ff9600]  py-2 px-4 block whitespace-nowrap'>Blog full width</a></li>           
             </ul>
             </div>
          
            </li>
           
            <li className=' hover:text-orange-500'>
             <div className='  relative group'>
             <div className=' cursor-pointer flex items-end group py-5'>Shop <RiArrowDropDownLine />
            </div>
            <ul className='cursor-pointer top-[70px] text-[18px] group-hover:block z-50 dropdown-menu hidden absolute text-gray-500 pt-1 shadow-md'>
                <li><a href="#" className='hover:bg-black text-white w-45  bg-[#ff9600] py-2 px-4 block whitespace-nowrap'>My account</a></li>
                <li><a href="#" className='hover:bg-black text-white  w-45  bg-[#ff9600] py-2 px-4 block whitespace-nowrap'>cart</a></li>             
                 <li><a href="#" className='  hover:bg-black text-white  w-45   bg-[#ff9600] py-2 px-4 block whitespace-nowrap'>cheakOut</a></li>           
             </ul>
             </div>
          
            </li>

        
            <li className=' hover:text-orange-500'>
             <div className=' relative group h-full py-5'>
             <div className=' h-full cursor-pointer  flex items-end group'>Contact <RiArrowDropDownLine />
            </div>
            <ul className=' top-[71px] right-1  cursor-pointer text-[18px] group-hover:block z-50 dropdown-menu hidden absolute text-gray-500 pt-1 shadow-md'>
                <li><a href="#" className='  hover:bg-black text-white w-45  bg-[#ff9600] py-2 px-4 block whitespace-nowrap'>Contact layout 1</a></li>
                <li><a href="#" className='  hover:bg-black text-white  w-45  bg-[#ff9600] py-2 px-4 block whitespace-nowrap'>Contact layout 2</a></li>             
            
             </ul>
             </div>
          
            </li>
            <HiOutlineShoppingBag className=' mb-1' />
            
            
        </div>

    </div>
  )
}

export default Header
