type propsType = {
  title:string,
}

export default function H2Title(props:propsType){
  return(
    <>
      <h2 className="text-2xl xl:text-5xl text-black font-normal pb-7">{props.title}</h2>
    </>
  )
}