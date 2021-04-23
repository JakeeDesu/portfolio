import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'

const Title = ({ title, description, image }) => {

	const { scrollYProgress } = useViewportScroll();
	const textYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, 0, 0, 0]);
	const textColor = useTransform(scrollYProgress, [0, 0.8, 1], ["#000000", "#FFFFFF", "#FFFFFF"] )
	const boardYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [-2000, 0, 0, 0]);
	const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [3, 1, 1, 1]);
	const boardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [0, 0.9, 1, 1]);
	const boardImageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [0, 0, 0, 1]);
	const boardColor = useTransform(scrollYProgress, [0 , 0.5, 1], ["#FFFFFF", "#000000", "#000000"] )
	return (

			<div className="flex flex-col  justify-start items-center h-full w-full">
				<div className="relative w-full flex flex-row justify-center items-center h-full " >
					<motion.div
						className="flex flex-col justify-center items-center w-full h-full "
						style={{
							y: boardYoffset,
							scale: boardScale,
							opacity: boardOpacity,
						}}
					>
					<div className="flex flex-col w-2/5 ">
						<motion.div
						className="relative flex justify-center items-center w-full pt-full border-4 border-black bg-white z-100 rounded-full"
						style={{
							color : textColor,
							backgroundColor : boardColor
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
								y: textYoffset,
								opacity: boardImageOpacity,
							}}
						>
							<p>{description}</p>
						</motion.div>
					</motion.div>
								{/* <div className="relative w-full h-300">
									<Image width='responsive' height='responsive'  src={image} />
								</div> */}
				</div>
			</div>
	);
}

export default Title;
