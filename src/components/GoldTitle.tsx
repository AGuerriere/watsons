type propsType = {
  text:string
}

export default function GoldTitle(props:propsType) {

  return(
    <div className="flex text-gold items-center font-normal">
      <div className='bg-gold w-1.5 h-4 mr-2'> </div>
      <p>{props.text}</p>
    </div>
  )
}