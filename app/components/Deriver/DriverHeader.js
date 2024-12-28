// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown, Bell, UserPen, Cable, BadgeDollarSign, Mail, CircleHelp, LogOut } from "lucide-react";
// import Image from "next/image";
// import { Badge } from "antd";

// export default function DriverHeader() {
//   const [open, setOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const pathname = usePathname();

//   const menuList = [
//     { title: "Moving", path: "/driver/Moving" },
//     { title: "Errand", path: "/driver/Errand" },
//     {
//       title: "",
//       icon: (
//         <Badge className="bg-gray-300 p-2 rounded-full" count={5}>
//           <Bell />
//         </Badge>
//       ),
//       path: "/driver",
//     },
//     {
//       icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
//       image: (
//         <div className="size-10 relative">
//           <Image
//             src="/images/driver.png"
//             alt="Service"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//       ),
//       submenu: [
//         { title: "Profile", icon: <UserPen />, path: "/driver/Profile" },
//         { title: "Activity", icon: <Cable />, path: "/driver/Activity" },
//         { title: "Payment", icon: <BadgeDollarSign />, path: "/driver/Payment" },
//         { title: "Message", icon: <Mail />, path: "/driver/Message" },
//         { title: "Support", icon: <CircleHelp />, path: "/driver/Support" },
//         { title: "Logout", icon: <LogOut />, path: "/driver/Logout" },
//       ],
//     },
//   ];

//   return (
//     <nav className="top-0 z-50">
//       <div className="lg:max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/driver/Moving" className="flex items-center">
//           <Image
//             height={80}
//             width={80}
//             src="/images/Logo.png"
//             alt="Logo"
//             className="object-contain"
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
//           className={`lg:flex items-center gap-8 text-base sm:text-lg absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${
//             open ? "top-16 p-4 lg:p-0" : "-top-96"
//           }`}
//         >
//           {menuList.map((item, index) => (
//             <li
//               key={index}
//               className={`relative ${
//                 item.path === pathname ? "text-black font-bold" : "text-black"
//               } lg:my-0 my-2`}
//               onMouseEnter={() => item.submenu && setDropdownOpen(true)}
//               onMouseLeave={() => item.submenu && setDropdownOpen(false)}
//             >
//               {item.path ? (
//                 <Link
//                   href={item.path}
//                   className="flex items-center hover:text-primary transition duration-200"
//                 >
//                   {item.image && item.image}
//                   {item.title}
//                   {item.icon && item.icon}
//                 </Link>
//               ) : (
//                 <span className="flex items-center cursor-default">
//                   {item.image && item.image}
//                   {item.title}
//                   {item.icon && item.icon}
//                 </span>
//               )}

//               {/* Dropdown menu for Pages */}
//               {item.submenu && (
//                 <ul
//                   className={`absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48 text-black z-10 transition-all duration-300 transform ${
//                     dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
//                   }`}
//                 >
//                   {item.submenu.map((subItem, subIndex) => (
//                     <li
//                       key={subIndex}
//                       className="flex items-center gap-2 px-4 py-2 hover:bg-primary hover:text-blue-400 transition duration-200"
//                     >
//                       {subItem.icon}
//                       <Link href={subItem.path}>{subItem.title}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Bell,
  UserPen,
  Cable,
  BadgeDollarSign,
  Mail,
  CircleHelp,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "antd";

export default function DriverHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const menuList = [
    { title: "Moving", path: "/driver/Moving" },
    { title: "Errand", path: "/driver/Errand" },
    {
      // title: "/Notifications",
      icon: (
          <Badge className="bg-gray-300 p-2 rounded-full" count={5}>
            <Bell />
          </Badge>
       
      ),
      path: "/driver/Notifications",
    },
    {
      icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
      image: (
        <div className="size-10 relative">
          <Image
            src="/images/driver.png"
            alt="Service"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ),
      submenu: [
        { title: "Profile", icon: <UserPen />, path: "/driver/Profile" },
        { title: "Activity", icon: <Cable />, path: "/driver/Activity" },
        {
          title: "Payment",
          icon: <BadgeDollarSign />,
          path: "/driver/Payment",
        },
        { title: "Message", icon: <Mail />, path: "/driver/Message" },
        { title: "Support", icon: <CircleHelp />, path: "/driver/Support" },
        { title: "Logout", icon: <LogOut />, path: "/driver/Logout" },
      ],
    },
  ];
  
  return (
    <nav className="top-0 z-50">
      <div className="lg:max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/driver" className="flex items-center">
          <Image
            height={80}
            width={80}
            src="/images/Logo.png"
            alt="Logo"
            className="object-contain"
          />
        </Link>

        {/* Hamburger menu icon for mobile */}
        <div className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {!sidebarOpen ? (
            <Menu className="w-6 h-6 text-black" />
          ) : (
            <X className="w-6 h-6 text-black" />
          )}
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <Link href="/driver/Moving" className="text-lg font-bold">
              Menu
            </Link>
            <X
              className="w-6 h-6 cursor-pointer text-primary"
              onClick={() => setSidebarOpen(false)}
            />
          </div>
          <ul className="p-4">
            {menuList.map((item, index) => (
              <li
                key={index}
                className={`mb-4 ${
                  item.path === pathname
                    ? "text-primary font-bold"
                    : "text-black"
                }`}
              >
                <Link
                  href={item.path || "#"} // Ensure href has a fallback
                  className="flex items-center gap-2"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.icon && item.icon}
                  {item.title}
                </Link>
                {item.submenu && (
                  <ul className="mt-2 ml-4 text-sm text-gray-600">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        <Link
                          href={subItem.path || "#"} // Ensure href has a fallback
                          className="flex items-center gap-2 hover:text-primary"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {subItem.icon}
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu items for large screens */}
        <ul className="hidden lg:flex items-center gap-8 text-base sm:text-lg">
          {menuList.map((item, index) => (
            <li
              key={index}
              className={`relative ${
                item.path === pathname ? "text-black font-bold" : "text-black"
              }`}
              onMouseEnter={() => item.submenu && setDropdownOpen(true)}
              onMouseLeave={() => item.submenu && setDropdownOpen(false)}
            >
              <Link
                href={item.path || "#"} // Ensure href has a fallback
                className="flex items-center hover:text-primary transition duration-200"
              >
                {item.image && item.image}
                {item.title}
                {item.icon && item.icon}
              </Link>
              {item.submenu && (
                <ul
                  className={`absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48 text-black z-10 ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-primary hover:text-blue-500"
                    >
                      {subItem.icon}
                      <Link href={subItem.path || "#"}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
