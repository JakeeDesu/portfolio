import { useState, useEffect, useRef } from 'react'
import './gims.css';
import { motion } from 'framer-motion';

function Gims ({gimData,gimsList, typeId, gimsState,  changeMoveSteps, homeFocus, switchHomeFocus }){

	const btnRef = useRef();
	const rand = Math.random() ;
	const [hover, setHover] = useState(false);
	const [scale, setScale] = useState(1);
	const [currentData , setCurrentData] = useState(gimData.current);
	const [isMoving, setIsMoving] = useState(false);
	// const [moveDirection2, setMoveDirection2] = useState(0);
	// const [steps2, setSteps2] = useState(0);
	const [defaultStyle, setDefaultStyle] = useState({
		height : `${gimsList[typeId].properties.size.h}%`,
		width : `${gimsList[typeId].properties.size.w}%`,
		top : `calc(${gimsList[typeId].properties.posi.y}% - ${gimsList[typeId].properties.size.h / 2}%)`,
		left : `calc(${gimsList[typeId].properties.posi.x}% - ${gimsList[typeId].properties.size.w / 2}%)`,
	});

	console.log("gim RENDER ", typeId);

	// console.log("* gim rerendred "+ typeId)
	useEffect( () => {

		console.log("gim useEffect ", typeId);

		const MoveGim = () => {
			// console.log("moveGim fired from useEffect");
			const moveToGimId = gimsState.moveDirection < 0 ? gimsList[typeId].next: gimsList[typeId].prev;
			if ((typeId == 4 && moveToGimId == 2) || homeFocus)
				setCurrentData(gimData.prev);
			console.log('1');

			let zIndex=( gimsState.moveDirection < 0 && (typeId == 0 || typeId == 2) ) ? '30': 'auto';
			if ( gimsState.moveDirection < 0 && typeId == 1)
				zIndex= '-30';

			setDefaultStyle({...defaultStyle, top : `calc(${gimsList[moveToGimId].properties.posi.y}% - ${gimsList[moveToGimId].properties.size.h / 2}%)`,
				left : `calc(${gimsList[moveToGimId].properties.posi.x}% - ${gimsList[moveToGimId].properties.size.w / 2}%)`,
				height : `${gimsList[moveToGimId].properties.size.h}%`,
				width : `${gimsList[moveToGimId].properties.size.w}%`,
				zIndex : `${zIndex}`,
				transitionDuration : '0.5s',
			})

			setTimeout(() => {
				console.log('2');
				if (homeFocus)
					switchHomeFocus(false);
				setDefaultStyle({
						height : `${gimsList[typeId].properties.size.h}%`,
						width : `${gimsList[typeId].properties.size.w}%`,
						top : `calc(${gimsList[typeId].properties.posi.y}% - ${gimsList[typeId].properties.size.h / 2}%)`,
						left : `calc(${gimsList[typeId].properties.posi.x}% - ${gimsList[typeId].properties.size.w / 2}%)`,

					});
					setCurrentData(gimData.current)
					if (gimsState.moveDirection !== 0 && gimsState.selectedGim == typeId)
					{
						console.log("--> reset direction to 0 id : " , typeId);
						changeMoveSteps(0, typeId); // indicate the end of animation by seting move direction to '0'
					}
			}, 500);
		}

		if (gimsState.moveDirection !== 0)	// disable click : to prevent multiple click on gim while animation
			btnRef.current.setAttribute("disabled", "disabled");
		if (gimsState.moveDirection !== 0 || homeFocus )
			MoveGim();
	}, [ gimsState.moveSteps]);

	const onGimClick = () => {
		if (gimsState.moveDirection == 0 && typeId != 0) // do not fire this arrow func : untill the previous animation stops
			changeMoveSteps(gimsList[typeId].leftRight, typeId);
	}


	const onGimHover = (val) => {
		console.log("hover event");
		setHover(val);
	}
	// const homeVariants = {
	// 	hidden: {scale : 1},
	// 	visible: {scale : hoverScale,transition : { type : 'spring', bounce : 0.28, duration : 2.5}},
	// }
	const hoverScale = gimsState.moveDirection !== 0 ? '1' : '1.3';
	const hoverDuration = hover ? '0.8s' : 'none';
	return (

			<motion.div ref={btnRef} className="gims-container" style={defaultStyle}
				onMouseDown={onGimClick}
				// onMouseEnter={() => onGimHover(true)}
				// whileTap={{
				// 	scale : 1,
				// 	boxShadow : 'none',
				// 	transition: { type : 'spring', bounce : 0.5, duration: 1.5 },
				// }}
				whileHover={(typeId != 0 && gimsState.moveDirection == 0) && {
					// y: [0,0],
					scale : [1, 1.2],
					boxShadow : "0px 0px 5px 2px white",
					transition: { yoyo: 2, duration: 0.5 },
				}}

				// initial={{
				// 	y : 0,
				// 	scale : [1.2, 1],
				// 	transition: {
				// 		duration: 1 },
				// }}
				animate={(typeId != 0 && gimsState.moveDirection == 0) && {
					y : [10 ,0],
					transition: {
						yoyo: Infinity,
						duration: 1 },
				} || {}}
				// variants={homeVariants}
			>
			{console.log("On Gimm ================> " , hover)}
				<h2>
					{currentData}
				</h2>
			{/*	<p>{gimData.prev} | {gimData.current} | {gimData.next}</p> */}
				{/* <p>{}</p> */}
			</motion.div>


	);
}

export default Gims;
