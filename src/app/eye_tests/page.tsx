import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"
import LearnMore from "@/components/LearnMore"
import Image from "next/image"

export default function EyeTests() {
  return (
    <>
      <Navbar />
      <Header title="Eye Tests" image="/images/homepage/3.webp" percentage="40%" />
      {/* Section 1 */}

      
      {/* Section 2 */}
      <div className="flex flex-col sm:flex-row">
        <div className="flex justify-center md:justify-end w-full md:w-1/2 relative min-h-[500px] md:min-h-[700px]">
          <Image
            src="/images/homepage/9.webp"
            fill
            sizes="100%"
            alt="Picture of an eye test tool"
            className='order-2 xl:order-1 -pl-7 w-auto object-cover'
          />
        </div>
        <div className='w-full bg-greenOverlay md:w-1/2 p-8'>
          <h2 className="text-light text-[32px] md:text-[40px] text-white">What to expect</h2> <br /><br />
          <p className="text-white text-base md:text-2xl text-light">
            Our eye tests usually last around 30 minutes. During the test we carry out a regular routine of checks and based on the results of these tailor our test to suit your individual needs. <br /><br />
            Our equipment includes a digital retinal camera which allows us to take photographs of the inside of your eyes so even small abnormalities can be detected, recorded and compared in future checks. We also have an OCT, otherwise known as Ocular Coherence Tomography, which is an advanced eye scan for people of all ages. In a similar way to ultrasound, OCT uses light rather than sound waves to illustrate the different layers that make up the back of the eye, allowing us to rapidly diagnose a number of common eye conditions e.g., Macular Degeneration, Glaucoma and Diabetes. <br /><br />
            Once the test is complete the optician will explain the results of your test, and make any recommendations based on these. <br /><br />
            Your prescription can be dispensed wherever you choose. However, prescribing and dispensing of glasses are closely linked, so it is best to have your glasses dispensed where you have your eyes examined. <br /><br />
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className="pt-10">
        <GoldTitle text="Eye Tests" />
        <br />
        <H2Title title="Did you know?" />
        <div className="flex flex-col sm:flex-row justify-evenly sm:justify-between min-h-[300px]">
          <p className="sm:w-2/5 text-base font-light md:text-2xl">The NHS cover the cost of a sight test for a wide range of people including children aged 16 and under, 16–18-year-olds in full time education and those over 60 amongst others. For a full list of those eligible click here</p>
          <div className="sm:w-2/5 text-base font-light md:text-2xl">
            <p className="mb-3 md:mb-5">Emergency appointments for minor eye conditions are available. This is known as NI PEARS (Northern Ireland Primary Eyecare Assessment and Referral Service)</p>
            <LearnMore text="Learn more about NI PEARS " />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}