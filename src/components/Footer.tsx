import Image from "next/image"
import Link from "next/link"


export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-3 md:grid-cols-5 justify-between md:grid-cols-5 bg-green1 -ml-7 -mr-7 md:-ml-20 md:-mr-20 text-white pl-7 pr-7 md:pl-20 md:pr-20 pt-7 pb-7">
        <div>
          <Image
            src="/images/white-logo.webp"
            width={163}
            height={80}
            alt="Watsons Opticians Logo"
            className="pl-1 pr-2 md:p-0"
          />
        </div>
        <div className="flex flex-col justify-between  h-[150px]">
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <a href="https://www.facebook.com/p/Watsons-Opticians-100063738933177/" target="_blank">Latest Updates</a>
          </div>
        </div>
        <div className="flex flex-col h-[150px]">
          <Link href="/eye_tests">Eye Tests</Link>
          <Link href="/frames">Eye Wear</Link>
          <Link href="/contact_lenses">Contact Lenses</Link>
          <Link href="/eye_conditions">Eye Conditions</Link>
        </div>
        <div className="col-start-2 md:col-start-4">
          <h5>Locations:</h5>
          <br />
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
        <div className="flex flex-col justify-between">
          <div>
            <h5>Opening Hours:</h5> <br />
            <div>
              <p>Ballycastle</p>
              <p className="text-xs text-grey2">
                Monday - Saturday: 9:00 - 17:30 <br />
                Alternate Wednesday: Closed <br />
                Sunday : Closed <br />
              </p>
            </div>
            <br />
            <div>
              <p>Portrush</p>
              <p className="text-xs text-grey2">
                Monday - Tuesday, Thursday, Friday, Saturday: 9:00 - 17:30 <br />
                Alternate Saturday: Closed <br />
                Sunday : Closed <br />
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-greenOverlay text-white md:h-16 -ml-7 -mr-7 md:-ml-20 md:-mr-20 md:pl-20 md:pr-20 pt-3 pb-3 md:pt-7 md:pb-7">
        <p>© 2023 Watsons Opticians All Rights Reserved</p>
        <Link href="https://mindtechnica.com/">
          <Image
            src="/images/homepage/mindtechnica.png"
            width={80}
            height={70}
            alt="Mind Technica Logo"
          />
        </Link> </div>
    </>
  )
}