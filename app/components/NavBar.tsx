'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu status
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Get the current path
  const currentPath = usePathname();

  // Determine active paths
  const HomePath = currentPath === '/';
  const ServicesPath = currentPath === '/services';
  const AchievementsPath = currentPath === '/achievements';
  const ProjectsPath = currentPath.includes('/projects');
  const TeamPath = currentPath === '/our-team';
  const ContactUsPath = currentPath === '/contact-us';

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#16185129]/90 bg-green-600 backdrop-blur-md z-50 px-4 md:px-10 py-4">
      <nav className={`flex flex-col md:flex-row items-center justify-between`}>
        <div className="text-white font-bold text-xl">
        <Image src="/oval-logo.png" alt="oval-logo" className="bg-white p-1 mb-4 rounded-3xl" width={100} height={150} />
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-800 focus:outline-none focus:text-green-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:space-y-0 space-y-4 md:space-x-8 md:flex items-center mb-4  ${isMenuOpen ? 'flex flex-col justify-between bg-green-800 p-10 w-full transform translate-y-8' : 'hidden'}`}>
          <Link href="/" className={`relative ${HomePath ? 'font-bold text-white' : 'text-white hover:text-yellow-300'} xs:ml-2 sm:ml-2`}>
            <span className={`${HomePath ? 'border-b-2 border-yellow-200 py-1' : ''}`}>
              Home
            </span>
          </Link>
          <Link href="/services" className={`relative ${ServicesPath ? 'font-bold text-white' : 'text-white hover:text-yellow-300'} xs:ml-2 sm:ml-2`}>
            <span className={`${ServicesPath ? 'border-b-2 border-yellow-200 py-1' : ''}`}>
              Services
            </span>
          </Link>
          <Link href="/achievements" className={`relative ${AchievementsPath ? 'font-bold text-white' : 'text-white hover:text-yellow-300'} xs:ml-2 sm:ml-2`}>
            <span className={`${AchievementsPath ? 'border-b-2 border-yellow-200 py-1' : ''}`}>
              Achievements
            </span>
          </Link>
          <Link href="/projects" className={`relative ${ProjectsPath ? 'font-bold text-white' : 'text-white hover:text-yellow-300'} xs:ml-2 sm:ml-2`}>
            <span className={`${ProjectsPath ? 'border-b-2 border-yellow-200 py-1' : ''}`}>
              Projects
            </span>
          </Link>
          <Link href="/our-team" className={`relative ${TeamPath ? 'font-bold text-white' : 'text-white hover:text-yellow-300'} xs:ml-2 sm:ml-2`}>
            <span className={`${TeamPath ? 'border-b-2 border-yellow-200 py-1' : ''}`}>
              Team
            </span>
          </Link>
     
        <Link href="/contact-us" className={`${ContactUsPath ? 'border-b-2 p-3 mt-4 text-opacity-75 rounded-full border-yellow-200 transition duration-300 animate-pulse' : 'font-bold border-2 p-3 text-opacity-75 rounded-full border-yellow-200 transition duration-300 animate-pulse'} pt-2 pb-2 mt-2 text-yellow-200 hover:text-yellow-300`}>
        <span className="mt-8">
              Contact Us
            </span>
        </Link>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;
