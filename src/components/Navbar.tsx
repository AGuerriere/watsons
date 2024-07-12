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


  const [status, statusHidden] = useState(1)
  function showEyeConditionsSubMenu() {
    const toggle = status === 1 ? 0 : 1;
    statusHidden(toggle);
  }

  const [statusEyeTests, statusEyeTestsHidden] = useState(1)
  function showEyeTestsSubMenu() {
    const toggle = statusEyeTests === 1 ? 0 : 1;
    statusEyeTestsHidden(toggle);
  }


  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex h-[100px] md:justify-between items-center text-sm lg:text-xl -ml-20 -mr-20 pl-2 pr-2 min-[1227px]:ml-0 min-[1227px]:mr-0">
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
        <div className="group inline-block relative">
          <button className="rounded inline-flex items-center">
            <span className="form-select bg-no-repeat pr-8">Eye Tests</span>
          </button>
          <div className="absolute hidden group-hover:block">
            <div className="bg-white rounded shadow-lg py-1 min-w-[250px] ">
              <Link href="/eye_tests" className="block px-4 py-2 hover:bg-green1 hover:text-white">Eye Tests</Link>
              <Link href="/NI_PEARS" className="block px-4 py-2 hover:bg-green1 hover:text-white">NI PEARS</Link>
            </div>
          </div>
        </div>
        <Link href="/frames">Eye Wear</Link>
        <Link href="/contact_lenses">Contact Lenses</Link>
        <div className="group inline-block relative">
          <button className="rounded inline-flex items-center">
            <span className="form-select bg-no-repeat pr-8">Eye Conditions</span>
          </button>
          <div className="absolute hidden group-hover:block">
            <div className="bg-white rounded shadow-lg py-1 min-w-[250px] ">
              <Link href="/eye_conditions" className="block px-4 py-2 hover:bg-green1 hover:text-white">Common eye conditions</Link>
              <Link href="/dry_eye" className="block px-4 py-2 hover:bg-green1 hover:text-white">Dry eye clinic</Link>
              <Link href="/myopia_management" className="block px-4 py-2 hover:bg-green1 hover:text-white">Myopia management</Link>
            </div>
          </div>
        </div>
        <a href="https://watsonsopticians.com#contact-us"><GoldButton text='Book Appointment'></GoldButton></a>
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
          <div className="group inline-block relative">
            <button className="rounded inline-flex items-center" onClick={() => showEyeTestsSubMenu()}>
              <span className="form-select bg-no-repeat pr-8 pl-2">Eye Tests</span>
            </button>
            <div className={`${statusEyeTests === 1 ? 'hidden' : ''} absolute group-focus:block`}>
              <div className="bg-white rounded shadow-lg py-1 min-w-[250px] ">
                <Link href="/eye_tests" className="block px-4 py-2 active:bg-green1 active:text-white" onClick={() => {triggerToggle();showEyeTestsSubMenu()}}>Eye Tests</Link>
                <Link href="/NI_PEARS" className="block px-4 py-2 active:bg-green1 active:text-white" onClick={() => {triggerToggle();showEyeTestsSubMenu()}}>NI PEARS</Link>
              </div>
            </div>
          </div>
          <Link href="/frames" className="active:text-black" onClick={() => triggerToggle()}>Eye Wear</Link>
          <Link href="/contact_lenses" className="active:text-black" onClick={() => triggerToggle()}>Contact Lenses</Link>
          <div className="group inline-block relative">
            <button className="rounded inline-flex items-center" onClick={() => showEyeConditionsSubMenu()}>
              <span className="form-select bg-no-repeat pr-8 pl-2">Eye Conditions</span>
            </button>
            <div className={`${status === 1 ? 'hidden' : ''} absolute group-focus:block`}>
              <div className="bg-white rounded shadow-lg py-1 min-w-[250px] ">
                <Link href="/eye_conditions"  className="block px-4 py-2 focus:bg-green1 focus:text-white" onClick={() => {triggerToggle();showEyeConditionsSubMenu()}}>Common eye conditions</Link>
                <Link href="/dry_eye" className="block px-4 py-2 focus:bg-green1 focus:text-white" onClick={() => {triggerToggle();showEyeConditionsSubMenu()}}>Dry eye clinic</Link>
                <Link href="/myopia_management" className="block px-4 py-2 focus:bg-green1 focus:text-white" onClick={() => {triggerToggle();showEyeConditionsSubMenu()}}>Myopia management</Link>
              </div>
            </div>
          </div>
          <a href="https://watsonsopticians.com/#contact-us" onClick={() => triggerToggle()}><GoldButton text='Book Appointment'></GoldButton></a>
        </div>
      </nav>
    </>
  )
}