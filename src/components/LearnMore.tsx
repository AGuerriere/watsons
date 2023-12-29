import Image from "next/image"
import Link from "next/link"

type propsType = {
  text:string,
  link:string,
  target: string,
}


export default function LearnMore(props:propsType) {
  return (
    <>
      <Link href={props.link} target={props.target}>
      <p className="text-gold">{props.text} 
      <Image
          src="/images/right-arrow.svg"
          width={24}
          height={24}
          alt="Picture of a patient undergoing an eye test"
          className="ml-2 inline"
        />
      </p>
      </Link>
    </>
  )
}