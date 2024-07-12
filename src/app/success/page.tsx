import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Success() {
  return(
    <>
      <Navbar />
      <main className="height-custom flex justify-center items-center">
        <h1 className="text-2xl xl:text-5xl text-black font-normal">Thank you for your message! A member of our staff will get in touch with you soon!</h1>
      </main>
      <Footer />
    </>
  )
}