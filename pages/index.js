import { useEffect, useState } from 'react'
import { theme } from '../components/theme'
import { HomeBoard } from '../components/homeBoard'
import { queryData, saveLocalData, loadLocalData } from './api/dataFetcher'
import SkyNav from '../components/skyNav'
import SoguEye from '../components/SoguEye/SoguEye'
import MainBoard from '../components/mainboard'

const Home = ({ gitData, darkTheme, changeTheme }) => {
	
	// const [onDisplay, setOnDisplay] = useState({ displayState: false, displayOff: false, itemId: -1, type: 1})
	console.log("starting data : ", gitData)
	const [onDisplay, setOnDisplay] = useState({ displayState: true, displayOff: false, itemId: -1, type: -1})
	const displayGim = (displayState, itemId, type, activeDisplayOff) => {
		const newdisplayOff = onDisplay.displayState && !displayState && activeDisplayOff ? true : false;
		setOnDisplay({ ...onDisplay, displayState, displayOff: newdisplayOff, itemId, type });
	}
	useEffect(() => {
		let timer;
		if ( !onDisplay.displayState && onDisplay.displayOff )
		{
			timer = setTimeout(() => {
				setOnDisplay({ ...onDisplay, displayOff: false });
			}, 300)
		}
		return () => clearTimeout(timer)
	}, [onDisplay]);

	return (
		<div className={`relative w-full flex flex-col justify-start ${onDisplay.displayState && onDisplay.type !== -1 ? "" : "h-screen"} m-0 p-0 ${darkTheme && theme.dark.backgroundColor || theme.light.backgroundColor}`}>
			<div className="relative flex flex-col justify-end md:justify-center items-center h-screen w-full">
				<SkyNav
					darkTheme={darkTheme}
					changeTheme={changeTheme} />
				<SoguEye
					itemsToDisplay={gitData.pinnedItems.nodes}
					displayItem={displayGim}
					onDisplay={onDisplay}
					darkTheme={darkTheme} />
				<HomeBoard
					onDisplay={onDisplay}
					coverImage={"/me/r-0.png"}
					fullName={gitData.name}
					bio={gitData.bio} />
			</div>
			<MainBoard id="board" onDisplay={onDisplay} repos={gitData.pinnedItems.nodes} />
		</div>
	)
}

export default Home

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
		</div>
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
