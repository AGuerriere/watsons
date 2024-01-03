'use client'

import Image from "next/image";
import { useState } from "react"
import GoldButton from "./GoldButton";
import Link from "next/link";

export default function Navbar() {
  const [hidden, toggleHidden] = useState(1)

  function triggerToggle() {
    const toggle = hidden === 1 ? 0 : 1;
    toggleHidden(toggle);
  }
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex h-[100px] md:justify-between items-center text-sm lg:text-xl">
        <div className="">
          <Link
            href="/">
            <Image
              src="/images/logo.webp"
              width={163}
              height={80}
              alt="Watsons Opticians Logo"
            />
          </Link>
        </div>
        <Link href="/" className="active:text-black">Home</Link>
        <Link href="/about" className="active:text-black">About Us</Link>
        <Link href="/eye_tests">Eye Tests</Link>
        <Link href="/frames">Eye Wear</Link>
        <Link href="/contact_lenses">Contact Lenses</Link>
        <div className="hover:">Eye Conditions</div>
        <Link href="https://watsonsopticians.com/#contact-us"><GoldButton text='Book Appointment'></GoldButton></Link>
      </nav>

      {/* Mobile navbar closed */}
      <nav className={`${hidden === 1 ? 'flex' : 'hidden'} lg:hidden justify-start items-center h-[100px]`}>
        <Image
          src="/images/menu.svg"
          width={50}
          height={50}
          alt="Watsons Opticians Logo"
          onClick={() => triggerToggle()}
          className=" mr-5"
        />
        <Link
          href="/">
          <Image
            src="/images/logo.webp"
            width={90}
            height={30}
            alt="Watsons Opticians Logo"
          />
        </Link>
      </nav>
      {/* Mobile navbar open */}
      <nav className={`${hidden === 1 ? 'hidden' : 'flex'} bg-white flex-col w-[100vw] h-[100vh] pt-4 fixed top-0 left-0 z-[100] items-center text-xl`}>
        <div>
          <Link
            href="/"
            onClick={() => triggerToggle()}>
            <Image
              src="/images/logo.webp"
              width={200}
              height={54}
              alt="Watsons Opticians Logo"
            />
          </Link>
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
          <Link href="/" className="active:text-black" onClick={() => triggerToggle()}>Home</Link>
          <Link href="/about" className="active:text-black" onClick={() => triggerToggle()}>About Us</Link>
          <Link href="/eye_tests" className="active:text-black" onClick={() => triggerToggle()}>Eye Tests</Link>
          <Link href="/frames" className="active:text-black" onClick={() => triggerToggle()}>Eye Wear</Link>
          <Link href="/contact_lenses" className="active:text-black" onClick={() => triggerToggle()}>Contact Lenses</Link>
          <div>Eye Conditions</div>
          <Link href="https://watsonsopticians.com/#contact-us" onClick={() => triggerToggle()}><GoldButton text='Book Appointment'></GoldButton></Link>
        </div>
      </nav>
    </>
  )
}