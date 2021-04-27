import { motion } from 'framer-motion'

const Cover = ({containerWidth, width, imageSrc }) => {
  
  // console.log(" imageCover interval : ", interval, " cover values : ", animationValues)
  
  // const color = useTransform(scrollYProgress, interval, animationValues['color']);

  return (
    <div  className={`relative flex flex-col items-start justify-center ${containerWidth || " w-full "} `}>
      <motion.div className={`${width || "w-full"}`} >
        <motion.div className="relative flex justify-center items-center w-full  pt-full  border-4 border-black bg-black rounded-full" >
          <hr className="absolute bottom-full right-1/2 border-2 border-black h-screen"></hr>
          <img className=" absolute top-0 bottom-0  h-full rounded-full bg-black" src={imageSrc} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Cover
