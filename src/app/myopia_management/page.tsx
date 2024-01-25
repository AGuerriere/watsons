import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldTitle from "@/components/GoldTitle";
import H2Title from "@/components/H2Title";
import Image from "next/image";
import LearnMore from "@/components/LearnMore";

export default function Myopia_Management() {
  return (
    <>
      <Navbar />
      <Header title="Myopia management" image="/images/homepage/6.webp" percentage="30" />
      {/* Main */}
      <div className="mt-20 mb-20">
        <GoldTitle text="Myopia management" />
        <br />
        <H2Title title="What is myopia?" />
        {/* flex container */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* left */}
          <div className="md:w-2/5 text-black text-base md:text-2xl font-light">
            <p>
              Myopia, often called short-sightedness or near-sightedness, is a condition of the eyes that results in blurry long-distance vision. A person with myopia can see clearly up close, such as when reading a book or looking at a phone, while distant objects like whiteboards or television screens may appear blurry or hard to read.
            </p>
            <br />
            <p>
              In the UK, the prevalence of myopia in children has more than doubled in the last half a century and is manifesting at a younger age. Myopia progresses fastest in young children, and so the most important time to slow growth is when they’re young.
            </p>
            <br /><br />
            {/* img container */}
              <div className="flex justify-center md:justify-end w-full relative w-full min-h-[200px] md:min-h-[400px]">
                <Image
                  src="/images/homepage/6.webp"
                  fill
                  sizes="100%"
                  alt="Picture of an eye test tool"
                  className='object-cover'
                />
              </div>
          </div>
          {/* right */}
          <div className="md:w-2/5 text-black text-base md:text-2xl font-light">
            <h5 className="font-normal">Myopia management treatments</h5>
            <br />
            <p>Repeated Low Level Red Light (RLRL) therapy designed to slow down the progression of myopia. This is an ‘at home’ treatment where the patient is exposed to short durations of low-level red light (typically three minutes, twice per day, separated by at least four hours, five days per week) using a table-top device.</p>
            <br />
            <p>While this treatment has been used extensively in Australia, New Zealand and China with fantastic results, we are the only providers of this treatment in Northern Ireland demonstrating our passion, and diligence for keeping up to date with the latest technology and treatments.</p>
            <br />
            <p>Ortho-K contact lenses are designed to be worn overnight while you sleep rather than during the day. They work by gently and gradually reshaping the surface of the eye meaning that when you take them out in the morning, you should be able to see clearly throughout the day, without the need for any other lenses or glasses. The changes made by the lens also help to reduce the progression of myopia by 40%-50%.</p>
            <br />
            <h5 className="font-normal">If you’re interested in hearing more please contact us.</h5>
            <br />
            <div className="w-2/5 mt-10 sm:mt-0">
              <LearnMore text="Contact Us" link="https://watsonsopticians.com#contact-us" target="_self" />
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}