import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'

const Title = ({ title, description, image }) => {

	const { scrollYProgress } = useViewportScroll();
	const textYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, 10, 50, 0]);
	const boardYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [-2000, -800, 100, 0]);
	const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [3, 2, 1.2, 1]);
	const boardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [0, 0.9, 1, 1]);
	const boardImageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [0, 0, 0, 1]);
	return (

			<div className="flex flex-col  justify-start items-center h-full w-full">
				<div className="relative w-full flex flex-row justify-center items-center h-full " >
					<motion.div
						className="flex flex-col justify-center items-center w-full h-full "
						style={{
							y: boardYoffset,
							scale: boardScale,
							opacity: boardOpacity
						}}
					>
						<div className="relative flex justify-center items-center w-100 h-100 border-4 border-black bg-white z-100 rounded-full">
							<hr className="absolute bottom-full border-2 border-black h-screen"></hr>
							<h1 className="md:text-8xl  text-4xl ">{title}</h1>
						</div>
						<motion.div
							className="relative flex flex-col justify-center items-center  h-1/3 "
							style={{
								y: textYoffset,
								opacity: boardImageOpacity
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
