import DarkSkyOpen from '../components/darkSkyOpen'
import SogumaVx from '../components/sogumaVx'
import SogumaVxPhone from '../components/sogumaVxPhone'
import DarkSky from '../components/darkSky'
import EyeSwitch from '../components/eyeSwitch'
import MainBoard from '../components/mainboard'
import BoardPhone from '../components/boardPhone'
import Link from 'next/link'
import getLocalProjectData from '../components/utilities/getLocalProjectData'
import { promises as fs } from 'fs'

import Scene from '../components/scene'
import { useEffect, useState, useRef } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import { theme } from '../components/theme'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import path from 'path'

function rotateByMousePosition(event, ref) {
	const currentPosi = {
		x: event.pageX,
		y: event.pageY,
	}

	let offset = { top: 0, left: 0 }
	if (ref) {
		offset = ref.getBoundingClientRect()
		ref.style.transform = `rotateY(${maping(currentPosi.x - offset.left, [0, offset.width], [-20, 20])}deg)`
		ref.style.transform += `rotateX(${maping(currentPosi.y - offset.top, [0, offset.height], [-20, 20])}deg)`
	}
	// console.log(maping(currentPosi.x - offset.left, [0, offset.width],[-40, 40]))
	// ref.style.transform += ` rotateY(${maping(currentPosi.y - offset.top, [0, offset.height],[-40, 40])}deg)`
	// return {
	// 	x : currentPosi.x - offset.left,
	// 	y : currentPosi.y - offset.top,
	// 	// zab
	// }
}

function maping(value, interval1, interval2) {
	return (value * (interval2[1] - interval2[0]) / interval1[1]) + interval2[0]
}

