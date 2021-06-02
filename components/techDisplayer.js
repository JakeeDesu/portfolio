import { motion, useTransform, useViewportScroll } from 'framer-motion'

const variants = {
  initial: {
    left: "-100%"
  },
  animate: {
    left: ["-5%", "50%", "100%"],
    scale: [0.8, 1, 0.8],
    // opacity : [1, 0, 1, 0],
    transition: {
      left: {
        duration: 4,
        ease: "linear",
        loop: Infinity
      },
      scale: {
        duration: 4,
        // ease : "linear",
        loop: Infinity
      },
      opacity: {
        duration: 5,
        loop: Infinity
      }
    }
  }
}

const GimTitle = ({ symb, title, width, height, color, textStyle }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center`}>
      <div className={`abolute text-white flex flex-col justify-center items-center ${width || "w-full"} ${height || "h-full"} ${color || "bg-white"} overflow-hdden  rounded-full`}>
        <h2>{symb}</h2>
      </div>
      <h2 className={`${textStyle || "whitespace-nowrap text-white text-xl  text-right m-5"}`}>{title}</h2>
    </div>
  )
}

const TechDisplayer = ({ animationValues, containerWidth, width, getRef, titleStyle, title, text, interval, values }) => {

  const { scrollYProgress } = useViewportScroll();
  // const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
  const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);


  return (
    <div ref={getRef} className={`relative flex flex-col items-center justify-center ${containerWidth || " w-full "} `}>
      <motion.div className={`relative  w-full flex flex-col items-center justify-evenly h-40  bg-gray-80`}
          style={{
            // x: xOffset,
            y: yOffset,
            opacity: opacity,
            scale: scale
          }}
          >
        <div className="relative flex flex-row w-full  h-full flex justify-evenly items-center ">
          <GimTitle
            symb=""
            title="Adaptation &amp; creativity"
            width="w-24"
            height="h-24"
            textStyle="whitespace-nowrap text-gray-300 text-xl right-full text-right m-5"
            color="bg-black"
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
            color="bg-black"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default TechDisplayer
