import DarkSkyOpen from '../components/darkSkyOpen'
import SogumaVx from '../components/sogumaVx'
import DarkSky from '../components/darkSky'
import EyeSwitch from '../components/eyeSwitch'
import MainBoard from '../components/mainboard'
import Link from 'next/link'

import Scene from '../components/scene'
import { useEffect, useState } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'


export default function Home({ about, repos, dataLoading, darkTheme, changeTheme}) {
	const [onDisplay, setOnDisplay] = useState({ displayState: true, displayOff : false, itemId: -1, type: -1 })
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

	// set a gim on display mode
	const displayGim = (displayState, itemId, type) => {
		const newdisplayOff = onDisplay.displayState && !displayState ? true : false;
		setOnDisplay({ ...onDisplay, displayState, displayOff : newdisplayOff, itemId, type });
	}
	
	return (
		<motion.div className={`relative flex flex-col w-full h-auto overflow-hidden`}>
{		console.log(dataLoading ? "not fetched yet" : "about :" , about, "repos : ", repos )}
			{/* <div className="absolute z-50 text-white flex flex-col justify-center top-100 left-1/4" >
				<h1>onDisplay : {onDisplay.displayState ? "true" : "false"}</h1>
				<h1>displayOff : {onDisplay.displayOff ? "true" : "false"}</h1>
				<h1>itemId : {onDisplay.itemId}</h1>
				<h1>type : {onDisplay.type}</h1>
				<Link href="/home" ><a>none existing url</a></Link>
			</div> */}
			<nav className="fixed z-50 top-20 right-8 h-40 w-24 ">
				<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} color2="bg-green-500" color1="bg-blue-900" />
			</nav>

			<motion.div className={`relative h-screen w-full bg-blue-100`}
			>
				<motion.div className="relative flex justify-center items-center lg:h-full h-2/3  w-full">
					<div className="absolute top-0 left-0 h-full w-full">
						<DarkSkyOpen height="lg:h-full h-1/2 md:h-3/5" darkTheme={darkTheme} />
					</div>
					<motion.div className="absolute z-20 flex justify-center items-start h-2/3 md:h-4/6 top-2/5 md:top-2/5  lg:top-1/3 w-full "
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
						<SogumaVx repos={repos} dataLoading setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme} />
					</motion.div>
				</motion.div>
			</motion.div>
			<MainBoard onDisplay={onDisplay} about={about} repos={repos} />
			{/* {onDisplay.displayState && <Card onDisplay={onDisplay} darkTheme={darkTheme} displayGim={displayGim} />} */}
		</motion.div>
	)
}

export const getStaticProps = async () => {

	const res1 = await fetch('https://api.github.com/users/JakeeDesu');
	const res2 = await fetch('https://api.github.com/users/JakeeDesu/repos');
	
	const about = await res1.json();
	const repos = await res2.json();
	// console.log( brutData )
	// const loading = brutData ? true : false;
	// if (fetchedData)
	// {

	// }
	const dataLoading = (about && repos) === undefined ? true : false; 
	
	return {
		props : { about, repos, dataLoading  }
	}
}
