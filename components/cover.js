import { motion } from 'framer-motion'

const boucing = {
  start: {
    y: -10,
    transition: {
      duration: 0.6
    }
  },
  animate: {
    y: [0, 25],
    transition: {
      y: { duration: 2.1, type: 'spring', yoyo: Infinity },
      duration: 1
    }
  },
}

const variants = {
  start: {
    y: 0,
    scale: 0,
    transition: {
      y: { type: 'spring' },
      duration: 0.6
    }
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1
    }
  },
  shrink : {
    scale : 0.5,
    transition : {
      duration : 0.2

    }
  },
  onHover: {
    y: 50,
    scale: 1.1,
    transition: {
      y: { type: 'spring', },
      duration: 0.5
    }
  }
}


const Cover = ({ onDisplay, containerWidth, width, imageSrc }) => {

  // console.log(" imageCover interval : ", interval, " cover values : ", animationValues)

  // const color = useTransform(scrollYProgress, interval, animationValues['color']);

  return (
    <div className={`relative flex flex-col items-center justify-center ${containerWidth || " w-full "} ${!onDisplay.displayState && " pointer-events-none"}`}>
      <motion.div className={`${width || "w-full"}`} >
        <motion.div className="relative flex justify-center items-center w-full  pt-full  border-4 border-black bg-black rounded-full"
          initial="start"
          animate="animate"
          variants={variants}
          whileHover="onHover"
        >
          <hr className="absolute bottom-full right-1/2 border-2 border-black h-screen"></hr>
          <img className=" absolute top-0 bottom-0  h-full rounded-full bg-black" src={imageSrc} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Cover
