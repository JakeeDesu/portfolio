import DarkSkyOpen from '../components/darkSkyOpen'
import Soguma from '../components/soguma'
import DarkSky from '../components/darkSky'
import Sogumice from '../components/sogumice'
import LoloIcon from '../components/loloIcon'
import Scene from './scene'
import Card from './card'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
// import Image from 'next/Image'


export default function Home () {
	// const y = useMotionValue(0);
	const { scrollYProgress } = useViewportScroll();
  const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	// const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	// const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

	// console.log("y range : " , yRange)

	return (
		<motion.div className="flex flex-col w-full h-auto bg-gray-900">
			<div className="h-screen w-full bg-gray-900">
				<motion.div className="relative flex justify-center items-center h-full w-full bg-blue-400 ">
					<div className="absolute top-0 left-0 h-full w-full bg-blue-400">
						<DarkSkyOpen height="lg:h-full h-1/2 md:h-2/3"/>
					</div>
					<motion.div className="absolute flex justify-center items-start top-1/3 w-full">
						<Soguma height="h-100"  width="w-2/3"/>
					</motion.div>
				</motion.div>
			</div>
			<Scene />
			<Card/>
		</motion.div>
	)
}
