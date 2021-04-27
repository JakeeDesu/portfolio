import { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue, AnimatePresence } from 'framer-motion'
// import GimsPhone from './gimPhone'
import SogumaPhone from './sogumaPhone'
import MenuPhone from './menuPhone'
import { wrap } from 'popmotion'
import SogumaEye from './sugumaEye'
import { theme } from './theme'
import { gimsProps } from './gimProps' // gims props


const variants = {
	initial: (onDisplay: any) => {
		if (onDisplay.displayState)
			return {
				y: 0,
				scale: 1,
			}
		else
			return {
				y: 0,//-410,
				scale: 0.7,//0.1,
			};
	},
	standing: (onDisplay: any) => {
		if (onDisplay.displayState)
			return {
				scale: [1, 0.7],
				y: [0, 0],
				transition: {
					scale: { duration: 0.5 },
					y: { duration: 0.5 }
				}
			}
		else
			return {
				y: 0,
				// x: 0,
				scale: 1,
				transition: {
					// duration: 0.5,
					scale: { duration: 0.5 },
					y: { duration: 0.5 }
				}
			};
	},
}


const data = ["art", "about me", "p1"]

export default function SogumaVxPhone({ repos, fetchedData, setOnDisplay, onDisplay, darkTheme }) {

	const [[direction, steps], setRotate] = useState([0, 0]);
	// const [clickOff, setClickOff] = useState(true);
	// const [type, setType] = useState([ 0, -1]);


	const moveGims = (newDirection: number) => {
		setRotate([newDirection, steps + newDirection]);
	}
	// console.log(dataLoading ? "fetched DATA : ": fetchedData )
	useEffect(() => {
		// if ( onDisplay.type > 0 )
		// 	setOnDisplay(true, onDisplay.itemId, -1)
		// const initProjects = []
		// repos.map((project) => {
		// 	initProjects.push(project.name);
		// })
		// // console.log(" projects d ZAAAAAAAAAAAAAAAAAAB: ", initProjects)
		// setProjects(initProjects)
	}, [])

	const onSogumaClick = () => {
		console.log("case : " + onDisplay.type )
		switch (onDisplay.type) {
			case -1: // none state

			console.log("set on Display to : false , and type to : 0")
					setOnDisplay(false, onDisplay.itemId, 0, false)
				// setOnDisplay(false, onDisplay.itemId, 0)
				break;
			case 0: // menu state
			console.log("set on Display to : true , and type to : -1")
				setOnDisplay(true, onDisplay.itemId, -1, false)
				break;
			case 1: // about state
			console.log("set on Display to : true , and type to : -1")
				setOnDisplay(false, onDisplay.itemId, 0, false)
				break;
			case 2: // projects state
			console.log("set on Display to : false , and type to : 0")
				setOnDisplay(false, onDisplay.itemId, 0, false)
				break;
		}
	}
	const onDisplayKey = onDisplay.displayState ? 1 : 0;
	return (
		<motion.div
			className="md:hidden relative flex flex-col justify-start items-center h-auto w-full "
			key={onDisplayKey}
			initial="initial"
			animate="standing"
			custom={onDisplay}
			variants={variants}
		>
			<AnimatePresence>
				{!onDisplay.displayState && <motion.div
					key={onDisplayKey}
					className="md:hidden absolute top-full flex-col justify-center items-center w-full bg-red-500"
					initial={{
						opacity: 0,
						originY: 0,
						scale: 0,
					}}
					animate={{
						scale: 1,
						originY: 0,
						opacity: 1,
						transition: {
							duration: 1,
							type: 'spring',
							bounce: 0.5
						}
					}}
					exit={{
						scale: 0,
						originY: 0,
						opacity: 0,
						transition: {
							duration: 1
						}
					}}
					>
					<MenuPhone onDisplay={onDisplay} setOnDisplay={setOnDisplay} />
				</motion.div>}
			</AnimatePresence>
					<SogumaPhone
						onDisplay={onDisplay}
						darkTheme={darkTheme}
						onSogumaClick={onSogumaClick}
						setOnDisplay={setOnDisplay}
					/>
		</motion.div>
	);
}
