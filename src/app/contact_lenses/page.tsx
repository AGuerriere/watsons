import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"
import Checkmark from "@/components/Checkmark"


export default function ContactLenses() {
  return (
    <>
      <Navbar />
      <Header title="Contact lenses" image="/images/homepage/2.webp" percentage="30" />
      {/* Section 1 */}
      <div className="sm:w-2/5 mb-10">
        <GoldTitle text="Contact Lenses" />
        <br />
        <H2Title title="What we offer" />
        <p className="text-neutral-500 text-base sm:text-2xl font-light">We have different types of contact lenses to suit your needs and preferences including spherical and toric, depending on your prescription.</p>
      </div>
      {/* Section 2 */}
      {/* Outer div for the table */}
      <div className="border-solid border-2 sm:w-11/12">
        {/* Row */}
        <div className="flex flex-col sm:flex-row border-solid border-b-2">
          {/* Left */}
          <div className="sm:w-1/2 p-10">
            <h5 className="text-black text-xl sm:text-[32px] font-light">Daily lenses</h5>
            <p className="text-neutral-500 text-base sm:text-2xl font-light">Disposable lenses that you wear for one day and then throw away</p>
          </div>
          {/* Right */}
          <div className="sm:w-1/2 p-10">
            <div><Checkmark text="Ideal for people who want convenience, hygiene and comfort and ideal for sports" /></div>
            <div><Checkmark text="Suitable for people who have allergies or dry eyes" /></div>
          </div>
        </div>
         {/* Row */}
        <div className="flex flex-col sm:flex-row border-solid border-b-2">
          {/* Left */}
          <div className="sm:w-1/2 p-10">
            <h5 className="text-black text-xl sm:text-[32px] font-light">Fortnightly or monthly lenses</h5>
            <p className="text-neutral-500 text-base sm:text-2xl font-light">Reusable lenses that you wear for two weeks or a month and then replace with a new pair</p>
          </div >
          {/* Right */}
          <div className="sm:w-1/2 p-10">
            <div><Checkmark text="More economical than daily lenses, but  require more care and cleaning" /></div>
            <div><Checkmark text="Suitable for people who wear contact lenses regularly and have a stable prescription" /></div>
          </div>
        </div>
        
      </div>
      {/* Section 3 */}
      {/* Section 4 */}
      <Footer />
    </>
  )
}