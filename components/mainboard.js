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

const imagesData=["hashhsa dfsdaf sadfdsaf asdfadsf","sadfasdf sdfasdf asdfads","sdafsdaf asfasd afasdf","fasdfasdf asdfasdf asdfasdfa asdfsa"]
const images=['/Fractol/0.png', '/Fractol/1.png', '/Fractol/2.png', '/Fractol/3.png']
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
		<>
			{ (onDisplay.type === 1 || ( onDisplay.type === 2 && onDisplay.displayState )) && <motion.div
				className="lg:absolu relative text-white md:flex flex-col justify-center items-center  lg:items-en md:z-0  z-0 h-screen w-full "
				initial="appear"
				animate="onBoard"
				exit="disappear"
				variants={boardVariants}
			>
				<motion.div ref={ref} className="flex w-full l:h-5/6 flex-auto l:w-1/2 top-0 h-1/3 max-h-100 l:px-5 "
				>
					<Title title={getTitle()} description={getDescription()}/>
				</motion.div>
				
				<motion.div className="flex  w-full l:h-5/6 flex-auto l:w-1/2 top-1/2 h-2/3 max-h-100 l:px-5 "
					style={{
						opacity: 1//boardImageOpacity
					}}
				>
					<motion.div
						className="relative flex flex-col justify-center l:justify-center l:items-center items-center p-10 w-full h-full z-50 overflow-hidden"
					>
						<ImageDisplayer projectName={getTitle()} />
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