import Image from "next/image"
import LearnMore from "./LearnMore"

type propsType = {
  title: string,
  paragraph: string,
  img: string,
  link: string,
  target: string,
}

export default function Card(props: propsType) {
  return (
    <div className="basis-2/4">
      <div className="flex border mb-5 md:mb-10 border-grey2 w-full w-full h-auto md:h-[320px]">
        <div className="w-full md:w-1/2 p-3 md:p-5">
          <h4 className="font-normal text-black text-lg md:text-xl lg:text-2xl">{props.title}</h4>
          <p className="text-base md:text-2xl font-light">{props.paragraph}</p>
          <LearnMore text="Learn More" target={props.target} link={props.link} />
        </div>
        <div className="w-full md:w-1/2 h-fill md:h-full relative">
          <Image
            src={props.img}
            fill={true}
            alt="Picture of a patient undergoing an eye test"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}
