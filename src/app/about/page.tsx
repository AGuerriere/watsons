import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"

export default function About () {
  return(
    <>
      <Navbar />
      <Header title="About Us" image="/images/header.webp"/>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row mt-10 mb-10">
        <div className="md:w-1/2"><p className="text-base md:text-2xl md:w-3/5 mr-10 font-light">We are Watsons Opticians, a family-owned and operated optometry practice that has been serving the community since 1985. We are well-known and respected in the area with a loyal and satisfied customer base.</p></div>
        <div className="md:w-1/2">
          <div className="flex flex-col items-start md:w-3/5">
            <GoldTitle text="Our Mission"/>
            <p className="mt-2 font-light text-2xl md:text-[32px]">Our mission is to provide quality eye care and products to our customers, with a focus on customer satisfaction, professionalism and innovation</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}