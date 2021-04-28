import { motion, useTransform, useViewportScroll } from 'framer-motion'

const AboutProject = ({ animationValues, containerWidth, width, getRef, interval, title, text, values }) => {

  // console.log(" imageCover interval : ", interval, " cover values : ", animationValues)

  const { scrollYProgress } = useViewportScroll();
  const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
  const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);

  // const color = useTransform(scrollYProgress, interval, animationValues['color']);

  return (
    <div ref={getRef} className={`relative flex flex-col items-start justify-center ${containerWidth || " w-full "} `}>
      <motion.div
        ref={getRef}
        className={`${width || "w-full"}`}
        style={{
          x: xOffset,
          y: yOffset,
          opacity: opacity,
          scale: scale,
        }}
      >
        <div
          className="relative flex justify-center items-center w-full  pt-full  border-4 border-black bg-black rounded-full"
        >
          <hr className="absolute right-full top-1/2 border-2 border-black w-screen"></hr>
          <div className="absolute text-white text-3xl flex flex-col justify-center items-center top-0 h-full w-full rounded-full overflow-hidden">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutProject
