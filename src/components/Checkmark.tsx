import Image from "next/image"

type propsType = {
  text:string,
}

export default function Checkmark(props:propsType){
  return (
    <div className="flex w-full mb-4 items-start">
      <Image 
        src="/images/tick.svg"
        width={20}
        height={20}
        alt="Checkmark image"
        className="mr-3 mt-1"
        />

      <p className="text-neutral-500 text-base sm:text-2xl font-light">{props.text}</p>
    </div>
  )
}