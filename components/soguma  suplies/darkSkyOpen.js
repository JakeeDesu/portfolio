import { motion } from 'framer-motion'
import { theme } from '../theme'
// import EyeSwitch from './eyeSwitch'


export default function DarkSkyOpen({ height, darkTheme, changeTheme, children }) {

	const variants = {

		hidden1: {
			x: '50%',
			scale: 2
		},
		visible1: {
			x: 0,
			scale: [1, 0.98],
			transition: {
				scale: {
					type: 'spring',
					yoyo: Infinity,
					duration: 1,
				},
				type: "spring",
				duration: 2.5,
			}
		},
		hidden2: {
			x: '-50%',
			scale: 2
		},
		visible2: {
			x: 0,
			scale: [1, 0.98],
			transition: {
				scale: {
					type: 'spring',
					yoyo: Infinity,
					duration: 1,
				},
				type: "spring",
				duration: 2.5,
			}
		},

	}
	return (
		<div className={`relative flex flex-col ${height} w-full bg-gradient-to-b  ${darkTheme && theme.dark.shadowsColor || theme.light.shadowsColor}  overflow-hidden`} >
			<div className={`relative flex justify-center lg:h-1/3 h-1/3 md:h-1/2 w-full bg-gradient-to-b ${darkTheme && theme.dark.shadowsColor || theme.light.shadowsColor} `}>
				<motion.div className="absolute flex justify-center md:justify-between items-center top-0  w-full h-1/2 md:h-1/4  pointer-events-none "
					style={{
						// opacity: navYoffset
					}}
				>
					{children}
					{/* <div className=" flex justify-center items-center text-gray-600 text-5xl whitespace-nowrap  h-full w-full md:w-1/4 mx-8">
						<h1>S O G U M A</h1>
					</div>
					<div className="z-10 hidden md:flex items-start justify-start h-full w-16 md:w-20 mx-8 md:mx-10 pointer-events-auto " >
						<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} color2="bg-green-500" color1="bg-blue-900" />
					</div> */}
				</motion.div>
				<motion.div
					className={`md:hidden absolute top-1/2 h-full  w-xfull  rounded-fullp4   ${darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor}`}
					initial="hidden1"
					animate="visible1"
					variants={variants}
				></motion.div>
				<motion.div
					className={`hidden md:flex absolute top-3/4 md:top-1/4 -left-1/2 md:-left-1/4 h-1/2 md:h-xfull w-full md:w-3/4 rounded-fullp4   ${darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor}`}
					initial="hidden1"
					animate="visible1"
					variants={variants}
				></motion.div>
				<motion.div
					className={` hidden md:flex absolute top-3/4 md:top-1/4 -right-3/4 md:-right-1/4 h-1/2 md:h-2xfull w-full md:w-3/4 rounded-fullp4  ${darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor}`}
					initial="hidden2"
					animate="visible2"
					variants={variants}
				></motion.div>
			</div>
			<div className={`h-2/3 lg:h-2/3 md:1/2 w-full ${darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor}`}>

			</div>
		</div>

	);
}
