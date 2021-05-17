import { motion, useTransform, useViewportScroll } from 'framer-motion'

const variants ={
  initial : {
    left : "-100%"
  },
  animate : {
    left : ["-5%","50%", "100%"],
    scale : [0.8,1,0.8],
    // opacity : [1, 0, 1, 0],
    transition :{
      left : {
        duration : 4,
        ease : "linear",
        loop : Infinity
      },
      scale : {
        duration : 4,
        // ease : "linear",
        loop : Infinity
      },
      opacity : {
        duration : 5,
        loop : Infinity
      }
    }
  }
}

const GimTitle = ({ symb, title, width, height, color, textStyle }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center`}>
        <div className={`abolute text-white flex flex-col justify-center items-center ${ width || "w-full" } ${ height || "h-full" } ${ color || "bg-white"} overflow-hdden  rounded-full`}>
          <h2>{symb}</h2>
        </div>
          <h2 className={`${ textStyle || "whitespace-nowrap text-white text-xl  text-right m-5"}`}>{title}</h2>
    </div>
  )
}

const TechDisplayer = ({ animationValues, containerWidth, width, getRef, titleStyle, title, text, interval, values }) => {

  // console.log( " description interval : ", interval , text + " values : ", {x: [0, 100],y: [0, 100],scale: [1,1] }, "   | " , animationValues)

  const { scrollYProgress } = useViewportScroll();
  const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
  const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);


  return (
    <div ref={getRef} className={`relative flex flex-col items-center justify-center ${containerWidth || " w-full "} `}>
        <div className={`relative  w-full flex flex-col items-center justify-evenly h-40  bg-gray-80`}>
          <div className="relative flex flex-row w-full  h-full flex justify-evenly items-center ">
            {/* <motion.div className="absolute"
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                // duration : 1
              }}
            > */}
              <GimTitle
                symb=""
                title="Adaptation &amp; creativity"
                width="w-24"
                height="h-24"
                textStyle="whitespace-nowrap text-gray-300 text-xl right-full text-right m-5"
                color="bg-black"
              />
            {/* </motion.div>

            <motion.div className="absolute"
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                // duration : 1,
                delay : 0.5
              }}
            > */}
            <GimTitle
              symb=""
              title="Adaptation &amp; creativity"
              width="w-32"
              height="h-32"
              textStyle="whitespace-nowrap text-gray-300 text-xl right-full text-right m-5"
              color="bg-black"
            />
            {/* </motion.div>
            <motion.div className="absolute"
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                // duration : 1,
                delay : 1
              }}
            > */}
              <GimTitle
              symb=""
              title="Adaptation &amp; creativity"
              width="w-24"
              height="h-24"
              textStyle="whitespace-nowrap text-gray-300 text-xl right-full text-right m-5"
              color="bg-black"
            />
            {/* </motion.div> */}
          </div>
        </div>
      <motion.div className={`relative ${width || "w-full"} my-10 `}
        style={{
          x: xOffset,
          y: yOffset,
          opacity: opacity,
          scale: scale
        }}
        >
        <div
          className="relative flex justify-center items-center w-full  pt-vid-top pb-vid-bottom border-4 border-black bg-black "
          >
          <iframe className="absolute text-white text-xl md:text-3xl flex flex-col justify-center items-center top-0 h-full w-full  overflow-hidden"
            width="quto"
            height="480"
            src={`https://www.youtube.com/embed/${"39d2jr1wQYU"}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
              />
        </div>
          </motion.div>
    </div>
  )
}

export default TechDisplayer
