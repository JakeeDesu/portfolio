import DarkSkyOpen from '../components/darkSkyOpen'
import Soguma from '../components/soguma'
import LoloIcon from '../components/loloIcon'
import ImageDisplayer from '../components/imageDisplayer'
import DescriptionCard from '../components/descriptionCard'
// import Scene from './scene'
// import Image from 'next/Image'


export default function Home () {

	return (
		<div className="flex flex-col w-full h-auto bg-blue-400">
			<div className="h-screen w-full bg-gray-900">
				<div className="relative flex justify-center items-center h-full w-full bg-gray-900">
					<div className="absolute top-0 left-0 h-full w-full bg-gray-900">
						<DarkSkyOpen height="lg:h-full h-1/2 md:h-2/3"/>
					</div>
					<div className="absolute flex justify-center items-start top-1/3 w-full">
						<Soguma height="h-100"  width="w-2/3"/>
					</div>
				</div>
			</div>
		</div>
	)
}
