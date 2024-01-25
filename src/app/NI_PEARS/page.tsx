import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"
import GoldButton from "@/components/GoldButton"
import LearnMore from "@/components/LearnMore"



export default function NI_PEARS(){
  return(
    <>
      <Navbar />
      <Header title="NI PEARS" image="/images/homepage/5.webp" percentage="30" />
      {/* Main */}
      <div className="mt-10 mb-20">
        <GoldTitle text="NI Pears" />
        <br />
        <H2Title title="What is NI PEARS?" />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="sm:w-2/5">
            <p className="text-grey1 text-base md:text-2xl font-light">The NHS has launched a new free eye care service for people with minor eye conditions called <span className="font-normal text-black">Northern Ireland Primary Eyecare Assessment and Referral Service (NI PEARS).</span></p><br />
            <p className="text-grey1 text-base md:text-2xl font-light">Instead of waiting for a GP appointment or attending A&E, patients registered with a GP in Nothern Ireland, and presenting with an acute, sudden onset, non-sight threatening eye problem can now make an appointment with us as a local PEARS qualified optician and be seen within one or two working days to provide treatment for the issue as soon as possible and reduce any anxiety it may be causing you.</p><br />
            <p className="text-grey1 text-base md:text-2xl font-light">We will assess and treat the condition or make a referral where appropriate.</p><br />
            <LearnMore text="Visit NHS PEARS website" link="https://online.hscni.net/our-work/ophthalmic-services/eyes/" target="_blank" />
            <br />
            <a href="https://watsonsopticians.com/#contact-us"><GoldButton text='Book Appointment'></GoldButton></a>
          </div>
          <div className="sm:w-2/5 mt-10 sm:mt-0 text-grey1 text-base md:text-2xl font-light">
            <p>Who is eligible for a PEARS appointment?</p>
            <br />
            <p>Anyone registered with a GP.</p>
            <br />
            <p>If you have had recent onset of:</p>
            <ul className="list-disc list-inside pl-1">
              <li>Red eye or eyelids </li>
              <li>Dry eye, gritty and uncomfortable eyes </li>
              <li>Irritation and inflammation of the eye </li>
              <li>Significant recent sticky discharge from the eye or watery eye </li>
              <li>Recently occurring or sudden increase of flashes and floaters </li>
              <li>Painful eye </li>
              <li>Ingrowing eyelashes</li>
              <li>Recent and sudden reduced vision </li>
              <li>Something in your eye</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}