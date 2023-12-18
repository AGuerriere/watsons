import Image from 'next/image'
import Navbar from '@/components/Navbar'
import GoldTitle from '@/components/GoldTitle'
import LearnMore from '@/components/LearnMore'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="text-white h-[90vh] bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-greenOverlay h-full p-5 '>
          <div className='flex flex-col pl-24 pr-24 justify-center h-full'>
            <h1 className='text-5xl font-bold leading-normal xl:text-7xl md:w-4/5 lg:w-3/5 md:leading-normal xl:leading-normal lg:w-2/5'>
              <span className='text-gold'>Family-owned</span> and operated optometry practice with over 40 years of experience.
            </h1>
          <div className='border-solid border-2 w-36 md:w-60 md:h-14 h-9 rounded flex justify-center items-center mt-7'>Learn more</div>
          </div>
        </div>
      </div>
      {/* Section */}
      <div className='flex mt-20 pl-24 pr-24'>
      <Image
          src="/images/homepage/6.webp"
          width={590}
          height={30}
          alt="Picture of a patient undergoing an eye test"
        />
        <div className='flex flex-col justify-around md:ml-20'>
          <GoldTitle text="At Watsons" />
          <h2 className='text-5xl text-black'>We’re passionate about making eyecare accessible</h2>
          <p>See better and look great with our wide range of glasses, contact lenses and sunglasses from leading brands. </p>
          <p>We offer comprehensive eye tests, diagnosis and treatment for various eye conditions using the latest technology and equipment. We are the only opticians in Northern Ireland offering Repeated Low Level Red Light Therapy to slow down progression of myopia in children.
          </p>
          <LearnMore text="Learn more about us" />
        </div>
      </div>

    </>
  )
}
