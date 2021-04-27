import Scene from './scene'
import Image from 'next/image'
import Title from './title'
import ProjectCover from './projectCover'
import ProjectDescription from './projectDescription'
import { mergeRefs } from './mergeRefs'
import { useFocus } from './useFocus'
import { useWindowDimensions } from './useWindowDimensions'
import { useGetScrollInterval, useGetRef } from './useGetScrollInterval'
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'


const boardVariants = {
	appear: {
		opacity: 0
	},
	onBoard: {
		opacity: 1,
		transition: {
			duration: 0
		}
	},
	disappear: {
		opacity: 0,
		transition: {
			duration: 0
		}
	}
}


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
	// const [focuseRef, setTrigger] = useFocus();
	const [scrollValues, refContainer, setChildsVariables] = useGetScrollInterval()

	const [ref1, getRef1] = useGetRef(null)
	const [ref2, getRef2] = useGetRef(null)
	const [ref3, getRef3] = useGetRef(null)
	const componentAnimationIntervals = [
		{
			ref: ref1,
			anime: [1000, 1000, 100, 0],
			animation : {
				x : [0,0, 0, 0],
				y: [-3000,-3000, -500, 0],
				scale : [3, 3, 2.5, 1],
				opacity :[0, 0, 1, 1],
				color : ["#000000","#000000","#444444","#000000"]
			}
		},
		{
			ref: ref2,
			anime: [1000, 1000, 100, 0],
			animation : {
				x : [-5000, -2000, 100, 0],
				y: [-3000, -1000, -200, 0],
				scale : [3,3, 1.8, 1],
				opacity :[0, 0, 1, 1],
				color : ["#000000","#000000","#444444","#000000"]
			}
		},
		{
			ref: ref3,
			anime: [1000, 1000, 100, 0],
			animation : {
				x : [5000, 2000, -100, 0],
				y: [-3000, -1000, -200, 0],
				scale : [3, 3, 1.8, 1],
				opacity :[0, 0, 1, 1],
				color : ["#000000","#000000","#444444","#000000"]
			}
		},
	]


	useEffect(() => {

		console.log("- mainboard useEffect")

		if (!scrollValues.ready)
			setChildsVariables(componentAnimationIntervals)
		// if ((onDisplay.displayState && onDisplay.type === 1) || (onDisplay.displayState && onDisplay.type === 2))
		// 	setTrigger(true)
		if ((onDisplay.type === 1 || onDisplay.type === 2)) {
			const projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0]
			setData({
				...data,
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

	}, [onDisplay, scrollValues.ready])

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

	return (
		<>
			{(onDisplay.type === 1 || (onDisplay.type === 2 && onDisplay.displayState)) && <motion.div
				className="relative text-black flex flex-col justify-start items-center  z-0  w-full "
				initial="appear"
				animate="onBoard"
				exit="disappear"
				variants={boardVariants}
			>
				<motion.div ref={mergeRefs(refContainer)} className="flex flex-col justify-start items-center w-10/12  "
					style={{
						opacity: 1//boardImageOpacity
					}}
				>
					<Title
						containerWidth={" w-9/12 "}
						width={" md:w-2/5 w-4/5 max-w-5xl"}
						title={getTitle()}
						description={getDescription()}
						getRef={getRef1}
						interval={scrollValues.interval[0]}
						values={scrollValues.values[0]}
						animationValues={scrollValues.animationValues[0]}
					/>
					<ProjectCover
						containerWidth={" w-11/12 "}
						width="w-4/5 max-w-5xl"
						imageSrc={getFrames()}
						getRef={getRef2}
						interval={scrollValues.interval[1]}
						values={scrollValues.values[1]}
						animationValues={scrollValues.animationValues[1]}
					/>
					<ProjectDescription
						containerWidth={" w-9/12 "} // tailwind width style
						width="md:w-2/5 w-3/5 max-w-5xl"
						title={"title"}
						text={"text text text"}
						getRef={getRef3}
						interval={scrollValues.interval[2]}
						values={scrollValues.values[2]}
						animationValues={scrollValues.animationValues[2]}
					/>
				</motion.div>

			</motion.div>
			}
		</>
	);
}

export default MainBoard;
