import { AnimatePresence, motion } from 'framer-motion'

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
			case 2:
				setOnDisplay(true, onDisplay.displayOff, 1)
				break;
			case 3:
				{
					setTimeout(() => {setOnDisplay(false, onDisplay.displayOff, 2);}, 500);
					setOnDisplay(true, onDisplay.displayOff, -1);

				}
				break;
			case 4:
				setOnDisplay(true, onDisplay.displayOff, -1)
				break;
		}
	}

	return (
		// <div
		// 	className="md:hidden absolute top-full flex-col justify-center items-center w-full "
		// >

				<motion.div
					className="relative text-white text-xl flex flex-col justify-evenly items-center rounded-lg bg-gray-500 bg-opacity-50 h-half w-full px-4"
				>
					<div className="flex justify-center items-center text-white text-center align-middle object-center cursor-pointer w-full h-1/4 bg-black" 
						onMouseDown={() => selectTitle(2)}
					>
						<h1>ABOUT ME</h1>
					</div >
					<div className="flex justify-center items-center text-white text-center align-middle object-center cursor-pointer w-full h-1/4 bg-black" 
						onMouseDown={() => selectTitle(3)}
					>
						<h1>MY PROJECTS</h1>
					</div >
					<div className="flex justify-center items-center text-white text-center line-through align-middle object-center cursor-pointer w-full h-1/4 bg-black" 
						onMouseDown={() => selectTitle(4)}
					>
						<h1>ART</h1>
					</div >
				</motion.div>
		// </div>
	);
}

export default MenuPhone;