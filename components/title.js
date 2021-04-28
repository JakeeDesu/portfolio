import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import { useGetScrollInterval } from './useGetScrollInterval'

const Title = ({animationValues, containerWidth, width, getRef, interval, values, title, description, image }) => {

	const { scrollYProgress } = useViewportScroll();
	// console.log(title + " title interval : ", interval , title + " title values : ", {x: [0, 100],y: [0, 100],scale: [1,1] }, "   | " , animationValues)
		const xOffset = useTransform(scrollYProgress, interval , animationValues['x']);
		const yOffset = useTransform(scrollYProgress, interval , animationValues['y']);
		const scale = useTransform(scrollYProgress, interval , animationValues['scale']);
		const opacity = useTransform(scrollYProgress, interval , animationValues['opacity']);

	return (
		<div ref={getRef} className={`relative flex flex-col items-end justify-center ${ containerWidth || "w-full" } `} >
			<motion.div
				className="flex flex-col justify-center items-center w-full h-full "
				style={{
					// y: boardYoffset,
					x: xOffset,
					y: yOffset,
					scale : scale,
					opacity: opacity,
					// scale: boardScale,
				}}
			>
			<div className={`flex flex-col ${ width || "w-full "} `}>
				<motion.div
				className="relative flex justify-center items-center w-full pt-full border-4 border-black bg-white rounded-full"
				style={{
					// color : textColor,
					// backgroundColor : boardColor
				}}
				>
					<hr className="absolute hidden md:flex bottom-full right-1/2 border-2 border-black h-screen "></hr>
					<div className="absolute flex justify-center items-center top-0  w-full h-full " >
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
