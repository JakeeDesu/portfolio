import { useState } from 'react'
import { motion } from 'framer-motion'
import Gim from './gim'
import { wrap } from 'popmotion'

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

export default function Soguma({ height, width }) {

	const [[direction, steps], setRotate] = useState([0, 0]);

	const currentIndex = wrap(0, 4, steps)

	const nextPosition = (newDirection: number) => {
		console.log("clickkkkkk");
		setRotate([newDirection, steps + newDirection]);
	}

	// console.log(getGimPropsById(3));
	return (
		<motion.div
			className={`relative flex justify-center items-start ${height || "h-1/2"} ${width || "w-1/2"}  border-gray-900 shadow-2xl  `}
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
						// x : { yoyo : Infinity, duration : 2},
					},
				},
			}}
		>
			{gimsProps.map((gim) => (
				<Gim 
					key={gim.id}
					gimId={gim.id}
					data={data}
					direction={direction}
					steps={steps}
					nextPosition={nextPosition}
				/>
			))}
			<motion.div className="relative h-60 w-44 bg-white"
				initial="initial"
				animate="standing"
				variants={{
					initial : {
						scale : 0.2,
						x:10,
						// opacity : 0,
						y : -100,
						rotate : 20,
						// transition : {
						// 	duration : 2,
						// }
					},
					standing : {
						scale: 1.1,
						// opacity : 1,
						y : [-12, -25],
						rotate : 5,
						x : [-5 ,0],
						transition : {
							y : { yoyo : Infinity, duration : 1},
							duration : 2,
							// delay : 2.5,
							x : { duration : 2},
							scale : {type : 'spring', duration : 1}
						},
					},
				}}
				onMouseDown={() => nextPosition(-1)}
			>
				<a href='/scene'>link</a>
			</motion.div>
		</motion.div>
	);
}