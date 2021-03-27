import { motion } from 'framer-motion'
import { theme } from './theme';


const pplVariants= {
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

export default function SogumaEye ({ height, width, darkTheme }) {



	const upperEyeVariants= {
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
	const bottomEyeVariants= {
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

	return (
		<motion.div className={`relative flex justify-center items-center ${height} ${width} rounded-full overflow-hidden ${ darkTheme ? theme.dark.soguma.eye.eyeball : theme.light.soguma.eye.eyeball}  m-2 `}
			animate={{
				opacity : 1
			}}

		>
			<motion.div className={`relative flex justify-center items-center rounded-full ${height} ${width}  ${darkTheme ? theme.dark.soguma.eye.iris : theme.light.soguma.eye.iris}`} variants={pplVariants} animate="animate">
				<div className={`rounded-full ${darkTheme ? theme.dark.soguma.eye.pupil : theme.light.soguma.eye.pupil}`} ></div>
				<div className={`absolute top-2/4 right-1/4 rounded-full ${darkTheme ? theme.dark.soguma.eye.reflection1 : theme.light.soguma.eye.reflection1}`} ></div>
				<div className={`absolute top-2 right-2 rounded-full ${darkTheme ? theme.dark.soguma.eye.reflection2 : theme.light.soguma.eye.reflection2}`} ></div>
			</motion.div>
			<motion.div className={`absolute w-full h-1/2 top-full overflow-hidden ${darkTheme ? theme.dark.soguma.eye.eyelashes : theme.light.soguma.eye.eyelashes}`} variants={upperEyeVariants} animate="animate">
				{/* <div className="absolute w-full h-full rounded-full -bottom-1/2 border-2" ></div> */}
			</motion.div>
			<motion.div className={`absolute w-full h-1/2 bottom-full overflow-hidden  ${darkTheme ? theme.dark.soguma.eye.eyelashes : theme.light.soguma.eye.eyelashes}`} variants={bottomEyeVariants} animate="animate">
				{/* <div className="absolute w-full h-full rounded-full -top-1/2  border-2" ></div> */}
			</motion.div>
		</motion.div>
	);
}
