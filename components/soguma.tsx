import { motion } from 'framer-motion'
import SogumaEye from './sugumaEye'
import { theme } from './theme'

const darkStanding = {
	scale: [1.02,1],
	y: [-12, -25] ,
	rotate: [0, 0, 0, -20, -13, 20, 21, 20, 20, 15, 0, 0, 0, -25, -17],
	x: [-5, 0],
	transition: {
		y: { yoyo: Infinity, duration: 1 },
		duration: 1,
		x: { duration: 2 },
		scale: { type: 'spring', duration: 0.5 },
		rotate: { type: 'spring', duration: 5, yoyo: Infinity },
	}
}

const whiteStanding = {
	scale:1,
	y: [-12, -25],
	rotate:  0,
	x: 0,
	transition: {
		y: { yoyo: Infinity, duration: 1 },
		duration: 1,
		scale: { type: 'spring', duration: 0.5 },
	}
}

const variants = {
	initial: (darkTheme : boolean) => {
		return {
			scale: !darkTheme ? 1.08 : 1.02,
			x: !darkTheme ? 0 : 10,
			y: 0,
			transition : {
				duration : 0.3
			}
		}; 
	},
	standing: (darkTheme : boolean) => {
		return darkTheme ? darkStanding : whiteStanding 
	},
	onHover : {
		scale: 1.07,
		transition : {
			duration : 0.3
		}
	},

}

function Soguma ( { onDisplay, darkTheme, onSogumaClick } )
{	
	const switchId = darkTheme ? 1 : 0;

	return (
		<motion.div 
			className={`relative flex flex-col justify-center items-center ${(darkTheme && theme.dark.soguma.body(onDisplay.displayState)) || theme.light.soguma.body}`}
			key={switchId}
			custom={darkTheme}
			variants={variants}
			initial="initial"
			animate="standing"
			whileHover={ onDisplay.displayState ? "" : "onHover"}
			onMouseDown={() => onSogumaClick()}
		>
			<SogumaEye darkTheme={darkTheme} />
		</motion.div>
	);
}

export default Soguma