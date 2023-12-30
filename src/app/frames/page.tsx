import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"



export default function Frames() {
  return (
    <>
      <Navbar />
      <Header title="Eye Wear" image="/images/homepage/10.webp" percentage="30" />
      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row mt-10 mb-10">
        <div className="w-full sm:w-1/2 sm:order-1 mt-7 sm:mt-0 order-2 min-h-[200px] h-fill relative">
          <Image
            src="/images/homepage/1.webp"
            fill={true}
            alt="Picture of a patient undergoing an eye test"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="sm:w-1/2 sm:ml-10 order-1 sm:order-2">
          <GoldTitle text="Eyewear" />
          <br />
          <H2Title title="Frames" />
          <p className="text-neutral-500 text-2xl font-light ">Whether you need prescription glasses or sunglasses, we have the perfect pair for you. We offer one to one expert assistance and advice when it comes to choosing your frames considering your prescription, style, and lifestyle requirements including nickel free frames for those who suffer from allergies. We have over 500 frames to choose from to suit all styles and budgets.</p>
        </div>

      </div>
      {/* Section 2 */}
      <GoldTitle text="Brands" />
      <div className="overflow-auto whitespace-nowrap flex pb-7 pt-7">
        <Image
          src="/images/brands/Picture_2.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />
        <Image
          src="/images/brands/Picture_4.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />Ì
        <Image
          src="/images/brands/Picture_8.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />
        <Image
          src="/images/brands/Picture_3.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />
        <Image
          src="/images/brands/Picture_5.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />
        <Image
          src="/images/brands/Picture_6.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />
        <Image
          src="/images/brands/Picture_7.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />
        <Image
          src="/images/brands/Picture_1.webp"
          width={0}
          height={0}
          alt="Picture of a patient undergoing an eye test"
          className='pr-3 w-auto h-[150px] sm:h-[200px]'
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        />

      </div>
      {/* Section 3 */}
      {/* Section 4 */}
      {/* Section 5 */}
      <Footer />
    </>
  )
}