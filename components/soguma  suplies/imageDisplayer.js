import { motion } from 'framer-motion'

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

const ImageDisplayer = ({ pointerEvent, containerWidth, width, imageSrc, rounded, border }) => {
 
  return (
    <div className={`relative flex flex-col items-center justify-center ${containerWidth || " w-full "} ${!pointerEvent && " pointer-events-none"}`}>
      <div className={`${width || "w-full"}`} >
        <motion.div className={`relative flex justify-center items-center w-full  pt-full  ${ border && "borde-4 border-blck" } bg-black ${rounded && "rounded-full" || "rounded-sm"} overflow-hidden`}
          initial="start"
          animate="animate"
          variants={variants}
        >
          <img className={`absolute top-0 bottom-0  h-full ${rounded && "rounded-full"} bg-black`} src={imageSrc} />
        </motion.div>
      </div>
    </div>
  )
}

export default ImageDisplayer
