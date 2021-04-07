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
					scale: { delay: 0.3, duration: 1 },
					y: { delay: 0.3, duration: 1 }
				}
			}
		else
			return {
				y: 0,
				// x: 0,
				scale: 1,
				transition: {
					// duration: 0.5,
					scale: { delay: 0.3, duration: 1 },
					y: { delay: 0.3, duration: 1 }
				}
			};
	},
}


const data = ["art", "about me", "p1"]

export default function SogumaVxPhone({ repos ,fetchedData , setOnDisplay, onDisplay, darkTheme }) {

	const [[direction, steps], setRotate] = useState([0, 0]);
	const [clickOff, setClickOff] = useState(true);
	const [projects, setProjects] = useState([]);


	const moveGims = (newDirection: number) => {
		setRotate([newDirection, steps + newDirection]);
	}
	// console.log(dataLoading ? "fetched DATA : ": fetchedData )
	useEffect(() => {
		const initProjects = []
		repos.map((project) => {
			initProjects.push(project.name);
		})
		// console.log(" projects d ZAAAAAAAAAAAAAAAAAAB: ", initProjects)
		setProjects(initProjects)
	}, [repos])
	const onSogumaClick = () => {
			switch (onDisplay.type) {
				case  -1 : // none state
						setOnDisplay(false, onDisplay.itemId, 1)
					break;
				case  0 : // menu state
					setOnDisplay(false, onDisplay.itemId, -1)
					break;
				case  1 : // about state
					setOnDisplay(true, onDisplay.itemId, -1)
					break;
				case  2 : //  case 1) gims on display | case 2) a project on display 
					if (!onDisplay.displayOff)
						onDisplay.displayState ? setOnDisplay(false, onDisplay.itemId, 2) : setOnDisplay(true, onDisplay.itemId, 2);
					// else
						// setOnDisplay(false, onDisplay.itemId, 2)
					break;
				case  3 : 
					break;
			}
	}
	const onDisplayKey = onDisplay.displayState ? 1 : 0;
	return (
		<motion.div
			className="md:hidden relative flex flex-col justify-start items-center h-auto w-full"
			key={onDisplayKey}
			initial="initial"
			animate="standing"
			custom={onDisplay}
			variants={variants}
		>
			{ onDisplay.type !=2 && <MenuPhone onDisplay={onDisplay}  setOnDisplay={setOnDisplay}/>}
			<SogumaPhone
				onDisplay={onDisplay}
				darkTheme={darkTheme}
				onSogumaClick={onSogumaClick}
			/>
		</motion.div>
	);
}
  