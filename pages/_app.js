import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import Home from '../pages/home'


function MyApp({ Component, pageProps }) {

  console.log("page component ::::::::::: ", Component)
  const variants = {
    start : {
      scale: 2,
      y : (Component === Home) ?  2000 : 1000,
    },
    opened : {
      scale : 1,
      y : 0,
      transition :{
        // type: "spring",
        ease : "easeOut",
        duration : 2,
        // delay : 0.2
      }
    },
    exitPage: {
      y : -1000
    }
  }

  return (

    <div className={`${ Component == Home ? 'bg-gray-900' : ' bg-blue-400'} h-screen w-full overflow-hidden`}>
      <AnimatePresence >
        <motion.div className="bg-gray-900" key={Component} initial="start" animate="opened" exit="exitPage"
          variants={variants}
          transition={{
            duration : 3
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
