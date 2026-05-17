"use client";

import React from "react";
import Container from "../utils/Container";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  let Navbar = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "About Us",
      link: "/about",
    },

    {
      name: "Our Services",
      icon: <IoIosArrowDown />,
      link: "/services",
      submenu: [
        { name: "Web Development", link: "/web_development" },
        { name: "Digital Marketing", link: "/digital_marketing" },
        { name: "Graphic Design", link: "/graphic_design" },
        { name: "Video Editing", link: "/video_editing" },
      ],
    },

    {
      name: "Products",
      icon: <IoIosArrowDown />,
      link: "/products",
      submenu: [{ name: "SRM System", link: "/srm_system" }],
    },

    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-gray-100 shadow sticky top-0 left-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="overflow-hidden h-25">
            <Image src={logo} className="w-50" alt="Logo" />
          </div>

          <div>
            <ul className="flex gap-8 items-center">
              {Navbar.map((item, index) => (
                <li key={index} className="relative group py-7">
                  <Link
                    href={item.link}
                    className={`relative flex items-center gap-1 text-2xl font-bold font-rajdhani transition-all duration-300
                    ${
                      pathname === item.link
                        ? "text-blue-600"
                        : "text-black/75 hover:text-blue-600"
                    }

                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:bg-blue-600
                    after:transition-all
                    after:duration-300
                    ${
                      pathname === item.link
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                    `}
                  >
                    {item.name}
                    <span>{item.icon}</span>
                  </Link>

                  {item.submenu && (
                    <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-md hidden group-hover:block">
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.link}
                            className="block px-5 py-3 hover:text-blue-600 font-medium hover:bg-gray-200"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;