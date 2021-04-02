import { useState } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import Gim from './gim'
import Soguma from './soguma'
import { wrap } from 'popmotion'
import SogumaEye from './sugumaEye'
import { theme } from './theme'
import { gimsProps }  from './gimProps' // gims props



const data = ["about me", "my projects", "art", "p1", "p2"]

export default function SogumaVx({ setOnDisplay, onDisplay, darkTheme }) {

	const [[direction, steps], setRotate] = useState([0, 0]);

	const moveGims = (newDirection: number) => {
		setRotate([newDirection, steps + newDirection]);
	}

	const onSogumaClick = () => {
		onDisplay.displayState ? setOnDisplay(false, -1, 0) : moveGims(-1) ;
	}

	return (
		<motion.div
			className="relative flex flex-col justify-start items-center h-full w-full"
			initial="initial"
			animate="standing"
			variants={{
				initial: {
					y: -410,
					x: 30,
					scale: 0.1,
				},
				standing: {
					y: 0,
					x: 0,
					scale: 1,
					transition: {
						duration: 0.5,
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
					moveGims={moveGims}
					setOnDisplay={setOnDisplay}
					onDisplay={onDisplay}
					darkTheme={darkTheme}
				/>
			))}
			<Soguma
				onDisplay={onDisplay}
				darkTheme={darkTheme}
				onSogumaClick={onSogumaClick}
			/>
		</motion.div>
	);
}
