import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../assets/IC Logo.png'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScrollY = () => {
    const position = window.scrollY;
    setScrolled(position > 50);
  };

  handleScrollY();

  window.addEventListener("scroll", handleScrollY);
  return () => {
    window.removeEventListener("scroll", handleScrollY);
  };
}, [])

  
  return (
   <div className="absolute top-0 left-0 w-full z-50">
  <div className="flex justify-between items-center px-6 py-2 
                  text-white   fixed w-full text-xl 
                 ">
{/* backdrop-blur-md bg-black/30 */}


    <img src={logo} alt="IntraCode Logo" className="h-14 w-40 mb-4"/>

   
    <div className={`hidden md:flex gap-20
       ${
                  scrolled ?"bg-gradient-to-tl from-[rgba(67,87,214,0.31)] to-transparent bg-black/20 shadow-[-8px_4px_5px_0_rgba(0,0,0,0.24)] backdrop-blur-[53px]  shadow-lg py-2 px-4 rounded-2xl" 
                  :"bg-transparent "}`}>
        
      <RouterLink to="/" className="rounded-4xl px-4 py-2 transition duration-200 hover:scale-105 hover:font-semibold">
        Home
      </RouterLink>
      <RouterLink to="/" className="rounded-4xl px-4 py-2 transition duration-200 hover:scale-105 hover:font-semibold">
        Documentation
      </RouterLink>
      <RouterLink to="/" className="rounded-4xl px-4 py-2 transition duration-200 hover:scale-105 hover:font-semibold">
        About Us
      </RouterLink>
    </div>

    {/* Right side buttons */}
    <div className="flex gap-4 ">
      <ScrollLink
        to="extension-section"      
        smooth={true}              
        duration={800}              
        offset={-70}  
        className="bg-[linear-gradient(90deg,#215dd4_30%,#ce21d4_80%)]  shadow-sm shadow-[#0fbcff]/40 
                  hover:shadow-md 
                  rounded-xl py-2 px-6 text-lg font-semibold text-white transition cursor-pointer"
      >
        Extension
      </ScrollLink>
      
      <RouterLink
        to="/login"
        className="bg-[#070f29] border border-[#0fbcff] shadow-sm shadow-[#0fbcff]/40 
                  hover:shadow-md hover:border-[#0fbcff] 
                  rounded-xl py-2 px-6 text-lg font-semibold text-white transition cursor-pointer"
      >
        Sign In
      </RouterLink>
      
    </div>
  </div>
</div>

  )
}

export default Navbar
