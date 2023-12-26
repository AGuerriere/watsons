import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"

export default function About() {
  return (
    <>
      <Navbar />
      <Header title="About Us" image="/images/header.webp" />
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row mt-10 mb-10">
        <div className="md:w-1/2"><p className="text-base md:text-2xl md:w-3/5 mr-10 font-light">We are Watsons Opticians, a family-owned and operated optometry practice that has been serving the community since 1985. We are well-known and respected in the area with a loyal and satisfied customer base.</p></div>
        <div className="md:w-1/2">
          <div className="mt-5 md:mt-auto flex flex-col items-start md:w-3/5">
            <GoldTitle text="Our Mission" />
            <p className="mt-2 font-light text-2xl md:text-[32px]">Our mission is to provide quality eye care and products to our customers, with a focus on customer satisfaction, professionalism and innovation</p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-green1 -ml-7 -mr-7 md:-ml-20 md:-mr-20 pl-7 pr-7 md:pl-20 md:pr-20 text-white min-h-[290px] pt-10 pb-10">
        <GoldTitle text="Our Vision" />
        <p className="mt-5 font-light leading-normal text-xl md:text-[40px]">Our vision is to be the leading optometry practice in the area, offering the best eye care solutions and the latest trends in eyewear.</p>
      </div>
      {/* Section 3 */}
      <div className="mt-7">
        <H2Title title="Our aims" />
      </div>
      <div className="flex flex-col justify-evenly lg:justify-between lg:flex-wrap lg:flex-row min-h-[800px] md:min-h-[500] lg:min-h-0">
          <div className="flex lg:w-1/4 px-[15px] py-[25px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 md:mr-5 lg:mb-5 items-center">
            <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light font-['Source Sans Pro'] ">Offer a wide range of glasses, contact lenses and sunglasses from leading brands and at competitive prices.</div>
          </div>
          <div className="flex lg:w-1/4 px-[15px] py-[25px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 md:mr-5 lg:mb-5 items-center">
            <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light font-['Source Sans Pro']">Provide comprehensive eye tests and diagnosis for various eye conditions using the latest technology and equipment.</div>
          </div>
          <div className="flex lg:w-1/4 px-[15px] py-[25px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 md:mr-5 lg:mb-5 items-center">
            <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light font-['Source Sans Pro']">Cut lenses in store, without having to send them to a lab, for faster and more convenient service.</div>
          </div>
          <div className="flex lg:w-1/4 px-[15px] py-[25px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 md:mr-5 lg:mb-5 items-center">
            <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light font-['Source Sans Pro']">Give personalised and friendly advice and guidance to each customer, based on their prescription, lifestyle and preference.</div>
          </div>
          <div className="flex lg:w-1/4 px-[15px] py-[25px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 md:mr-5 lg:mb-5 items-center">
            <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light font-['Source Sans Pro']">Keep up with the latest developments and trends in optometry and eyewear.</div>
          </div>
          <div className="flex lg:w-1/4 px-[15px] py-[25px] bg-orange-300 bg-opacity-10 justify-center items-center gap-5 md:mr-5 lg:mb-5 items-center">
            <div className="text-center text-teal-950 text-base lg:text-xl xl:text-2xl font-light font-['Source Sans Pro']">Support our local community and environment by participating in various charities and causes.</div>
          </div>
      </div>
      {/* Section Team */}
      <div>
        <div className="mb-5">
          <GoldTitle text="Meet the team" />
        </div>
        <H2Title title="Our Team"/>
        <p className="text-base md:text-2xl font-light mb-16">We have a qualified and friendly team of optometrists and optical assistants who are ready to assist you with your needs and queries. Here are some of the members of our team:</p>
        <div className="flex flex-col sm:flex-row border mb-10">
          <div className="bg-green1 min-h-[420px] md:1/3 aspect-square"></div>
          <div className="lg:ml-20 ml-5 flex flex-col justify-center">
            <h4 className="text-xl md:text-3xl font-light">Tony Watson,</h4>
            <h6 className="text-gold font-light mb-7">Owner and Optometrist</h6>
            <p className="text-grey1 lg:w-3/4 text-base text-2xl">Tony is the founder and owner of Watsons Opticians, as well as a qualified and experienced optometrist. He has a passion for eye care and a vision for excellence. He oversees the daily operations of the practice and ensures that every customer receives the best service and care possible. He says: “I get a lot of satisfaction from what I do and I love seeing the smiles on our customers’ faces when they find the perfect pair of glasses or contact lenses. I am proud of our team and our reputation in the community”.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row border mb-10">
          <div className="lg:ml-20 ml-5 flex flex-col justify-center order-2">
            <h4 className="text-xl md:text-3xl font-light">Valerie Watson, ,</h4>
            <h6 className="text-gold font-light mb-7">Co-owner and Optical Clinical Assistant</h6>
            <p className="text-grey1 lg:w-3/4 text-base text-2xl">Valerie is the co-owner and Optical Clinical Assistant of Watsons Opticians. She is also Tony’s wife and partner in life and business. As buyer for the business she strives to provide a wide range of products to meet our customers’ needs. She says: “I enjoy helping our customers look and feel great with their glasses or contact lenses. I also love working with my husband and our amazing staff. We are like a family here at Watsons Opticians”.</p>
          </div>
          <div className="bg-green1 min-h-[420px] md:1/3 aspect-square order-1"></div>
        </div>
        <div className="flex flex-col sm:flex-row border mb-10">
          <div className="bg-green1 min-h-[420px] md:1/3 aspect-square"></div>
          <div className="lg:ml-20 ml-5 flex flex-col justify-center">
            <h4 className="text-xl md:text-3xl font-light">Christine Mc Collum, ,</h4>
            <h6 className="text-gold font-light mb-7">Senior Optical Assistant</h6>
            <p className="text-grey1 lg:w-3/4 text-base text-2xl">Christine handles the bookings, the payments and also cuts and fits lenses to frames in our glazing lab. She says: “Watsons Opticians is a family friendly practice and I enjoy helping to contribute to its growth and success. I like to interact with our customers and to spread the word about our products and services. I like the fact that we are a progressive practice and we are all constantly learning new techniques and treatments”.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row border mb-10">
          <div className="lg:ml-20 ml-5 flex flex-col justify-center order-2">
            <h4 className="text-xl md:text-3xl font-light">Katrina Watt,</h4>
            <h6 className="text-gold font-light mb-7">Optical Assistant</h6>
            <p className="text-grey1 lg:w-3/4 text-base text-2xl">Christine handles the bookings, the payments and also cuts and fits lenses to frames in our glazing lab. She says: “Watsons Opticians is a family friendly practice and I enjoy helping to contribute to its growth and success. I like to interact with our customers and to spread the word about our products and services. I like the fact that we are a progressive practice and we are all constantly learning new techniques and treatments”.</p>
          </div>
          <div className="bg-green1 min-h-[420px] md:1/3 aspect-square order-1"></div>

        </div>
      </div>
      <Footer />
    </>
  )
}