import { motion, useTransform, useViewportScroll } from 'framer-motion'

const GimTitle = ({ symb, title, width, height, color, textStyle }) => {
  return (
    <div className={`relative flex items-center justify-center `}>
      <div className={`abolute text-white flex flex-col justify-center items-center ${width || "w-full"} ${height || "h-full"} ${color || "bg-white"} overflow-hdden shadow-soft2glow rounded-full`}>
        <motion.img className="absolute w-full bottom-0 right-1/5 opacity-40 hover:opacity-80 object-cover" src="/tool-icon.png"
                  whileHover={{
                    rotateZ : 20,
                    y : -10
                  }}
                  transition={{
                    duration : 0.4
                  }}
        />
        {/* <h2>{symb}</h2> */}
      </div>
      <div className="absolute h-full flex justify-center items-center right-full ">
        <h2 className={` ${textStyle || "whitespace-nowrap text-white text-xl text-right m-5"}`}>{title}</h2>
      </div>
    </div>
  )
}

const ToolsAndTech = ({ animationValues, containerWidth, width, getRef, titleStyle, title, toolsList, interval, values }) => {

  // console.log( " description interval : ", interval , text + " values : ", {x: [0, 100],y: [0, 100],scale: [1,1] }, "   | " , animationValues)

  const { scrollYProgress } = useViewportScroll();
  const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
  const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);


  return (
    <div ref={getRef} className={`relative flex flex-row items-center justify-end ${containerWidth || " w-full "} `}>
      <div className="relative flex flex-row w-full  h-full  justify-evenly items-center ">
        {toolsList.map((toolName, index) => (
          <GimTitle
            key={index}
            symb=""
            title={toolName}
            width="w-16"
            height="h-16"
            textStyle="whitespace-nowrap text-gray-300 text-xl  text-right m-5"
            color="bg-black bg-opacity-30"
          />
        ))}
      </div>
      <motion.div className={`relative  ${width || "w-full"} my-10 `}
        style={{
          x: xOffset,
          y: yOffset,
          opacity: opacity,
          scale: scale
        }}
      >
        <motion.img className="absolute w-2xfull max-w-none -left-1/4 bottom-full object-contain opacity-40" src="/sogu-tool2.png"
          animate={{
            scale : [1.2, 1.25],
            y: [0,-10],
            transition : {
              duration : 5 , type : "spring", yoyo : Infinity 
            }
          }}
          transition={{
            duration : 0.6
          }}
        />
        <motion.div
          className="relative flex justify-center items-center w-full  pt-full border-4 border-black bg-black rounded-full shadow-soft2glow"
          whileHover={{
            y: 10
          }}
          transition={{
            duration : 0.4
          }}
        >
          <hr className="absolute left-full top-1/2 border-2 border-black w-screen"></hr>
          <div className="absolute text-white flex justify-center items-center top-0 h-full w-full rounded-full overflow-hidden ">
            <h2 className={titleStyle}>{title}</h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ToolsAndTech
