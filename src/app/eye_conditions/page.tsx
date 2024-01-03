import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"

export default function EyeConditions(){
  return(
    <>
      <Navbar />
      <Header title="Eye Conditions" image="/images/homepage/7.webp" percentage="20" />
      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row pt-10">
        {/* left */}
        <div className="sm:w-2/5">
          <GoldTitle text="Eye Conditions" />
          <br />
          <H2Title title="Common eye conditions" />
          <p>As well as Dry Eye Disease and Myopia there are many other eye conditions that can affect your vision and your eye health. Some of them are common and easily treatable, while others are more serious and require urgent attention. </p>
        </div>
        {/* right */}
        <div className="sm:w-2/5"></div>
      </div>

      <Footer />
    </>
  )
}