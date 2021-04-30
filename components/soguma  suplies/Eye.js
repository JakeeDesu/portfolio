import { motion } from 'framer-motion'
import { theme } from '../theme'

const irisVariants = {
	start : {
		y: 0,
		opacity : 0 ,
		transition : {
			duration : 1
		}
	},
	animate : {
		y : [-10, -10, -10, -6, -5, -5, -5, 8, 8],
		opacity : 1,
		transition : {
			y : { yoyo : Infinity, duration : 5},
			duration : 1
		},
	}
}

const pplVariants = {
	animate : {
		scale : [0.65, 0.5, 0.5, 0.5, 0.6, 0.6, 0.65, 0.65],
		y : [0, 0, 5, 5, 4, 0, -1, 0],
		x : [0, 0, 0, 2, 1, 0, 2, -1],
		transition : {
			scale: {
				yoyo : Infinity,
				duration : 3,
				delay : 2
			},
			x: {
				yoyo : Infinity,
				duration : 3,
			},
			y: {
				yoyo : Infinity,
				duration : 3,
			}
		},
		delay : 5
	},
	closed : {
		y : 0,
	}
}
const upperEyeVariants = {
	animate : {
		top : [-100, 0, -100, -100, -100, -100, -100, -100, -100, -100, -100 -20,-100,-100],
		transition : {
			top: {
				yoyo : Infinity,
				duration : 5,
				delay : 3
			}
		},
		delay : 5
	},
	closed : {
		y : -1,
	}
}
const bottomEyeVariants = {
	animate : {
	bottom : [-100, 0, -100, -100, -100, -100, -100, -100, -100, -100,  -100 -20,-100,-100],
	transition : {
		bottom: {
			yoyo : Infinity,
			duration : 5,
			delay : 3
		},
		delay : 5,
	}
	},
	closed : {
		y : 1,
	}
}

const Eye = ({ onDisplay, darkTheme }) => {
	return (
		<motion.div className={`relative flex justify-center items-center overflow-hidden ${ darkTheme ? theme.dark.soguma.eye.eyeball : theme.light.soguma.eye.eyeball}  m-2 `}
			variants={irisVariants}
			initial="start"
			animate="animate"
		>
			<motion.div
				className={`relative flex justify-center items-center ${darkTheme ? theme.dark.soguma.eye.iris : theme.light.soguma.eye.iris}`}
				variants={pplVariants} animate="animate"
			>
				<div className={` ${darkTheme ? theme.dark.soguma.eye.pupil : theme.light.soguma.eye.pupil}`} ></div>
				<div className={`absolute top-2/4 right-1/4 ${darkTheme ? theme.dark.soguma.eye.reflection1 : theme.light.soguma.eye.reflection1}`} ></div>
				<div className={`absolute top-2 right-2 ${darkTheme ? theme.dark.soguma.eye.reflection2 : theme.light.soguma.eye.reflection2}`}></div>
			</motion.div>
			<motion.div
				className={`absolute w-full h-1/2 top-full overflow-hidden ${darkTheme ? theme.dark.soguma.eye.eyelashes : theme.light.soguma.eye.eyelashes}`}
				variants={upperEyeVariants} initial="animate" animate="animate">
			</motion.div>
			<motion.div
				className={`absolute w-full h-1/2 bottom-full overflow-hidden ${darkTheme ? theme.dark.soguma.eye.eyelashes : theme.light.soguma.eye.eyelashes}`}
				variants={bottomEyeVariants} initial="animate" animate="animate">
			</motion.div>
		</motion.div>
	);
}

export default Eye
