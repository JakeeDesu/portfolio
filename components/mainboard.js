import Title from './title'
import AboutProject from './aboutProject'
import ToolsAndTech from './ToolsAndTech'
import TechDisplayer from './techDisplayer'
import { useGetScrollInterval, useGetRef } from './utilities/useGetScrollInterval'
// import { motion } from 'framer-motion'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { useState, useEffect } from 'react'
import ProjectCover from './projectCover'
import VidDisplayer from './vidDisplayer'
// project local data

import LocalData from './utilities/getLocalProjectData';


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
			objectives : [],
			skills : [],
			technologies : [],
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
	const [ref7, getRef7] = useGetRef(null)
	const componentAnimationIntervals = [
		{
			ref: ref1,
			anime: [1000, 1000, 100, 0, 0],
			animation: {
				y: [10, -150, -100, -30, 5],
				scale: [0.5, 0.7, 0.9, 1, 1],
				opacity: [0, 0, 0.2, 0.5, 1],
				color: ["#bbbbbb", "#bbbbbb", "#bbbbbb", "#bbbbbb", "#bbbbbb"]
			}
		},
		{
			ref: ref2,
			anime: [1000, 1000, 100, 0, 0, 0, 0],
			animation: {
				y: [110, -10, -35, -50, -45, -5, 5],
				scale: [1.05, 1.08, 1.1, 1.05, 1, 1, 1],
			}
		},
		{
			ref: ref3,
			anime: [1000, 1000, 100, 0, 0, 0, 0],
			animation: {
				x: [0, 0, 0, 0, 0, 0, -1],
				y: [-30, -25, -10, -5, -1, 0, 5],
				scale: [0.5, 0.7, 0.9, 1.01, 1.01, 1.01, 1],
				opacity: [0, 0, 0, 0, 0, 1, 1],
				color: ["#000000", "#000000", "#000000", "#444444", "#444444", "#000000"],
			}
		},
		{
			ref: ref4,
			anime: [1000, 1000, 100, 0, 0],
			animation: {
				y: [110, -10, -35, -45, 5],
				scale: [0.5, 0.7, 0.9, 1, 1],
				opacity: [1,1, 1,1,1],
				color: ["#bbbbbb", "#bbbbbb", "#bbbbbb", "#bbbbbb", "#bbbbbb"]
			}
		},
		{
			ref: ref5,
			anime: [1000, 1000, 100, 0, 0],
			animation: {
				x: [0, 0, 0, 0, 0],
				y: [-30, -25, -20, 0, 5],
				scale: [0.5, 0.7, 0.9, 1, 1],
				opacity: [0.8, 0.9, 1, 1, 1],
				color: ["#000000", "#000000", "#444444", "#444444", "#171717"]
			}
		},
		{
			ref: ref6,
			anime: [1000, 1000, 100, 0, 0],
			animation: {
				x: [0, 0, 0, 0, 0],
				y: [-30, -25, -20, 0, 5],
				scale: [0.5, 0.7, 0.9, 1, 1],
				opacity: [0.8, 0.9, 1, 1, 1],
				color: ["#000000", "#000000", "#444444", "#444444", "#171717"]
			}
		},
		{
			ref: ref7,
			anime: [1000, 1000, 100, 0, 0],
			animation: {
				x: [0, 0, 0, 0, 0],
				y: [0, 0, 0, 0, 0],
				scale: [1, 1, 1, 1, 1],
				opacity: [0, 1, 1, 1, 1],
				color: ["#000000", "#000000", "#444444", "#444444", "#000000"]
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
			const projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0] // fetched data
			let staticLocalData = new LocalData(projectData.name) // static data
			console.log( " ------ hello skills list :", staticLocalData.getSkills())
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
					objectives : staticLocalData ? staticLocalData.getObjectives() : [],
					skills : staticLocalData ? staticLocalData.getSkills() : [],
					technologies : staticLocalData ? staticLocalData.getTechnologies() : [],
					youtube_vid_id : staticLocalData ? staticLocalData.get_youtube_vid_id() : "z8So1L7poro",
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
				<motion.div className="flex flex-col justify-start items-center w-full"
					style={{
						opacity: 1//boardImageOpacity
					}}
				>
					<Title
						containerWidth={" w-9/12 py-10"}
						width={" md:w-2/5 w-4/5 max-w-5xl"}
						title={"C.Graphics"}
						getRef={getRef1}
						interval={scrollValues.interval[0]}
						animationValues={scrollValues.animationValues[0]}
					/>
					<ProjectCover
						image={getFrames()}
						containerStyle={"w-full md:w-11/12 py-10 "}
						title="about project"
						// imageSrc={getFrames()}
						getRef={getRef2}
						interval={scrollValues.interval[1]}
						animationValues={scrollValues.animationValues[1]}

					/>
						<TechDisplayer
							containerWidth={" w-full py-10 bg-red-0"} // tailwind width style
							width="w-full max-w-5xl"
							skillsList={data.project.skills}
							titleStyle="text-xl"
							text={""}
							getRef={getRef4}
							interval={scrollValues.interval[3]}
							animationValues={scrollValues.animationValues[3]}
						/>
					<AboutProject
						containerWidth={" w-11/12 py-10 bg-red-70"}
						width="w-full md:w-3/5 max-w-5xl "
						titlesWidth="w-full max-w-5xl "
						title={getTitle()}
						text={getDescription()}
						subTitles={data.project.objectives}
						// imageSrc={getFrames()}
						getRef={getRef3}
						interval={scrollValues.interval[2]}
						animationValues={scrollValues.animationValues[2]}
					/>
					<ToolsAndTech
						containerWidth={" w-9/12 py-10 "} // tailwind width style
						width="md:w-3/12 lg:w-2/12 w-3/5 max-w-xl "
						titleStyle="md:text-lg lg:text-xl"
						title={"tools / Tech"}
						toolsList={data.project.technologies}
						getRef={getRef5}
						interval={scrollValues.interval[4]}
						animationValues={scrollValues.animationValues[4]}
					/>
					<VidDisplayer
						containerWidth={" w-full py-10"} // tailwind width style
						width="w-full max-w-5xl"
						title={"Tools & Tech"}
						titleStyle=" md:text-tiny lg:text-xl"
						youtube_vid_id={data.project.youtube_vid_id}
						text={""}
						getRef={getRef6}
						interval={scrollValues.interval[5]}
						animationValues={scrollValues.animationValues[5]}
					/>
				</motion.div>
				<div ref={getRef7} className=" w-full h-0 bg-black">

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