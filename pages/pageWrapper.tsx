//@ts-ignore
import { motion } from 'framer-motion'

const variants = {
	start: {
		scale: 2,
		y: 1000,
	},
	opened: {
		scale: 1,
		y: 0,
		transition: {
			ease: "easeInOut",
			duration: 2,
			delay: 0.2
		}
	}
}
//@ts-ignore
const PageWrapper = ({ children, darkTheme }) => {

	return (
		<motion.div className={`${darkTheme && 'bg-black' || 'bg-blue-100'} w-full overflow-hidden `}>
			<motion.div className={`w-full ${darkTheme && 'bg-black' || 'bg-blue-100'}`}
				initial="start"
				animate="opened"
				variants={variants}
				transition={{ duration: 2 }}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}

export default PageWrapper