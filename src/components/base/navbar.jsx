'use client'
import { Link as Lin } from "react-scroll";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LazyImage from "./lazyImage";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const path = usePathname();
  useEffect(() => {
    setDropdownOpen(false);
  }, [path])

  return (
    <div className="navbar bg-bg h-[12vh] z-30">
      <div className="navbar-start flex-row-reverse md:flex-row justify-between md:justify-start w-full md:w-1/2">
        <div className="dropdown z-30">
          <label tabIndex={0} className="btn btn-ghost md:hidden" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} onClick={() => setIsDropdownOpen(false)}
            className={`z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isDropdownOpen ? 'block' : 'hidden'} right-0`}>
            <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">
              <Link href="/">Home</Link></li>
            <li >
              <a className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Products</a>
              <ul className="p-2 z-30">
                <li><Link href="/garlic-clove" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Clove</Link></li>
                <li><Link href="/garlic-bulb" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Bulb</Link></li>
                <li><Link href="/garlic-peeled" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Peeled</Link></li>
                <li><Link href="/garlic-powder" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Powder</Link></li>
                <li><Link href="/garlic-paste" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Paste</Link></li>
              </ul>
            </li>
            <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold"><Link href="/gallery">Gallery</Link></li>
            {/* <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold"><Link href="/about">About</Link></li> */}
            <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold"><Lin to="contactus" spy={true} smooth={true} duration={500} >Contact Us</Lin></li>
            <li><a href="https://wa.me/+923004439445" target="blank" className="py-3 text-white flex items-center justify-center h-fit bg-themeColor rounded-3xl">Book Now</a></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
        <LazyImage className="h-full w-fit object-contain mr-1" src="/images/nav_logo.gif"/>
        Promo Garlic</Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold"><Link href="/">Home</Link></li>
          <li tabIndex={0} className="">
            <details {...(dropdownOpen == false ? { open: true } : {})}>
              <summary onClick={() => setDropdownOpen(!dropdownOpen)} className="cursor-pointer  hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Products</summary>
              {dropdownOpen && (<ul className="p-2 z-30 min-w-max">
                <li ><Link href="/garlic-bulb" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Bulb</Link></li>
                <li ><Link href="/garlic-clove" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Clove</Link></li>
                <li ><Link href="garlic-peeled" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Peeled</Link></li>
                <li ><Link href="garlic-powder" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Powder</Link></li>
                <li ><Link href="garlic-paste" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold">Garlic Paste</Link></li>
              </ul>)}
            </details>
          </li>
          <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold"><Link href="/gallery">Gallery</Link></li>
          {/* <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold"><Link href="/about">About</Link></li> */}
          <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor hover:font-bold"><Lin to="contactus" spy={true} smooth={true} duration={500} >Contact Us</Lin></li>
        </ul>
      </div>
      <div className="hidden md:flex navbar-end">
        <a href="https://wa.me/+923004439445" target="blank" className="btn text-white bg-themeColor rounded-3xl">Book Now</a>
      </div>
    </div>
  );
}

export default Navbar;
