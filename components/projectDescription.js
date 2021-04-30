import {motion, useTransform, useViewportScroll} from 'framer-motion'

const ProjectDescription = ({animationValues, containerWidth, width, getRef, title, text, interval, values }) => {

  // console.log( " description interval : ", interval , text + " values : ", {x: [0, 100],y: [0, 100],scale: [1,1] }, "   | " , animationValues)
 
  const { scrollYProgress } = useViewportScroll();
  const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
  const opacity = useTransform(scrollYProgress, interval , animationValues['opacity']);

  
  return (
    <div  ref={getRef} className={`relative flex flex-col items-end justify-start ${containerWidth || " w-full "} `}>
      <motion.div className={`${width || "w-full"} my-10`}
        style={{
          x: xOffset,
          y: yOffset,
          opacity: opacity,
          scale : scale
          }}
        >
        <div
        className="relative flex justify-center items-center w-full  pt-full border-4 border-black bg-black rounded-full"
        >
        <hr className="absolute left-full top-1/2 border-2 border-black w-screen"></hr>
        <div className="absolute text-white text-3xl flex flex-col justify-center items-center top-0 h-full w-full rounded-full overflow-hidden">
        <h2>{title}</h2>
        <p>{text}</p>
        </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDescription
