import { motion, useTransform, useViewportScroll } from 'framer-motion'

const GimTitle = ({ symb, title, width, height, color, textStyle }) => {
  return (
    <div className={`relative flex items-center justify-center`}>
        <div className={`abolute text-white flex flex-col justify-center items-center ${ width || "w-full" } ${ height || "h-full" } ${ color || "bg-white"} overflow-hdden  rounded-full`}>
          <h2>{symb}</h2>
        </div>
          <h2 className={`absolute ${ textStyle || "whitespace-nowrap text-white text-xl right-full text-right m-5"}`}>{title}</h2>
    </div>
  )
}

const ProjectDescription = ({ animationValues, containerWidth, width, getRef, titleStyle, title, text, interval, values }) => {

  // console.log( " description interval : ", interval , text + " values : ", {x: [0, 100],y: [0, 100],scale: [1,1] }, "   | " , animationValues)

  const { scrollYProgress } = useViewportScroll();
  const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
  const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);


  return (
    <div ref={getRef} className={`relative flex flex-row items-center justify-end ${containerWidth || " w-full "} `}>
      <motion.div className={`relative ${width || "w-full"} my-10 `}
        style={{
          x: xOffset,
          y: yOffset,
          opacity: opacity,
          scale: scale
        }}
      >
        <div className={`absolute h-full w-full  flex flex-col items-center justify-evenly right-full `}>
          <div className="relative flex flex-col w-full  h-full flex justify-evenly items-center ">
            <GimTitle
              symb=""
              title="Adaptation &amp; creativity"
              width="w-24"
              height="h-24"
              textStyle="whitespace-nowrap text-gray-300 text-xl right-full text-right m-5"
              color="bg-gray-800"
            />
            <GimTitle
              symb=""
              title="Adaptation &amp; creativity"
              width="w-32"
              height="h-32"
              textStyle="whitespace-nowrap text-gray-300 text-xl right-full text-right m-5"
              color="bg-black"
            />
            <GimTitle
              symb=""
              title="Adaptation &amp; creativity"
              width="w-24"
              height="h-24"
              textStyle="whitespace-nowrap text-gray-300 text-xl right-full text-right m-5"
              color="bg-gray-800"
            />

            </div>
        </div>
        <div
          className="relative flex justify-center items-center w-full  pt-full border-4 border-black bg-black rounded-full"
        >
          <hr className="absolute left-full top-1/2 border-2 border-black w-screen"></hr>
          <div className="absolute text-white text-xl md:text-3xl flex flex-col justify-center items-center top-0 h-full w-full rounded-full overflow-hidden">
            <h2 className={titleStyle}>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDescription
