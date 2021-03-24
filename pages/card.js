// import DarkSky from '../components/darkSky'
// import Sogumice from '../components/sogumice'
// import LoloIcon from '../components/loloIcon'
import ImageDisplayer from '../components/imageDisplayer'
import DescriptionCard from '../components/descriptionCard'
// import Image from 'next/Image'


export default function Card () {

	return (
		<div className="flex flex-col w-full h-auto bg-gray-900">
			<div className="flex flex-row justify-between h-screen w-full p-5">
				<DescriptionCard/>
				<ImageDisplayer/>
			</div>
		</div>
	)
}
