import DarkSky from '../components/darkSky'
import Sogumice from '../components/sogumice'
import LoloIcon from '../components/loloIcon'
import ImageDisplayer from '../components/imageDisplayer'
import DescriptionCard from '../components/descriptionCard'
import DarkSkyOpen from '../components/darkSkyOpen'
import Soguma from '../components/soguma'
import { motion, AnimatePresence } from 'framer-motion'

// import Image from 'next/Image'


export default function Scene () {

	return (
		<div className="flex flex-col w-full h-auto bg-gray-900">

		<div className="relative flex justify-center items-center h-screen w-full bg-blue-400" >
			<div className="absolute top-0 left-0 h-full w-full">
				<DarkSkyOpen height="lg:h-full h-1/2 md:h-2/3"/>
			</div>
			<div className="absolute flex justify-center items-start top-1/3 w-full">
				<Soguma height="h-100"  width="w-1/2"/>
			</div>
		</div>

			<div className="relative flex justify-center items-center h-screen w-full">
				<div className="absolute top-0 left-0 h-full w-full">
					<DarkSky height="lg:h-full h-1/2 md:h-2/3"/>
				</div>
				<div className="absolute top-1/4">
					<Sogumice height="h-36"  width="w-36"/>
				</div>
				<div className="absolute flex justify-center items-center h-32 bottom-1/4 w-full">
						<h1 className="text-white text-9xl" >TITLE</h1>
				</div>
				<div className="absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full">
					<LoloIcon size={9}/>
				</div>
			</div>

			<div className="flex flex-row justify-between h-screen w-full p-5">
				<DescriptionCard/>
				<ImageDisplayer/>
			</div>


		</div>
	)
}
