"use client"
import React,{useState} from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export const Profile = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };
    return (
    <>
         <div className="relative">
           <button
             className="flex items-center focus:outline-none"
             onClick={toggleProfileDropdown}
           >
             <img
               className="w-10 h-10 rounded-full"
               src="https://via.placeholder.com/150" // Replace with your avatar URL
               alt="Avatar"
             />
           </button>
           {isProfileDropdownOpen && (
             <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-20">
               <p className="px-4 py-2 text-sm">Signed in as <strong>Username</strong></p>
               <hr />
               <a
                 href="#"
                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
               >
                 Logout
               </a>
             </div>
           )}
         </div>
    </>
  )
}
