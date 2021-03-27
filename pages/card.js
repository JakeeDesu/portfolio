// import DarkSky from '../components/darkSky'
// import Sogumice from '../components/sogumice'
// import LoloIcon from '../components/loloIcon'
import { motion } from 'framer-motion'
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

export default function Card ({ onDisplay, darkTheme }) {

	const variants = {
		hidden : {
			height : 0
		},
		showsUp : {
			boxShadow : ['0 0px 0px 0px rgba(255, 255, 255, 0.5)', '0 0px 20px 8px rgba(255, 255, 255, 0.5)'],
			height:"auto"
		}
	}
	return (
		<motion.div
			className="flex flex-col w-full h-auto bg-blue-100"
			initial={false}
			animate={ onDisplay.displayState ? "showsUp" : "hidden"}
			variants={variants}
			transition={{
				boxShadow : {
					duration : 3,
				},
				duration : 2
			}}
		>
			<div className="flex flex-row justify-between w-full p-5">
				<DescriptionCard/>
				<ImageDisplayer/>
			</div>
		</motion.div>
	)
}
