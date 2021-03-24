import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import Home from '../pages/home'


function MyApp({ Component, pageProps }) {

  console.log("page component ::::::::::: ", Component)
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
      y : 1000
    }
  }

  return (

    <motion.div className={`${ 'bg-gray-900'} w-full overflowHidden`}>
      <AnimatePresence >
        <motion.div className="flex flex-coll justify-center items-center  bg-gray-900" key={Component} initial="start" animate="opened" exit="exitPage"
          variants={variants}
          transition={{
            duration : 2
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default MyApp
