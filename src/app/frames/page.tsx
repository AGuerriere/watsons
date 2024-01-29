import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"
import GoldButton from "@/components/GoldButton"
import Link from "next/link"



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
          <p className="text-neutral-500 text-base sm:text-2xl font-light ">Whether you need prescription glasses or sunglasses, we have the perfect pair for you. We offer one to one expert assistance and advice when it comes to choosing your frames considering your prescription, style, and lifestyle requirements including nickel free frames for those who suffer from allergies. We have over 500 frames to choose from to suit all styles and budgets.</p>
        </div>

      </div>
      {/* Section 2 */}
      <GoldTitle text="Brands" />
      <div className="overflow-auto whitespace-nowrap flex pb-7 pt-7 ">
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
      <GoldTitle text="Kids brands" />
      <div className="overflow-auto whitespace-nowrap flex pb-7 pt-7">
        <div className="w-[273px] h-[127px] mr-4 px-[15px] py-[25px] sm:w-[322px] sm:h-[202px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 inline-flex">
          <div className="w-[301.71px] text-center text-teal-950 text-2xl font-light font-['Source Sans Pro']">Batman </div>
        </div>
        <div className="w-[273px] h-[127px] mr-4 px-[15px] py-[25px] sm:w-[322px] sm:h-[202px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 inline-flex">
          <div className="w-[301.71px] text-center text-teal-950 text-2xl font-light font-['Source Sans Pro']">Barbie </div>
        </div>
        <div className="w-[273px] h-[127px] mr-4 px-[15px] py-[25px] sm:w-[322px] sm:h-[202px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 inline-flex">
          <div className="w-[301.71px] text-center text-teal-950 text-2xl font-light font-['Source Sans Pro']">Paddington Bear</div>
        </div>
        <div className="w-[273px] h-[127px] mr-4 px-[15px] py-[25px] sm:w-[322px] sm:h-[202px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 inline-flex">
          <div className="w-[301.71px] text-center text-teal-950 text-2xl font-light font-['Source Sans Pro']">Horrid Henry </div>
        </div>
        <div className="w-[273px] h-[127px] mr-4 px-[15px] py-[25px] sm:w-[322px] sm:h-[202px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 inline-flex">
          <div className="w-[301.71px] text-center text-teal-950 text-2xl font-light font-['Source Sans Pro']">Crocs </div>
        </div>
        <div className="w-[273px] h-[127px] mr-4 px-[15px] py-[25px] sm:w-[322px] sm:h-[202px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 inline-flex">
          <div className="w-[301.71px] text-center text-teal-950 text-2xl font-light font-['Source Sans Pro']">Crosshatch </div>
        </div>
        <div className="w-[273px] h-[127px] mr-4 px-[15px] py-[25px] sm:w-[322px] sm:h-[202px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 inline-flex">
          <div className="w-[301.71px] text-center text-teal-950 text-2xl font-light font-['Source Sans Pro']">Kickers </div>
        </div>
      </div>
      {/* Section 4 */}
      <GoldTitle text="Type of lenses" />
      <br />
      <H2Title title="Lenses" />
      <div className="flex flex-col sm:flex-row justify-between mb-10">
        <div className="text-neutral-500 sm:w-2/5 text-base sm:text-2xl font-light mb-7 sm:mb-0">We’re passionate about providing the best possible outcome for all our patients and will be on hand to recommend the lens that best meets your requirements.</div>
        <div className="text-neutral-500 sm:w-2/5 text-base sm:text-2xl font-light">Picking the right lenses for your glasses is just as important as choosing the right frame. While lenses might all look similar, we offer a wide selection to cater for different prescriptions, and lifestyle requirements such as:</div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between mb-10">
        <div className="w-full sm:w-2/5 mt-7 sm:mt-0 sm:min-h-[70vh] h-fill relative">
          <Image
            src="/images/homepage/image1.webp"
            fill={true}
            alt="Picture of a patient undergoing an eye test"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="sm:w-2/5 w-full flex flex-col justify-between">
          <div className="flex pb-2 pt-2 border-b-2 border-dashed">
            <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
            <div className="flex flex-col">
              <div className="text-black text-base sm:text-2xl font-light">Thinner, lighter lenses</div>
              <div className="text-neutral-500 text-base sm:text-2xl font-light">Enhance vision, comfort, and aesthetic.</div>
            </div>
          </div>
          <div className="flex pb-2 pt-2 border-b-2 border-dashed">
            <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
            <div className="flex flex-col">
              <div className="text-black text-base sm:text-2xl font-light">Anti-reflective lenses</div>
              <div className="text-neutral-500 text-base sm:text-2xl font-light">For those who spend a lot of time looking at screens or who struggle with glare when driving at night.</div>
            </div>
          </div>
          <div className="flex pb-2 pt-2 border-b-2 border-dashed">
            <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
            <div className="flex flex-col">
              <div className="text-black text-base sm:text-2xl font-light">Driving lenses</div>
              <div className="text-neutral-500 text-base sm:text-2xl font-light">DriveSafe lenses designed to enhance the driving experience especially at night</div>
            </div>
          </div>
          <div className="flex pb-2 pt-2 border-b-2 border-dashed">
            <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
            <div className="flex flex-col">
              <div className="text-black text-base sm:text-2xl font-light">Multifocals</div>
              <div className="text-neutral-500 text-base sm:text-2xl font-light">For those who need distance and reading glasses but don’t want to have multiple pairs</div>
            </div>
          </div>
          <div className="flex pb-2 pt-2 border-b-2 border-dashed">
            <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
            <div className="flex flex-col">
              <div className="text-black text-base sm:text-2xl font-light">Enhanced readers</div>
              <div className="text-neutral-500 text-base sm:text-2xl font-light">For those who spend a lot of their working day in an office or at a computer.</div>
            </div>
          </div>
          <div className="flex pb-2 pt-2 border-b-2 border-dashed">
            <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
            <div className="flex flex-col">
              <div className="text-black text-base sm:text-2xl font-light">Transition lenses</div>
              <div className="text-neutral-500 text-base sm:text-2xl font-light">Which darken in the sun for those who want one pair of glasses to act as day-to-day glasses and sunglasses</div>
            </div>
          </div>
          <div className="flex pb-2 pt-2 border-b-2 border-dashed">
            <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
            <div className="flex flex-col">
              <div className="text-black text-base sm:text-2xl font-light">Myopia control lenses</div>
              <div className="text-neutral-500 text-base sm:text-2xl font-light">Myopia control lenses desgined to slow down the progression of myopia in children</div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className="flex flex-col sm:flex-row mt-10 sm:mt-20 mb-10">
        <div className="sm:w-1/2 order-2 sm:order-1">
          <H2Title title="Did you know?" />
          <p className="text-neutral-500 text-base sm:text-2xl font-light ">Once you’ve chosen your frame and lenses, we have our own glazing lab on site to make sure your new glasses are ready as quickly as possible for you to enjoy.</p>
          <br />
          <a href="https://watsonsopticians.com/#contact-us"><GoldButton text='Book Appointment'></GoldButton></a>
        </div>
        <div className="w-full sm:ml-10 sm:w-1/2 sm:order-2 mt-7 sm:mt-0 order-1 min-h-[200px] h-fill relative mb-5 sm:mb-0">
          <Image
            src="/images/homepage/image4.webp"
            fill={true}
            alt="Picture of a patient undergoing an eye test"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
            className="object-cover object-center"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}