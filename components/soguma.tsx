import { useState } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import Gim from './gim'
import { wrap } from 'popmotion'
import SogumaEye from './sugumaEye'
import { theme } from './theme'

const gimsProps = [
	{
		id: 0, // needed to fix " key for map, organize layer order "
		type: "main",
		leftRight: 0,
		next: 1,
		prev: 2,
		properties: {
			title: "main",
			size: 100,
			posi: { x: 40, y: 55 },
			scale: 2,
			zIndex: 10,
		}
	},
	{
		id: 1,
		type: "next",
		leftRight: 1,
		next: 3,
		prev: 0,
		properties: {
			title: "next",
			size: 60,
			posi: { x: 85, y: 45 },
			scale: 1.2,
			zIndex: 10,

		}
	},
	{
		id: 2,
		type: "previous",
		leftRight: -1,
		next: 0,
		prev: 4,
		properties: {
			title: "previous",
			size: 80,
			posi: { x: 5, y: 12 },
			scale: 1.1,
			zIndex: 10,
		}
	},
	{
		id: 3,
		type: "onHold",
		leftRight: 1,
		next: 4,
		prev: 1,
		properties: {
			title: "...",
			size: 50,
			posi: { x: 60, y: 18 },
			scale: 0.5,
			zIndex: 0,
		}
	}
	,
	{
		id: 4,
		type: "hidden",
		leftRight: -1,
		next: 2,
		prev: 3,
		properties: {
			title: "hidden",
			size: 40,
			posi: { x: 40, y: 9 },
			scale: 0.4,
			zIndex: 0,
		}
	}
]

const data = ["about me", "my projects", "art", "p1", "p2"]

export default function Soguma({ height, width, setOnDisplay, onDisplay, darkTheme}) {

	const [[direction, steps], setRotate] = useState([0, 0]);

	const { scrollYProgress } = useViewportScroll();
  	const sogumaScale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.2, 0]);
	const sogumaYoffset = useTransform(scrollYProgress, [0, 0.3, 1], [0, -200, -500]);

	const currentIndex = wrap(0, 4, steps)

	const nextPosition = (newDirection: number) => {
		setRotate([newDirection, steps + newDirection]);
	}

	return (
		<div className="relative flex justify-center items-start h-full w-full ">

			<motion.div
				className={`relative flex justify-center items-start ${height || "h-1/2"} ${width || "w-1/2"}  shadow-2xl`}
				initial="initial"
				animate="standing"
				variants={{
					initial : {
						y : -410,
						x : 30,
						scale : 0.1,
					},
					standing : {
						y : 0,
						x: 0,
						scale: 1,
						transition : {
							duration : 1.5,
						},
					},
				}}
				style={
					{
						// scale : sogumaScale,
						// y : sogumaYoffset
					}
				}
			>
						<div className="absolute left-0 bottom-0 flex justify-center items-center h-44 w-44 m-6  rounded-full border-gray-300 border-2">
						</div>
				{gimsProps.map((gim) => (
					<Gim
						key={gim.id}
						gimId={gim.id}
						data={data}
						direction={direction}
						steps={steps}
						nextPosition={nextPosition}
						setOnDisplay={setOnDisplay}
						onDisplay={onDisplay}
						darkTheme={darkTheme}
					/>
				))}
				<motion.div className={`relative flex justify-center items-start h-60 w-44 ${ darkTheme ? theme.dark.soguma.body : theme.light.soguma.body}`}
					initial="initial"
					animate="standing"
					variants={{
						initial : {
							scale : 0.2,
							x:10,
							y : -100,
							rotate : 20,
						},
						standing : {
							scale: 1.1,
							y : [-12, -25],
							rotate : 5,
							x : [-5 ,0],
							transition : {
								y : { yoyo : Infinity, duration : 1},
								duration : 2,
								x : { duration : 2},
								scale : {type : 'spring', duration : 1}
							},
						},
					}}
					whileHover={{
						opacity : 1,
						scale : 1.2,
						transition : {
							duration : 0.3
						}
						// boxShadow : '0 0px 20px 8px rgba(255, 255, 255, 0.5)',
					}}
					onMouseDown={() => nextPosition(-1)}
				>
					<SogumaEye height="h-36" width="w-36" darkTheme={darkTheme} />
				</motion.div>
			</motion.div>
		</div>
	);
}
