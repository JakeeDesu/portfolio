import { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue, AnimatePresence } from 'framer-motion'
import Gim from './gim'
import Soguma from './soguma'
import Menu from './menu'
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
				y: -100,//-410,
				scale: 0.7,//0.1,
			};
	},
	standing: (onDisplay: any) => {
		if (onDisplay.displayState)
			return {
				scale: [1, 0.7],
				y: [0, -100],
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

export default function SogumaVx({ repos ,fetchedData , setOnDisplay, onDisplay, darkTheme }) {

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
					if ( onDisplay.itemId !== -1)
						setOnDisplay(false, onDisplay.itemId, 2, true)
					else
						setOnDisplay(true, onDisplay.itemId, 0, true)
					break;
				case  0 : // menu state
					setOnDisplay(true, onDisplay.itemId, -1, true)
					break;
				case  1 : // about state
					setOnDisplay(true, onDisplay.itemId, 0, true)
					break;
				case  2 : //  case 1) gims on display | case 2) a project on display 
					if (!onDisplay.displayOff)
						onDisplay.displayState ? setOnDisplay(false, onDisplay.itemId, 2, true) : setOnDisplay(true, onDisplay.itemId, 2, true);
					// else
						// setOnDisplay(false, onDisplay.itemId, 2)
					break;
				case  3 : 
					break;
			}
	}
	const backToMenu = () => {
		setOnDisplay(true, onDisplay.itemId, 0)
	}

	const onDisplayKey = onDisplay.displayState ? 1 : 0;
	return (
		<motion.div
			className="relative hidden md:flex flex-col justify-start items-center h-full w-full"
			key={onDisplayKey}
			initial="initial"
			animate="standing"
			custom={onDisplay}
			variants={variants}
		>
			{onDisplay.type === 2 && gimsProps.map((gim) => (
				<Gim
					key={gim.id}
					gimId={gim.id}
					data={projects}
					direction={direction}
					steps={steps}
					moveGims={moveGims}
					setOnDisplay={setOnDisplay}
					onDisplay={onDisplay}
					darkTheme={darkTheme}
				/>
			))}
			{ onDisplay.type !=2 && <Menu onDisplay={onDisplay}  setOnDisplay={setOnDisplay}/>}

			<AnimatePresence>
				{onDisplay.type === 2 && onDisplay.displayState && <motion.div 
					className="absolute -top-40 h-24 w-24 rounded-full border-4 border-red-100  shadow-soft1glow cursor-pointer"
					initial={{
						opacity : 0,
						scale : 0.5,
						y: 10
					}}
					animate={{
						rotateZ : 8,
						x : 25,
						opacity : 0.8,
						scale : 0.8,
						y: 0,
						transition : {
							duration : 0.5
						}
					}}
					exit={{
						opacity : 0,
						scale : 0.5,
						y: 10,
						transition : {
							duration : 0.3
						}

					}}
					whileHover={{
						opacity : 1,
						scale : 1,
						y: -20

					}}
					onMouseDown={backToMenu}
				>
					<div className="relative flex justify-center items-center w-full h-full text-2xl text-white pointer-events-auto">
						<h1 className="">Menu</h1>
						<hr className="absolute top-full border-2 border-gray-100 h-52" ></hr>
					</div>
				</motion.div>}				
			</AnimatePresence>
			<Soguma
				onDisplay={onDisplay}
				darkTheme={darkTheme}
				onSogumaClick={onSogumaClick}
			/>
		</motion.div>
	);
}
  