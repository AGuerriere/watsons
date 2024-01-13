import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldTitle from "@/components/GoldTitle";
import H2Title from "@/components/H2Title";
import Link from "next/link";
import LearnMore from "@/components/LearnMore";

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
            <p>Dry eye disease is associated with either tear deficiency or excessive tear evaporation. It affects more than 40% of the population and is most commonly found in the elderly, post-menopausal women and those living or working in conditions of low humidity and/or poor air quality.</p>
            <p>Diagnosing Dry Eye Disease can be done during a routine or <span className="text-black text-2xl font-normal underline"><Link href="/NI_PEARS">NI PEARS</Link></span> examination, although in some cases a separate dry eye assessment appointment may be required.</p>
            <br />
            <LearnMore text="Learn more about NI PEARS " link="/NI_PEARS" target="_self"/>
          </div>

        </div>

      </div>
      {/* Section 2 */}

      <Footer />
    </>
  )
}