
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import { useState } from 'react'

const boucing = {
  start: {
    y: 0,
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
    y : 10,
    scale : 1.1,
    transition : {
      y : {type : 'spring',},
      duration : 0.3
    }
  },
  stretch : {
    height : '100%',
    width : '100%',
    rounded : "none"
  }
}


const Contact = ({ onDisplay, containerWidth, width, title, text, color, media }) => {

  const [open, setOpen] = useState(false)
  
  const Button = ({title, text}) => {
    return (
      <div className={`${width || "w-full"}`} >
        <motion.div className="relative flex justify-center items-center w-full  pt-full border-2 border-black bg-black rounded-full" 
          // initial="start"
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
    )
  }

  const SubButton = ({title, text, posiY}) => {
    return (
      <div className={`absolute ${width || "w-full"}`} >
        <motion.div className="relative flex justify-center items-center w-full  pt-full border-2 border-black bg-black rounded-full" 
          initial="start"
          animate={onDisplay.displayState ? "animate" : "shrink" }
          variants={variants}
          whileHover="onHover"
          whileTap="stretch"
        >
          <hr className="absolute left-1/2 bottom-full border-2 border-black h-screen"></hr>
          <div className={`absolute ${color} flex flex-col justify-center items-center text-center top-0 h-full w-full rounded-full overflow-hidden`}>
            <h2 className="md:text-lg text-xl" >{title}</h2>
          </div>
            <p>{text}</p>
        </motion.div>
      </div>
    )
  } 

  const ContactForm = () =>{
    return (
      <div className="relative flex justify-end items-start top-0 right-0 h-2/3 w-10/12 border-2 border-gray-900 rounded-lg bg-black ">
      <form className="w-full h-full">
        <input className="w-full h-4/6 bg-gray-900 border-none" ></input>
      </form>
    </div>
    )
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-end">
        <motion.div className={`relative m-4 ${containerWidth || " w-full "} cursor-pointer ${!onDisplay.displayState && " pointer-events-none"}`}
        initial="start"
        animate="animate"
        variants={boucing}
        >
          <Button title={title} text={text}/>
          {/* <SubButton title={title} text={text} />
          <SubButton title={title} text={text} /> */}
        </motion.div>
        {/* <ContactForm/> */}
    </div>
  )
}

export default Contact
