'use client'

import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoldTitle from "@/components/GoldTitle"
import H2Title from "@/components/H2Title"
import { useState } from "react"
import Image from "next/image"

export default function EyeConditions() {
  const [hidden1, toggleHidden1] = useState(1)

  function triggerToggle1() {
    const toggle = hidden1 === 1 ? 0 : 1;
    toggleHidden1(toggle);
  }

  const [hidden2, toggleHidden2] = useState(1)

  function triggerToggle2() {
    const toggle = hidden2 === 1 ? 0 : 1;
    toggleHidden2(toggle);
  }

  const [hidden3, toggleHidden3] = useState(1)

  function triggerToggle3() {
    const toggle = hidden3 === 1 ? 0 : 1;
    toggleHidden3(toggle);
  }

  const [hidden4, toggleHidden4] = useState(1)

  function triggerToggle4() {
    const toggle = hidden4 === 1 ? 0 : 1;
    toggleHidden4(toggle);
  }

  const [hidden5, toggleHidden5] = useState(1)

  function triggerToggle5() {
    const toggle = hidden5 === 1 ? 0 : 1;
    toggleHidden5(toggle);
  }

  const [hidden6, toggleHidden6] = useState(1)

  function triggerToggle6() {
    const toggle = hidden6 === 1 ? 0 : 1;
    toggleHidden6(toggle);
  }
  return (
    <>
      <Navbar />
      <Header title="Eye Conditions" image="/images/homepage/7.webp" percentage="20" />
      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row pt-10 mb-10 justify-between">
        {/* left */}
        <div className="sm:w-2/5">
          <GoldTitle text="Eye Conditions" />
          <br />
          <H2Title title="Common eye conditions" />
          <p className="text-black text-base sm:text-2xl font-light">As well as Dry Eye Disease and Myopia there are many other eye conditions that can affect your vision and your eye health. Some of them are common and easily treatable, while others are more serious and require urgent attention. </p>
        </div>
        {/* right */}
        <div className="sm:w-2/5 mt-10 sm:mt-0 text-black text-base sm:text-2xl font-light">
          <p>Here are some of the most common eye conditions and their symptoms, causes and treatments:</p>
          <br />
          <ul className="list-disc list-inside pl-1">
            <li>Glucoma</li>
            <li>Cataracts</li>
            <li>Macular Degeneration</li>
            <li>Diabetic retinopathy </li>
            <li>Dry eye syndrome </li>
            <li>Dry eye syndrome </li>
          </ul>
        </div>
      </div>
      {/* Glaucoma */}
      <div className="flex items-center -ml-7 -mr-7 pl-7 pr-7 justify-between bg-goldBg sm:hidden h-[70px]" onClick={() => triggerToggle1()}>
        <h2 className="text-2xl xl:text-5xl text-black font-normal">Glaucoma</h2>
        <div className={`border-r-2 border-b-2 border-black h-4 w-4 transform ${hidden1 === 1 ? 'rotate-45' : 'rotate-[225deg]'}`}></div>
      </div>
      <div className={`${hidden1 === 1 ? 'hidden' : ''} sm:block group-focus:block -ml-7 -mr-7 md:-ml-20 md:-mr-20  pl-7 pr-7 md:pl-20 md:pr-20 bg-goldBg sm:mt-20 sm:mb-20 sm:pt-20 sm:pb-20 pt-10 pb-10`}>
        <div className="hidden sm:block"><H2Title title="Glaucoma" /></div>
        {/* left right container */}
        <div className="flex flex-col sm:flex-row justify-between text-black text-base sm:text-2xl font-light">
          {/* Left */}
          <div className="sm:w-2/5">
            <p>Glaucoma is a group of eye diseases that damage the optic nerve, which connects your eyes to your brain. </p>
            <br />
            <h5 className="text-gold font-normal">Causes</h5>
            <br />
            <p>It is usually caused by high pressure inside your eyes, but it can also be caused by other factors, such as genetics, age and ethnicity. Glaucoma can lead to permanent vision loss if left untreated.</p>
            <br />
            <h5 className="text-gold font-normal">Types</h5>
            <br />
            <p>The most common type of glaucoma is open-angle glaucoma, which develops slowly and often has no symptoms until it is advanced. </p>
            <br />
            <p>The less common type is closed-angle glaucoma, which occurs suddenly and causes severe pain, redness, blurred vision and nausea. </p>
            <br />
            <p>This is a medical emergency and requires immediate treatment.</p>

          </div>
          {/* Right */}
          <div className="sm:w-2/5">
            <h5 className="text-gold font-normal">Treatment</h5>
            <br />
            <p>The treatment for glaucoma depends on the type and severity of the condition. The main goal is to lower the pressure inside your eyes and prevent further damage to your optic nerve. The treatment options include:</p>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Eye drops</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which reduce the production or increase the drainage of fluid in your eyes.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Laser treatment</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which uses a beam of light to open up the drainage channels in your eyes or reduce the amount of fluid in your eyes.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Surgery</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which creates a new opening for the fluid to drain from your eyes or implants a device to help the fluid flow out of your eyes.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cataracts */}
      <div className="flex items-center -ml-7 -mr-7 pl-7 pr-7 justify-between sm:hidden h-[70px]" onClick={() => triggerToggle2()}>
        <h2 className="text-2xl xl:text-5xl text-black font-normal">Cataracts</h2>
        <div className={`border-r-2 border-b-2 border-black h-4 w-4 transform ${hidden2 === 1 ? 'rotate-45' : 'rotate-[225deg]'}`}></div>
      </div>
      <div className={`${hidden2 === 1 ? 'hidden' : ''} sm:block group-focus:block -ml-7 -mr-7 md:-ml-20 md:-mr-20  pl-7 pr-7 md:pl-20 md:pr-20 sm:mt-20 sm:mb-20 sm:pt-20 sm:pb-20 pt-10 pb-10`}>
        <div className="hidden sm:block"><H2Title title="Cataracts" /></div>
        {/* left right container */}
        <div className="flex flex-col sm:flex-row justify-between text-black text-base sm:text-2xl font-light">
          {/* Left */}
          <div className="sm:w-2/5">
            <p>Cataracts are cloudy patches in the lens of your eye, which is the clear part that focuses light onto your retina. </p>
            <br />
            <h5 className="text-gold font-normal">Causes</h5>
            <br />
            <p>They are usually caused by ageing, but they can also be caused by other factors, such as diabetes, smoking, eye injury and exposure to UV light. </p>
            <br />
            <h5 className="text-gold font-normal">Symptoms</h5>
            <br />
            <p>Cataracts can make your vision blurry, misty, dull or less colourful. </p>
            <br />
          </div>
          {/* Right */}
          <div className="sm:w-2/5">
            <h5 className="text-gold font-normal">Treatment</h5>
            <br />
            <p>The treatment for cataracts is surgery, which involves removing the cloudy lens and replacing it with an artificial one. The surgery is usually done under local anaesthetic and takes about 15 to 30 minutes. </p>
            <br />
            <p>The recovery time is usually a few weeks, during which you need to use eye drops and wear sunglasses to protect your eyes.</p>
            <br />
            <p>You should have an examination with an optometrist approximately 6 weeks after surgery.</p>
            <br />
            <p>In many cases we work in conjunction with the surgeon providing the review appointment locally.</p>
          </div>
        </div>
      </div>

      {/* Macular Degeneration */}
      <div className="flex items-center -ml-7 -mr-7 pl-7 pr-7 justify-between bg-goldBg sm:hidden h-[70px]" onClick={() => triggerToggle3()}>
        <h2 className="text-2xl xl:text-5xl text-black font-normal">Macular Degeneration</h2>
        <div className={`border-r-2 border-b-2 border-black h-4 w-4 transform ${hidden3 === 1 ? 'rotate-45' : 'rotate-[225deg]'}`}></div>
      </div>
      <div className={`${hidden3 === 1 ? 'hidden' : ''} sm:block group-focus:block -ml-7 -mr-7 md:-ml-20 md:-mr-20  pl-7 pr-7 md:pl-20 md:pr-20 bg-goldBg sm:mt-20 sm:mb-20 sm:pt-20 sm:pb-20 pt-10 pb-10`}>
        <div className="hidden sm:block"><H2Title title="Macular Degeneration" /></div>
        {/* left right container */}
        <div className="flex flex-col sm:flex-row justify-between text-black text-base sm:text-2xl font-light">
          {/* Left */}
          <div className="sm:w-2/5">
            <p>Macular degeneration is a condition that affects the macula, which is the central part of your retina that is responsible for your detailed and colour vision. </p>
            <br />
            <h5 className="text-gold font-normal">Causes</h5>
            <br />
            <p>It is usually caused by ageing, but it can also be caused by other factors, such as genetics, smoking, obesity and high blood pressure. </p>
            <br />
            <h5 className="text-gold font-normal">Symptoms</h5>
            <br />
            <p>Macular degeneration can cause blurred or distorted vision, blind spots, difficulty reading and recognising faces.</p>
            <br />
            <h5 className="text-gold font-normal">Types</h5>
            <br />
            <p>There are two types of macular degeneration: dry and wet.</p>
            <br />
            <p>Dry macular degeneration is more common and develops gradually. </p>
            <br />
            <p>Wet macular degeneration is less common and develops rapidly. It occurs when abnormal blood vessels grow under the macula and leak fluid or blood, causing scarring and vision loss.</p>

          </div>
          {/* Right */}
          <div className="sm:w-2/5">
            <h5 className="text-gold font-normal sm:mt-0 mt-5">Treatment</h5>
            <br />
            <p>The treatment for macular degeneration depends on the type and stage of the condition. There is no cure for dry macular degeneration, but there are some ways to slow down its progression, such as taking nutritional supplements, quitting smoking, eating a healthy diet and protecting your eyes from UV light. Recently Valeda Light Delivery System by Lumithera became available this is the first approved treatment for Dry Age Related macular Degeneration.</p>
            <br />
            <p>For wet macular degeneration, there are some treatments that can stop or reduce the growth of the abnormal blood vessels, such as:</p>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Anti-VEGF injection</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which block a protein that stimulates the growth of the blood vessels.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Photodynamic therapy</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which uses a light-sensitive drug and a laser to destroy the blood vessels.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Laser Surgery</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which uses a high-energy beam of light to seal the blood vessels.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diabetic retinopathy */}
      <div className="flex items-center -ml-7 -mr-7 pl-7 pr-7 justify-between sm:hidden h-[70px]" onClick={() => triggerToggle4()}>
        <h2 className="text-2xl xl:text-5xl text-black font-normal">Diabetic retinopathy</h2>
        <div className={`border-r-2 border-b-2 border-black h-4 w-4 transform ${hidden4 === 1 ? 'rotate-45' : 'rotate-[225deg]'}`}></div>
      </div>
      <div className={`${hidden4 === 1 ? 'hidden' : ''} sm:block group-focus:block -ml-7 -mr-7 md:-ml-20 md:-mr-20  pl-7 pr-7 md:pl-20 md:pr-20 sm:mt-20 sm:mb-20 sm:pt-20 sm:pb-20 pt-10 pb-10`}>
        <div className="hidden sm:block"><H2Title title="Diabetic retinopathy" /></div>
        {/* left right container */}
        <div className="flex flex-col sm:flex-row justify-between text-black text-base sm:text-2xl font-light">
          {/* Left */}
          <div className="sm:w-2/5">
            <p>Diabetic retinopathy is a complication of diabetes that affects the blood vessels in your retina. </p>
            <br />
            <h5 className="text-gold font-normal">Causes</h5>
            <br />
            <p>It is caused by high blood sugar levels, which damage the walls of the blood vessels and cause them to leak fluid or blood, or grow abnormally.</p>
            <br />
            <h5 className="text-gold font-normal">Symptoms</h5>
            <br />
            <p>Diabetic retinopathy can cause blurred or fluctuating vision, floaters, dark spots, flashes of light and vision loss.</p>
            <br />
          </div>
          {/* Right */}
          <div className="sm:w-2/5">
            <h5 className="text-gold font-normal sm:mt-0 mt-5">Treatment</h5>
            <br />
            <p>The main goal is to control your blood sugar levels and prevent further damage to your retina. The treatment options include:</p>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Eye drops</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which reduce the swelling or inflammation in your eyes.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Laser Treatment</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which uses a beam of light to seal the leaking or abnormal blood vessels or reduce the amount of fluid in your eyes.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Surgery</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which involves removing the vitreous gel that fills your eyes or the scar tissue that forms on your retina.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dry eye syndrome */}
      <div className="flex items-center -ml-7 -mr-7 pl-7 pr-7 justify-between bg-goldBg sm:hidden h-[70px]" onClick={() => triggerToggle5()}>
        <h2 className="text-2xl xl:text-5xl text-black font-normal">Dry eye syndrome</h2>
        <div className={`border-r-2 border-b-2 border-black h-4 w-4 transform ${hidden5 === 1 ? 'rotate-45' : 'rotate-[225deg]'}`}></div>
      </div>
      <div className={`${hidden5 === 1 ? 'hidden' : ''} sm:block group-focus:block -ml-7 -mr-7 md:-ml-20 md:-mr-20  pl-7 pr-7 md:pl-20 md:pr-20 bg-goldBg sm:mt-20 sm:mb-20 sm:pt-20 sm:pb-20 pt-10 pb-10`}>
        <div className="hidden sm:block"><H2Title title="Dry eye syndrome" /></div>
        {/* left right container */}
        <div className="flex flex-col sm:flex-row justify-between text-black text-base sm:text-2xl font-light">
          {/* Left */}
          <div className="sm:w-2/5">
            <p>Dry eye syndrome is a condition that occurs when your eyes do not produce enough tears or the tears evaporate too quickly. </p>
            <br />
            <h5 className="text-gold font-normal">Causes</h5>
            <br />
            <p>It is usually caused by factors such as ageing, hormonal changes, environmental conditions, medications, contact lens use and eye surgery.</p>
            <br />
            <h5 className="text-gold font-normal">Symptoms</h5>
            <br />
            <p>Dry eye syndrome can cause symptoms such as dryness, burning, itching, redness, sensitivity to light and blurred vision.</p>
            <br />
            <div className="w-full mt-7 sm:mt-0 lg:min-h-[40vh] min-h-[30vh] relative">
              <Image
                src="/images/homepage/7.webp"
                fill={true}
                alt="Picture of a patient undergoing an eye test"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          {/* Right */}
          <div className="sm:w-2/5">
            <h5 className="text-gold font-normal sm:mt-0 mt-5">Treatment</h5>
            <br />
            <p>The treatment for dry eye syndrome depends on the cause and severity of the condition. The main goal is to keep your eyes moist and comfortable. The treatment options include:</p>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Blinking</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">when concentrating (e.g. using a computer or driving), we can blink up to 5 times less often, leading to increased tear evaporation. Remembering to blink more often can help keep the eye surface wet.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Artificial tears</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which are eye drops that lubricate your eyes and replace the natural tears, these are available as drops or a gel.</div>
              </div>
            </div>
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Eye ointments</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">when concentrating (e.g. using a computer or driving), we can blink up to 5 times less often, leading to increased tear evaporation. Remembering to blink more often can help keep the eye surface wet.</div>
              </div>
            </div>
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Diet omega-3 oils and flax seed oil in the diet may help improve tear quality.</div>
              </div>
            </div>
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Hot compresses using an Eye Bag</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">This applies heat to your eyelids and clears the blocked oil glands that produce the oily layer of your tears.</div>
              </div>
            </div>
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Moist air leads to less evaporation of tears. </div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">Avoiding air conditioned environments and direct heat (e.g. an open fire or heat from a cooker) can help for the same reason
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conjuctivitis */}
      <div className="flex items-center -ml-7 -mr-7 pl-7 pr-7 justify-between sm:hidden h-[70px]" onClick={() => triggerToggle6()}>
        <h2 className="text-2xl xl:text-5xl text-black font-normal">Conjuctivitis</h2>
        <div className={`border-r-2 border-b-2 border-black h-4 w-4 transform ${hidden6 === 1 ? 'rotate-45' : 'rotate-[225deg]'}`}></div>
      </div>
      <div className={`${hidden6 === 1 ? 'hidden' : ''} sm:block group-focus:block -ml-7 -mr-7 md:-ml-20 md:-mr-20  pl-7 pr-7 md:pl-20 md:pr-20 sm:mt-20 sm:mb-20 sm:pt-20 sm:pb-20 pt-10 pb-10`}>
        <div className="hidden sm:block"><H2Title title="Conjunctivitis" /></div>
        {/* left right container */}
        <div className="flex flex-col sm:flex-row justify-between text-black text-base sm:text-2xl font-light">
          {/* Left */}
          <div className="sm:w-2/5">
            <p>Conjunctivitis is an inflammation of the conjunctiva, which is the thin membrane that covers the white part of your eye and the inside of your eyelids. </p>
            <br />
            <h5 className="text-gold font-normal">Causes</h5>
            <br />
            <p>It is usually caused by an infection, an allergy or an irritant. </p>
            <br />
            <h5 className="text-gold font-normal">Symptoms</h5>
            <br />
            <p>Conjunctivitis can cause symptoms such as red eye, itching, burning, discharge, crustiness and sensitivity to light.</p>
            <br />
            <h5 className="text-gold font-normal">Other causes of red eye include: </h5>
            <br />
            <ul className="list-disc list-inside">
              <li>A burst blood vessel,</li>
              <li>Blepharitis</li>
              <li>An ingrowing eye lash</li>
              <li>A foreign body</li>
              <li>Eyelid problems</li>
              <li>Dry eyes though there are more causes</li>
            </ul>
            <br />
            <p>An examination is required to determine the cause and treatment required.</p>
          </div>
          {/* Right */}
          <div className="sm:w-2/5">
            <h5 className="text-gold font-normal sm:mt-0 mt-5">Treatment</h5>
            <br />
            <p>The treatment for conjunctivitis depends on the cause and type of the condition. The main goal is to relieve the symptoms and prevent the spread of the infection or the exposure to the allergen or the irritant. The treatment options include:</p>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Eye drops or ointments</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which contain antibiotics, antihistamines, steroids or lubricants, depending on the cause of the conjunctivitis.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Warm or cold compresses</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which can soothe the irritation and reduce the swelling in your eyes.</div>
              </div>
            </div>
            <br />
            <div className="flex pb-2 pt-2 border-b-2 border-dashed">
              <div className="w-[15px] h-[15px] bg-gold rounded-full mt-1 mr-5 aspect-square mb-3"></div>
              <div className="flex flex-col">
                <div className="text-black text-base sm:text-2xl font-light">Eye hygiene</div>
                <div className="text-neutral-500 text-base sm:text-2xl font-light">which involves washing your hands, cleaning your eyes, avoiding touching or rubbing your eyes, and stop using and discard any used contact lenses and makeup.</div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <Footer />
    </>
  )
}