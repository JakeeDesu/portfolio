import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import { useGetScrollInterval } from './useGetScrollInterval'

const Title = ({animationValues, containerWidth, width, getRef, interval, values, title, description, image }) => {

	// const [[yStart, yHalf, yEnd], ref] = useGetScrollInterval()
	const { scrollYProgress } = useViewportScroll();
	console.log(title + " title interval : ", interval , title + " title values : ", {x: [0, 100],y: [0, 100],scale: [1,1] }, "   | " , animationValues)
	// const boardYoffset = useTransform(scrollYProgress, interval, values);
	// if (animationValues.hasOwnProperty("x"))
		const xOffset = useTransform(scrollYProgress, interval , animationValues['x']);
	// else
	// 	const xOffset = 0
	// if (animationValues.hasOwnProperty("y"))
		const yOffset = useTransform(scrollYProgress, interval , animationValues['y']);
	// else
	// 	const yOffset = 0
	// if (animationValues.hasOwnProperty("scale"))
		const scale = useTransform(scrollYProgress, interval , animationValues['scale']);
	// else
	// 	const scale = 0
	// const textYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, 0, 0, 0]);
	// const textColor = useTransform(scrollYProgress, [yStart, yHalf, yEnd], ["#000000", "#FFFFFF", "#FFFFFF"] )
	// const boardScale = useTransform(scrollYProgress, [0, yStart, yHalf, yEnd, 1], [3, 2.2, 1.8, 1, 1]);
	// const boardOpacity = useTransform(scrollYProgress, [0, yStart, yHalf, yEnd , 1], [0, 0, 0.9, 1, 1]);
	// const descriptionOpacity = useTransform(scrollYProgress, [yStart, yHalf, yEnd], [0, 0,  1]);
	// const boardColor = useTransform(scrollYProgress, [yStart, yHalf, yEnd], ["#FFFFFF", "#000000", "#000000"] )
	// console.log("title interval : ", [yStart, yHalf, yEnd] )
	
	return (
		<div ref={getRef} className={`relative flex flex-col items-end justify-center ${ containerWidth || "w-full" }`} >
			<motion.div
				className="flex flex-col justify-center items-center w-full h-full "
				style={{
					// y: boardYoffset,
					x: xOffset,
					y: yOffset,
					scale : scale
					// scale: boardScale,
					// opacity: boardOpacity,
				}}
			>
			<div className={`flex flex-col ${ width || "w-full "} `}>
				<motion.div
				className="relative flex justify-center items-center w-full pt-full border-4 border-black bg-white z-100 rounded-full"
				style={{
					// color : textColor,
					// backgroundColor : boardColor
				}}
				>
					<hr className="absolute bottom-full right-1/2 border-2 border-black h-screen"></hr>
					<div className="absolute flex justify-center items-center top-0  w-full h-full" >
						<h1 className=" md:text-8xl  text-4xl ">{title}</h1>
					</div>
				</motion.div>
			</div>
				<motion.div
					className="relative flex flex-col justify-center items-center mx-2 "
					style={{
						// y: textYoffset,
						// opacity: descriptionOpacity,
					}}
				>
					<p>{description}</p>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Title;
