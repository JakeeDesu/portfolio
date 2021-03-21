import DarkSkyOpen from '../components/darkSkyOpen'
import Soguma from '../components/soguma'
import LoloIcon from '../components/loloIcon'
import ImageDisplayer from '../components/imageDisplayer'
import DescriptionCard from '../components/descriptionCard'
import Image from 'next/Image'


export default function Scene () {

	return (
		<div className="flex flex-col w-full h-auto bg-blue-400">
			<div className="relative flex justify-center items-center h-screen w-full">
				<div className="absolute top-0 left-0 h-full w-full">
					<DarkSkyOpen height="lg:h-full h-1/2 md:h-2/3"/>
				</div>
				<div className="absolute top-1/3">
					<Soguma height="h-48"  width="w-48"/>
				</div>
			</div>

		</div>
	)
}
