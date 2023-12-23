import Image from "next/legacy/image"
import Navbar from '@/components/Navbar'
import GoldTitle from '@/components/GoldTitle'
import LearnMore from '@/components/LearnMore'
import Card from '@/components/Card'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="text-white -ml-7 -mr-7 md:-ml-20 md:-mr-20 h-[90vh] bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-greenOverlay h-full pl-7 md:pl-20 '>
          <div className='flex pl:14 flex-col justify-center h-full'>
            <h1 className='text-5xl font-bold leading-normal xl:text-7xl md:w-4/5 lg:w-3/5 md:leading-normal xl:leading-normal lg:w-2/5'>
              <span className='text-gold'>Family-owned</span> and operated optometry practice with over 40 years of experience.
            </h1>
            <div className='border-solid border-2 w-36 md:w-60 md:h-14 h-9 rounded flex justify-center items-center mt-7'>Learn more</div>
          </div>
        </div>
      </div>
      {/* Section 1*/}
      <div className='flex flex-wrap xl:flex-nowrap mt-20 pb-20'>
        <Image
          src="/images/homepage/6.webp"
          width={590}
          height={520}
          alt="Picture of a patient undergoing an eye test"
          className='order-2 xl:order-1'
        />
        <br /><br />
        <div className='flex order-1 xl:order-2 flex-col justify-around xl:ml-20'>
          <GoldTitle text="At Watsons" />
          <h2 className='text-2xl xl:text-5xl text-black font-normal'>We’re passionate about making eyecare accessible</h2>
          <p className='text-base xl:text-grey1 xl:text-2xl font-light leading-normal'>
            See better and look great with our wide range of glasses, contact lenses and sunglasses from leading brands.
            <br /><br />
            We offer comprehensive eye tests, diagnosis and treatment for various eye conditions using the latest technology and equipment. We are the only opticians in Northern Ireland offering Repeated Low Level Red Light Therapy to slow down progression of myopia in children.
          </p>
          <br /><br />
          <LearnMore text="Learn more about us" />
        </div>
      </div>
      {/* Section 2*/}
      <h2 className='text-2xl xl:text-5xl text-black font-normal pb-10'>Our Products and Services</h2>
      <div className='flex flex-col md:flex-row md:flex-wrap'>
        <Card title="Eye Tests" img="/images/homepage/3.webp" paragraph="An eye test is not just about finding out if you need glasses or contact lenses. It is a vital health check for your eyes. " />
        <Card title="Eye Wear" img="/images/homepage/1.webp" paragraph="We offer a wide selection to cater for different prescriptions, and lifestyle requirements." />
        <Card title="Contact Lenses" img="/images/homepage/2.webp" paragraph="If you prefer contact lenses, we can help you find the best fit and type for your eyes." />
        <Card title="PEARS (NHS free service)" img="/images/homepage/5.webp" paragraph="The NHS has launched a new free eye care service for people with minor eye conditions." />
        <Card title="Dry eye clinic" img="/images/homepage/7.webp" paragraph="With the help of our Dry Eye clinic we can recommend the best tailored plan to minimise any discomfort. " />
        <Card title="Myopia management" img="/images/homepage/6.webp" paragraph="Repeated Low Level Red Light (RLRL) therapy designed to slow down the progression of myopia." />
      </div>
      {/* Section 3 */}
      <div className='bg-green1 flex flex-col md:flex-row text-white -ml-7 -mr-7 md:-ml-20 md:-mr-20 md:pl-20 w-[100vw] mb-10'>
        <div className='w-full h- md:w-2/3 pt-10 pl-7 md:pl-0'>
          <GoldTitle text='Free NHS Service' />
          <br />
          <h2 className='text-white text-2xl xl:text-5xl text-black font-normal pb-10'>Our Products and Services</h2>
          <p className='font-light lg:text-2xl pr-5'>The NHS cover the cost of a sight test for a wide range of people including children aged 16 and under, 16–18-year-olds in full time education and those over 60 amongst others. For a full list of those eligible click here
            <br /><br />Emergency appointments for minor eye conditions are available. This is known as NI PEARS (Northern Ireland Primary Eyecare Assessment and Referral Service).</p>
          <div className='border-solid border-2 w-36 md:w-60 md:h-14 h-9 rounded flex justify-center items-center mt-7'>
            Learn more
          </div>
          <br /><br />
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-2/3 relative min-h-[400px]">
          <Image
            src="/images/homepage/8.webp"
            fill
            sizes="100%"
            style={{
              objectFit: 'cover',
            }}
            alt="Picture of a patient undergoing an eye test"
            className='order-2 xl:order-1 -pl-7 w-auto'
          />
        </div>
      </div>
      {/* Form Section */}
      <div>
        <h2 className='text-black text-2xl xl:text-5xl text-black font-normal pb-10'>Book your appointment today!</h2>
        <div className='flex'>
          <div>
            <GoldTitle text="Contact us"/>
            <h4 className="font-normal text-black text-lg md:text-xl lg:text-2xl">Get in touch!</h4>
            <p>To arrange an appointment or register as a new customers please fill in the form below and we will get back to you within 48 hours: </p>
            <form action="GET">
              <input type="text" name="name" id="name" />
              <input type="email" name="email" id="email" />
              <input type="tel" name="tel" id="tel" />
              <input type="text" name="subject" id="subject" />
              <input type="text" name="text" id="text" />

              
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>

  )
}
