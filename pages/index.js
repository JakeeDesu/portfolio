import DarkSkyOpen from '../components/darkSkyOpen'
import SogumaVx from '../components/sogumaVx'
import DarkSky from '../components/darkSky'
import EyeSwitch from '../components/eyeSwitch'
import MainBoard from '../components/mainboard'
import Link from 'next/link'

import Scene from '../components/scene'
import { useEffect, useState } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'


export default function Home() {
	const [darkTheme, setDarkTheme] = useState(true);
	const [onDisplay, setOnDisplay] = useState({ displayState: false, displayOff : false, itemId: -1, type: 0 })
	const { scrollYProgress } = useViewportScroll();
	const sogumaScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);
	const sogumaYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);

	useEffect(() => {
		let timer;
		if (!onDisplay.displayState && onDisplay.displayOff)
		{
			timer = setTimeout(() => {
				setOnDisplay({ ...onDisplay, displayOff : false });
			}, 300) 
		}
		return () => clearTimeout(timer);
	}, [onDisplay]);

	const changeTheme = () => {
		setDarkTheme(!darkTheme);
	}

	// set a gim on display mode
	const displayGim = (displayState, itemId, type) => {
		const newdisplayOff = onDisplay.displayState && !displayState ? true : false;
		setOnDisplay({ ...onDisplay, displayState, displayOff : newdisplayOff, itemId, type });
	}
	return (
		<motion.div className={`relative flex flex-col w-full h-auto overflow-hidden`} style={{ scrollBehavior: "smooth" }}>
			{/* <div className="absolute text-white flex flex-col justify-center z-50 top-100 left-1/4" >
				<h1>onDisplay : {onDisplay.displayState ? "true" : "false"}</h1>
				<h1>displayOff : {onDisplay.displayOff ? "true" : "false"}</h1>
				<h1>itemId : {onDisplay.itemId}</h1>
				<Link href="/home" ><a>none existing url</a></Link>
			</div> */}
			{/* <img className="absolute z-50 h-16 w-16 top-28 right-28" src="/soso3.svg"/>
			<div className="absolute z-50 top-100 left-1/4" >
				<MiniSoso height="h-16" width="w-16" />
			</div> */}
			{/* <div className={`z-50 absolute left-1/4 top-1/4 flex justify-center items-center m-6 rounded-full ${darkTheme ? theme.dark.gimHolder : theme.light.gimHolder}`}>
				<div className="relative w-full h-full" >
					<img className="absolute -top-28 -right-28" src="/rightHand.svg" />
				</div>
			</div> */}
			<nav className="fixed z-50 top-20 right-8 h-40 w-24 ">
				<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} color2="bg-green-500" color1="bg-blue-900" />
			</nav>

			<motion.div className={`relative h-screen w-full bg-gray-900`}
			>
				<motion.div className="relative flex justify-center items-center lg:h-full h-2/3  w-full">
					<div className="absolute top-0 left-0 h-full w-full">
						<DarkSkyOpen height="lg:h-full h-1/2 md:h-3/5" darkTheme={darkTheme} />
					</div>
							{/* <div className="absolute top-1/2 left-0 h-1/2 w-full">
								<DarkSky height="lg:h-full h-1/2 md:h-2/3"/>
							</div> */}
					<motion.div className="absolute z-20 flex justify-center items-start h-2/3 md:h-4/6 top-2/5 md:top-2/5  lg:top-1/3 w-full "
						animate = {onDisplay.displayState ? 
							{
								scale: [1, 0.7],
								y: [0,-100],
								transition : {
									scale : { duration :1},
									y : { duration : 1}
								}
							} : {
								scale : 1,
								y : 0,
								transition : {
									scale : { duration :1},
									y : { duration : 1}
								}
							}}
						style={ onDisplay.displayState ? 
							{
								scale: sogumaScale,
								y: sogumaYoffset
							} : {
								scale : 1,
								y : 0
							}
						}
					>
						<SogumaVx setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme} />
					</motion.div>
				</motion.div>
			</motion.div>
			<MainBoard onDisplay={onDisplay} />
s			{/* {onDisplay.displayState && <Card onDisplay={onDisplay} darkTheme={darkTheme} displayGim={displayGim} />} */}
		</motion.div>
	)
}
