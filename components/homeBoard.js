
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import Cover from '../components/cover'
import Contact from './contact'
import Description from '../components/description'

export const HomeBoard = ({ onDisplay, coverImage, title, description }) => {

	const { scrollYProgress } = useViewportScroll();
	const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);
	const boardYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);
	// const boardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [1, 0.4, 0, 0]);

	return (
		<motion.div className="relative flex md:flex-row flex-col justify-around items-center w-full h-2/3 top-0 left-0 " 
			animate={onDisplay.displayState  ? {
				opacity : 1,
				y : 0,
			} : {
				opacity : 0.5,
				y : -0
			}}
			transition={{
				y : { type: "spring", duration : 1},
				duration : 1,
			}}
		>
		<motion.div className="relative flex flex-row justify-center items-center h-full md:w-1/3 w-full "
			style={{
				scale: boardScale,
				y: boardYoffset,
				// opacity : boardOpacity
			}}>
			<Cover
				onDisplay={onDisplay}
				imageSrc={coverImage}
				containerWidth=" w-6/12"
				width="w-full max-w-6xl"
			/>
		</motion.div>
		<motion.div className="relative flex flex-row justify-end items-center h-full md:w-1/3 w-full "
			style={{
				scale: boardScale,
				y: boardYoffset,
				// opacity : boardOpacity
			}}>
			{/* <Description
				onDisplay={onDisplay}
				title={title}
				text={""}
				containerWidth=" w-6/12 h-full  flex justify-start"
				width="w-full max-w-6xl "
				color="bg-black text-white"
			/> */}
			<Contact
				onDisplay={onDisplay}
				title={"contact me"}
				containerWidth=" w-3/12 h-full flex justify-start "
				width="w-full max-w-6xl"
				color="bg-black text-white"
			/>
		</motion.div>
	</motion.div>
	)
}