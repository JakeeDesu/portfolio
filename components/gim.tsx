import SogumaTitle from './sogumaTitle'
import { motion } from 'framer-motion'
import { theme } from './theme'
import { gimsProps, fromProps } from './gimProps' // gims props




const getGimPropsById = (gimId: number) => {
	return gimsProps.filter((gimProps) => gimProps.id == gimId).pop() || gimsProps[0];
}

function Gim({ data, gimId, direction, steps, moveGims, setOnDisplay, onDisplay, darkTheme }) {

	const currentGim = getGimPropsById(gimId);
	const prevGim = (direction < 0 && !onDisplay.displayState) ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);
	const animationKey = onDisplay.displayState ? steps + 1 : steps;


	const variants = {
		enter: (onDisplay: any) => {
			return {
				y: 0,
				top: onDisplay.displayState ? `${currentGim.properties.posi.y}%` : (onDisplay.displayOff ? `${fromProps.properties.posi.y}%` : `${prevGim.properties.posi.y}%`),
				left: onDisplay.displayState ? `${currentGim.properties.posi.x}%` : (onDisplay.displayOff ? `${fromProps.properties.posi.x}%` : `${prevGim.properties.posi.x}%`),
				scale: onDisplay.displayState ? currentGim.properties.scale : (onDisplay.displayOff ? fromProps.properties.scale : prevGim.properties.scale),
				zIndex: prevGim.properties.zIndex,
			};

		},
		standing: (onDisplay: any) => {
			return {
				y: onDisplay.displayState ? 0 : [-10, 10],
				top: onDisplay.displayState ? `${fromProps.properties.posi.y}%` : `${currentGim.properties.posi.y}%`,
				left: onDisplay.displayState ? `${fromProps.properties.posi.x}%` : `${currentGim.properties.posi.x}%`,
				scale: onDisplay.displayState ? fromProps.properties.scale : currentGim.properties.scale,
				zIndex: onDisplay.displayState ? fromProps.properties.zIndex : (gimId == 2 || onDisplay.displayOff ? 0 : currentGim.properties.zIndex),
				transition: {
					y: {
						yoyo: Infinity,
						duration: 1,
					},
					type: "spring",
					duration: 1.3
				}
			};
		},
		display: {
			scale: currentGim.properties.scale,
			boxShadow: 'none',
			y: 0,
			top: '',
			left: '50%',
			bottom: '0%',
			transition: {
				type: "spring",
				duration: 0.8
			}
		},
		hover: (onDisplay: any) => {
			if (!(onDisplay.displayState || onDisplay.displayOff))
				return {
					opacity: 1,
					scale: currentGim.properties.scale * 1.2,
					transition: {
						duration: 0.3
					}
				};
		},
	}

	const currentData = getGimCurrenData(data, gimId, steps, direction);

	const clickGim = () => {
		if (gimId == 0)
			setOnDisplay(!onDisplay.displayState, fixGimsDataIndex(data, steps + 1), 0)
		else if (!(onDisplay.displayState))
			moveGims(currentGim.leftRight)
		return false;
	}

	return (
		<motion.div
			className={`absolute  md:flex justify-center items-center hidden ${darkTheme && theme.dark.gims.style(false) || theme.light.gims.style}`}
			key={animationKey}
			variants={variants}
			initial="enter"
			animate="standing"
			custom={onDisplay}
			drag
			dragConstraints={{
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
			whileHover="hover"
			onMouseDown={() => clickGim()}
		>

			<SogumaTitle
				darkTheme={darkTheme}
				text={currentData ? currentData.current : ""}
			/>

		</motion.div>
	);
}







function fixGimsDataIndex(data, steps) {
	let fixedIndex = steps < 0 ? ((data.length) + (steps % data.length)) % data.length : steps % data.length;
	return (fixedIndex);
}

function getGimCurrenData(data, gimId, moveSteps, moveDirection) {
	switch (gimId) {
		case 0: // main gim
			return {
				current: data[fixGimsDataIndex(data, moveSteps + 1)],
				next: data[fixGimsDataIndex(data, moveSteps + 2)],
				prev: data[fixGimsDataIndex(data, moveSteps)],
			};
		case 1: // next gim
			return {
				current: data[fixGimsDataIndex(data, moveSteps + 2)],
				next: data[fixGimsDataIndex(data, moveSteps + 3)],
				prev: data[fixGimsDataIndex(data, moveSteps + 1)],
			};
		case 2: // prev gim
			return {
				current: data[fixGimsDataIndex(data, moveSteps)],
				next: data[fixGimsDataIndex(data, moveSteps - 1)],
				prev: data[fixGimsDataIndex(data, moveSteps + 1)],
			};
		case 3: // onHold gim
			return {
				current: data[fixGimsDataIndex(data, moveSteps + 3)],
				next: data[fixGimsDataIndex(data, moveSteps + 4)],
				prev: data[fixGimsDataIndex(data, moveSteps + 2)],
			};
		case 4: // hidden gim
			let updatedIndex = (moveDirection < 0) ? moveSteps : moveSteps + 3;
			return {
				current: data[fixGimsDataIndex(data, moveSteps + 4)],
				next: data[fixGimsDataIndex(data, moveSteps + 5)],
				prev: data[fixGimsDataIndex(data, updatedIndex)],
			};
	}
	return (0);
}

export default Gim