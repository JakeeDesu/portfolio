// import DarkSky from '../components/darkSky'
// import Sogumice from '../components/sogumice'
// import LoloIcon from '../components/loloIcon'
import { useRef, useEffect, useState } from 'react'
import { motion, useViewportScroll  } from 'framer-motion'
import ImageDisplayer from '../components/imageDisplayer'
import DescriptionCard from '../components/descriptionCard'
// import Image from 'next/Image'


const theme = {
	light : {
		backgroundColor : 'bg-gray-900',
		shadowsColor : 'bg-blue-400',
		gimsColor : 'bg-red-200'
	},
	dark : {
		backgroundColor : 'bg-blue-400',
		shadowsColor : 'bg-gray-900',
		gimsColor : 'bg-blue-400'
	}
}

export default function Card ({ onDisplay, darkTheme, displayGim }) {

	const carRef = useRef(false)
	const { scrollYProgress } = useViewportScroll()
	// const yRnage = useTransform(useViewportScroll, [0, 1], window.)
	const variants = {
		hidden : {
			zIndex : 0,
		},
		showsUp : {
			zIndex : 50,
		}
	}

	const variants2 = {
		hidden : {
			opacity : 0,
		},
		showsUp : {
			opacity : 1,
			// boxShadow : '0 0px 20px 8px rgba(255, 255, 255, 0.5)',
			height:"auto",
		}
	}

	return (
		<motion.div
			className="absolute flex flex-col justify-center items-center w-full h-full top-0 "
			initial={false}
			animate={ onDisplay.displayState ? "showsUp" : "hidden"}
			variants={variants}
			transition={{

				duration : 2
			}}
		>
			<motion.div className="flex flex-row justify-between w-full h-auto p-5"
				variants={variants2}
				transition={{
					boxShadow : {
						duration : 3,
					},
					delay: 2,
					duration : 2
				}}
				>
				<motion.div className="h-100 w-100 text-white" onTap={(event, info) => displayGim()}>click me</motion.div>
				<DescriptionCard/>
				<ImageDisplayer/>
			</motion.div>
		</motion.div>
	)
}
