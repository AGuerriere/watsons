import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="text-white h-screen bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-greenOverlay h-full'>
          <h1 className='text-5xl font-bold p-5 leading-normal md:text-7xl'>
            <span className='text-gold'>Family-owned</span> and operated optometry practice with over 40 years of experience.
          </h1>
        </div>
        <div className=''>Learn more</div>
      </div>
    </>
  )
}
