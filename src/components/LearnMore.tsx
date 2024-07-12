import Image from "next/image"
import Link from "next/link"

type propsType = {
  text:string,
  link:string,
  target: string,
}

// Text is the text to show, link the link to the page and target is the html target attribute to open in same or new tab

export default function LearnMore(props:propsType) {
  return (
    <>
      <Link href={props.link} target={props.target}>
      <p className="text-gold text-base md:text-2xl font-normal">{props.text} 
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