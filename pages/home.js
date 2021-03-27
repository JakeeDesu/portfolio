import DarkSkyOpen from '../components/darkSkyOpen'
import Soguma from '../components/soguma'
import DarkSky from '../components/darkSky'
import Sogumice from '../components/sogumice'
import LoloIcon from '../components/loloIcon'
import EyeSwitch from '../components/eyeSwitch'

import Scene from './scene'
import Card from './card'
import Gim from '../components/gim'
import { useEffect, useState } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import { theme } from '../components/theme'
// import Image from 'next/Image'


export default function Home () {
	const [darkTheme, setDarkTheme] = useState(false);
	const [onDisplay, setOnDisplay] = useState({displayState : false, itemId : -1, type : 0})
	const [animateGim, setAnimateGim] = useState(false);
	const { scrollYProgress } = useViewportScroll();
	const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const yRang = useTransform(scrollYProgress, [0, 0.3, 1], [0, 500, 2000]);
	const xRang = useTransform(scrollYProgress, [0, 1], [0, 500]);
	// const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	// const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

	// console.log("y range : " , yRange)
	useEffect(() => {
		// scrollYProgress.onChange(v => setAnimateGim(v >= 0.5))
		window.scrollTo(0,0);

	},[scrollYProgress]);

	const changeTheme = () => {
		setDarkTheme(!darkTheme);
	}
	const displayGim = (displayState, itemId, type) => {
		setOnDisplay({...onDisplay, displayState, itemId, type});
	}
	return (
		<motion.div className={`relative flex flex-col w-full h-auto overflow-hidden`} style={{ scrollBehavior : "smooth"}}>
			<nav className="fixed z-50 top-20 right-8 h-40 w-24 ">
				<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} color2="bg-green-500" color1="bg-blue-900" />
			</nav>
			<div className={`h-screen w-full `}>
				<motion.div className="relative flex justify-center items-center h-full w-full">
					<div className="absolute top-0 left-0 h-full w-full">
						<DarkSkyOpen height="lg:h-full h-1/2 md:h-2/3" darkTheme={darkTheme}/>
					</div>
					<motion.div className="absolute flex justify-center items-start h-2/3 top-1/3 w-full ">
						<Soguma height="h-full"  width="w-full" setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme}/>
					</motion.div>
				</motion.div>

			</div>
			<Card onDisplay={onDisplay} darkTheme={darkTheme}/>
		</motion.div>
	)
}
