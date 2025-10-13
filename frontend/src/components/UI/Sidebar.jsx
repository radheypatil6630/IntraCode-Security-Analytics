"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconMenu2,
  IconDashboard, // Import a menu icon for mobile
} from "@tabler/icons-react";

import logo1 from '../../assets/IC Logo.png';

import logo2 from '../../assets/logo_icon.png';
import {Outlet, useNavigate } from "react-router-dom";



export default function Sidebar() {
  
  

  const navigate = useNavigate();

  const links = [
    {
      label: "Dashboard",
      href: "/sidebar/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 text-white dark:text-neutral-200" />
      ),
    },
    
    {
      label: "SBOM Dashboard",
      href: "/sidebar/sbom-dashboard",
      icon: (
        <IconDashboard className="h-5 w-5 text-white dark:text-neutral-200" />
      ),
    },
  
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft className="h-5 w-5 text-white dark:text-neutral-200" />
      ),
    },
  ];

const handleNavigateClick = (href) => {
  setLoading(true);
  setTimeout(() => {
    navigate(href);    // navigates to route (e.g. /sidebar/dashboard)
    setLoading(false);
  }, 200);
};
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // New state for mobile sidebar

  const [activeLink, setActiveLink] = useState(links[0].href);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to simulate fetching content (kept original structure)
  const fetchContent = async (href) => {
    setLoading(true);
    setContent(null);
    try {
      if (href === "#" || href === "") {
        setContent("<p class='text-white'>No content for this link.</p>");
        return;
      }
   
      await new Promise(resolve => setTimeout(resolve, 500)); 
      setContent(`<div class="p-8"><h1 class="text-3xl font-bold text-white mb-4">Content for ${href}</h1><p class="text-gray-300">This content was fetched successfully (simulated).</p></div>`);
      
    } catch (err) {
      setContent("<p class='text-white'>Error fetching content</p>");
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link.href);
    // Close mobile sidebar after choosing
    setSidebarOpen(false);

    // If it's a route we know, navigate to it; otherwise fetch content
    if (link.href && link.href !== "#") {
      setContent(null);
      handleNavigateClick(link.href);
    } else {
      fetchContent(link.href);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden rounded-md border border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
      
      {/* Mobile Header (fixed at top) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center bg-[#0e1938] shadow-lg">
        <Logo open={true} />
        <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="text-white dark:text-neutral-200 p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
        >
          <IconMenu2 className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar - Conditional rendering for mobile */}
      <motion.div
        animate={{ width: open ? 250 : 80 }}
        // Added 'z-50' for mobile overlay and 'md:relative' for desktop flow
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-neutral-700 bg-[#0e1938] transition-all duration-300 transform md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        }`}
        // Only allow hover expansion on desktop screens (>= md)
        onMouseEnter={() => window.innerWidth >= 768 && setOpen(true)}
        onMouseLeave={() => window.innerWidth >= 768 && setOpen(false)}
      >
        {/* Close button for mobile (only visible when sidebar is open) */}
        {sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="md:hidden absolute top-4 right-4 text-white hover:text-red-400 z-50 p-2 rounded-full transition"
            aria-label="Close menu"
          >
            <IconArrowLeft className="h-6 w-6" />
          </button>
        )}

        {/* Content Area for Links (pt-20 to push content past mobile header) */}
        <div className="flex flex-col flex-1 overflow-y-auto p-4 pt-20 md:pt-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <Logo open={open} />
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link, e)}
                  className={`flex items-center gap-2 rounded-md p-2 text-sm font-medium text-white hover:backdrop-blur-md hover:bg-white/30 dark:text-neutral-200 dark:hover:bg-neutral-700 transition ${
                    isActive ? "bg-white/20" : ""
                  }`}
                >
                  {link.icon}
                  {open && <span>{link.label}</span>}
                </a>
              );
            })}
          </div>
        </div>

        {/* Profile Link at the bottom (made responsive) */}
        <div className="p-4 border-t border-neutral-700/50">
          <SidebarLink
            link={{
              label: "Profile",
              href: "#",
              icon: (
                // Replaced external image with a placeholder div
                <div
                    className="h-7 w-7 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white"
                    aria-label="Profile Avatar Placeholder"
                >
                    P
                </div>
              ),
            }}
            open={open}
           
            onClick={(e) => {
                e.preventDefault();
                setActiveLink('profile-link');
                setSidebarOpen(false);
                fetchContent('profile');
            }}
          />
        </div>
      </motion.div>

      {/* Main content area (pt-20 to clear fixed mobile header) */}
      <div className="flex flex-1 p-4 md:p-6 overflow-auto bg-[linear-gradient(155deg,#02040a_3%,#162a86_80%)] pt-20 md:pt-6">
        <div className="w-full h-full rounded-md">
          {loading ? (
            <div className="text-white p-6">Loading...</div>
          ) : content ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <div>
              <Outlet />
              <div className="p-6 text-white">Select a link from the sidebar or navigate to a page.</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Overlay (to dismiss sidebar on tap outside) */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
}

// Logo component (Preserving original variable and structure)
const Logo = ({ open }) => {
 
    
    return (
        <a
            className="flex items-center space-x-2 py-1 text-sm font-medium text-black dark:text-white"
            href="#"
        >
            {open ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                   <img src={logo1} alt="logo" className="h-12 w-full" /> 
                </motion.span>
            ) : (
               <img src={logo2} alt="logo" className="h-16 w-auto" /> 
            )}
        </a>
    );
};

// SidebarLink component
const SidebarLink = ({ link, open, onClick }) => (
  <a
    href={link.href}
    onClick={onClick} // Added onClick handler
    className="flex items-center gap-2 rounded-md p-2 text-sm font-medium text-white hover:backdrop-blur-md hover:bg-white/30 dark:text-neutral-200 dark:hover:bg-neutral-700 transition"
  >
    {link.icon}
    {open && <span>{link.label}</span>}
  </a>
);