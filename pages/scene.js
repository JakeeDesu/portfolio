import DarkSky from '../components/darkSky'
import Sogumice from '../components/sogumice'
import LoloIcon from '../components/loloIcon'
import { motion, useTransform, useViewportScroll, useMotionValue  } from 'framer-motion'
import {useState , useEffect, useRef} from 'react'
// import ImageDisplayer from '../components/imageDisplayer'
// import DescriptionCard from '../components/descriptionCard'
// import Image from 'next/Image'


export default function Scene () {

	const { scrollYProgress } = useViewportScroll();
	// const sceneScale = useTransform(scrollYProgress, [0,0.5, 1], [2, 0.5 ,2, 1]);
	const sogumiceScale = useTransform(scrollYProgress, [0,0.2, 0.5, 1], [0.1, 0.5 ,2, 1]);
	const sogumiceYoffset = useTransform(scrollYProgress, [0,0.2, 0.5, 1], [-500, 10, 0, -50]);
	const skyOpacity = useTransform(scrollYProgress, [0,0.3, 0.5, 1], [0, 1, 1, 1]);
	const sogumiceOpacity = useTransform(scrollYProgress, [0,0.2, 0.5, 1], [0,1, 1, 1]);

	useEffect(() => {

	}, [  ]);
	
	return (
		<motion.div className="relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 "
		// style={
		// 	{
		// 		scale : sceneScale,
		// 	}
		// }			
		>
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
				<h1 className="text-white text-lg"></h1>
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
