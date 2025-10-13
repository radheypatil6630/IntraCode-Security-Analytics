import { useState } from 'react'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/UI/Sidebar'
import DashBoard from './components/Dashboard'
import SBOMDashboard from './components/SBOMDashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        
        element:  <div>
          <Navbar/>
           <Home />
        </div>,
      },{
        path: '/sidebar',
        element: <Sidebar />,
        children: [
          { index: true, element: <DashBoard /> },
          { path: 'dashboard', element: <DashBoard /> },
          { path: 'sbom-dashboard', element: <SBOMDashboard /> },
        ],
      }
    ]
  )

  return (

          <RouterProvider router={routes}/>
     
    
  )
}

export default App
