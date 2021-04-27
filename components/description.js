
const Description = ({ containerWidth, width, title, text, color }) => {

  return (
    <div className={`relative flex flex-col items-end justify-start ${containerWidth || " w-full "} `}>
      <div className={`${width || "w-full"}`} >
        <div className="relative flex justify-center items-center w-full  pt-full border-4 border-black bg-black rounded-full" >
          <hr className="absolute left-full top-1/2 border-2 border-black w-screen"></hr>
          <div className={`absolute ${color} text-3xl flex flex-col justify-center items-center top-0 h-full w-full rounded-full overflow-hidden`}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
