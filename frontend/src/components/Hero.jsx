import React from "react";
import { FaPlay } from "react-icons/fa";
import Laptop from "./../assets/Laptop.png";
import backgroundImage from "./../assets/Landing Page.png"; // ✅ make sure file name has no spaces

function HeroSection() {
  return (
    <div className="relative min-h-screen flex justify-center overflow-hidden">
      
      <img src={backgroundImage}
        className="absolute  bg-cover  bg-no-repeat w-full"
        
      />

 
       <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 -z-10"
      />

     
      <div className="relative z-10 flex items-center justify-between  w-full p-20 ">
  
        <div className="w-1/2 text-white space-y-6">
          <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
            Premium Security Testing & Compliance
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed">
            Access the world's top cybersecurity experts and perform faster,
            more effective penetration tests with our AI-powered platform,
            designed to keep your business secure.
          </p>

          <button className="bg-[#0fbcff] hover:bg-[#0fbcff]/80 hover:shadow-lg shadow-blue-500/20 rounded-full py-4 px-6 text-lg text-white font-bold flex gap-2 items-center">
            <FaPlay className="text-[#0fbcff] text-2xl rounded-full bg-white p-1" />
            Try IntraCode
          </button>
        </div>

      
        <div className="w-1/2 flex justify-center">
          <img
            src={Laptop}
            alt="Laptop"
            className="h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div> 
    </div>
  );
}

export default HeroSection;
