import { motion, useTransform, useViewportScroll } from 'framer-motion'

const ProjectCover = ({ image, containerStyle, getRef, interval, animationValues, title}) => {

	const { scrollYProgress } = useViewportScroll();
	// const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
	const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
	const scale = useTransform(scrollYProgress, interval, animationValues['scale']);
	// const opacity = useTransform(scrollYProgress, interval, animationValues['opacity']);

	return (
		<div ref={getRef} className={`${containerStyle || "w-full md:w-10/12"}`}>
		<motion.div className="flex justify-center w-full my-10 h-96 md:h-100 lg:h-150 "
			style={{
				// x: xOffset,
				y: yOffset,
				// scale: scale,
				// opacity : opacity
			}}
		>
			<img  className="w-full object-cor object-center md:border-2 border-b-2 border-t-2 rounded-md md:rounded-lg md:shadow-soft2glow border-gray-700" src={image} />
		</motion.div>
	</div>
	)
}

export default ProjectCover