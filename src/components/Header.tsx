type propsType = {
  title: string,
  image: string,
  percentage: string,
}

export default function Header(props: propsType) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: `center ${props.percentage}`  // Centers horizontally and positions n% from the top
        }}
        className="text-white -ml-7 -mr-7 md:-ml-20 md:-mr-20 h-[225px] bg-cover bg-no-repeat bg-center"
      >
        <div className='flex items-center bg-greenOverlay h-full pl-7 md:pl-20 '>
          <div className="flex items-center justify-center ml-5 mr-5">
            <div className="w-full max-w-[1600px] items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold">{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
