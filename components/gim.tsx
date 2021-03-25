import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useTransform, useViewportScroll } from 'framer-motion'
import { wrap } from 'popmotion'



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
			zIndex: 10,
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



export default function Gim({data, gimId, direction, steps, nextPosition }) {

	const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
	const btnRef = useRef(null);
	const [animationDelay, setDelay] = useState(Math.random());

	useEffect(() => {
			btnRef.current.setAttribute("disabled", "disabled");
		// const timer = setTimeout(() => btnRef.current.setAttribute("disabled", "disabled") , 1300);
		// return () => clearTimeout(timer);
	}, [])
	// btnRef.current.setAttribute("disabled", "disabled");

	console.log("render gim : [" + gimId + "] random number : " + animationDelay);
	const currentIndex = wrap(0, gimsProps.length, steps)
	const currentGim = getGimPropsById(gimId);
	const prevGim = (direction < 0) ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);
	const nextGim = (direction < 0) ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);
	const gimvariants = {
		enter: (direction: number) => {
			return {
				y: 0,
				top: `${prevGim.properties.posi.y}%`,
				left: `${prevGim.properties.posi.x}%`,
				// heigth : `${currentGim.properties.size}px`,
				// width : `${currentGim.properties.size}px`,
				scale: prevGim.properties.scale,
				zIndex: prevGim.properties.zIndex,
				// backgroudColor : direction ? "red" : "blue",
			};

		},
		standing: {
			y: [-10 , 10],
			top: `${currentGim.properties.posi.y}%`,
			left: `${currentGim.properties.posi.x}%`,
			// h : `${currentGim.properties.size}px`,
			// w : `${currentGim.properties.size}px`,
			scale: currentGim.properties.scale,
			zIndex:  direction > 0 && gimId == 2? 10 : currentGim.properties.zIndex,
			// backgroudColor : direction ? "red" : "blue",
			transition: {
				y: {
					yoyo : Infinity,
					duration: 1,
					// delay : animationDelay * 2
				},
				type : "spring",
				duration : 1.3
			}
		},
		exit: (direction: number) => {
			return {
				y : 0,
				top: `${nextGim.properties.posi.y}%`,
				left: `${nextGim.properties.posi.x}%`,
				// heigth : `${currentGim.properties.size}px`,
				// width : `${currentGim.properties.size}px`,
				scale: nextGim.properties.scale,
				zIndex:  nextGim.properties.zIndex,
			};
		}
	}
	const currentData = getGimCurrenData(data, gimId, steps, direction);
	return (
		// <AnimatePresence initial={false} custom={direction * -1}>
			<motion.div
				ref={btnRef}
				className={`absolute flex justify-center items-center ${"h-36" || "h-4"} ${"w-36" || "w-4"} rounded-full bg-red-400`}
				key={steps}
				variants={gimvariants}
				initial="enter"
				animate="standing"
				custom={direction}
				transition={{
					// type: "spring",
					// duration : 4,
				}}
				whileHover={{
					// scale: currentGim.properties.scale * 1.2,
					boxShadow: '0 0px 20px 8px rgba(255, 255, 255, 0.5)',
					transition :{
						duration : 0.3,
						// y: {
						// 	yoyo : Infinity,
						// 	duration: 1,
						// 	delay : animationDelay * 2
						// },
						// x: {
						// 	yoyo : Infinity,
						// 	duration: 1,
						// },
					},
				}}
				onMouseDown={() => nextPosition(currentGim.leftRight)}
			><h1>
				{currentData ? currentData.current : ""}
			</h1>
			</motion.div>
		// </AnimatePresence>
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
