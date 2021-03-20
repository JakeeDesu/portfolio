import DarkSky from '../components/darkSky'
import Sogumice from '../components/sogumice'

export default function Scene () {
	
	return (
		<div className="flex flex-col bg-green-300 w-full h-auto">
			<div className="relative flex justify-center items-center h-screen w-full">
				<div className="absolute top-0 left-0 h-full w-full">
					<DarkSky height="lg:h-full h-1/2 md:h-2/3"/>
				</div>
				<div className="absolute top-1/4">
					<Sogumice height="h-36"  width="w-36"/>
				</div>
			</div>

			<div className=" h-screen w-8/12 bg-gray-900">

			</div>
		</div>
	)
}