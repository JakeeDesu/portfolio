import DarkSky from '../components/darkSky'
// import Sogumice from '../components/sogumice'
// import LoloIcon from '../components/loloIcon'
import { useRef, useEffect, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import ImageDisplayer from '../components/imageDisplayer'
import DescriptionCard from '../components/descriptionCard'
// import Image from 'next/Image'



const Card = ({  onDisplay, darkTheme, displayGim }) => 
{
	
	// const carRef = useRef(false);
	// const { scrollYProgress } = useViewportScroll();
	// const cardYOffset = useTransform(scrollYProgress, [ 0 , 0.1 , 0.4 , 1 ], [ 0 , 0 , 0 , 0 ]);
	// const cardScale = useTransform(scrollYProgress, [ 0 , 0.1 , 0.6 , 1 ], [ 0 , 0.7 , 0.8 , 1 ]);
	// const cardOpacity = useTransform(scrollYProgress, [ 0 , 0.1 , 0.6 , 1 ], [ 0 , 0.1 , 1 , 1 ]);
	// const cardretateX = useTransform(scrollYProgress, [ 0 , 0.1 , 0.6 , 1 ], [ -30 , -20 , -20 , 0 ]);
	
	// const variants = {
		// 	hidden: (yOffset, cardOpacity) => {
			// 		return {
				// 			h : 0,
				// 			opacity : 0,
				// 		};
				// 	},
				// 	showsUp: (yOffset, cardOpacity) => {
					// 		return {
						// 			h : 1000,
						// 			opacity : 1,
						// 		};
						// 	}
						// }
						
						// const variants2 = {
							// 	hidden: {
								// 		height : '0%',
								// 		h : 0,
								// 		opacity : 0,
								// 	},
								// 	showsUp: {
									// 		height : '100%',
									// 		h : 1000,
									// 		opacity : 1,
									// 		// height:"auto",
									// 	}
									// }
									
									return (
										
										// <motion.div className="relative flex flex-row justify-between w-full h-screen" 
										// variants={variants2}
										// initial={false}
										// animate={onDisplay.displayState ? "showsUp" : "hidden"}
										
										// >
										<motion.div className="relative flex flex-row justify-between w-full h-screen"
										// key={scrollYProgress}
										// custom={onDisplay.onDisplayState}
										// initial={false}
										// animate={onDisplay.displayState ? "showsUp" : "hidden"}
										// transition={{
											// 	duration: 2
											// }}
											// style={{
												// 	opacity : cardOpacity,
												// 	y : cardYOffset,
												// 	scale : cardScale,
												// 	rotateX: cardretateX,
												// }}	variants={variants}
												
												>
				{/* <motion.div className="h-100 w-100 text-white" onTap={(event, info) => displayGim()}>click me</motion.div> */}

				{/* <DescriptionCard />
				<ImageDisplayer /> */}
			</motion.div>
		// </motion.div>
		)
	}
	
	export default Card