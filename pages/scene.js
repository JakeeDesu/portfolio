import DarkSky from '../components/darkSky'
import Sogumice from '../components/sogumice'
import LoloIcon from '../components/loloIcon'
import { motion, useTransform, useViewportScroll, useMotionValue  } from 'framer-motion'
import {useState , useEffect} from 'react'
// import ImageDisplayer from '../components/imageDisplayer'
// import DescriptionCard from '../components/descriptionCard'
// import Image from 'next/Image'


export default function Scene () {
	const [openSky, setOpenSky ] = useState(false)

	const { scrollYProgress } = useViewportScroll();
	const sogumiceScale = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.5]);
	const sogumiceYoffset = useTransform(scrollYProgress, [0, 0.3, 1], [-900, 0, 0]);
	const skyOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
	const sogumiceOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

	useEffect(() => {
				skyOpacity.onChange(v => setOpenSky( v >= 1 ));
	}, [skyOpacity]);

	return (
		<motion.div className="relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 ">
			<motion.div className="absolute top-0 left-0 h-full w-full"
			>
				<DarkSky height="lg:h-full h-1/2 md:h-2/3"/>
			</motion.div>
			<motion.div className="absolute top-1/4"
			style={
				{
					scale : sogumiceScale,
					y : sogumiceYoffset,
					opacity : sogumiceOpacity
				}
			}
			>
				<Sogumice height="h-36"  width="w-36"/>
			</motion.div>
			<div className="absolute flex justify-center items-center h-32 bottom-1/4 w-full">
					<h1 className="text-white text-9xl" >TITLE</h1>
			</div>
			<div className="absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full">
				<LoloIcon size={9}/>
			</div>
		</motion.div>
	)
}
