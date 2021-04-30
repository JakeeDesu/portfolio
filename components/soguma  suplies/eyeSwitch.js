import { motion } from 'framer-motion'
import { theme } from '../theme';

const appearanceVariants = {
	animate : {
		opacity : 0.3
	},
	onHover : {
		opacity : 0.7,
		scale : 1.1,
		transition : {
			duration : 0.3
		}
	}
}

const upperEyeVariants = {
	opened : {
		y : -10,
	},
	closed : {
		y : -1,
	}
}
const bottomEyeVariants = {
	opened : {
		y : 10,
	},
	closed : {
		y : 1,
	}
}
const pplVariants = {
	opened : {
		scale: 1.3,
		y : -5,
	},
	closed : {
		y : 0,
	}
}

const EyeSwitch = ({ darkTheme, changeTheme}) => {

	return (
		<motion.div className="relative flex justify-center items-center w-full h-full "
			onMouseDown={changeTheme}
			variants={appearanceVariants}
			animate="animate"
			whileHover="onHover"
		> 
			<motion.div className={`flex justify-center items-center rounded-full ${ darkTheme ? theme.dark.eyeSwitch.iris : theme.light.eyeSwitch.iris }`} variants={pplVariants} animate={darkTheme ? "closed": "opened"}>
				<div className={`rounded-full ${ darkTheme ? theme.dark.eyeSwitch.pupil : theme.light.eyeSwitch.pupil }`} ></div>
			</motion.div>
			<motion.div className={`absolute w-full h-1/2 top-0  overflow-hidden  ${ darkTheme ? theme.dark.eyeSwitch.upperEyeLash : theme.light.eyeSwitch.upperEyeLash }`} variants={upperEyeVariants} animate={darkTheme ? "closed": "opened"}>
				<div className={`absolute w-full h-full rounded-full -bottom-1/2 ${ darkTheme ? theme.dark.eyeSwitch.upperEyeLash2 : theme.light.eyeSwitch.upperEyeLash2 }`} ></div>
			</motion.div>
			<motion.div className={`absolute w-11/12 h-1/2  bottom-0  overflow-hidden ${ darkTheme ? theme.dark.eyeSwitch.bottomEyeLash : theme.light.eyeSwitch.bottomEyeLash }`} variants={bottomEyeVariants} animate={darkTheme ? "closed": "opened"}>
				<div className={`absolute w-full h-full rounded-full -top-1/2  ${ darkTheme ? theme.dark.eyeSwitch.bottomEyeLash2 : theme.light.eyeSwitch.bottomEyeLash2 }`} ></div>
			</motion.div>
		</motion.div>
	);
}

export default EyeSwitch
