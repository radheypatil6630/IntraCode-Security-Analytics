import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import logo from '../assets/logo_icon.png'
import extension from '../assets/VS Code.png'
import Footer from './Footer'

const Home = () => {

  const steps_array = [
    {
      id: "step 1",
      image: "url",
      title: "SignUp for IntraCode",
      description: "Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit"
    },
    {
      id: "step 2",
      image: "url",
      title: "Install the Extension",
      description: "Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit"
    },
    {
      id: "step 3",
      image: "url",
      title: "SignUp for IntraCode",
      description: "Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit"
    },
    {
      id: "step 4",
      image: "url",
      title: "SignUp for IntraCode",
      description: "Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit"
    },
    {
      id: "step 5",
      image: "url",
      title: "SignUp for IntraCode",
      description: "Install the IntraCode browser extension from the Chrome Web Store. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore, optio molestiae provident maxime iste magni corrupti fugit"
    }
  ]

  const feature_array = [
    {
      title: "Real-time SBOM Analysis",
      description: "Automatically scan your project dependencies and generate Software Bill of Materials in real-time as you code."
    },
    {
      title: "Automated License Compliance",
      description: "Ensure your project complies with open-source licenses by automatically checking dependencies against license requirements."
    }, {
      title: "Vulnerability Detection",
      description: "Identify and remediate security vulnerabilities in your dependencies with real-time alerts and detailed reports."
    }, {
      title: "Dashboard Integration",
      description: "Seamlessly sync with your IntraCode dashboard for centralized security management across all projects."
    }
  ]

  return (
    <div className='bg-[linear-gradient(155deg,#02040a_30%,#162a86_80%)]'>

      <Hero />

      <div className='p-4 m-4 items-center justify-center flex flex-col'>
        <h2 className='font-bold text-6xl text-white '>How to Use IntraCode</h2>
        <div className='grid md:grid-cols-5 gap-10 mt-10 w-[90%]'>

          {
            steps_array.map((steps, index) => (
              <div className='h-[450px] border border-slate-900/50 bg-blue-900/10 shadow-[8px_4px_5px_0_rgba(10,10,10,0.1)] backdrop-blur-[53px]  rounded-2xl flex flex-col items-center justify-center  p-4 space-y-4 text-white
          hover:scale-105 hover:bg-blue-900/40 transition text-xl' key={steps.id}>
                <p>{steps.id}</p>
                <span className='h-20 w-20 rounded-full bg-gray-100 p-2'>
                  <img src={logo} alt="IntraCode Logo" className='h-full w-full flex items-center justify-center object-cover' />
                </span>
                <p className='font-semibold'>{steps.title}</p>
                <p className='text-center text-gray-300'>{steps.description} </p>
              </div>

            ))
          }
        </div>
      </div>

      <div
        id="extension-section"
        className='m-10 p-10 px-40 items-center justify-center flex flex-col text-center space-y-6 border border-slate-900/0 bg-gradient-to-tl [rgba(87,123,232,0.2)]   bg-black/20 shadow-[8px_4px_5px_0_rgba(10,10,10,0.1)] text-white w-[85%] mx-auto rounded-3xl gap-5'>
        <button className="py-2 px-4 bg-gray-700 rounded-xl transform transition duration-300 hover:translate-x-1 hover:-translate-y-1 hover:scale-105">
          Get Now 🐦‍🔥
        </button>

        <p className='text-7xl font-semibold'>Download IntraCode Extension Today !</p>
        <p>Get Instant access to secure your project and enhanced privacy features by downloading the extension.</p>
        <span className='mt-8 py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-l from-blue-600 to-purple-600  rounded-xl text-white font-semibold text-lg hover:scale-105 transition flex gap-2 items-center justify-center cursor-pointer'>
          <p>Download Extension</p>
          <img src={extension} alt="VS Code" className='h-10 w-auto' />
        </span>
      </div>


      <div className='m-10 p-10 items-center justify-center flex flex-col text-center space-y-6  border border-slate-900/0 bg-gradient-to-tl [rgba(87,123,232,0.2)]   bg-black/20 shadow-[8px_4px_5px_0_rgba(10,10,10,0.1)]   text-white w-[85%] mx-auto rounded-2xl backdrop-blur-sm'>
        <h3 className='text-5xl font-bold'>VS Code Extension Features</h3>
        <div className='grid md:grid-cols-2 gap-8 mt-8'>
          {
            feature_array.map((item, index) => (
              <div className='p-6 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-xl hover:bg-blue-900/60 hover:scale-101' key={index}>
                <h4 className='text-2xl font-semibold mb-4'>{item.title}</h4>
                <p className='text-gray-300'>{item.description}</p>
              </div>
            ))
          }


        </div>

      </div>

    </div>
  )
}

export default Home
