import { motion } from 'framer-motion'

const variants = {
	initial: {
		opacity: 0,
	},
	animation: {
		opacity: 0.5,
		transition: {
			duration: 1
		}
	},
	onHover: {
		opacity: 1,
		scale: 1.1,
		transition: {
			duration: 0.3,
			type: 'spring',
			bounce: 0.3
		}
	}
}

const MenuPhone = ({ onDisplay, setOnDisplay }) => {

	const selectTitle = (type) => {
		switch (type) {
			case 1:
				setOnDisplay(true, onDisplay.displayOff, 1, false)
				break;
			case 2:
				setOnDisplay(true, onDisplay.displayOff, 2, false);
				break;
			default :
				setOnDisplay(true, onDisplay.displayOff, -1, false)

		}
	}

	const MenuButton = ({ title, clickEvent }) => {
		return (
			<div className="flex justify-center items-center text-white text-center align-middle object-center cursor-pointer w-full h-1/4 bg-black  pointer-events-auto"
				onMouseDown={clickEvent} >
				<h1>{title}</h1>
			</div >
		)
	}

	return (
		<motion.div className="relative text-white text-xl flex flex-col justify-evenly items-center rounded-lg bg-gray-500 bg-opacity-50 h-half w-full px-4 ">
			<MenuButton title="ABOUT ME" clickEvent={() => selectTitle(1)} />
			<MenuButton title="MY PROJECTS" clickEvent={() => selectTitle(2)} />
			<MenuButton title="ART" clickEvent={() => selectTitle(0)} />
		</motion.div>
	);
}

export default MenuPhone;