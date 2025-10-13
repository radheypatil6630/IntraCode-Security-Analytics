import React from 'react'
import Lock_Image from '../assets/Lock Image.png'
import logo from '../assets/IC Logo.png'
import { Link } from 'react-router-dom';
import forgot_image from '../assets/sign.png'

const Forgot_password = () => {

        return (
          <div className='min-h-screen bg-[linear-gradient(155deg,#02040a_30%,#162a86_80%)] p-4'>
            <Link to="/">
              <img src={logo} alt="IntraCode Logo" className="h-14 w-40  cursor-pointer"/>
            </Link>

          <div className="relative flex items-center justify-center w-full  ">
            
            
            <img src ={Lock_Image}
              className="absolute left-22 top-16 w-[705px] h-[702px] bg-cover bg-center"
             
            />
      
           
            <div className="absolute left-[965px] top-[20px] w-[220px] h-[220px] rounded-full bg-gradient-to-b from-[#2FA4DD] to-[#721CC2]" />
            <div className="absolute left-[1500px] top-[608px] w-[170px] h-[170px] rounded-full bg-gradient-to-b from-[#2FA4DD] to-[#721CC2]" />
      
           
           <div className="absolute left-[1065px] top-[100px] w-[520px] rounded-[20px] bg-gradient-to-tl from-[rgba(191,191,191,0.31)] to-transparent bg-black/20 shadow-[-8px_4px_5px_0_rgba(0,0,0,0.24)] backdrop-blur-[53px] border border-transparent p-8 flex flex-col gap-6 ">

            <img src={forgot_image} alt="forgot" className="w-40 h-auto mx-auto cursor-pointer"/>
  <p className="text-white text-center font-istok font-bold text-[36px]">
    Forgot Password
  </p>

<p className="text-white font-istok text-[18px] text-center">
    Enter your email address and we'll send you a link to reset your password.
  </p>

 

  
  
    <input
      aria-label="Email"
      placeholder="Enter Email "
      className="py-[18px] px-4 rounded-[12px] border border-white/80 bg-transparent text-white font-istok text-[20px] outline-none placeholder:text-white/70 hover:border-blue-400 hover:shadow-sm shadow-blue-500"
    />
 


  <button className="mt-4 py-[18px] px-[18px] rounded-[12px] bg-gradient-to-tr from-[#628EFF] via-[#8740CD] to-[#580475] text-white font-istok font-bold text-[20px] border-none cursor-pointer">
    Reset
  </button>


  <Link to="/forgot-password" className=" text-white font-istok text-[18px] text-center  py-2 px-2 hover:cursor-pointer  hover:text-blue-500 font-medium">
    back to Login
  </Link> 


  
</div>
</div>
          </div>
        );
      }
      

export default Forgot_password