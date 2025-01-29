
import '../../App.css'
import Header from '../../Components/Header'
import Map from '../../Components/Map'
import Body from '../../body/Body'
import Footer from '../../Components/Footer'
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from 'react'


function Home() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
      const toggleVisibility = () => {
        console.log(window.scrollY)
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

  
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
   <>
   
   <Body/>
   <Map/>
   {isVisible && (  <div onClick={scrollToTop} className=' fixed bottom-4 right-4 bg-[rgba(0,0,0,0.2)]  p-3 rounded-[50px]'><IoIosArrowUp className='text-white text-xl' /></div>
   )}
   </>
  )
}

export default Home

