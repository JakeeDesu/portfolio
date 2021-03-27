import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'



const theme = {
	light : {
		backgroundColor : 'bg-green-500',
		shadowsColor : 'bg-blue-400',
		gimsColor : 'bg-red-200'
	},
	dark : {
		backgroundColor : 'bg-blue-400',
		shadowsColor : 'bg-gray-900',
		gimsColor : 'bg-blue-400'
	}
}

export default function DarkSky({ openSky, height, darkTheme }) {

	// const x1 = useMotionValue(0)
	// const x2 = useMotionValue(0)

	const { scrollYProgress } = useViewportScroll();
	const skyScale = useTransform(scrollYProgress, [0, 0.5, 1], [2, 1, 1]);
	const sky1offsetX = useTransform(scrollYProgress, [0, 0.5, 1], [900,0, 0]);
	// const y1= useTransform(scrollYProgress, [0, 1], [50, 0]);
	// const y2 = useTransform(scrollYProgress, [0, 1], [50, 0]);
	// const x1p = useTransform(sky1offsetX[0], (x) => `${x}%`);
	// const x2p = useTransform(sky2offsetX[0], (x) => `${x}%`);
	const sky2offsetX = useTransform(scrollYProgress, [0, 0.5, 1], [-900,0, 0]);
	const variants = {

		hidden1: {
			x: '50%',
			scale: 2
		},
		visible1: {
			x : 0,
			scale: 1,
			// transition: {
			// 	type: "spring",
			// 	duration: 2.5,
			// }
		},
		hidden2: {
			x: '-50%',
			scale: 2
		},
		visible2: {
			x : 0,
			scale: 1,
			// transition: {
			// 	type: "spring",
			// 	duration: 2.5,
			// }
		},

	}
	return (
		<div className={`relative flex flex-col ${height} w-full overflow-hidden`} >
			{/* <div className="h-1/4 w-full bg-gray-900"></div> */}
			<div className={`relative h-1/2 w-full`}>
				<motion.div
					className={`absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4  ${ darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor }`}
					// initial="hidden1"
					// animate={ openSky ? "visible1" :"hidden1"}
					// variants={variants}
					style={{
						x : sky1offsetX,
						// y: y1,
						scale : skyScale
					}}
				></motion.div>
				<motion.div
				className={`absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4 ${ darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor }`}
				style={{
					x : sky2offsetX,
					// y : y2,
					scale : skyScale
				}}

					// initial="hidden2"
					// animate={ openSky ? "visible2" :"hidden2"}
					// variants={variants}
				></motion.div>
			</div>
		</div>

	);
}
