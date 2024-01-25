import Image from "next/image"
import Link from "next/link"


export default function Footer() {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly bg-green1 -ml-7 -mr-7 md:-ml-20 md:-mr-20 text-white min-h-[290px] p-7">
        <div className="min-h-[290px]">
          <Image
            src="/images/white-logo.webp"
            width={163}
            height={80}
            alt="Watsons Opticians Logo"
            className="pl-1 pr-2 md:p-0"
          />
        </div>
        <div className="flex flex-col justify-between min-h-[290px]">
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <a href="https://www.facebook.com/p/Watsons-Opticians-100063738933177/" target="_blank">Click here for our latest</a>
          </div>
          <div>
            <h5>Locations</h5>
            <h5>Ballycastle</h5>
            <p className="text-xs text-grey2">
              41 Ann St, Ballycastle, BT54 6AA <br />
              Call us on 028 2076 2431
            </p>
            <h5>Portrush</h5>
            <p className="text-xs text-grey2">
              10 Main St, Portrush, BT56 8BL <br />
              Call us on 028 7082 3677
            </p>

          </div>
        </div>
        <div className="flex flex-col justify-between min-h-[290px]">
          <div className="flex flex-col">
            <Link href="/eye_tests">Eye Tests</Link>
            <Link href="/frames">Eye Wear</Link>
            <Link href="/contact_lenses">Contact Lenses</Link>
            <Link href="/eye_conditions">Eye Conditions</Link>
          </div>
          <div>
            <h5>Opening Hours</h5> <br />
            <p className="text-xs text-grey2">
              Monday - Thursday: 9:00 - 17:00 <br />
              Friday: 9:00 - 15:00 <br />
              Saturday: Closed <br />
              Sunday : Closed <br />
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-greenOverlay text-white h-16 -ml-7 -mr-7 md:-ml-20 md:-mr-20">© 2023 Mind Technica All Rights Reserved</div>
    </>
  )
}