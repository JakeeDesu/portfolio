import { motion, useTransform, useViewportScroll } from 'framer-motion'

const Title = ({ animationValues, containerWidth, width, getRef, interval, title}) => {

	const { scrollYProgress } = useViewportScroll();
	// console.log(title + " title interval : ", interval , title + " title values : ", {x: [0, 100],y: [0, 100],scale: [1,1] }, "   | " , animationValues)
	const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
	const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
	const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);
	const color = useTransform(scrollYProgress, interval, animationValues['color']);

	return (
		<div ref={getRef} className={`relative flex flex-col items-end justify-center ${containerWidth || "w-full"} `} >
			<motion.div
				className="flex flex-col justify-center items-center w-full h-full my-10 "
				style={{
					y: yOffset,
					scale: scale,
					// opacity: opacity,s
				}}
			>
				<div className={`flex flex-col ${width || "w-full "} `}>
					<motion.div
						className="relative flex justify-center items-center w-full pt-full bordr-4 border-black bg-black  rounded-full"
						// style={{ backgroundColor: color }}
					>
						<motion.div className="absolute flex justify-center items-center top-0  shadow-soft2glow w-full h-full rounded-full "
							style={{ opacity: opacity }}
						>
							<h1 className=" md:text-7xl text-gray-200 text-4xl ">{title}</h1>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

export default Title;
