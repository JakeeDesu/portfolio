import { motion, useTransform, useViewportScroll, useMotionValue  } from 'framer-motion'

export default function Sogumice ({ height, width }) {

	const { scrollYProgress } = useViewportScroll();
	const sogumiceScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 1]);
	const sogumiceYoffset = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 0]);

	const sogumiceVariants = {
		hidden: {
			y: "50vh",
			scale: 0.1
		},
		visible: {
			y : -25,
			scale: 1,
			transition: {
				// staggerChildren: 0.5,
				// when: "beforeChildren",
				type : "spring",
				duration: 2.5,
				// delay : 0.5,
			}
		},
	}
	const circleVariants = {
		hidden: {
			scale: 1
		},
		visible: {
			scale: 1.3,
			transition: {
				// yoyo : 2,
				// staggerChildren: 2,
				// staggerDirection: -1,
				when: "beforeChildren",
				type : "spring",
				duration: 1.2,
				delay : 0.6,
			}
		},
	}

	const gimVariants = {
		hidden: {
			opacity : 0,
			y : "-100vh",
			scale: 20,
			boxShadow: "0 0px 0px 0px rgba(255, 255, 255, 0.2)",
		},
		visible: {
			opacity:1,
			y : 0,
			scale: 1,
			boxShadow: "0 0px 20px 8px rgba(255, 255, 255, 0.5)",
			transition: {
				bounce : 0.1,
				type : "spring",
				duration: 2.5,
				delay : 1,
				ease: "circOut"
			}
		},
	}
	return (
		<motion.div className={`flex justify-center items-center ${height || "h-1/2"} ${width || "w-1/2"} bg-blue-200 border-gray-900 rounded-full `}
			// initial="hidden"
			// animate="visible"
			// variants={sogumiceVariants}
			// style={
			// 	{
			// 		scale : sogumiceScale,
			// 		top : sogumiceYoffset,
			// 		// opacity : sogumiceOpacity
			// 	}
			// }

		>
			<motion.div className="flex justify-center items-center bg-gray-900  border-gray-900 border-4 h-24 w-24 rounded-full "

			variants={circleVariants}

			>
				{/*<motion.div className="-top-full bg-red-400 h-14 w-14 rounded-full shadow-glow"
			initial="hidden"
			animate="visible"
			variants={gimVariants}
				>
				</motion.div>*/}
			</motion.div>
			{/* <h1>Sogumice</h1> */}
		</motion.div>
	);
}
