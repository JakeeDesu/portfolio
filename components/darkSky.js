import { motion } from 'framer-motion'

export default function DarkSky({ height }) {

	const variants = {

		hidden1: {
			x: '50%',
			scale: 2
		},
		visible1: {
			x : 0,
			scale: 1,
			transition: {
				type: "spring",
				duration: 2.5,
			}
		},
		hidden2: {
			x: '-50%',
			scale: 2
		},
		visible2: {
			x : 0,
			scale: 1,
			transition: {
				type: "spring",
				duration: 2.5,
			}
		},

	}
	return (
		<div className={`relative flex flex-col ${height} w-full overflow-hidden`} >
			<div className="h-1/4 w-full bg-blue-400"></div>
			<div className={`relative h-1/2 w-full`}>
				<motion.div
					className="absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-blue-400"
					initial="hidden1"
					animate="visible1"
					variants={variants}
				></motion.div>
				<motion.div
					className="absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-blue-400"
					initial="hidden2"
					animate="visible2"
					variants={variants}
				></motion.div>
			</div>
		</div>

	);
}
