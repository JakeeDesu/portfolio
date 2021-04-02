import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'



const theme = {
	light : {
		backgroundColor : 'bg-green-500',
		shadowsColor : 'bg-blue-400',
		gimsColor : 'bg-red-200'
	},
	dark : {
		backgroundColor : '',
		shadowsColor : '  ',
		gimsColor : ''
	}
}

export default function DarkSky({ openSky, height, darkTheme }) {

	// const x1 = useMotionValue(0)
	// const x2 = useMotionValue(0)

	const { scrollYProgress } = useViewportScroll();
	// const skyScale = useTransform(scrollYProgress, [0,  0.5], [3,  1]);
	const sky1offsetX = useTransform(scrollYProgress, [0, 0.5], [0,-1000]);
	// const y1= useTransform(scrollYProgress, [0, 1], [50, 0]);
	// const y2 = useTransform(scrollYProgress, [0, 1], [50, 0]);
	// const x1p = useTransform(sky1offsetX[0], (x) => `${x}%`);
	// const x2p = useTransform(sky2offsetX[0], (x) => `${x}%`);
	const sky2offsetX = useTransform(scrollYProgress, [0,1], [0,1000]);
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
		<div className={`relative flex flex-col ${height} w-full overflow-hidden border-4 border-red-800 `} >
			{/* <div className="h-1/4 w-full bg-gray-900"></div> */}
			<div className={`relative h-full w-full bg-red-400`}>
				<motion.div
					className={`absolute -bottom-0 -left-full h-2xfull w-3/4 rounded-full bg-gray-900  ${ darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor }`}
					// initial="hidden1"
					// animate={ openSky ? "visible1" :"hidden1"}
					// variants={variants}
					style={{
						// x : sky1offsetX,
						// y: y1,
						// scale : 3
					}}
				></motion.div>
				<motion.div
				className={`absolute -bottom-0 -right-full h-2xfull w-3/4 rounded-full bg-gray-900 ${ darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor }`}
				style={{
					// x : sky2offsetX,
					// y : y2,
					// scale : 3
				}}

					// initial="hidden2"
					// animate={ openSky ? "visible2" :"hidden2"}
					// variants={variants}
				></motion.div>
			</div>
		</div>

	);
}
