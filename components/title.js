import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'

const Title = ({ title, description, image }) => {

	const { scrollYProgress } = useViewportScroll();
	const textYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, 10, 50, 0]);
	const boardYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -100, -300, 0]);
	const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 2, 1.7, 1]);
	// const boardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.7, 1]);
	const boardImageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.1, 1]);
	return (

			<div className="flex flex-col  justify-start items-center h-full w-full  p-10 l:mr-5 ">
				<div className="w-full flex flex-row justify-center items-center  p-1 " >
					<motion.div
						className="flex flex-col justify-center l:justify-start l:items-start items-center mx-7 w-full"
						style={{
							y: boardYoffset,
							scale: boardScale,
							// opacity: boardOpacity
						}}
					>
						<motion.h1 className="md:text-8xl l:text-7xl text-4xl my-10 ">{title}</motion.h1>
						<motion.p
							style={{
								y: textYoffset,
								opacity: boardImageOpacity
							}}
						>{description}</motion.p>
					</motion.div>
								{/* <div className="relative w-full h-300">
									<Image width='responsive' height='responsive'  src={image} />
								</div> */}
				</div>
			</div>
	);
}
 
export default Title;