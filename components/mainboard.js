import Scene from './scene'
import Image from 'next/image'
import Title from './title'
import ProjectCover from './projectCover'
import ProjectDescription from './projectDescription'
import { mergeRefs } from './mergeRefs'
import { useFocus } from './useFocus'
import { useWindowDimensions } from './useWindowDimensions'
import { useGetScrollInterval } from './useGetScrollInterval'
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'


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

const MainBoard = ({ onDisplay, repos }) => {
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
	const [focuseRef, setTrigger] = useFocus();



	useEffect(() => {
		console.log("- mainboard useEffect")
		if ((onDisplay.displayState && onDisplay.type === 1) || (onDisplay.displayState && onDisplay.type === 2)) {
			// console.log(" **** track changes :", onDisplay, " *** " )
			setTrigger(true)
		}
		if ((onDisplay.type === 1 || onDisplay.type === 2)) {
			// console.log(data)
			const projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0]
			setData({ ...data,
				empty: false,
				about: {
					title: "skills",
					description: "bla bla bal",
					data: {}
				},
				project: {
					title: projectData.name,
					description: projectData.description,
					data: projectData
				}
			})

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
	const getFrames = () => {
		if (onDisplay.type === 1)
			return "/img4.jpg"
		else if (onDisplay.type === 2)
			return data.project.data.openGraphImageUrl
		return "/me/0.png"
	}

	// <motion.div    className="flex justify-center bg-blue-300 z-50 w-11/12"
	// 	>
	// </motion.div>
	return (
		<>
			{ (onDisplay.type === 1 || ( onDisplay.type === 2 && onDisplay.displayState )) && <motion.div
				className="relative text-black flex flex-col justify-start items-center  z-0  w-full "
				initial="appear"
				animate="onBoard"
				exit="disappear"
				variants={boardVariants}
			>
				{
					// console.log("intervals : [ " + y0 + " , " + y1 + " ] ")
				}
				<motion.div ref={mergeRefs(focuseRef)} className="flex flex-col justify-start items-center w-11/12  "
					style={{
						opacity: 1//boardImageOpacity
					}}
				>
					<Title title={getTitle()} description={getDescription()}/>
					<motion.div
						className="relative flex flex-col items-start justify-center w-11/12 max-w-7xl "
					>
						{/* <p>window height  : {height} <br/> window width : {width} </p> */}
						<ProjectCover imageSrc={getFrames()} width="w-3/5" />
						{/* <ImageDisplayer projectName={getTitle()} />*/}
					</motion.div>
					<motion.div
						className="relative flex flex-col items-end justify-center w-11/12 max-w-7xl "
					>
						<ProjectDescription title={"title"} text={"text text text"} width="w-3/5"/>
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
