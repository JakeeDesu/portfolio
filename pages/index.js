import DarkSkyOpen from '../components/darkSkyOpen'
import SogumaVx from '../components/sogumaVx'
import SogumaVxPhone from '../components/sogumaVxPhone'
import EyeSwitch from '../components/eyeSwitch'
import MainBoard from '../components/mainboard'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import { theme } from '../components/theme'

import { HomeBoard } from '../components/homeBoard'
import { queryData, saveLocalData, loadLocalData } from './api/dataFetcher'



const Debug = (onDisplay) => {
	console.log(`
	******  debug  *******
	 onDisplay : ${onDisplay.displayState ? "true" : "false"}
	displayOff : ${onDisplay.displayOff ? "true" : "false"}
	itemId : ${onDisplay.itemId}
	type : ${onDisplay.type}
	`)
	return (
		<div className="absolute z-50 text-white flex flex-col justify-center top-100 left-1/4" >
			<h1>onDisplay : {onDisplay.displayState ? "true" : "false"}</h1>
			<h1>displayOff : {onDisplay.displayOff ? "true" : "false"}</h1>
			<h1>itemId : {onDisplay.itemId}</h1>
			<h1>type : {onDisplay.type}</h1>
			<Link href="/home" ><a>none existing url</a></Link>
		</div>
	)
}

export default function Home({ gitData, darkTheme, changeTheme }) {

	const [onDisplay, setOnDisplay] = useState({ displayState: true, displayOff: false, itemId: -1, type: -1 })

	const { scrollYProgress } = useViewportScroll();
	const sogumaScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);
	const sogumaYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);
	const navYoffset = useTransform(scrollYProgress, [0, 0.01, 0.5, 1], [1, 0, 0, 0]);
	const boardColor = useTransform(scrollYProgress, [0, 0.3,1], [ "#ffffff", "#000000", "#000000"]);
	console.log(gitData)
	useEffect(() => {
		let timer;
		if (!onDisplay.displayState && onDisplay.displayOff) {
			timer = setTimeout(() => {
				setOnDisplay({ ...onDisplay, displayOff: false });
			}, 300)
		}
		return () => {
			clearTimeout(timer)
		};
	}, [onDisplay]);

// set a gim on display mode

	const displayGim = (displayState, itemId, type, activeDisplayOff) => {
		const newdisplayOff = onDisplay.displayState && !displayState && activeDisplayOff ? true : false;
		setOnDisplay({ ...onDisplay, displayState, displayOff: newdisplayOff, itemId, type });
	}



	return (
		<motion.div className={`relative flex flex-col w-full h-auto overflow-hidden`}
		>
			<motion.nav className="z-50 fixed flex justify-center md:justify-between items-center top-0  w-full h-20 md:h-32 pointer-events-none"
				style={{
					opacity : navYoffset
				}}
			>
				<div className=" flex justify-center items-center md:text-gray-600 text-gray-500 text-5xl whitespace-nowrap  h-full w-full md:w-1/4 mx-8   ">
					<h1>S O G U M A</h1>
				</div>
				<div className="z-10 hidden md:flex h-full w-16 md:w-20 mx-8 md:mx-10 pointer-events-auto" >
					<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} color2="bg-green-500" color1="bg-blue-900" />
				</div>
			</motion.nav>
			{/* <Debug/> */}
			<motion.div className={`relative flex flex-col justify-start ${onDisplay.displayState && onDisplay.type !== -1 ? "" : "h-screen"} m-0 p-0  w-full ${theme.dark.backgroundColor}`}
					style={{
						// backgroundColor : boardColor
					}}
			>
				<motion.div id="soguma" className="relative flex flex-col justify-end md:justify-center items-center h-screen w-full">
					<div className="flex absolute top-0 left-0 lg:h-full md:h-full h-100 w-full ">
						<DarkSkyOpen height="lg:h-full h-full md:h-1/2 w-full" darkTheme={darkTheme} />
					</div>
					<motion.div className="absolute flex justify-center items-end md:items-start md:h-100 lg:h-100 md:top-1/4 top-0 h-1/3 lg:top-1/3 w-full z-20 pointer-events-none  "
						style={onDisplay.displayState ?
							{
								scale: sogumaScale,
								y: sogumaYoffset
							} : {
								scale: 1,
								y: 0
							}
						}>
						<SogumaVx repos={gitData.pinnedItems.nodes} dataLoading setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme} />
						<SogumaVxPhone repos={gitData.pinnedItems.nodes} dataLoading setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme} />
					</motion.div>
					<HomeBoard  onDisplay={onDisplay} coverImage={"/me/0.png"} fullName={gitData.name} bio={gitData.bio}/>
				</motion.div>
				<MainBoard id="board" onDisplay={onDisplay} repos={gitData.pinnedItems.nodes} />
			</motion.div>
		</motion.div>
	)
}



/************************** fetch github data ****************************/


const graphQl_ENDPOINT = "https://api.github.com/graphql"
const TOKEN = "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"

const HEADERS = {
	'Content-Type': 'application/json',
	'authorization': TOKEN ? `Bearer ${TOKEN}` : ""
}

const graphQl_QUERY = {
	query: `query {
			user(login: "JakeeDesu") {
				 name
				 bio
				 email
				 login
				 pinnedItems(first: 6, types: REPOSITORY) {
					 nodes {
						 ... on Repository {
							 id
							 name
							 url
							 description
							 openGraphImageUrl
							 languages(first : 4) {
								 nodes {
									 color
									 id
									 name
								 }
							 }
						 }
					 }
				 }
			 }
		}`
}

const REQUEST = {
	method: 'POST',
	headers: HEADERS,
	body: JSON.stringify(graphQl_QUERY)
}

export async function getStaticProps() {

	const fetchedData = await queryData(graphQl_ENDPOINT, REQUEST)
	
	if (fetchedData.fetched)
		saveLocalData(fetchedData.fetchedData)

	const localData = await loadLocalData()

	return {
		props: {
			loaded: localData.loaded,
			gitData: localData.content,
		},
	};
}
