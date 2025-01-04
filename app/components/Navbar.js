

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const menuList = [
//     { title: "Home", path: "/" },
//     {
//       title: "Service",
//       icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
//       submenu: [
//         { title: "User", path: "/user" },
//         { title: "Driver", path: "/driver" },
//       ],
//     },
//     { title: "Contact Us", path: "/contact" },
//     { title: "About Us", path: "/about" },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="lg:w-[1620px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             height={100}
//             width={100}
//             className=""
//             src={"/images/Logo.png"}
//             alt="Logo"
//           />
//         </Link>

//         {/* Hamburger menu icon for mobile */}
//         <div className="lg:hidden" onClick={() => setOpen(!open)}>
//           {!open ? (
//             <Menu className="w-6 h-6 text-primary" />
//           ) : (
//             <X className="w-6 h-6 text-primary" />
//           )}
//         </div>

//         {/* Menu items */}
//         <ul
//           className={`lg:flex items-center gap-8 text-xl absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${
//             open ? "top-20 p-6 lg:p-0" : "-top-96"
//           }`}
//         >
//           {menuList.map((item, index) => (
//             <li key={index} className="relative group text-lg lg:my-0 my-2">
//               {item.submenu ? (
//                 <>
//                   <button
//                     className={`flex items-center hover:text-primary transition duration-200 ${
//                       item.path === pathname
//                         ? "text-primary font-bold"
//                         : "text-black"
//                     }`}
//                   >
//                     {item.title}
//                     {item.icon && item.icon}
//                   </button>
//                   {/* Dropdown menu for Pages */}
//                   <ul className="absolute left-0 mt-2 bg-white shadow-lg  rounded-lg w-48 text-black z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition duration-300 ease-in-out">
//                     {item.submenu.map((subItem, subIndex) => (
//                       <li
//                         key={subIndex}
//                         className="px-4 py-2 hover:bg-primaryText  hover:text-white transition duration-300"
//                       >
//                         <Link href={subItem.path}>{subItem.title}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : (
//                 <Link
//                   href={item.path}
//                   className={`flex items-center hover:text-primary transition duration-200 ${
//                     item.path === pathname
//                       ? "text-primary font-bold"
//                       : "text-black"
//                   }`}
//                 >
//                   {item.title}
//                 </Link>
//               )}
//             </li>
//           ))}

//           {/* Login button */}
//           <li className="flex items-center gap-4 mt-4 lg:mt-0 lg:ml-4">
//             <Link href={"/login"}>
//               <button className="bg-secondaryBg text-white px-8 py-3 rounded-full hover:bg-gray-400 transition duration-200">
//                 Sign Up
//               </button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { scrollToContact, scrollToAbout } from "../(Home)/page";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = (event) => {
    event.preventDefault();
    if (pathname === "/") {
      scrollToContact();
    } else {
      router.push("/#contact");
    }
  };

  const handleAboutClick = (event) => {
    event.preventDefault();
    if (pathname === "/") {
      scrollToAbout();
    } else {
      router.push("/#about");
    }
  };

  const menuList = [
    { title: "Home", path: "/" },
    {
      title: "Service",
      icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
      submenu: [
        { title: "User", path: "/user" },
        { title: "Driver", path: "/driver" },
      ],
    },
    {
      title: "Contact Us",
      path: "/#contact", // Anchor for scrolling
      onClick: handleContactClick, // Custom click handler
    },
    {
      title: "About Us",
      path: "/#about", // Anchor for scrolling
      onClick: handleAboutClick, // Custom click handler
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="lg:w-[1620px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            height={100}
            width={100}
            src={"/images/Logo.png"}
            alt="Logo"
          />
        </Link>

        {/* Hamburger menu icon for mobile */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? <Menu className="w-6 h-6 text-primary" /> : <X className="w-6 h-6 text-primary" />}
        </div>

        {/* Menu items */}
        <ul
          className={`lg:flex items-center gap-8 text-xl absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${
            open ? "top-20 p-6 lg:p-0" : "-top-96"
          }`}
        >
          {menuList.map((item, index) => (
            <li key={index} className="relative group text-lg lg:my-0 my-2">
              {item.submenu ? (
                <>
                  <button className="flex items-center hover:text-primary transition duration-200">
                    {item.title}
                    {item.icon && item.icon}
                  </button>
                  {/* Dropdown menu */}
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 text-black z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition duration-300 ease-in-out">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-primaryText hover:text-white transition duration-300">
                        <Link href={subItem.path}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.path}
                  onClick={item.onClick}
                  className={`flex items-center hover:text-primary transition duration-200 ${
                    item.path === pathname ? "text-primary font-bold" : "text-black"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          {/* Login button */}
          <li className="flex items-center gap-4 mt-4 lg:mt-0 lg:ml-4">
            <Link href={"/login"}>
              <button className="bg-secondaryBg text-white px-8 py-3 rounded-full hover:bg-gray-400 transition duration-200">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
