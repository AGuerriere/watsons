import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldTitle from "@/components/GoldTitle";
import H2Title from "@/components/H2Title";
import Link from "next/link";
import LearnMore from "@/components/LearnMore";
import Image from "next/image";

export default function Dry_Eye() {
  return (
    <>
      <Navbar />
      <Header title="Dry eye clinic" image="/images/homepage/7.webp" percentage="20" />
      {/* Section 1 */}
      <div className="mt-20 mb-20 text-black text-base sm:text-2xl font-light">
        <GoldTitle text="Dry Eye Clinic" />
        <br />
        <H2Title title="Are you suffereing with the dry eyes?" />
        {/* Container */}
        <div className="flex flex-col sm:flex-row justify-between">
          {/* left */}
          <div className="sm:w-2/5 w-full">
            <p>Are you suffering from red, itchy, gritty or burning eyes? Are your eyes hard to open in the morning? Do your eyes water when you go outside on a cold day? If so, you might be suffering from Dry Eye Disease.</p>
            <div className="flex flex-row justify-evenly items-center min-h-[140px] 2xl:w-3/5 bg-orange-300 bg-opacity-10 mt-5 mb-5">
              <p className="text-center text-teal-950 text-[40px] font-normal w-2/3 ">40% +</p>
              <p className="text-teal-950 font-normal">of population is affected by dry eye syndrome</p>
            </div>
          </div>
          {/* right */}
          <div className="sm:w-2/5 w-full">
            <p>Dry eye disease is associated with either tear deficiency or excessive tear evaporation. It affects more than 40% of the population and is most commonly found in the elderly, post-menopausal women and those living or working in conditions of low humidity and/or poor air quality.</p><br />
            <p>Diagnosing Dry Eye Disease can be done during a routine or <span className="text-black text-2xl font-normal underline"><Link href="/NI_PEARS">NI PEARS</Link></span> examination, although in some cases a separate dry eye assessment appointment may be required.</p>
            <br />
            <LearnMore text="Learn more about NI PEARS " link="/NI_PEARS" target="_self" />
          </div>

        </div>

      </div>
      {/* Section 2 */}
      {/* Flex container */}
      <div className="flex flex-col sm:flex-row -ml-7 -mr-7 md:-ml-20 md:-mr-20">
        {/* left */}
        <div className='w-full bg-green1 md:w-1/2 pl-7 lg:pl-20 pt-10 pb-10'>
          <h2 className="text-light text-[32px] md:text-[40px] text-white">Treatment for Dry Eye Disease</h2> <br /><br />
          <p className="text-white font-light text-base md:text-2xl">
            The good news is we can recommend and guide you on a number of treatments you can carry out at home to reduce the effects of Dry Eye Disease, including:<br /><br />
          </p>
          <ul className="text-white font-light text-base md:text-2xl list-disc list-inside">
            <li>Blink exercises</li>
            <li>Hot compresses</li>
            <li>Eye drops/ointments</li>
            <li>Lid wipes</li>
            <li>Lid massage</li>
            <li>Dietary advice</li>
            <li>Review of medication</li>
            <li>Punctal plugs</li>
            <li>Food supplements</li>
          </ul>
          <br /><br />
          <p className="text-white font-light text-base md:text-2xl">
            With the help of our Dry Eye clinic we can recommend the best tailored plan to suit your needs and monitor progress to minimise any discomfort.
          </p>
        </div>
        {/* right */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 relative min-h-[500px] md:min-h-[700px]">
          <Image
            src="/images/homepage/image2.webp"
            fill
            sizes="100%"
            alt="Picture of an eye test tool"
            className='order-2 xl:order-1 -pl-7 w-auto object-cover'
          />
        </div>
      </div>
      {/* Section 3 */}
      <div className="pb-20 pt-20">
        <H2Title title="Contact our specialists" />
        <div className="flex flex-col sm:flex-row justify-between sm:items-end text-black text-base md:text-2xl font-light pt-10 pb-10">
          <p className="sm:w-2/5">Please contact us to arrange an appointment for our Dry Eye clinic if you think this is something we can help with.</p>
          <div className="w-2/5 mt-10 sm:mt-0">
            <LearnMore text="Contact Us" link="https://watsonsopticians.com#contact-us" target="_self" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}