import { motion } from 'framer-motion'

export default function DarkSkyOpen({ height }) {

	const variants = {

		hidden1: {
			x: '50%',
			scale: 2
		},
		visible1: {
			x : 0,
			scale: [1, 0.98],
			transition: {
				scale : {
					type: 'spring',
					yoyo : Infinity,
					duration : 1,
				},
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
			scale: [1, 0.98],
			transition: {
				scale : {
					type: 'spring',
					yoyo : Infinity,
					duration : 1,
				},
				type: "spring",
				duration: 2.5,
			}
		},

	}
	return (
		<div className={`relative flex flex-col ${height} w-full bg-gradient-to-b from-gray-900 to-blue-400  overflow-hidden`} >
				<div className={`relative h-1/3 w-full bg-gradient-to-b from-gray-900 to-blue-400 `}>
					<motion.div
						className="absolute top-1/4 -left-1/4 h-xfull w-3/4 rounded-fullp4   bg-gray-900"
						initial="hidden1"
						animate="visible1"
						variants={variants}
					></motion.div>
					<motion.div
						className="absolute top-1/4 -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900"
						initial="hidden2"
						animate="visible2"
						variants={variants}
					></motion.div>
				</div>
				<div className="h-2/3 bg-gray-900 w-full">

				</div>
		</div>

	);
}
