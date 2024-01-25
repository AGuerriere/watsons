import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"
import Checkmark from "@/components/Checkmark"
import LearnMore from "@/components/LearnMore"


export default function ContactLenses() {
  return (
    <>
      <Navbar />
      <Header title="Contact lenses" image="/images/homepage/2.webp" percentage="30" />
      {/* Section 1 */}
      <div className="lg:w-2/5 mb-10 mt-10">
        <GoldTitle text="Contact Lenses" />
        <br />
        <H2Title title="What we offer" />
        <p className="text-neutral-500 text-base sm:text-2xl font-light">We have different types of contact lenses to suit your needs and preferences including spherical and toric, depending on your prescription.</p>
      </div>
      {/* Section 2 */}
      {/* Container for the table to center the table in the page. */}
      <div className="flex flex-row justify-center ">
        {/* Outer div for the table - Width is roughly 93% of the total container  */}
        <div className="border-solid border-2 sm:w-11/12 mb-10">
          {/* Row 1*/}
          <div className="flex flex-col sm:flex-row border-solid border-b-2">
            {/* Left */}
            <div className="sm:w-1/2 p-5 sm:p-10 border-solid border-b-2 sm:border-b-0 sm:border-r-2">
              <h5 className="text-black text-xl sm:text-[32px] font-light mb-5">Daily lenses</h5>
              <p className="text-neutral-500 text-base sm:text-2xl font-light">Disposable lenses that you wear for one day and then throw away</p>
            </div>
            {/* Right */}
            <div className="sm:w-1/2 p-5 sm:p-10">
              <div><Checkmark text="Ideal for people who want convenience, hygiene and comfort and ideal for sports" /></div>
              <div><Checkmark text="Suitable for people who have allergies or dry eyes" /></div>
            </div>
          </div>
          {/* Row 2*/}
          <div className="flex flex-col sm:flex-row border-solid border-b-2">
            {/* Left */}
            <div className="sm:w-1/2 p-5 sm:p-10 border-solid border-b-2 sm:border-b-0 sm:border-r-2">
              <h5 className="text-black text-xl sm:text-[32px] font-light mb-5">Fortnightly or monthly lenses</h5>
              <p className="text-neutral-500 text-base sm:text-2xl font-light">Reusable lenses that you reuse for two weeks or a month and then replace with a new pair</p>
            </div >
            {/* Right */}
            <div className="sm:w-1/2 p-5 sm:p-10">
              <div><Checkmark text="More economical than daily lenses, but  require more care and cleaning" /></div>
              <div><Checkmark text="Suitable for people who wear contact lenses regularly and have a stable prescription" /></div>
            </div>
          </div>
          {/* Row 3*/}
          <div className="flex flex-col sm:flex-row border-solid border-b-2">
            {/* Left */}
            <div className="sm:w-1/2 p-5 sm:p-10 border-solid border-b-2 sm:border-b-0 sm:border-r-2">
              <h5 className="text-black text-xl sm:text-[32px] font-light mb-5">Yearly/gas permeable lenses</h5>
              <p className="text-neutral-500 text-base sm:text-2xl font-light">Reusable lenses that you reuse for a year and then replace with a new pair</p>
            </div >
            {/* Right */}
            <div className="sm:w-1/2 p-5 sm:p-10">
              <div><Checkmark text="More customisable than fortnightly or monthly lenses, but require the most care and cleaning" /></div>
              <div><Checkmark text="Suitable for people who have complex prescriptions or special eye conditions" /></div>
            </div>
          </div>
          {/* Row 4*/}
          <div className="flex flex-col sm:flex-row border-solid border-b-2">
            {/* Left */}
            <div className="sm:w-1/2 p-5 sm:p-10 border-solid border-b-2 sm:border-b-0 sm:border-r-2">
              <h5 className="text-black text-xl sm:text-[32px] font-light mb-5">Multifocal contact lenses</h5>
              <p className="text-neutral-500 text-base sm:text-2xl font-light">Also known as bifocal or progressive lenses. These correct both your Distance and Near vision at the same time and can totally replace glasses </p>
            </div >
            {/* Right */}
            <div className="sm:w-1/2 p-5 sm:p-10">
              <div><Checkmark text="These lenses are available in: daily, monthly or gas permeable yearly" /></div>
            </div>
          </div>
          {/* Row 5*/}
          <div className="flex flex-col sm:flex-row">
            {/* Left */}
            <div className="sm:w-1/2 p-5 sm:p-10 border-solid border-b-2 sm:border-b-0 sm:border-r-2">
              <h5 className="text-black text-xl sm:text-[32px] font-light mb-5">Orthokeratology contact lenses</h5>
              <p className="text-neutral-500 text-base sm:text-2xl font-light">Worn during sleep to gently reshape the cornea and improve vision during the day without the need for glasses or contact lenses</p>
            </div >
            {/* Right */}
            <div className="sm:w-1/2 p-5 sm:p-10">
              <div><Checkmark text="Also known as ortho-k or corneal refractive therapy lenses" /></div>
              <div><Checkmark text="More innovative and convenient than other types of lenses" /></div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      {/* Outer Container for the green background */}
      <div className="bg-green1 -ml-7 -mr-7 md:-ml-20 md:-mr-20 mb-10 p-7 md:p-20">
        <GoldTitle text="Orthokeratology contact lenses" />
        <br />
        <h2 className="text-white text-xl sm:text-[40px] font-normal">Ortho-K contact lenses</h2>
        <br />
        {/* Flex container for left and right side */}
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Left */}
          <div className="sm:w-2/5">
            <p className="text-white text-base sm:text-2xl font-light">Ortho-K contact lenses are designed to be worn overnight while you sleep rather than during the day. They work by gently and gradually reshaping the surface of the eye meaning that when you take them out in the morning, you should be able to see clearly throughout the day, without the need for any other lenses or glasses. They are also used for Myopia management</p>
            <br /><br />
            <h2 className="text-orange-300 text-xl sm:text-[40px] font-normal mb-2">20 years</h2>
            <p className="text-white text-base sm:text-2xl font-normal">of experience fitting Ortho-K lenses</p>
            <br /><br />
            <p className="text-white text-base sm:text-2xl font-light">They’re suitable for those who are short sighted with a prescription of less than -5.00 with low or no astigmatism. Unfortunately they’re not suitable for patients who are long sighted.</p>
          </div>
          {/* Right */}
          <div className="sm:w-2/5">
            <p className="text-white text-base sm:text-2xl font-normal ">Why choose Ortho-K lenses?</p>
            <br />
            <p className="text-white text-base sm:text-2xl font-light">Ortho-K are ideal for people who:</p>
            <br />
            <ul className="list-none text-white text-base sm:text-2xl font-light">
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Want clear natural vision</li>
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Want to be free from lenses for sports and outdoor activities for example water sports and boxing.</li>
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Do not want to undergo laser surgery</li>
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Children as it can slow down the progression of shortsightedness</li>
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Find it hard to wear contact lenses all day without discomfort</li>
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Suffer from hay-fever</li>
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Work in a very dusty, dry or smoky environment</li>
              <li className="flex flex-row"><div className="w-[15px] h-[15px] bg-orange-300 rounded-full mt-1 mr-5 aspect-square mb-3"></div>Find spectacles and conventional lenses just a plain nuisance</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <br />
      <H2Title title="Interested in contact lenses?" />
      <div className="flex flex-col sm:flex-row justify-between pb-10">
        <p className="sm:w-2/5 text-neutral-500 text-2xl font-light">If you’re interested in contact lenses or finding out more about  Ortho-K lenses and whether they’ll work for you contact us</p>
        <div className="sm:w-2/5 text-2xl mt-7 flex items-end">
          <LearnMore text="Contact us" link="https://watsonsopticians.com#contact-us" target="_self" /></div>
      </div>
      <br />
      <Footer />
    </>
  )
}