import Image from "next/image"

type propsType = {
  title: string,
  image: string,
}

export default function Header (props: propsType) {
  return (
    <>
        {console.log(props.image)}
        <h1>{props.title}</h1> {/* Displaying the title */}
    </>
  )
}
