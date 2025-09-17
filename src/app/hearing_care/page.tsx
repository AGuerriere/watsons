import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"
import LearnMore from "@/components/LearnMore"
import Image from "next/image"
import Link from "next/link"
import GoldButton from "@/components/GoldButton"
import Checkmark from "@/components/Checkmark"

export default function HearingCare() {
  return (
    <>
      <Navbar />
      <Header title="Hearing Care" image="/images/homepage/hearing-2.jpg" percentage="25%" />
      {/* Section 1 */}
      <div className="mb-10 mt-10 w-full flex flex-col items-center">
        <div className="flex flex-col sm:justify-between gap-10 max-w-[1600px]">
          <GoldTitle text="Hearing Care" />
          <H2Title title="Introducing Hearing Care Services at Watsons Opticians" />
          <p className="text-neutral-500 text-2xl font-light">At Watsons Opticians, we’re expanding our services to offer more than just exceptional eye care. We are pleased to announce a new partnership with Linenhall Hearing Care, bringing expert hearing services directly to our practice.</p>
          <div className="flex flex-row justify-evenly items-center min-h-[140px] bg-orange-300 bg-opacity-10">
            <p className="text-teal-950 text-xl font-normal p-5">Don’t Miss Out on Those Special Moments…</p>
          </div>
          <p className="text-neutral-500 text-2xl font-light">Hearing is essential to enjoying life’s special moments. Linenhall Hearing Care combines the latest hearing aid technology with unrivalled personal care, ensuring that you leave feeling confident and supported.</p>
          <a href="https://watsonsopticians.com/#contact-us"><GoldButton text='Book Appointment'></GoldButton></a>
        </div>

      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row -ml-7 -mr-7 md:-ml-20 md:-mr-20">
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px]">
          <Image
            src="/images/homepage/hearing-1.jpg"
            fill
            sizes="100%"
            alt="Picture of an eye test tool"
            className='order-2 xl:order-1 -pl-7 w-auto object-cover'
          />
        </div>
        <div className='w-full bg-green1 lg:w-1/2 max-w-[1600px] pt-10 pb-10'>
          <div className="ml-7 mr-7 md:ml-20 md:mr-20">
            <GoldTitle text="Hearing Care" />
            <br />
            <div className="max-w-[720px]">
              <h2 className="text-light text-[32px] md:text-[40px] text-white">Meet Michaela, Your Hearing Specialist</h2> <br /><br />
              <div className="text-white font-light text-base md:text-2xl">
                <p className="mb-5">We’re excited to introduce Michaela Esler, the primary audiologist from Linenhall Hearing Care. Originally from Ballymena, Michaela studied Audiology at De Montfort University in Leicester. She holds certifications from the British Society of Hearing Aid Audiologists (BSHAA) and the Health and Care Professions Council.</p>
                <p className="mb-5">Starting Tuesday, 29th October 2024, Michaela will be available at Watsons Opticians for appointments every two weeks, with the potential for more frequent visits if there is demand.</p>
                <Checkmark text="Hearing Tests – Free of charge for patients over 60" textColor="text-white" />
                <Checkmark text="Wax Removal – Bookable appointments available." textColor="text-white" />
                <Checkmark text="Home Visits – Offered for patients who require in-home care" textColor="text-white" />
                <p className="mt-5">If you’re interested in booking a hearing test or have any questions, get in touch with us today. We’re here to provide you with the best care, whether it’s for hearing or vision.</p>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* Section 3 */}
      <div className="w-full flex justify-center">
        <div className="pt-10 max-w-[1600px]">
          <GoldTitle text="Hearing Care" />
          <br />
          <H2Title title="Hearing is important" />
          <div className="flex flex-col min-h-[300px]">
            <p className="text-base font-light md:text-2xl mb-10">Whether you’re interested in a hearing test or have any questions, reach out to us today to schedule an appointment. At Watsons Opticians, we’re here to help you see—and hear—the world more clearly.</p>
            <a href="https://watsonsopticians.com/#contact-us"><GoldButton text='Book Appointment'></GoldButton></a>
          </div>
        </div >
      </div>
      <Footer />
    </>
  )
}