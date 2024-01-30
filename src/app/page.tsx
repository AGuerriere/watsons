import Image from 'next/image'
import Navbar from '@/components/Navbar'
import GoldTitle from '@/components/GoldTitle'
import LearnMore from '@/components/LearnMore'
import Card from '@/components/Card'
import GoldButton from '@/components/GoldButton'
import Footer from '@/components/Footer'
import H2Title from '@/components/H2Title'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="text-white -ml-7 -mr-7 md:-ml-20 md:-mr-20 min-h-[400px] h-[calc(100vh-100px)] bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-greenOverlay h-full flex items-center'>
          <div className='flex pl:14 flex-col justify-center h-ful w-full items-center'>
            <h1 className='p-7 text-center text-5xl font-bold leading-normal xl:text-7xl md:w-4/5 lg:w-3/5'>
              <span className='text-gold'>Family-owned</span> and operated optometry practice with over 40 years of experience.
            </h1>
            <Link href="/about"><div className='border-solid border-2 w-36 md:w-60 md:h-14 h-9 rounded flex justify-center items-center mt-7 mb-5'>Learn More</div></Link>
          </div>
        </div>
      </div>
      {/* Section 1*/}
      <div className='flex justify-center w-full'>
        <div className='flex flex-col lg:flex-row mt-20 pb-20 2xl:w-[1600px]'>
          <div className="flex order-2 lg:order-1 justify-center lg:justify-end w-full lg:w-2/5 relative min-h-[250px] lg:min-h-[500px]">
            <Image
              src="/images/homepage/14.webp"
              fill
              sizes="100%"
              alt="Picture of an eye test tool"
              className='w-auto object-cover'
            />
          </div>
          <br /><br />
          <div className='flex w-full lg:w-2/5 order-1 lg:order-2 flex-col justify-between lg:ml-20'>
            <div className='mb-10'>
              <GoldTitle text="At Watsons" />
            </div>
            <H2Title title="We’re passionate about making eyecare accessible" />
            <p className='text-base text-base md:text-2xl font-light leading-normal'>
              See better and look great with our wide range of glasses, contact lenses and sunglasses from leading brands.
              <br /><br />
              We offer comprehensive eye tests, diagnosis and treatment for various eye conditions using the latest technology and equipment. We are the only opticians in Northern Ireland offering Repeated Low Level Red Light Therapy to slow down progression of myopia in children.
            </p>
            <br /><br />
            <LearnMore link="/about" target="_self" text="Learn more about us" />
          </div>
        </div>
      </div>
      {/* Section 2*/}
      <div className='flex justify-center w-full'>
        <div className='2xl:w-[1600px]'>
        <H2Title title="Our Products and Services" />
        <div className='grid grid-cols-1 min-[1335px]:grid-cols-2 min-[1910px]:grid-cols-3 gap-4'>
          <Card title="Eye Tests" target="_self" link="/eye_tests" img="/images/homepage/3.webp" paragraph="An eye test is not just about finding out if you need glasses or contact lenses. It is a vital health check for your eyes." />
          <Card title="Eye Wear" target="_self" link="/frames" img="/images/homepage/1.webp" paragraph="We offer a wide selection to cater for different prescriptions, and lifestyle requirements." />
          <Card title="Contact Lenses" target="_self" link="/contact_lenses" img="/images/homepage/2.webp" paragraph="If you prefer contact lenses, we can help you find the best fit and type for your eyes." />
          <Card title="PEARS (NHS free service)" link="NI_PEARS" target="_self" img="/images/homepage/5.webp" paragraph="The NHS has launched a new free eye care service for people with minor eye conditions." />
          <Card title="Dry eye clinic" target="_self" link="/dry_eye" img="/images/homepage/7.webp" paragraph="With the help of our Dry Eye clinic we can recommend the best tailored plan to minimise any discomfort." />
          <Card title="Myopia management" target="_self" link="/myopia_management" img="/images/homepage/12.webp" paragraph="Repeated Low Level Red Light (RLRL) therapy designed to slow down the progression of myopia." />
        </div>
        </div>
      </div>


      {/* Section 3 */}
      <div className='bg-green1 flex flex-col relative justify-end md:flex-row text-white -ml-7 -mr-7 md:-ml-20 md:-mr-20 md:pl-20 w-[100vw] mb-10 '>
        <div className='w-full md:w-2/3 pt-10 pl-7 md:pl-0 2xl:w-[800px]'>
          <GoldTitle text='NHS PEARS' />
          <br />
          <h2 className='text-white text-2xl xl:text-5xl  font-normal pb-10'>Free NHS services</h2>
          <p className='font-light lg:text-2xl pr-5'>The NHS cover the cost of a sight test for a wide range of people including children aged 16 and under, 16–18-year-olds in full time education and those over 60 amongst others. For a full list of those eligible <a href="https://www.nidirect.gov.uk/articles/eye-care#toc-7" target="_blank">click here.</a>
            <br /><br />Emergency appointments for minor eye conditions are available. This is known as NI PEARS (Northern Ireland Primary Eyecare Assessment and Referral Service).</p>
          <div className='border-solid border-2 w-36 md:w-60 md:h-14 h-9 rounded flex justify-center items-center mt-7'>
            <Link href="/NI_PEARS">Learn more</Link>
          </div>
          <br /><br />
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-2/3 2xl:w-[50vw] relative min-h-[400px] ">
          <Image
            src="/images/homepage/8.webp"
            fill
            sizes="100%"
            alt="Picture of a patient undergoing an eye test"
            className='order-2 xl:order-1 -pl-7 w-auto object-cover'
          />
        </div>
      </div>
      {/* Form Section */}
      <div className='flex justify-center w-full'>
      <div id="contact-us" className="mb-10 2xl:w-[1600px]">
        <H2Title title="Book your appointment today!" />
        <div className='flex lg:flex-row flex-col'>
          <div className='w-full md:w-1/2'>
            <GoldTitle text="Contact us" />
            <br />
            <h4 className="font-normal text-black text-base md:text-lg md:text-xl lg:text-3xl">Get in touch!</h4> <br />
            <p className='text-grey1 text-base mb-2 md:text-xl lg:text-2xl font-light'>To arrange an appointment or register as a new customers please fill in the form below and we will get back to you within 48 hours: </p>
            <br />
            <form name="contact" method="POST" action="/success" data-netlify="true" className="flex flex-col mb-10">
              <input type="text" name="name" id="name" placeholder="Name*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
              <input type="email" name="email" id="email" placeholder="Email*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
              <input type="tel" name="tel" id="tel" placeholder="Mobile Number*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
              <input type="text" name="subject" id="subject" placeholder="Subject*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
              <input type="text" name="text" id="text" placeholder="Type your message here*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
              <div className='flex'>
                <div className='flex justify-center items-center'>
                  <input type="radio" id="ballycastle" name="location" value="Ballycastle" required />
                  <p className="ml-1 mr-2">Ballycastle</p>
                </div>
                <div className='flex'>
                  <input type="radio" id="portrush" name="location" value="Portrush" required />
                  <p className="ml-1">Portrush</p>
                </div>
              </div>
              <button className='mt-4'><GoldButton text='Submit  '></GoldButton></button>
            </form>
          </div>
          <div className='flex flex-col justify-between lg:ml-20 min-h-[500px]'>
            <GoldTitle text="Locations" />
            <h4 className='text-2xl font-normal text-black'>Ballycastle</h4>
            <p className='font-light'>
              41 Ann St, Ballycastle, BT54 6AA <br />
              Call us on 028 2076 2431
            </p>
            <h5 className='text-black text-xl'>Opening Hours</h5>
            <p className='font-light'>
              Monday - Saturday: 9:00 - 17:30 <br />
              Alternate Wednesday: Closed <br />
              Sunday : Closed <br />
            </p>
            <h4 className='text-2xl font-normal text-black'>Portrush</h4>
            <p className='font-light'>
              10 Main St, Portrush, BT56 8BL <br />
              Call us on 028 7082 3677
            </p>
            <h5 className='text-black text-xl'>Opening Hours</h5>
            <p className='font-light'>
              Monday - Tuesday, Thursday, Friday, Saturday: 9:00 - 17:30 <br />
              Alternate Saturday: Closed <br />
              Sunday : Closed <br />
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />


    </>

  )
}
