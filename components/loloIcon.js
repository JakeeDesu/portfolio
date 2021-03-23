// import Image from 'next/Image'
import { motion } from 'framer-motion'

export default function LoloIcon ({ size }) {

  const iconVariants = {
  	hidden : {
  		opacity : 0,
  	},
  	animation : {
  		opacity : [0.5,0.8],
  		y : [-5, 5],
  		// scale : [ 0.9, 1.1],
  		transition : {
  			yoyo : Infinity,
  			duration : 1,
  		}
  	}
  }


  return (
    <motion.div className={`flex flex-col justify-center items-center `}
    initial="hidden"
    animate="animation"
    variants={iconVariants}
    whileHover={{
      scale: 1.1,
      transition : {
        duration: 0.2,
      }
    }}
    >
      <img
      className="h-40 w-32 object-contain"
        src="/row-tail1.png"
        width={120 * size / 10}
        height={200 * size / 10}
      />
      {/* <Image      <Image
        src="/row-tail1.png"
        width={120 * size / 10}
        height={200 * size / 10}
      /> */}
      {/* <Image
        src="/row.png"
        width={35 * size / 10}
        height={35 * size / 10}
      /> */}
      <img

        className="h-24 w-24 object-contain"
        src="/row.png"
        width={35 * size / 10}
        height={35 * size / 10}
      />
    </motion.div>
  )
}