export default function Home({ loaded, gitData, darkTheme, changeTheme }) {
	const [onDisplay, setOnDisplay] = useState({ displayState: true, displayOff: false, itemId: -1, type: -1 })
	// const [mousePosition, setMousePosition] = useState({});
	// const [size, setSize] = useState({height : 0, width : 0});
	const imageRef = useRef()
	const textRef = useRef()
	const { scrollYProgress } = useViewportScroll();
	const sogumaScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);
	const sogumaYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);



	// const rX = maping(mousePosition.x , [0 , size.width], [0, 50])
	// const rY = maping(mousePosition.y, [0 , size.height], [0, 50])
	// getLocalProjectData("Fractol");
	// const [[soguma, board], setElements] = useState([null,null])
	let ss = 0;
	useEffect(() => {

		// console.log(" files data : ", gitData, " loaded status : ", loaded, "window : ", window)
		// setElements([document.getElementById('soguma'), document.getElementById('board')])
		// if (imageRef && imageRef.current)
		// {
		// 	console.log("tyyype x ", imageRef.current.getBoundingClientRect())
		// 	let rectSize = imageRef.current.getBoundingClientRect()
		// 	setSize({ height : rectSize.height, width : rectSize.width})
		// }
		let timer;
		if (!onDisplay.displayState && onDisplay.displayOff) {
			timer = setTimeout(() => {
				setOnDisplay({ ...onDisplay, displayOff: false });
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
		console.log("scroooooooooooooooooolll: NULLLLL type : " + type + " state : " + displayState)

		// }, 100)
		console.log(" |||  DISPLAY : ", displayState ? "true" : "false", " ||| type : " + type)
		const newdisplayOff = onDisplay.displayState && !displayState ? true : false;
		setOnDisplay({ ...onDisplay, displayState, displayOff: newdisplayOff, itemId, type });
	}

	const handleMouseMove = e => {
		rotateByMousePosition(e, imageRef.current)
	};
	const handleMouseLeave = e => {
		imageRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
	}
	const handleMouseMoveText = e => {
		rotateByMousePosition(e, textRef.current)
	};
	const handleMouseLeaveText = e => {
		textRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
	}
	return (
		<motion.div className={`relative flex flex-col w-full h-auto overflow-hidden`}>
			{/* {		console.log(dataLoading ? "not fetched yet" : "about :" , about, "repos : ", repos )} */}
			{/*	 <div className="absolute z-50 text-white flex flex-col justify-center top-100 left-1/4" >
				<h1>onDisplay : {onDisplay.displayState ? "true" : "false"}</h1>
				<h1>displayOff : {onDisplay.displayOff ? "true" : "false"}</h1>
				<h1>itemId : {onDisplay.itemId}</h1>
				<h1>type : {onDisplay.type}</h1>
				<Link href="/home" ><a>none existing url</a></Link>
			</div> *}
			{/* <nav className="fixed z-50 top-20 right-8 lg:h-40 lg:w-24 md:h-32 md:w-20 h-20 w-16">
				<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} color2="bg-green-500" color1="bg-blue-900" />
			</nav> */}
			<motion.div className={`relative flex flex-col justify-start l:h-screen ${onDisplay.displayState && onDisplay.type !== -1 ? "" : "h-screen"} m-0 p-0  w-full ${theme.dark.backgroundColor}`}
			>
				<motion.div id="soguma" className="relative flex justify-center items-center l:h-full md:h-screen h-screen w-full">
					<div className="absolute top-0 left-0 lg:h-full md:h-full h-full w-full ">
						<DarkSkyOpen height="lg:h-full h-full md:h-1/2 w-full" darkTheme={darkTheme} />
					</div>
					<div className="absolute w-full h-full top-0 left-0"

					>
						<motion.div className="relative flex flex-row justify-center items-center h-full w-1/2 "
							style={{
								scale: sogumaScale,
								y: sogumaYoffset
							}}

						>
							{/* <div className="flex justify-center items-center h-full w-5/6 bg-red-600"> */}
							<motion.div
								className="relative flex flex-col items-center justify-center w-5/12 h-full pt-full"
							>
								<hr className="absolute top-0 border-2 border-black h-1/2"></hr>
								<div className="absolute left-0 w-full rounded-full border-black border-4 overflow-hidden bg-black"
									ref={imageRef}
									onMouseMove={handleMouseMove}
									onMouseLeave={handleMouseLeave}
								>

									<motion.img className="w-full object-fill" src="/me/r-1.png"
									/>
								</div>
							</motion.div>
							<motion.div
								className="relative flex items-center justify-center w-1/3 h-full"
							>
								{/* <hr className="absolute top-0 border-2 border-black h-2/3"></hr> */}
								<motion.div className="absolute top-2/3 h-1/5  w-full cursor-default"
									ref={textRef}
									onMouseMove={handleMouseMoveText}
									onMouseLeave={handleMouseLeaveText}
								>
									<h1 className="text-5xl text-gray-800 font-extrabold my-5">JakeeDesu</h1>
									<p className=" text-xl mx-2">sadcsdcads sdcsdac asdc sdc sacsdc s sdcsdacsadcsas scsad cdscsacasdcsdacsacsdcsdcsad</p>
								</motion.div>
							</motion.div>
						</motion.div>
						{/* </div> */}
					</div>
					<motion.div className="absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20 pointer-events-none"
						style={onDisplay.displayState ?
							{
								scale: sogumaScale,
								y: sogumaYoffset
							} : {
								scale: 1,
								y: 0
							}
						}
					>
						<SogumaVx repos={gitData.pinnedItems.nodes} dataLoading setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme} />
						{/* <SogumaVxPhone repos={gitData.pinnedItems.nodes} dataLoading setOnDisplay={displayGim} onDisplay={onDisplay} darkTheme={darkTheme} /> */}
					</motion.div>
				</motion.div>
				<MainBoard id="board" onDisplay={onDisplay} repos={gitData.pinnedItems.nodes} />
				{/* <BoardPhone onDisplay={onDisplay} about={about} repos={repos} /> */}
			</motion.div>
			{/* {onDisplay.displayState && <Card onDisplay={onDisplay} darkTheme={darkTheme} displayGim={displayGim} />} */}
		</motion.div>
	)
}



/************************** (load / save)  (from/to) local data ****************************/

const LocalDataPath = "components/data"
const LocalGitData = "LOCALGITDATA.json"

const loadLocalData = async () => {

	const dataDirPath = path.join(process.cwd(), LocalDataPath)
	const existedFiles = await fs.readdir(dataDirPath)
	if (existedFiles.includes(LocalGitData)) {
		const filePath = path.join(dataDirPath, LocalGitData)
		const fileContent = await fs.readFile(filePath, 'utf8')
		const content = JSON.parse(fileContent)
		return { loaded: true, content: content.data.user }
	}
	else
		return { loaded: false, content: {} }
}

const saveLocalData = (dataString) => {

	const dataDirPath = path.join(process.cwd(), LocalDataPath)
	const filePath = path.join(dataDirPath, LocalGitData)
	fs.writeFile(filePath, dataString, (err) => {
		console.log("error during writing data into localdata error raised : ", err)
	})

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

const queryData = async () => {


	const data = await fetch(graphQl_ENDPOINT, REQUEST).then(res => res.text()).then(response => {
		const jsonData = JSON.parse(response)
		if (jsonData["message"] === "Bad credentials")
			return {
				fetched: false,
				fetchedData: {}
			}
		else
			return {
				fetched: true,
				fetchedData: response
			}
	}).catch(error => {
		if (error)
			console.log('fetching error : ', error)
	})

	if (data.fetchedData["message"] === "Bad credentials")
		return {
			fetched: false,
			fetchedData: {}
		}
	return data
}

export async function getStaticProps() {

	let log = "walou"
	const fetchedData = await queryData()
	if (fetchedData.fetched) {
		console.log("hi there")
		saveLocalData(fetchedData.fetchedData)
	}
	else {
		console.log("im not there")
	}

	const localData = await loadLocalData()

	// const request = { query : `query {
	// 			user(login: "JakeeDesu") {
	// 				 name
	// 				 bio
	// 				 email
	// 				 login
	// 				 pinnedItems(first: 6, types: REPOSITORY) {
	// 					 nodes {
	// 						 ... on Repository {
	// 							 id
	// 							 name
	// 							 url
	// 							 description
	// 							 openGraphImageUrl
	// 							 languages(first : 4) {
	// 								 nodes {
	// 									 color
	// 									 id
	// 									 name
	// 								 }
	// 							 }
	// 						 }
	// 					 }
	// 				 }
	// 			 }
	// 		}` }
	//
	// 		const res = await fetch('https://api.github.com/graphql', {
	// 			method: 'POST', // *GET, POST, PUT, DELETE, etc.
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				'authorization': TOKEN ? `Bearer ${TOKEN}` : ""
	// 			},
	// 			body: JSON.stringify(request)  // body data type must match "Content-Type" header
	// 		}).then(result => result.text()).then(restext => { const jsonData = JSON.parse(restext)
	// 			// if ( jsonData["message"] === "Bad credentials")
	// 			fs.writeFile(
	// 	 "./components/data/projects.json",
	// 	 JSON.stringify(jsonData),
	// 	 function (err) {
	// 		 if (err) {
	// 			 console.log(
	// 				 "Error occured in pinned projects 1",
	// 				 JSON.stringify(err)
	// 			 );
	// 		 }
	// 	 }
	//  );
	//  return jsonData;
	// 		}).catch((error) =>
	// 		 console.log("Error occured in pinned projects 2", JSON.stringify(error))
	// 		);


	// const  data =  fs.readfile; // parses JSON response into native JavaScript objects



	// const res = postData(, { query : request }, "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")
	// const { data } = await client.query({
	// query: gql`
	// query {
	// 	user(login: "JakeeDesu") {
	// 		 name
	// 		 bio
	// 		 email
	// 		 login
	// 		 pinnedItems(first: 6, types: REPOSITORY) {
	// 			 nodes {
	// 				 ... on Repository {
	// 					 id
	// 					 name
	// 					 url
	// 					 description
	// 					 openGraphImageUrl
	// 					 languages(first : 4) {
	// 						 nodes {
	// 							 color
	// 							 id
	// 							 name
	// 						 }
	// 					 }
	// 				 }
	// 			 }
	// 		 }
	// 	 }
	// }
	// `,
	// });
	//
	return {
		props: {
			// log,
			loaded: localData.loaded,
			gitData: localData.content,
			// fetchedData : JSON.parse(fetchedData.fetchedData)
		},
	};
}
