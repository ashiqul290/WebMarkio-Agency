import React from 'react'
import Container from '../utils/Container'
import logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  let Navbar = [
    {
      name: "Home",
      link: "",
    },

    {
      name: "About Us",
      link: "about",
    },
    {
      name: "Our Services",
      // icon: <IoIosArrowDown />,
      link: "#",
      submenu: [
        { name: "Web Development", link: "web_development" },
        { name: "Digital Merketing", link: "digital_merketing" },
        { name: "Graphic Design", link: "graphic_design" },
        { name: "Video Editing", link: "video_editing" },
      ],
    },
    {
      name: "Contact Us",
      link: "contact",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 shadow sticky top-0 left-0 w-full z-999">
        <Container>
          <div className="flex justify-between items-center">
            <div className="overflow-hidden h-25 ">
              <Image src={logo} className='w-50' alt="Logo" />
            </div>
            <div className="">
              <ul className=' flex gap-8 items-center '>
                {
                  Navbar?.map((item, index) => (
                    <li key={index} className=''><Link href={`/${item?.link}`} className={`relative flex font-rubik font-medium items-center gap-1 lg:text-xl cursor-pointer
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-[1px] after:bg-blue-600 hover:text-blue-600
          after:transition-all duration-500 after:duration-300 after:w-0 hover:after:w-full`}>{item?.name}</Link></li>
                  ))
                }
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header
