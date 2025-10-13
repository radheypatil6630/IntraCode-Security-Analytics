import React from 'react';
import { FaPlay } from "react-icons/fa";
import Logo from "./../assets/IC Logo.png"
import Laptop from "./../assets/Laptop-1.png"

function HeroSection() {
  return (

   <div className=" relative min-h-screen   lg:pt-40
    bg-[linear-gradient(155deg,#02040a_30%,#162a86_80%)] ">


 <div className="relative z-10 text-white flex">
    <div className='w-[50%] p-10 space-y-6'>
       
        <p className="lg:text-6xl font-semibold leading-tight">Premium Security Testing & Compliance</p>
        <p className='text-gray-300 text-md leading-relaxed'>Access the world's top cybersecurity experts and perform faster more effective penetration tests with our AI-powered platform, designed to keep your business secure.</p>

        <div  className='pt-2 flex gap-4'>
            <button className='bg-[#0fbcff] hover:bg-[#0fbcff]/80 hover:shadow-lg shadow-blue-500/20 rounded-4xl p-3 px-8 text-lg text-white font-bold  rounded flex gap-2 items-center'>
                <FaPlay className="text-[#0fbcff] text-xl rounded-full bg-white p-1" />
                Try IntraCode
            </button>

           
        </div>
    </div>
    <div className='w-[50%] p-2'>
      <img src={Laptop} alt="IntraCode Logo" className="h-96"/>
    </div>
    
  </div>

</div>
  );
}

export default HeroSection;