import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"

export default function About() {
  return (
    <>
      <Navbar />
      <Header title="About Us" image="/images/header.webp" percentage="20%" />
      {/* Section 1 */}
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <div className="flex flex-col md:flex-row mt-10 mb-10">
            <div className="md:w-1/2"><p className="text-base md:text-2xl md:w-3/5 mr-10 font-light">We are Watsons Opticians, a family-owned and operated optometry practice that has been serving the community since 1985. We are well-known and respected in the area with a loyal and satisfied customer base.</p></div>
            <div className="md:w-1/2">
              <div className="mt-5 md:mt-auto flex flex-col items-start md:w-3/5">
                <GoldTitle text="Our Mission" />
                <p className="mt-2 font-light text-base md:text-2xl">Our mission is to provide quality eye care and products to our customers, with a focus on customer satisfaction, professionalism and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* Section 2 */}
      <div className="bg-green1 -ml-7 -mr-7 md:-ml-20 md:-mr-20 pl-7 pr-7 md:pl-20 md:pr-20 text-white min-h-[290px] pt-10 pb-10">
        <div className="flex items-center justify-center ml-5 mr-5">
          <div className="w-full max-w-[1600px] items-center justify-center">
            <GoldTitle text="Our Vision" />
            <p className="mt-5 font-light leading-normal text-xl md:text-[40px]">Our vision is to be the leading optometry practice in the area, offering the best eye care solutions and the latest trends in eyewear.</p>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <div className="mt-7">
            <H2Title title="Our aims" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-rows-2 min-h-[800px] md:min-h-[500px] lg:min-h-0 gap-5">
            <div className="p-10 bg-orange-300 bg-opacity-10 justify-center items-center md:mr-5 lg:mb-5">
              <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light">Offer a wide range of glasses, contact lenses and sunglasses from leading brands and at competitive prices.</div>
            </div>
            <div className="p-10 bg-orange-300 bg-opacity-10 justify-center items-center md:mr-5 lg:mb-5">
              <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light">Offer a wide range of glasses, contact lenses and sunglasses from leading brands and at competitive prices.</div>
            </div>
            <div className="p-10 bg-orange-300 bg-opacity-10 justify-center items-center md:mr-5 lg:mb-5">
              <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light">Offer a wide range of glasses, contact lenses and sunglasses from leading brands and at competitive prices.</div>
            </div>
            <div className="p-10 bg-orange-300 bg-opacity-10 justify-center items-center md:mr-5 lg:mb-5">
              <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light">Offer a wide range of glasses, contact lenses and sunglasses from leading brands and at competitive prices.</div>
            </div>
            <div className="xl:col-span-2 p-10 bg-orange-300 bg-opacity-10 justify-center items-center md:mr-5 lg:mb-5">
              <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light">Offer a wide range of glasses, contact lenses and sunglasses from leading brands and at competitive prices.</div>
            </div>
            <div className="xl:col-span-2 p-10 bg-orange-300 bg-opacity-10 justify-center items-center md:mr-5 lg:mb-5">
              <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light">Offer a wide range of glasses, contact lenses and sunglasses from leading brands and at competitive prices.</div>
            </div>

          </div>
          {/* Section Team */}
          <div>
            <div className="mb-5">
              <GoldTitle text="Meet the team" />
            </div>
            <H2Title title="Our Team" />
            <p className="text-base md:text-2xl font-light mb-16">We have a qualified and friendly team of optometrists and optical assistants who are ready to assist you with your needs and queries. Here are some of the members of our team:</p>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
              <div className="flex flex-col border p-4 md:p-10 h-fit">
                <h5 className="text-black text-base md:text-3xl font-light">Tony Watson,</h5>
                <h6 className="text-gold text-light text-base md:text-2xl">Owner and Optometrist</h6>
                <p className="pt-5 font-light md:text-2xl text-base">Tony is the founder and owner of Watsons Opticians, as well as a qualified and experienced optometrist. He has a passion for eye care and a vision for excellence. He oversees the daily operations of the practice and ensures that every customer receives the best service and care possible. He says: “I get a lot of satisfaction from what I do and I love seeing the smiles on our customers’ faces when they find the perfect pair of glasses or contact lenses. I am proud of our team and our reputation in the community”.</p>
              </div>
              <div className="flex flex-col sm:flex-row border mb-10">
                <div className="sm:h-auto w-full sm:order-1">
                  <div className="p-4 md:p-10">
                    <h5 className="text-black text-base md:text-3xl font-light">Valerie Watson,</h5>
                    <h6 className="text-gold text-light text-base md:text-2xl">Co-owner and Optical Clinical Assistant</h6>
                    <p className="pt-5 font-light md:text-2xl text-base">Valerie is the co-owner and Optical Clinical Assistant of Watsons Opticians. She is also Tony’s wife and partner in life and business. As buyer for the business she strives to provide a wide range of products to meet our customers’ needs. She says: “I enjoy helping our customers look and feel great with their glasses or contact lenses. I also love working with my husband and our amazing staff. We are like a family here at Watsons Opticians”.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border mb-10">
                <div className="sm:h-auto w-full">
                  <div className="p-4 md:p-10">
                    <h5 className="text-black text-base md:text-3xl font-light">Christine Mc Collum, </h5>
                    <h6 className="text-gold text-light text-base md:text-2xl">Senior Optical Assistant</h6>
                    <p className="pt-5 font-light md:text-2xl text-base">Christine handles the bookings, the payments and also cuts and fits lenses to frames in our glazing lab. She says: “Watsons Opticians is a family friendly practice and I enjoy helping to contribute to its growth and success. I like to interact with our customers and to spread the word about our products and services. I like the fact that we are a progressive practice and we are all constantly learning new techniques and treatments”</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border mb-10">
                <div className="sm:h-auto w-full sm:order-1">
                  <div className="p-4 md:p-10">
                    <h5 className="text-black text-base md:text-3xl font-light">Katrina Watt,</h5>
                    <h6 className="text-gold text-light text-base md:text-2xl">Optical Assistant</h6>
                    <p className="pt-5 font-light md:text-2xl text-base">Katrina is our newest member of staff although she has been with us for several years now. She has previous experience working in the optics industry and brings some new approaches to our practice. Her specialist knowledge is in contact lenses. Katrina says “I like working in an independent community based practice where patient care is the priority.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}