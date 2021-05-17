import { motion, useTransform, useViewportScroll } from 'framer-motion'

const AboutProject = ({ animationValues, containerWidth, width, titlesWidth, getRef, interval, title, text, subTitles }) => {

  // console.log(" imageCover interval : ", interval, " cover values : ", animationValues)

  const { scrollYProgress } = useViewportScroll();
  const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
  const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);
  // const shadow = useTransform(scrollYProgress, interval, animationValues['shadow']);

  // const color = useTransform(scrollYProgress, interval, animationValues['color']);

  const LinkedTitle = ({ title, bodyStyle, linesStyle, dashedLineStyle, rotatedLineStyle, linkWidth, linkRotation, borderColor, textStyle }) => {
    return (
      <div className={`${bodyStyle || "relative flex justify-start items-center w-1/4 md:w-full h-24"}`}>
        <div className={`${linesStyle || "absolute flex flex-row justify-end items-center right-1/4 top-0 h-full"} ${linkWidth || "w-full md:w-2xfull"}  `}>
          <hr className={`${rotatedLineStyle || "w-4/6 bg-gradient-to-l  border-2 rounded-lg  transform origin-right"} ${ borderColor || "border-white"} ${linkRotation || "rotate-0"} `}></hr>
          <hr className={`${dashedLineStyle || "w-1/6 mx-1 border-dashed border-2 rounded-lg"} ${ borderColor || "border-white"} `}></hr>
        </div>
        <h1 className={`mx-2 md:mx-4 ${ textStyle || "text-white text-3xl"} `}>{title}</h1>
      </div>
    )
  }

  const DashedTitles3 = ({ title1, title2, title3, width, height, textStyle, borderColor, linesWidth }) => {
    return (
      <div className={`flex flex-col justify-evenly md:justify-between items-center md:items-start  ${width || "w-full"} ${height || "h-full"} bg-red-00 `}>
        <LinkedTitle
          title={title1}
          bodyStyle="relative flex justify-center md:justify-start items-center w-4/12 md:w-full h-14 md:h-24 "
          linesStyle="absolute flex flex-row justify-end items-center right-full top-0 h-full bg"
          dashedLineStyle="w-1/12 md:w-1/6 lg:w-3/12 mx-1 border-dashed border-2 rounded-lg"
          rotatedLineStyle="w-4/6 bg-gradient-to-b md:bg-gradient-to-l from-gray-400 to-gray-900 h-1 border-none rounded-lg  transform origin-right"
          linkWidth={linesWidth}
          linkRotation="rotate-90 md:-rotate-45"
          borderColor={borderColor}
          textStyle={textStyle}
        />
        <LinkedTitle
          title={title2}
          bodyStyle="relative flex justify-center md:justify-start items-center w-5/12 md:w-full h-14 md:h-24 "
          linesStyle="absolute flex flex-row-reverse md:flex-row justify-end items-center -right-2xfull md:right-full top-0 h-full "
          dashedLineStyle="w-1/6 lg:w-3/12 mx-1 border-dashed border-2 rounded-lg"
          rotatedLineStyle="w-full md:w-4/6 bg-gradient-to-b md:bg-gradient-to-l from-gray-400 to-gray-900 h-1 border-none rounded-lg  transform md:origin-right origin-left"
          linkWidth={linesWidth}
          linkRotation="-rotate-90 md:rotate-0"
          borderColor={borderColor}
          textStyle={textStyle}
        />
        <LinkedTitle
          title={title3}
          bodyStyle="relative flex justify-center md:justify-start items-center w-6/12 md:w-full h-14 md:h-24 "
          linesStyle="absolute flex flex-row justify-end items-center right-full top-0 h-full  "
          dashedLineStyle="w-1/12 md:w-1/6 lg:w-3/12 mx-1 border-dashed border-2 rounded-lg "
          rotatedLineStyle="w-full md:w-4/6 bg-gradient-to-b md:bg-gradient-to-l from-gray-400 to-gray-900 h-1 border-none rounded-lg  transform origin-right"
          linkWidth={linesWidth}
          linkRotation="rotate-90 md:rotate-45"
          borderColor={borderColor}
          textStyle={textStyle}
        />
      </div>
    )
  }

  const CircleDisplayer = ({ title, text, bodyStyle, titleStyle, textStyle, lineStyle}) => {
    return (
      <div className="relative flex justify-center items-center w-full pt-full rounded-full">
        <hr className={`absolute ${ lineStyle || "right-full top-1/2 border-2 border-black " } w-screen`}></hr>
        <div className={`absolute top-0 h-full w-full rounded-full overflow-hidden ${bodyStyle || "bg-black  flex flex-col justify-center items-center"} `}>
          <div className={titleStyle || "text-white text-3xl" } >
          <h2  >{title}</h2>
          </div>
          <div className={textStyle || "text-white text-3xl" } >
            <p  >{text}</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div ref={getRef} className={`relative flex flex-col-reverse md:flex-row items-center justify-start ${containerWidth || " w-full "}`}>
      <motion.div className={`relative md:absolute top-0 w bottom-0 right-0 flex flex-col md:flex-row  items-center justify-end ${titlesWidth || "w-1/3"}`}
        style={{
          opacity : opacity
        }}
      >
        <DashedTitles3
          title1={subTitles[0]}
          title2={subTitles[1]}
          title3={subTitles[2]}
          width="w-full md:w-1/4"
          linesWidth="w-2xfull"
          height="h-3/5"
          textStyle="text-gray-100 text-base md:text-2xl text-center whitespace-nowrap"
          borderColor="border-gray-400"
        />
      </motion.div>
      <motion.div
        // ref={getRef}
        className={`${width || "w-2/3"} my-10`}
        style={{
          x: xOffset,
          y: yOffset,
          scale: scale,
          // shadow : shadow
        }}
      >
        <CircleDisplayer
          bodyStyle="flex flex-col justify-evenly items-center brder-2 border-white bg-black shadow-soft2glow "
          lineStyle="hidden md:flex border-black border-4 shadow-soft2glow top-1/2 right-full"
          titleStyle="flex justify-center items-center h-1/2 md:h-1/3 text-gray-200 text-2xl md:text-3xl"
          textStyle=" flex justify-center items-start h-1/2 md:h-2/3 w-10/12 text-gray-300 text-base md:text-xl text-center"
          title={title}
          text={text}
        />
      </motion.div>
    </div>
  )
}

export default AboutProject
