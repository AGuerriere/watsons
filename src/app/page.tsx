import Image from 'next/image'
import Navbar from '@/components/Navbar'
import GoldTitle from '@/components/GoldTitle'
import LearnMore from '@/components/LearnMore'

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
      {/* Section */}
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

    </>
  )
}
