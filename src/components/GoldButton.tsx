type propsType = {
  text: string,
}

export default function GoldButton(props: propsType) {
  return (
    <>
      <button className="bg-gold text-white w-48 h-11 flex justify-center items-center rounded">{props.text}</button>
    </>
  )
}