"use client"
import React from "react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  DropdownItem, 
  DropdownTrigger, 
  Dropdown, 
  DropdownMenu, 
  Avatar 
} from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export default function Nav({ children }) {
  return (
    <>
       <Navbar className="fixed top-0 left-0 w-full z-50 bg-opacity-90 bg-white shadow-md">
        <NavbarBrand>
          <p className="font-bold text-xl text-inherit">E-Shop</p>
        </NavbarBrand>

        <NavbarContent className="flex gap-6 mt-2" justify="center">
          <NavbarItem>
            <Link href="#" color="secondary">
              <IoHome className="text-xl" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" aria-current="page" color="secondary">
              <FaShoppingCart className="text-xl" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="secondary">
              <FaListUl className="text-xl" />
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar showFallback src="https://images.unsplash.com/broken" color="primary" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    <div>
      {children}
    </div>
    </>
  );
}
