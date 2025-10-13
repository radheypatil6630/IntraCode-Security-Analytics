import { useState } from 'react'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/UI/Sidebar'
import DashBoard from './components/Dashboard'
import SBOMDashboard from './components/SBOMDashboard'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Forgot_password from './components/Forgot_password'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        
        element:  <div className="min-h-screen flex flex-col">
          <Navbar/>
           <Home />
           <Footer />
        </div>,
      },{
        path: '/sidebar',
        element: <Sidebar />,
        children: [
          { index: true, element: <DashBoard /> },
          { path: 'dashboard', element: <DashBoard /> },
          { path: 'sbom-dashboard', element: <SBOMDashboard /> },
        ],
      },{
        path: '/signup',
        element: <div className="min-h-screen flex flex-col">
          
           <SignUp />
           <Footer />
        </div>,
      },{
        path: '/login',
        element: <div className="min-h-screen flex flex-col">
          <Login />
          <Footer />
        </div>,
      },{
        path: '/forgot-password',
        element: <div className="min-h-screen flex flex-col">
          <Forgot_password />
          <Footer />
        </div>,
      }
    ]
  )

  return (

          <RouterProvider router={routes}/>
     
    
  )
}

export default App
