import { motion } from 'framer-motion'
import Eye from '../soguma  suplies/Eye'
import { theme } from '../theme'

const darkStanding = {
	scale: [1.02, 1],
	y: [-12, -25],
	rotate: [0, 0, 0, -20, -13, 20, 21, 20, 20, 15, 0, 0, 0, -25, -17],
	x: [-5, 0],
	boxShadow : "0 0 60px 1px rgba(255,255,255,0.1)",
	transition: {
		y: { yoyo: Infinity, duration: 1 },
		duration: 1,
		x: { duration: 2 },
		scale: { type: 'spring', duration: 0.5 },
		rotate: { type: 'spring', duration: 5, yoyo: Infinity },
	}
}

const whiteStanding = {
	scale: 1,
	y: [-12, -25],
	rotate: 0,
	x: 0,
	transition: {
		y: { yoyo: Infinity, duration: 1 },
		duration: 1,
		scale: { type: 'spring', duration: 0.5 },
	}
}

const variants = {
	initial: (darkTheme: boolean) => {
		return {
			scale: !darkTheme ? 1.08 : 1.02,
			x: !darkTheme ? 0 : 10,
			y: 0,
			boxShadow : "0 0 80px 1px rgba(255,255,255,0.1)",
			transition: {
				duration: 0.3
			}
		};
	},
	standing: (darkTheme: boolean) => {
		return darkTheme ? darkStanding : whiteStanding
	},
	onHover: {
		scale: 1.07,
		transition: {
			duration: 0.3
		}
	},
	onClick: {
		scale : 1.01,
		boxShadow : "0 0 80px 1px rgba(255,255,255,0.2)",
		transition : { duration :1, type : 'spring' }
	}

}

function Soguma({ onDisplay, darkTheme, onSogumaClick }) {
	const switchId = darkTheme ? 1 : 0;

	return (
		<motion.div
			className={`md:absolute md:-top-10 lg:relative relative flex flex-col justify-center items-center pointer-events-auto   ${(darkTheme && theme.dark.soguma.body(onDisplay.displayState)) || theme.light.soguma.body}`}
			key={switchId}
			custom={darkTheme}
			variants={variants}
			initial="initial"
			animate="standing"
			whileHover={onDisplay.displayState || onDisplay.displayOff ? "" : "onHover"}
			whileTap="onClick"
			onMouseDown={() => onSogumaClick()}
			style={{
				zIndex : 50,
			}}
		>
			<Eye
				darkTheme={darkTheme}
				onDisplay={onDisplay}
			/>
			{/* {onDisplay.displayState && onDisplay.type != 0 && onDisplay.type != -1 && <Dialog text="scroll down" />} */}
		</motion.div>
	);
}

export default Soguma