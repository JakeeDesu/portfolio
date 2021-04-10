import Scene from './scene'
import Image from 'next/image'
import Title from './title'
import { useFocus } from './useFocus'
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import ImageDisplayer from './imageDisplayer'

const boardVariants = {
	appear: {
		// scaleY : 0,
		opacity: 0
	},
	onBoard: {
		// scaleY : 1,
		opacity: 1,
		transition: {
			duration: 1
		}
	},
	disappear: {
		// originY : 0,
		// scaleY : 0,
		opacity: 0,
		transition: {
			// scaleY: { delay: 0.2, duration: 1 },
			duration: 0.5
		}
	}
}

const MainBoard = ({ onDisplay, about, repos }) => {
	const [data, setData] = useState({
		empty: true,
		about:
		{
			data: {},
			title: "",
			description: "",
			type: onDisplay.type
		},
		project:
		{
			data: {},
			title: "",
			description: "",
			type: onDisplay.type
		}
	})
	// const { scrollYProgress } = useViewportScroll();
	// const textYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, 10, 50, 0]);
	// const boardYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -100, -300, 0]);
	// const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 2, 1.7, 1]);
	// const boardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.7, 1]);
	// const boardImageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.1, 1]);
	// const sceneRef = useRef(null)
	const [ref, setTrigger] = useFocus();



	useEffect(() => {
		console.log("- mainboard useEffect")
		if ((onDisplay.displayState && onDisplay.type === 1) || (onDisplay.displayState && onDisplay.type === 2)) {
			// console.log(" **** track changes :", onDisplay, " *** " )
			setTrigger(true)
		}
		if ((onDisplay.type === 1 || onDisplay.type === 2)) {
			// console.log(data)
			const projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0]
			setData({ ...data, empty: false, about: { title: about.login, description: about.bio, data: about }, project: { title: projectData.name, description: projectData.description, data: projectData } })

		}
	}, [onDisplay])
	// window.scrollTo(0)
	const getTitle = () => {
		if (onDisplay.type === 1)
			return data.about.title
		else if (onDisplay.type === 2)
			return data.project.title
		return ""
	}

	const getDescription = () => {
		if (onDisplay.type === 1)
			return data.about.description
		else if (onDisplay.type === 2)
			return data.project.description
		return ""
	}

	return (
		// <AnimatePresence>
					// <div className="flex flex-col  justify-start items-center h-full w-full  p-10 l:mr-5 ">
					// 	<div className="w-full flex flex-row justify-center items-center  p-1 " >
					// 		{/* <Image height={90} width={90}  src="/img3.png" /> */}
					// 		<motion.div
					// 			className="flex flex-col justify-center l:justify-start l:items-start items-center mx-7 w-full"
					// 			style={{
					// 				y: boardYoffset,
					// 				scale: boardScale,
					// 				// opacity: boardOpacity
					// 			}}
					// 		>
					// 			<motion.h1 className="md:text-8xl l:text-7xl text-4xl my-10 ">{getTitle()}</motion.h1>
					// 			<motion.p
					// 				style={{
					// 					y: textYoffset,
					// 					opacity: boardImageOpacity
					// 				}}
					// 			>{getDescription()}</motion.p>
					// 		</motion.div>
					// 	</div>
					// </div>
		<>
			{ (onDisplay.type === 1 || ( onDisplay.type === 2 && onDisplay.displayState )) && <motion.div
				className="lg:absolut relative text-white hdden md:flex flex-col lg:flex-ro lg:justify-evenl lg:items-en md:z-0  z-0 h-screen w-full "
				initial="appear"
				animate="onBoard"
				exit="disappear"
				variants={boardVariants}
			>
				<motion.div ref={ref} className="flex w-full l:h-5/6 flex-auto l:w-1/2 top-0 h-1/3 l:px-5 "
				>
					<Title title={getTitle()} description={getDescription()}/>
				</motion.div>
				
				<motion.div className="flex  w-full l:h-5/6 flex-auto l:w-1/2 top-1/2 h-2/3 l:px-5 "
					style={{
						opacity: 1//boardImageOpacity
					}}
				>

					<motion.div
						className="relative flex flex-col justify-center l:justify-center l:items-center items-center p-10 w-full h-full z-50 overflow-hidden"
					>
						<ImageDisplayer images={['/Fractol/0.png', '/Fractol/1.png', '/Fractol/2.png', '/Fractol/3.png']} />
					</motion.div>
				</motion.div>

			</motion.div>
				// { onDisplay.displayState && <Scene />}
			}
			</>
		// </AnimatePresence> 
	);
}

export default MainBoard;