import { motion } from 'framer-motion'

const variants = {
	initial : {
		opacity : 0,
	},
	animation : {
		opacity : 1,
		transition : {
			duration : 2
		}
	},
	onHover : {
		scale : 1.2,
		transition : {
			duration : 0.5,
			type : 'spring',
			bounce : 0.5
		}
	}
}

const Menu = ( { onDisplay, selectTitle } ) => {


	return (
		<div
			className="absolute flex flex-col justify-center items-center h-full w-full"
		>
			<motion.div
				className="absolute text-center text-white font-black  flex flex-col justify-end items-center h-100 w-48 bg-gradient-to-b  bg-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 pb-11"
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
					scaleY: [0.9, 1],
					scaleX: [1, 1.01],
					originY: 0,
					originX: "50%",
					transition: {
						scaleX: { duration: 0.8, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.4, },
						scaleY: { duration: 0.8, repeat: Infinity, repeatType: 'reverse', type: 'spring', bounce: 0.4, },
						duration: 0.4,
						delay: 0.3
					}
				} : {
						opacity: 0,
						y: 0,
						scaleY: 0,
						scaleX: 1,
						originY: 0,
						originX: "50%",
						transition: {
							duration: 0.4,
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
				className="absolute w-64 top-36 opacity-50 overflow-hidden"
				initial={{
					y: -10,
				}}
				animate={onDisplay.type === 0 ? {
					scale: 1,
					y: 0,
					transition: {
						duration: 0.4,
					}
				} : {
						scale: 0.9,
						y: -100,
						transition: {
							duration: 0.4,
							delay: 0.5,
						}
					}}
			>
				<img src="/teeth.png" />
			</motion.div>

		</div>
	);
}

export default Menu;