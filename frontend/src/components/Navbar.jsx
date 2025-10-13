import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/IC Logo.png'

const Navbar = () => {
  return (
   <div className="absolute top-0 left-0 w-full z-50">
  <div className="flex justify-between items-center px-6 py-2 
                  text-white   fixed w-full">
{/* backdrop-blur-md bg-black/30 */}


    <img src={logo} alt="IntraCode Logo" className="h-14 w-40 mb-4"/>

   
    <div className="hidden md:flex gap-8">
        
      <Link to="/" className="rounded-4xl px-4 py-2 hover:bg-[#040916] hover:border hover:border-gray-500 transition">
        Home
      </Link>
      <Link to="/" className="rounded-4xl px-4 py-2 hover:bg-[#040916] hover:border hover:border-gray-500 transition">
        Documentation
      </Link>
      <Link to="/" className="rounded-4xl px-4 py-2 hover:bg-[#040916] hover:border hover:border-gray-500 transition">
        About Us
      </Link>
    </div>

    {/* Right side buttons */}
    <div className="flex gap-4 ">
      <Link
        to="/signup"
        className="bg-[linear-gradient(90deg,#215dd4_30%,#ce21d4_80%)]  shadow-sm shadow-[#0fbcff]/40 
                  hover:shadow-md 
                  rounded-xl py-2 px-6 text-lg font-semibold text-white transition"
      >
        Extension
      </Link>
      <Link
        to="/login"
        className="bg-[#02040a] border border-[#0fbcff] shadow-sm shadow-[#0fbcff]/40 
                  hover:shadow-md hover:border-[#0fbcff] 
                  rounded-xl py-2 px-6 text-lg font-semibold text-white transition"
      >
        Login
      </Link>
      
    </div>
  </div>
</div>

  )
}

export default Navbar
