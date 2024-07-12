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

export default function EyeTests() {
  return (
    <>
      <Navbar />
      <Header title="Eye Tests" image="/images/homepage/3.webp" percentage="40%" />
      {/* Section 1 */}
      <div className="mb-10 mt-10">
        <GoldTitle text="Eye Tests" />
        <br />
        <H2Title title="Why get an eye test" />
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="sm:w-2/5">
            <p className="text-neutral-500 text-2xl font-light">An eye test is not just about finding out if you need glasses or contact lenses. It is also a vital health check for your eyes and your general wellbeing.</p>
            <br />
            <div className="flex flex-row justify-evenly items-center min-h-[140px] bg-orange-300 bg-opacity-10">
              <p className="text-center text-teal-950 text-[40px] font-normal ">50% +</p>
              <p className="text-teal-950 text-xl font-normal">of sight loss is preventable</p>
            </div>
            <br />
            <p className="text-neutral-500 text-2xl font-light">So getting your eyes tested can help prevent, or limit, the damage caused by certain eye conditions. For more information on common eye conditions <Link href="/eye_conditions">click here.</Link></p>
            <br />
            <a href="https://watsonsopticians.com/#contact-us"><GoldButton text='Book Appointment'></GoldButton></a>
          </div>
          <div className="sm:w-2/5 mt-10 sm:mt-0">
            <p className="text-neutral-500 text-base sm:text-2xl font-light mb-8">Regular eye examinations are important because:</p>
          <Checkmark text="Having your vision corrected can improve the quality of day-to-day life." />
          <Checkmark text="They will help detect certain eye conditions such as cataracts, glaucoma and age-related macular degeneration, which could lead to sight loss." />
          <Checkmark text="Identifying any issues with eyesight early can slow down progression, and in the case of children help set them up for success. We recommend children have eye tests from the age of three years old." />
          <Checkmark text="We are also able to look out for signs of  broader health conditions with symptoms that affect the eyes, such as diabetes and high blood pressure." />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row -ml-7 -mr-7 md:-ml-20 md:-mr-20">
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px]">
          <Image
            src="/images/homepage/9.webp"
            fill
            sizes="100%"
            alt="Picture of an eye test tool"
            className='order-2 xl:order-1 -pl-7 w-auto object-cover'
          />
        </div>
        <div className='w-full bg-green1 lg:w-1/2 p-8'>
          <GoldTitle text="Eye Tests" />
          <br />
          <h2 className="text-light text-[32px] md:text-[40px] text-white">What to expect</h2> <br /><br />
          <p className="text-white font-light text-base md:text-2xl">
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
          <p className="sm:w-2/5 text-base font-light md:text-2xl">The NHS cover the cost of a sight test for a wide range of people including children aged 16 and under, 16–18-year-olds in full time education and those over 60 amongst others. For a full list of those eligible <a href="https://www.nidirect.gov.uk/articles/eye-care#toc-7" target="_blank">click here.</a></p>
          <div className="sm:w-2/5 text-base font-light md:text-2xl">
            <p className="mb-3 md:mb-5">Emergency appointments for minor eye conditions are available. This is known as NI PEARS (Northern Ireland Primary Eyecare Assessment and Referral Service)</p>
            <LearnMore text="Learn more about NI PEARS " target="_self" link="NI_PEARS"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}