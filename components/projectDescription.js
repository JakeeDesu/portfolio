import {motion, useTransform, useViewportScroll} from 'framer-motion'

const ProjectDescription = ({containerWidth, width, getRef, title, text, interval, values }) => {

  const { scrollYProgress } = useViewportScroll();
  const xOffset = useTransform(scrollYProgress, interval, values);
  
	console.log("description interval : ", interval , " description values : ", values)
  return (
    <div  ref={getRef} className={`relative flex flex-col items-end justify-center ${containerWidth || " w-full "}`}>
      <motion.div className={`${width || "w-full"}`}
        style={{
          x: xOffset,
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
