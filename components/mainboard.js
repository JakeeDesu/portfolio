import Title from './title'
import AboutProject from './aboutProject'
import ProjectDescription from './projectDescription'
import TechDisplayer from './techDisplayer'
import { useGetScrollInterval, useGetRef } from './utilities/useGetScrollInterval'
// import { motion } from 'framer-motion'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { useState, useEffect } from 'react'
import ProjectCover from './projectCover'


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
	const [ref4, getRef4] = useGetRef(null)
	const [ref5, getRef5] = useGetRef(null)
	const [ref6, getRef6] = useGetRef(null)
	const componentAnimationIntervals = [
		{
			ref: ref1,
			anime: [1000, 1000, 100, 0,0],
			animation : {
				y: [10,-150, -100,-30, 5],
				scale : [0.5,0.7, 0.9, 1, 1],
				opacity :[0, 0, 0.2, 0.5,1],
				color : ["#bbbbbb","#bbbbbb","#bbbbbb","#bbbbbb","#bbbbbb"]
			}
		},
		{
			ref: ref2,
			anime: [1000, 1000, 100, 0,0,0,0],
			animation : {
				y: [110, -10, -35,-50, -45,-5, 0],
				scale : [1.05,1.08, 1.1, 1.05,1, 1,1],
			}
		},
		{
			ref: ref3,
			anime: [1000, 1000, 100, 0,0,0,0],
			animation : {
				x : [0, 0, 0,0, 0,0,-1],
				y: [-30, -25, -10,-5, -1,0,5],
				scale : [0.5,0.7, 0.9, 1.01,1.01, 1.01,1],
				opacity :[0, 0, 0, 0,0,1,1],
				color : ["#000000","#000000","#000000","#444444","#444444","#000000"],
			}
		},
		{
			ref: ref4,
			anime: [1000, 1000, 100, 0,0],
			animation : {
				x : [0, 0, 0,0, 0],
				y: [-30, -25, -20,0, 5],
				scale : [0.5,0.7, 0.9, 1, 1],
				opacity :[0.8, 0.9, 1, 1,1],
				color : ["#000000","#000000","#444444","#444444","#171717"]
			}
		},
		{
			ref: ref5,
			anime: [1000, 1000, 100, 0,0],
			animation : {
				x : [0, 0, 0,0, 0],
				y: [-30, -25, -20,0, 5],
				scale : [0.5,0.7, 0.9, 1, 1],
				opacity :[0.8, 0.9, 1, 1,1],
				color : ["#000000","#000000","#444444","#444444","#171717"]
			}
		},
		{
			ref: ref6,
			anime: [1000, 1000, 100, 0,0],
			animation : {
				x : [0, 0, 0,0, 0],
				y: [0, 0, 0,0, 0],
				scale : [1, 1, 1,1, 1],
				opacity :[0, 1, 1, 1,1],
				color : ["#000000","#000000","#444444","#444444","#000000"]
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
				className="relative text-black flex flex-col justify-start items-center w-full z-50 "
				initial="appear"
				animate="onBoard"
				exit="disappear"
				variants={boardVariants}
				ref={refContainer}
			>
				{/* ref={mergeRefs(refContainer)} */}
				<motion.div  className="flex flex-col justify-start items-center w-full"
					style={{
						opacity: 1//boardImageOpacity
					}}
				>
					<Title
						containerWidth={" w-9/12"}
						width={" md:w-2/5 w-4/5 max-w-5xl"}
						title={"C.Graphics"}
						getRef={getRef1}
						interval={scrollValues.interval[0]}
						animationValues={scrollValues.animationValues[0]}
					/>
					<ProjectCover
					image={getFrames()}
					containerStyle={"w-full md:w-11/12"}
					title="about project"
					// imageSrc={getFrames()}
					getRef={getRef2}
					interval={scrollValues.interval[1]}
					animationValues={scrollValues.animationValues[1]}
					
					/>
					<AboutProject
						containerWidth={" w-11/12 bg-red-70"}
						width="w-full md:w-3/5 max-w-5xl "
						titlesWidth="w-full max-w-5xl "
						title={getTitle()}
						text={getDescription()}
						subTitles={["Optimisations", "Parallel Computing", "C programing"]}
						// imageSrc={getFrames()}
						getRef={getRef3}
						interval={scrollValues.interval[2]}
						animationValues={scrollValues.animationValues[2]}
					/>
							<ProjectDescription
								containerWidth={" w-9/12 "} // tailwind width style
								width="md:w-2/5 w-3/5 max-w-5xl"
								titleStyle="text-6xl"
								title={"Skills"}
								text={""}
								getRef={getRef4}
								interval={scrollValues.interval[3]}
								animationValues={scrollValues.animationValues[3]}
							/>
						<TechDisplayer
							containerWidth={" w-full"} // tailwind width style
							width="w-full max-w-5xl"
							title={"Tools & Tech"}
							titleStyle="text-xl"
							text={""}
							getRef={getRef5}
							interval={scrollValues.interval[4]}
							animationValues={scrollValues.animationValues[4]}
						/>
				</motion.div>
					<div ref={getRef6} className=" w-full h-50 bg-black">

					</div>

			</motion.div>
			}
		</>
	);
}

export default MainBoard;

// const [scrollValuesA, refContainerA, setChildsVariablesA] = useGetScrollInterval()
// const [ref1A, getRef1A] = useGetRef(null)
// const [ref2A, getRef1A] = useGetRef(null)
// const componentAnimationIntervals = [
// 		{
// 			ref: ref1A,
// 			anime: [1000, 1000, 100, 0,0],
// 			animation : {
// 				x : [0, 0, 0,0, 0],
// 				y: [-100, -200, -100, 0, 0],
// 				scale : [1, 1, 1,1, 1],
// 				opacity :[0, 1, 1, 1,1],
// 				color : ["#000000","#000000","#444444","#444444","#000000"]
// 			}
// 		},
// 		{
// 			ref: ref2A,
// 			anime: [1000, 1000, 100, 0,0],
// 			animation : {
// 				x : [0, 0, 0,0, 0],
// 				y: [0, 0, 0,0, 0],
// 				scale : [1, 1, 1,1, 1],
// 				opacity :[0, 1, 1, 1,1],
// 				color : ["#000000","#000000","#444444","#444444","#000000"]
// 			}
// 		},
// ]