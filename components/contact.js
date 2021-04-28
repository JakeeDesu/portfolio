
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'


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
      y: { duration: 1.5, type: 'spring', yoyo: Infinity },
      duration: 1
    }
  },
}

const variants={
  start : {
    y : 0,
    scale : 0,
    transition : {
      y : { type :'spring'},
      duration : 0.6
    }
  },
  animate : {
    scale : 1,
    transition : {
      duration : 0.5
    }
  },
  shrink : {
    scale : 0.8,
    transition : {
      duration : 1
    }
  },
  onHover : {
    y : 30,
    scale : 1.1,
    transition : {
      y : {type : 'spring',},
      duration : 0.3
    }
  }
}

const Contact = ({ onDisplay, containerWidth, width, title, text, color }) => {

  return (
    <motion.div className={`relative  ${containerWidth || " w-full "} cursor-pointer ${!onDisplay.displayState && " pointer-events-none"}`}
    initial="start"
    animate="animate"
    variants={boucing}
    >
      <div className={`${width || "w-full"}`} >
        <motion.div className="relative flex justify-center items-center w-full  pt-full border-2 border-black bg-black rounded-full" 
          initial="start"
          animate={onDisplay.displayState ? "animate" : "shrink" }
          variants={variants}
          whileHover="onHover"
        >
          <hr className="absolute left-1/2 bottom-full border-2 border-black h-screen"></hr>
          <div className={`absolute ${color} flex flex-col justify-center items-center text-center top-0 h-full w-full rounded-full overflow-hidden`}>
            <h2 className="md:text-lg text-xl" >{title}</h2>
            <p>{text}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
