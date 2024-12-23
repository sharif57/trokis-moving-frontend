'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const menuList = [
    { title: 'Home', path: '/' },
    // { title: 'Service', path: '/service' },
    {
      title: 'Service',
      icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
      submenu: [
        { title: 'Shop', path: '/blogs/shop' },
        { title: 'Cart', path: '/blogs/cart' },
        { title: 'Team', path: '/blogs/team' },
      ],
    },
    { title: 'Contact Us', path: '/contact' },
    { title: 'About Us', path: '/about' },
   
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-[1620px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image height={100} width={100} className="" src={'/images/Logo.png'} alt="Logo" />
        </Link>

        {/* Hamburger menu icon for mobile */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? <Menu className="w-6 h-6 text-primary" /> : <X className="w-6 h-6 text-primary" />}
        </div>

        {/* Menu items */}
        <ul
          className={`lg:flex items-center gap-8 text-xl absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${
            open ? 'top-20 p-6 lg:p-0' : '-top-96'
          }`}
        >
          {menuList.map((item, index) => (
            <li
              key={index}
              className={`relative ${
                item.path === pathname ? 'text-primary font-bold' : 'text-black'
              } text-lg lg:my-0 my-2`}
              onMouseEnter={() => item.submenu && setDropdownOpen(true)}
              onMouseLeave={() => item.submenu && setDropdownOpen(false)}
            >
              {item.path ? (
                <Link href={item.path} className="flex items-center hover:text-primary transition duration-200">
                  {item.title}
                  {item.icon && item.icon}
                </Link>
              ) : (
                <span className="flex items-center cursor-default">
                  {item.title}
                  {item.icon && item.icon}
                </span>
              )}

              {/* Dropdown menu for Pages */}
              {item.submenu && dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48 text-black z-10">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-primary hover:text-white transition duration-200">
                      <Link href={subItem.path}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Login button */}
          <li className="flex items-center gap-4 mt-4 lg:mt-0 lg:ml-4">
            <button
              className=" bg-secondaryBg text-white px-8 py-3 rounded-full hover:bg-gray-400 transition duration-200"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
