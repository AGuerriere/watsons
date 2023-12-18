'use client'

import Image from "next/image";
import { useState } from "react"

export default function Navbar() {
  const [hidden, toggleHidden] = useState(1)

  function triggerToggle() {
    const toggle = hidden === 1 ? 0 : 1;
    toggleHidden(toggle);
  }
  return (
    <>
    {/* Desktop Navbar */}
    <nav className="hidden md:flex h-[10vh] justify-between ml-24 mr-24 items-center text-xl">
      <div className="">
        <Image
          src="/images/logo.webp"
          width={200}
          height={54}
          alt="Watsons Opticians Logo"
        />
    </div>
      <div>Home</div>
      <div>About Us</div>
      <div>Eye Tests</div>
      <div>Eye Wear</div>
      <div>Contact Lenses</div>
      <div>Eye Conditions</div>
      <div className="bg-gold text-white w-48 h-11 flex justify-center items-center rounded">Book Appointment</div>
    </nav>

    {/* Mobile navbar closed */}
    <nav className={`${hidden === 1 ? 'flex' : 'hidden'} md:hidden justify-start items-center h-[10vh]`}>
      <Image
          src="/images/menu.svg"
          width={50}
          height={50}
          alt="Watsons Opticians Logo"
          onClick={() => triggerToggle()}
          className="ml-3 mr-5"
        />
        <Image
          src="/images/logo.webp"
          width={90}
          height={30}
          alt="Watsons Opticians Logo"
        />
      
    </nav>
     {/* Mobile navbar open */}
     <nav className={`${hidden === 1 ? 'hidden' : 'flex'} bg-white flex-col w-full h-full pt-4 absolute top-0 z-100 items-center text-xl`}>
      <div>
        <Image
          src="/images/logo.webp"
          width={200}
          height={54}
          alt="Watsons Opticians Logo"
        />
      </div>
      <Image
          src="/images/close.svg"
          width={20}
          height={20}
          alt="Watsons Opticians Logo"
          className="fixed text-teal-700 top-12 right-7"
          onClick={() => triggerToggle()}
        />
      
      <div className="flex flex-col h-2/5 items-center justify-between">
        <div>Home</div>
        <div>About Us</div>
        <div>Eye Tests</div>
        <div>Eye Wear</div>
        <div>Contact Lenses</div>
        <div>Eye Conditions</div>
        <div className="bg-gold text-white w-48 h-11 flex justify-center items-center rounded">Book Appointment</div>
      </div>
    </nav>
    </>
  )
}