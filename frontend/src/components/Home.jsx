import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import logo from '../assets/logo_icon.png'
import extension from '../assets/VS Code.png'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-[linear-gradient(155deg,#02040a_30%,#162a86_80%)]'>
    
      <Hero/>

      <div className='p-10 items-center justify-center flex flex-col'>
        <h2 className='font-bold text-6xl text-white '>How to Use IntraCode</h2>
        <div className='grid md:grid-cols-3 gap-10 mt-10 w-[80%]'>
          <div className='h-[350px] w-[300px] bg-blue-950 rounded-2xl flex flex-col items-center justify-center  p-4 space-y-4 text-white
          hover:scale-105 hover:bg-blue-900/10 transition'>
            <p>Step 1</p>
            <span className='h-20 w-20 rounded-full bg-gray-500 p-2'>
              <img src={logo} alt="IntraCode Logo" className='h-full w-full flex items-center justify-center object-cover'/>
            </span>
            <p className='font-semibold'>Sign Up for IntraCode</p>
            <p className='text-center text-gray-300'>Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit </p>
          </div>

          <div className='h-[350px] w-[300px] bg-blue-950 rounded-2xl flex flex-col items-center justify-center  p-4 space-y-4 text-white
          hover:scale-105 hover:bg-blue-900/10 transition'>
            <p>Step 1</p>
            <span className='h-20 w-20 rounded-full bg-gray-500 p-2'>
              <img src={logo} alt="IntraCode Logo" className='h-full w-full flex items-center justify-center object-cover'/>
            </span>
            <p className='font-semibold'>Sign Up for IntraCode</p>
            <p className='text-center text-gray-300'>Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit </p>
          </div>

          <div className='h-[350px] w-[300px] bg-blue-950 rounded-2xl flex flex-col items-center justify-center  p-4 space-y-4 text-white hover:scale-105 hover:bg-blue-900/10 transition'>
            <p>Step 1</p>
            <span className='h-20 w-20 rounded-full bg-gray-500 p-2'>
              <img src={logo} alt="IntraCode Logo" className='h-full w-full flex items-center justify-center object-cover'/>
            </span>
            <p className='font-semibold'>Sign Up for IntraCode</p>
            <p className='text-center text-gray-300'>Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit </p>
          </div>
        </div>
      </div>

      <div
      id="extension-section"
      className='m-10 p-10 px-40 items-center justify-center flex flex-col text-center space-y-6 bg-blue-950 text-white w-[80%] mx-auto rounded-2xl '>
        <button className='py-2 px-4 bg-gray-700 rounded-xl'>Get Now 🐦‍🔥</button>
        <p className='text-7xl font-semibold'>Download IntraCode Extension Today !</p>
        <p>Get Instant access to secure your project and enhanced privacy features by downloading the extension.</p>
        <span className='mt-8 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg hover:scale-105 transition flex gap-2 items-center justify-center cursor-pointer'>
          <p>Download Extension</p>
          <img src={extension} alt="VS Code" className='h-10 w-auto'/>
        </span>
      </div>


 <div className='m-10 p-10 items-center justify-center flex flex-col text-center space-y-6 bg-slate-900/50 text-white w-[80%] mx-auto rounded-2xl backdrop-blur-sm'>
        <h3 className='text-5xl font-bold'>VS Code Extension Features</h3>
        <div className='grid md:grid-cols-2 gap-8 mt-8'>
          <div className='p-6 bg-blue-900/30 rounded-xl'>
            <h4 className='text-2xl font-semibold mb-4'>Real-time SBOM Analysis</h4>
            <p className='text-gray-300'>Automatically scan your project dependencies and generate Software Bill of Materials in real-time as you code.</p>
          </div>
          <div className='p-6 bg-blue-900/30 rounded-xl'>
            <h4 className='text-2xl font-semibold mb-4'>Security Vulnerability Detection</h4>
            <p className='text-gray-300'>Get instant alerts about security vulnerabilities in your dependencies with detailed remediation suggestions.</p>
          </div>
          <div className='p-6 bg-blue-900/30 rounded-xl'>
            <h4 className='text-2xl font-semibold mb-4'>License Compliance</h4>
            <p className='text-gray-300'>Ensure your project meets all licensing requirements with automated license compatibility checks.</p>
          </div>
          <div className='p-6 bg-blue-900/30 rounded-xl'>
            <h4 className='text-2xl font-semibold mb-4'>Dashboard Integration</h4>
            <p className='text-gray-300'>Seamlessly sync with your IntraCode dashboard for centralized security management across all projects.</p>
          </div>
        </div>
       
      </div>
      
    </div>
  )
}

export default Home
