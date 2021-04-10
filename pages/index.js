import DarkSkyOpen from '../components/darkSkyOpen'
import SogumaVx from '../components/sogumaVx'
import SogumaVxPhone from '../components/sogumaVxPhone'
import DarkSky from '../components/darkSky'
import EyeSwitch from '../components/eyeSwitch'
import MainBoard from '../components/mainboard'
import BoardPhone from '../components/boardPhone'
import Link from 'next/link'

import Scene from '../components/scene'
import { useEffect, useState } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import { theme } from '../components/theme'


export default function Home({ about, repos, dataLoading, darkTheme, changeTheme}) {
	const [onDisplay, setOnDisplay] = useState({ displayState: true, displayOff : false, itemId: -1, type: -1 })
	const { scrollYProgress } = useViewportScroll();
	const sogumaScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);
	const sogumaYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);
	// const [[soguma, board], setElements] = useState([null,null])
	useEffect(() => {
		// setElements([document.getElementById('soguma'), document.getElementById('board')])
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
		// setTimeout(() => {
		// 	let board = document.getElementById('board');
		// 	if (board && (onDisplay.displayState && onDisplay.type === 2))
		// 	{
		// 		board.scrollIntoView(false);
		// 		console.log("func fired ")
		// 	}
		// 	else
		// 		console.log("scroooooooooooooooooolll: NULLLLL type : " + type + " state : "+ displayState)

		// }, 100)
		console.log(" |||  DISPLAY : ", displayState ? "true" : "false" , " ||| type : " + type )
		const newdisplayOff = onDisplay.displayState && !displayState ? true : false;
		setOnDisplay({ ...onDisplay, displayState, displayOff : newdisplayOff, itemId, type });
	}
	
	return (
		<motion.div className={`relative flex flex-col w-full h-auto overflow-hidden`}>
{/* {		console.log(dataLoading ? "not fetched yet" : "about :" , about, "repos : ", repos )} */}
			<div className="absolute z-50 text-white flex flex-col justify-center top-100 left-1/4" >
				<h1>onDisplay : {onDisplay.displayState ? "true" : "false"}</h1>
				<h1>displayOff : {onDisplay.displayOff ? "true" : "false"}</h1>
				<h1>itemId : {onDisplay.itemId}</h1>
				<h1>type : {onDisplay.type}</h1>
				<Link href="/home" ><a>none existing url</a></Link>
			</div>
			<nav className="fixed z-50 top-20 right-8 lg:h-40 lg:w-24 md:h-32 md:w-20 h-20 w-16">
				<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} color2="bg-green-500" color1="bg-blue-900" />
			</nav>
			<motion.div className={`relative flex flex-col justify-start l:h-screen ${onDisplay.displayState && onDisplay.type !== -1 ? "h-auto" : "h-screen" } m-0 p-0  w-full ${theme.dark.backgroundColor}`}
			>
				<motion.div id="soguma" className="relative flex justify-center items-center l:h-full md:h-screen h-80 w-full">
					<div className="absolute top-0 left-0 lg:h-full md:h-full h-full w-full ">
						<DarkSkyOpen height="lg:h-full h-full md:h-1/2 w-full" darkTheme={darkTheme} />
					</div>
					<motion.div className="absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20"
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
						<SogumaVxPhone repos={repos} dataLoading setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme} />
					</motion.div>
				</motion.div>
				<MainBoard id="board" onDisplay={onDisplay} about={about} repos={repos} />
				{/* <BoardPhone onDisplay={onDisplay} about={about} repos={repos} /> */}
			</motion.div>
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
