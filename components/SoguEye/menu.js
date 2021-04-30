import { motion } from 'framer-motion'


const Menu = ({ onDisplay, setOnDisplay }) => {
	
	const selectTitle = (type) => {
		switch (type) {
			case 2:
				setOnDisplay(true, onDisplay.displayOff, 1)
				break;
				case 3:
				setTimeout(() => { setOnDisplay(false, onDisplay.displayOff, 2); }, 500);
				setOnDisplay(true, onDisplay.displayOff, -1);
				break;
			case 4:
				setOnDisplay(true, -1, -1)
				break;
			}
	}

	return (
		<div className="flex absolute md:-top-10 -top-0  flex-col justify-center items-center h-90 w-full pointer-events-auto" >
			<motion.div
				className="relative flex flex-col justify-center items-center w-full h-full "
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<motion.div
					className="absolute md:text-2xl lg:text-3xl border-gray-900 border-2  shadow-soft2glow text-center text-white font-black  flex flex-col justify-center items-center lg:h-100 md:h-80 lg:w-52 md:w-44 bg-gradient-to-b  bg-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 lg:my-5 md:py-5 "
					variants={variants}
					initial="initial"
					animate={onDisplay.type === 0 ? "animate" : "hide"}
				>
					<motion.h1 className=" text-center lg:m-5 md:m-2 t cursor-pointer"
						variants={contentVariants}
						initial="initial"
						animate="animation"
						whileHover="onHover"
						onMouseDown={() => selectTitle(2)}

						>ABOUT ME</motion.h1>
					<motion.h1 className=" lg:m-5 md:m-2  cursor-pointer"
						variants={contentVariants}
						initial="initial"
						animate="animation"
						whileHover="onHover"
						onMouseDown={() => selectTitle(3)}
						>MY PROJECTS</motion.h1>
					<motion.h1 className=" lg:m-5 md:m-2  line-through cursor-pointer"
						variants={contentVariants}
						initial="initial"
						animate="animation"
						whileHover="onHover"
						onMouseDown={() => selectTitle(4)}
						>ART</motion.h1>
				</motion.div>
			</motion.div>

		</div>
	);
}

const variants = {
	initial: {
		opacity: 1,
		y: 0,
		scaleY: 0,
		scaleX: 1,
		originY: 0,
		originX: "50%",
	},
	animate: {
		opacity: 1,
		y: 0,
		scaleY: [0.9, 1.03],
		scaleX: [1, 1.03],
		originY: 0,
		originX: "50%",
		transition: {
			scaleX: { duration: 1, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.4, },
			scaleY: { duration: 1, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.4, },
			duration: 0.3,
			delay: 0.2
		}
	},
	hide: {
		opacity: 0,
		y: 0,
		scaleY: 0,
		scaleX: 1,
		originY: 0,
		originX: "50%",
		transition: {
			duration: 0.3,
		}
	}
}

const contentVariants = {
	initial: {
		opacity: 0,
	},
	animation: {
		opacity: 0.5,
		scale: 1,
		transition: {
			scale: { duration: 0.3 },
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

export default Menu;