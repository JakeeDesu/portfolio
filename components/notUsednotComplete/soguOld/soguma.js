// import { Link } from 'react-router-dom';
import { useState, useCallback, useReducer } from 'react';
import './soguma.css';
import Sogucube from './sogucube';
import Gims from './gims';
import { motion } from 'framer-motion';


/*
	component that hold and display a list of titles
*/
// const gimsData = [
// 	{
// 		id: 0, // needed to fix " key for map, organize layer order "
// 		type: "main",
// 		leftRight: 0,
// 		next: 1,
// 		prev: 2,
// 		properties: {
// 			title: "main",
// 			size: { h: 320, w: 320 },
// 			posi: { x: 42, y: 75 },
// 		}
// 	},
// 	{
// 		id: 1,
// 		type: "next",
// 		leftRight: 1,
// 		next: 3,
// 		prev: 0,
// 		properties: {
// 			title: "next",
// 			size: { h: 220, w: 220 },
// 			posi: { x: 85, y: 62 },
// 		}
// 	},
// 	{
// 		id: 2,
// 		type: "previous",
// 		leftRight: -1,
// 		next: 0,
// 		prev: 4,
// 		properties: {
// 			title: "previous",
// 			size: { h: 160, w: 160 },
// 			posi: { x: 15, y: 42 },
// 		}
// 	},
// 	{
// 		id: 3,
// 		type: "onHold",
// 		leftRight: 1,
// 		next: 4,
// 		prev: 1,
// 		properties: {
// 			title: "...",
// 			size: { h: 120, w: 120 },
// 			posi: { x: 65, y: 38 },
// 		}
// 	}
// 	,
// 	{
// 		id: 4,
// 		type: "hidden",
// 		leftRight: -1,
// 		next: 2,
// 		prev: 3,
// 		properties: {
// 			title: "hidden",
// 			size: { h: 100, w: 100 },
// 			posi: { x: 45, y: 29 },
// 		}
// 	}
// ]

const gimsData = [
	{
		id: 0, // needed to fix " key for map, organize layer order "
		type: "main",
		leftRight: 0,
		next: 1,
		prev: 2,
		properties: {
			title: "main",
			size: { h: 36, w: 36 },
			posi: { x: 42, y: 45 },
		}
	},
	{
		id: 1,
		type: "next",
		leftRight: 1,
		next: 3,
		prev: 0,
		properties: {
			title: "next",
			size: { h: 22, w: 22 },
			posi: { x: 85, y: 35 },
		}
	},
	{
		id: 2,
		type: "previous",
		leftRight: -1,
		next: 0,
		prev: 4,
		properties: {
			title: "previous",
			size: { h: 16, w: 16 },
			posi: { x: 15, y: 22 },
		}
	},
	{
		id: 3,
		type: "onHold",
		leftRight: 1,
		next: 4,
		prev: 1,
		properties: {
			title: "...",
			size: { h: 12, w: 12 },
			posi: { x: 65, y: 18 },
		}
	}
	,
	{
		id: 4,
		type: "hidden",
		leftRight: -1,
		next: 2,
		prev: 3,
		properties: {
			title: "hidden",
			size: { h: 10, w: 10 },
			posi: { x: 45, y: 9 },
		}
	}
]


// to do : add min-width = somme(all gim widths)

const initialGimsState = { moveSteps: 0, moveDirection: 0, selectedGim : 0 };


function gimsStateReducer(state, action) {
	if (action.steps > 0)
		return ({ moveSteps: (state.moveSteps + 1), moveDirection: 1, selectedGim : action.id || 0 });
	else if (action.steps < 0)
		return ({ moveSteps: (state.moveSteps - 1), moveDirection: -1, selectedGim : action.id || 0 });
	else
		return ({ ...state, moveDirection: 0, selectedGim : action.id || 0 });
}





