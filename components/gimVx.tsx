import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import { wrap } from 'popmotion'
import { theme } from './theme'



const gimsProps = [
	{
		id: 0, // needed to fix " key for map, organize layer order "
		type: "main",
		leftRight: 0,
		next: 1,
		prev: 2,
		properties: {
			title: "main",
			size: 100,
			posi: { x: 34, y: 55 },
			scale: 1.8,
			zIndex: 100,
		}
	},
	{
		id: 1,
		type: "next",
		leftRight: 1,
		next: 3,
		prev: 0,
		properties: {
			title: "next",
			size: 60,
			posi: { x: 75, y: 40 },
			scale: 1,
			zIndex: 10,

		}
	},
	{
		id: 2,
		type: "previous",
		leftRight: -1,
		next: 0,
		prev: 4,
		properties: {
			title: "previous",
			size: 80,
			posi: { x: 15, y: 12 },
			scale: 0.9,
			zIndex: 0,
		}
	},
	{
		id: 3,
		type: "onHold",
		leftRight: 1,
		next: 4,
		prev: 1,
		properties: {
			title: "...",
			size: 50,
			posi: { x: 60, y: 8 },
			scale: 0.3,
			zIndex: 0,
		}
	}
	,
	{
		id: 4,
		type: "hidden",
		leftRight: -1,
		next: 2,
		prev: 3,
		properties: {
			title: "hidden",
			size: 40,
			posi: { x: 40, y: 9 },
			scale: 0.1,
			zIndex: 0,
		}
	}
]

const getGimPropsById = (gimId: number) => {
	return gimsProps.filter((gimProps) => gimProps.id == gimId).pop() || gimsProps[0];
}



export default function GimVx({data, gimId, direction, steps, nextPosition, setOnDisplay, onDisplay, darkTheme }) {

	const { scrollYProgress } = useViewportScroll();
 	const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const [animationDelay, setDelay] = useState(Math.random());


	console.log("render gim : [" + gimId + "] random number : " + animationDelay);

	const currentGim = getGimPropsById(gimId);
	const prevGim = (direction < 0) ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);
	const nextGim = (direction < 0) ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);


	const gimvariants = {
		enter: (direction: number) => {
			return {
				y: 0,
				top: `${prevGim.properties.posi.y}%`,
				left: `${prevGim.properties.posi.x}%`,
				scale: prevGim.properties.scale,
				zIndex: prevGim.properties.zIndex,
			};

		},
		standing: {
			y: [-10 , 10],
			top: `${currentGim.properties.posi.y}%`,
			left: `${currentGim.properties.posi.x}%`,
			scale: currentGim.properties.scale,
			zIndex: (direction > 0 && gimId == 2) ? 10 : currentGim.properties.zIndex,
			transition: {
				y: {
					yoyo : Infinity,
					duration: 1,
					// delay : animationDelay * 2
				},
				type : "spring",
				duration : 1.3,
				delay : 2
			}
		},
		display : {
			// position : 'fixed',
				opacity : 0.2,
				top: `${currentGim.properties.posi.y}%`,
				left: `${currentGim.properties.posi.x}%`,
				scale: [currentGim.properties.scale * 1.2, currentGim.properties.scale * 1.3, currentGim.properties.scale * 0.5],
				// y :  0,
				// top : '',
				// left : '0%',
				// bottom : '0%',
				boxShadow : 'none',
				transition : {
					scale :{ duration : 2},
					type: "spring",
					duration : 2
				}
		},
		exit: (direction: number) => {
			return {
				y : 0,
				top: `${nextGim.properties.posi.y}%`,
				left: `${nextGim.properties.posi.x}%`,
				scale: nextGim.properties.scale,
				zIndex:  nextGim.properties.zIndex,
			};
		}
	}

	const currentData = getGimCurrenData(data, gimId, steps, direction);
	const gimClick = () => {
		if (gimId === 0)
		setOnDisplay(!onDisplay.displayState, fixGimsDataIndex(data, steps + 1), 0)
	else if (!onDisplay.displayState)
		nextPosition(currentGim.leftRight)
	}
	return (
			<motion.div
				className={`absolute  flex justify-center items-center ${"h-36" || "h-4"} ${"w-36" || "w-4"} m-10 rounded-full ${ darkTheme ? theme.dark.gims.style : theme.light.gims.style}`}
				key={steps}
				variants={gimvariants}
				initial="enter"
				animate={onDisplay.displayState && gimId == 0 ? "display" : "standing"}
				custom={direction}
				drag
				dragConstraints={{
					top : 0,
					left: 0,
					right: 0,
					bottom: 0,
				}}
				whileHover={{
					// scale: currentGim.properties.scale * 1.2,
					// boxShadow: '0 0px 30px 2px rgb(255, 255, 255, 0.3)',
					transition :{
						duration : 0.3,
					},
				}}
				onTap={gimClick}
			>

				<div className="relative flex justify-center items-center w-full h-full" >
					{!darkTheme && <div className="absolute -top-1/4 -left-1/4 h-32 w-32 bg-white rounded-full"></div>}
					{!darkTheme && <div className="absolute top-1/4 -right-1/4 h-16 w-16 bg-white rounded-full"></div>}
					<h1 className={`absolute top-1/4 mt-4 ${ darkTheme ? theme.dark.gims.text : theme.light.gims.text}`}>{currentData ? currentData.current : ""}</h1>
				</div>
			</motion.div>
	);
}







function fixGimsDataIndex(data, steps) {
	let fixedIndex = steps < 0 ? ((data.length) + (steps % data.length)) % data.length  : steps % data.length;
	return (fixedIndex);
}

function getGimCurrenData(data, gimId, moveSteps, moveDirection) {
	switch (gimId) {
		case 0: // main gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 1)],
				next : data[fixGimsDataIndex(data, moveSteps + 2)],
				prev : data[fixGimsDataIndex(data, moveSteps )],
			};
		case 1: // next gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 2)],
				next : data[fixGimsDataIndex(data, moveSteps + 3)],
				prev : data[fixGimsDataIndex(data, moveSteps + 1)],
			};
		case 2: // prev gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps)],
				next : data[fixGimsDataIndex(data, moveSteps - 1)],
				prev : data[fixGimsDataIndex(data, moveSteps + 1)],
			};
		case 3: // onHold gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 3)],
				next : data[fixGimsDataIndex(data, moveSteps + 4)],
				prev : data[fixGimsDataIndex(data, moveSteps + 2)],
			};
		case 4: // hidden gim
			let updatedIndex = (moveDirection < 0) ? moveSteps : moveSteps + 3;
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 4)],
				next : data[fixGimsDataIndex(data, moveSteps + 5)],
				prev : data[fixGimsDataIndex(data, updatedIndex)],
			};
		}
	return (0);
}
