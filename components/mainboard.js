import Scene from './scene'
import Image from 'next/image'
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const boardVariants = {
	appear: {
		opacity: 0
	},
	onBoard: {
		opacity: 1,
		transition: {
			duration: 1
		}
	},
	disappear: {
		opacity: 0,
		transition: {
			duration: 1
		}
	}
}

const MainBoard = ({ onDisplay, about, repos }) => {
	const [data, setData] = useState({ data: {}, title: "", description: "", type: onDisplay.type })
	const { scrollYProgress } = useViewportScroll();
	const textYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, 10, 50, 0]);
	const boardYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -100, -300, 0]);
	const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 2, 1.7, 1]);
	const boardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.7, 1]);
	const boardImageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.1, 1]);

	useEffect(() => {
		switch (onDisplay.type) {
			case 1:
				setData({ ...data, title: about.login, description: about.bio, data: about })
				break;
			case 2:
				const projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0]
				setData({ ...data, title: projectData.name, description: projectData.description, data: projectData })
				break;
		}
	}, [onDisplay.itemId])
	console.log(data)
	return (
		<AnimatePresence>
			{ (onDisplay.type === 1 || onDisplay.type === 2 && onDisplay.displayState) && <motion.div
				className="lg:absolute relative text-white hidden md:flex flex-col lg:flex-row lg:justify-evenly lg:items-end md:z-10  z-0 h-screen w-full lg:w-full "
				initial="appear"
				animate="onBoard"
				exit="disappear"
				variants={boardVariants}
			>
				<motion.div className="flex w-full lg:h-5/6 flex-auto lg:w-1/2 top-0 lg:px-5 "
				>
					<div className="flex flex-col  justify-start items-center h-full w-full  p-10 lg:mr-5">
						<div className="w-full flex flex-row justify-center items-center  p-1 " >
							{/* <Image height={90} width={90}  src="/img3.png" /> */}
							<motion.div
								className="flex flex-col justify-center lg:items-start items-center mx-7 "
								style={{
									y: boardYoffset,
									scale : boardScale,
									// opacity: boardOpacity
								}}
								>
								<motion.h1 className="md:text-8xl lg:text-7xl text-4xl my-10">{data.title}</motion.h1>
								<motion.p
									style={{
										y: textYoffset,
										opacity : boardImageOpacity
									}}
								>{data.description}</motion.p>
							</motion.div>
						</div>
					</div>
				</motion.div>
				<motion.div className="flex  w-full lg:h-5/6 flex-auto lg:w-1/2 top-1/2 h-100 lg:px-5 bg-green-500"
					style={{
						opacity : 1//boardImageOpacity
					}}
				>
					<div className="flex h-100 w-full  p-10 lg:ml-5 ">
					</div>
				</motion.div>
			</motion.div>
				// { onDisplay.displayState && <Scene />}
			}
		</AnimatePresence>
	);
}

export default MainBoard;