export default function Soguma({ data, homeFocus, switchHomeFocus }) {

	console.log("Soguma RENDER hi data ");

	const [gimsState, gimsStateDispatch] = useReducer(gimsStateReducer, initialGimsState);
	const changeMoveSteps = (leftRight, selectedGimId) => {
		gimsStateDispatch({ steps : leftRight, id : selectedGimId });
	};

	const [sogucubeData, setSogucubeData] = useState(
		{
			properties: {
				title: "SoguCube",
				color: "#EDEDED",
				rotation: 10,
				size: { h: 36, w: 30 },
				posi: { x: 48, y: 15 },
			}
		}
	);

	const variants = {
		loaloa : {
			// y : -50,
			scale : 1.2,
			transition : {
				duration : 1
			},
		},
		normal : {
			// y : 0,
			scale : 1,
			transition : {
				duration : 0.5
			},
		}
	}
	return (

			<div className="soguma-container">
				{gimsData.map((gimData) => {
					if (gimData.id >= 2) {
						return (<Gims
							key={gimData.id}
							gimData={getGimCurrenData(data, gimData.id, gimsState.moveSteps, gimsState.moveDirection)}
							gimsList={gimsData}
							typeId={gimData.id}
							gimsState={gimsState}
							homeFocus={homeFocus}
							switchHomeFocus={switchHomeFocus}
							changeMoveSteps={changeMoveSteps}
						/>)
					}
				}
				)}
				<motion.div
					// initial="normal"
					// animate="loaloa"
					// variants={variants}
				>
					<Sogucube properties={sogucubeData.properties} moveEvent={gimsState.moveDirection} />
				</motion.div>
				{gimsData.map((gimData) => {
					if (gimData.id < 2) {
						return (<Gims
							key={gimData.id}
							gimData={getGimCurrenData(data, gimData.id, gimsState.moveSteps, gimsState.moveDirection)}
							gimsList={gimsData}
							typeId={gimData.id}
							gimsState={gimsState}
							homeFocus={homeFocus}
							switchHomeFocus={switchHomeFocus}
							changeMoveSteps={changeMoveSteps}
						/>)
					}

				}
				)}
	{/*			<div className="pref" style={{ position: 'absolute', left: '0px', right: '0px', opacity: '0.4', pointerEvents: 'none' }}>
					<h1>move steps : {gimsState.moveSteps}</h1>
					<h1>move Direction : {gimsState.moveDirection}</h1>
				</div>
	*/}

	</div>

	);
}

function fixGimsDataIndex(data, steps) {
	let fixedIndex = steps < 0 ? ((data.length) + (steps % data.length)) % data.length  : steps % data.length;
	return (fixedIndex);
}

function getGimCurrenData(data, gimId, moveSteps, moveDirection) {
	switch (gimId) {
		case 0: // main gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 1)],
				next : data[fixGimsDataIndex(data, moveSteps + 2)],
				prev : data[fixGimsDataIndex(data, moveSteps )],
			};
		case 1: // next gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 2)],
				next : data[fixGimsDataIndex(data, moveSteps + 3)],
				prev : data[fixGimsDataIndex(data, moveSteps + 1)],
			};
		case 2: // prev gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps)],
				next : data[fixGimsDataIndex(data, moveSteps - 1)],
				prev : data[fixGimsDataIndex(data, moveSteps + 1)],
			};
		case 3: // onHold gim
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 3)],
				next : data[fixGimsDataIndex(data, moveSteps + 4)],
				prev : data[fixGimsDataIndex(data, moveSteps + 2)],
			};
		case 4: // hidden gim
			let updatedIndex = (moveDirection < 0) ? moveSteps : moveSteps + 3;
			return {
				current : data[fixGimsDataIndex(data, moveSteps + 4)],
				next : data[fixGimsDataIndex(data, moveSteps + 5)],
				prev : data[fixGimsDataIndex(data, updatedIndex)],
			};
		}
	return (0);
}
