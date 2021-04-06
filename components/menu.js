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

const Menu = ({ onDisplay, setOnDisplay }) => {


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
		<div
			className="absolute flex flex-col justify-center items-center h-full w-full"
		>
			<motion.div
				className="absolute  border-white border-2 border-opacity-20 shadow-soft2glow text-center text-white font-black  flex flex-col justify-center items-center h-100 w-48 bg-gradient-to-b  bg-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 pt-11"
				initial={{
					opacity: 1,
					y: 0,
					scaleY: 0,
					scaleX: 1,
					originY: 0,
					originX: "50%",
				}}
				animate={onDisplay.type === 0 ? {
					opacity: 1,
					y: 0,
					scaleY: [0.9, 1.09],
					scaleX: [1, 1.04],
					originY: 0,
					originX: "50%",
					transition: {
						scaleX: { duration: 1, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.4, },
						scaleY: { duration: 1, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.4, },
						duration: 0.3,
						delay: 0.2
					}
				} : {
						opacity: 0,
						y: 0,
						scaleY: 0,
						scaleX: 1,
						originY: 0,
						originX: "50%",
						transition: {
							duration: 0.3,
						}
					}}
			>
				<motion.h1 className=" text-center m-5 text-2xl cursor-pointer"
					variants={variants}
					initial="initial"
					animate="animation"
					whileHover="onHover"
					onMouseDown={() => selectTitle(2)}

				>ABOUT ME</motion.h1>
				<motion.h1 className=" m-5 text-2xl cursor-pointer"
					variants={variants}
					initial="initial"
					animate="animation"
					whileHover="onHover"
					onMouseDown={() => selectTitle(3)}
				>MY PROJECTS</motion.h1>
				<motion.h1 className=" m-5 text-2xl line-through cursor-pointer"
					variants={variants}
					initial="initial"
					animate="animation"
					whileHover="onHover"
					onMouseDown={() => selectTitle(4)}
				>ART</motion.h1>
			</motion.div>
			<motion.div
				className="absolute w-64 top-36 opacity-70 overflow-hidden"
				initial={{
					y: -100,
				}}
				animate={onDisplay.type === 0 ? {
					scale: 1,
					y: [0, 10, 4, -1],
					transition: {
						y: { duration: 3, yoyo: Infinity },
						duration: 0.3,
					}
				} : {
						scale: 0.9,
						y: -100,
						transition: {
							duration: 0.3,
							delay: 0.3,
						}
					}}
			>
				<img src="/teeth.png" />
			</motion.div>

		</div>
	);
}

export default Menu;