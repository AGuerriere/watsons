import Image from "next/legacy/image"

type propsType = {
  text:string
}


export default function LearnMore(props:propsType) {
  return (
    <>
      <p className="text-gold">{props.text} 
      <Image
          src="/images/right-arrow.svg"
          width={24}
          height={24}
          alt="Picture of a patient undergoing an eye test"
          className="ml-2 inline"
        />
      </p>
    </>
  )
}