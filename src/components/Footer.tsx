import Image from "next/image"
import Link from "next/link"


export default function Footer() {
  return(
    <>
      <div className="flex flex-row items-center justify-evenly bg-green1 -ml-7 -mr-7 md:-ml-20 md:-mr-20 text-white min-h-[290px]">
          <div className="flex flex-col lg:flex-row justify-between h-full">
            <Image
              src="/images/logo-footer.svg"
              width={163}
              height={80}
              alt="Watsons Opticians Logo"
            />
          </div>
          <div className="flex flex-col justify-between">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <div>
            <h5>Locations</h5>
            <p className="text-xs">
              10 Main St, Portrush, BT56 8BL <br />
              Call us on 028 7082 3677
            </p>
            <p className="text-xs">
              41 Ann St, Ballycastle, BT54 6AA <br />
              Call us on 028 2076 2431 
            </p>
          </div>
          </div>
          <div className="flex flex-col justify-between">
            <Link href="/about">Eye Tests</Link>
            <Link href="/about">Eye Wear</Link>
            <Link href="/about">Contact Lenses</Link>
            <Link href="/about">Eye Conditions</Link>
            <div>
            <h5>Opening Hours</h5>
            <p className="text-xs">         
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