import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (

    <AnimatePresence>
      <motion.div initial="start" animate="opened" exit="exitPage"
        variants={{
          start : {
            y : -1000,
          },
          opened : {
            y : 0,
            transition :{
              duration : 2
            }
          },
          exitPage: {
            y : 1000
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
