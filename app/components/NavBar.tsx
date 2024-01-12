'use client'

import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

const NavBar = () => {

    const currentPath = usePathname();

    const HomePath = currentPath === '/';
    const ServicesPath = currentPath === '/services';
    const AchievementsPath = currentPath === '/achievements';
    const ProjectsPath = currentPath === '/projects';
    const TeamPath = currentPath === '/our-team';
    const ContactUsPath = currentPath === '/contact-us';

    // const HomPath = currentPath.includes('/blog') || currentPath === '/blog';

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#16185129]/90 bg-green-600 backdrop-blur-md z-50 px-10 py-4">
          <nav className="flex items-center justify-between">
       
            <div className="text-white font-bold text-xl">Logo</div>
      
        
            <div className="space-x-8">
              {/* Add your navigation links here */}
              <Link href="/" className={`${ HomePath ? 'font-bold border-b-2 border-yellow-200' : '' } text-white hover:text-gray-300`}>
                Home
              </Link>
              <Link href="/services" className={`${ ServicesPath ? 'font-bold border-b-2 border-yellow-200' : '' } text-white hover:text-gray-300`}>
                 Services
              </Link>
              <Link href="/achievements" className={`${ AchievementsPath ? 'font-bold border-b-2 border-yellow-200' : '' } text-white hover:text-gray-300`}>
                 Achievements
              </Link>
              <Link href="/projects" className={`${ ProjectsPath ? 'font-bold border-b-2 border-yellow-200' : '' } text-white hover:text-gray-300`}>
                 Projects
              </Link>
              <Link href="/our-team" className={`${ TeamPath ? 'font-bold border-b-2 border-yellow-200' : '' } text-white hover:text-gray-300`}>
                Team
              </Link>
              <Link href="/contact-us" className={`${ ContactUsPath ? 'font-bold border-b-2 border-yellow-200' : '' } text-white hover:text-gray-300`}>
                Contact Us
              </Link>
            </div>
      
          </nav>
      
        </div>
      );
}

export default NavBar