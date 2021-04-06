import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Wrraper = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);
  // console.log("page component ::::::::::: ", Component)
  const variants = {
    start : {
      scale: 2,
      y :  1000,
    },
    opened : {
      scale : 1,
      y : 0,
      // top : 0,
      transition :{
        // type: "spring",
        ease : "easeInOut",
        duration : 2,
        delay : 0.2
      }
    },
    exitPage: {
      scale : 1,
      y : -1000,
      transition :{
        // type: "spring",
        ease : "easeInOut",
        duration : 2,
        // delay : 0.2
      }
    }
  }
	return (
		<motion.div className={`${darkTheme && 'bg-black' || 'bg-blue-100'} w-full overflow-hidden `}>
			<AnimatePresence >
				<motion.div className={`flex flex-coll justify-center items-center w-full  ${darkTheme && 'bg-black' || 'bg-blue-100'}`}  initial="start" animate="opened" exit="exitPage"
					variants={variants}
					transition={{
						duration: 2
					}}
				>
					{ children }
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}

export default Wrraper;