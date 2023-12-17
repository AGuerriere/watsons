import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="text-white h-screen bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-greenOverlay h-full p-5 '>
          <h1 className='text-5xl font-bold leading-normal md:text-7xl'>
            <span className='text-gold'>Family-owned</span> and operated optometry practice with over 40 years of experience.
          </h1>
          <div className='border-solid border-2 w-36 h-9 rounded flex justify-center items-center mt-7'>Learn more</div>
        </div>
      </div>
    </>
  )
}
