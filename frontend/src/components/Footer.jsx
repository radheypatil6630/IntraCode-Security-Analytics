import React from 'react'
import logo from '../assets/IC Logo.png'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="bg-[#07103a] text-white pt-6 pb-4">
    <div className="max-w-7xl mx-auto px-4 flex flex-col  ">
      <div className='flex gap-10'>
        <div className="flex flex-col w-[60%]  gap-3">
          <img src={logo} alt="IntraCode" className="h-16 w-40 object-contain" />

          <p>Access the world's top cybersecurity experts and perform faster more effective penetration tests with our AI-powered platform, designed to keep your business secure.</p>
        </div>

       
      <div className="flex-1 flex flex-col gap-2 cursor-pointer">
        <p className="text-lg sm:text-xl font-bold font-serif ">
          Quick Links
        </p>
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/rooms" className="hover:text-blue-400">Documentation</Link>
        <Link to="/restaurant" className="hover:text-blue-400">Extension</Link>
        <Link to="/about" className="hover:text-blue-400">About Us</Link>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <p className="text-lg sm:text-xl font-bold font-serif">
          Contact Us
        </p>
        <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-transparent border border-blue-300 hover:border-blue-400 hover:shadow-md shadow-blue-500" />
        <p className="text-sm sm:text-base hover:text-blue-400">
          Phone: (123) 456-7890
        </p>
        <p className="text-sm sm:text-base hover:text-blue-400">
          Email: info@IntraCode.com
        </p>
      </div>
    </div>
     
      <div className="text-sm text-slate-300 mt-8 flex flex-col md:flex-row md:justify-between items-center">
        <span>
          © {new Date().getFullYear()} IntraCode. All rights reserved.
        </span>
        <span className='flex gap-4 text-gray-400 mt-2'>
          <p className='hover:underline hover:cursor-pointer'>Privacy Policy</p>
          <p className='hover:underline hover:cursor-pointer'>Terms of Service</p>
          <p className='hover:underline hover:cursor-pointer'>Licenses</p>
          <p className='hover:underline hover:cursor-pointer'>Contact</p>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
