import { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll, useMotionValue, AnimatePresence } from 'framer-motion'
import Gim from './gim'
import Soguma from './soguma'
import Menu from './menu'
import { wrap } from 'popmotion'
import SogumaEye from './sugumaEye'
import { theme } from './theme'
import { gimsProps } from './gimProps' // gims props

const variants = {
	initial: (onDisplay: any) => {
		if (onDisplay.displayState)
			return {
				y: 0,
				scale: 1,
			}
		else
			return {
				y: -100,//-410,
				scale: 0.7,//0.1,
			};
	},
	standing: (onDisplay: any) => {
		if (onDisplay.displayState)
			return {
				scale: [1, 0.7],
				y: [0, -100],
				transition: {
					scale: { delay: 0.3, duration: 1 },
					y: { delay: 0.3, duration: 1 }
				}
			}
		else
			return {
				y: 0,
				// x: 0,
				scale: 1,
				transition: {
					// duration: 0.5,
					scale: { delay: 0.3, duration: 1 },
					y: { delay: 0.3, duration: 1 }
				}
			};
	},
}


const data = ["art", "about me", "p1",]

export default function SogumaVx({ setOnDisplay, onDisplay, darkTheme, selectTitle }) {

	const [[direction, steps], setRotate] = useState([0, 0]);
	const [clickOff, setClickOff] = useState(true);


	const moveGims = (newDirection: number) => {
		setRotate([newDirection, steps + newDirection]);
	}

	const onSogumaClick = () => {
			switch (onDisplay.type) {
				case  -1 : // none state
					setOnDisplay(true, onDisplay.itemId, 0)
					break;
				case  0 : // menu state
					setOnDisplay(true, onDisplay.itemId, -1)
					break;
				case  1 : // about state
						if (!onDisplay.displayOff)
							onDisplay.displayState ? setOnDisplay(false, -1, 1) : moveGims(-1);
					break;
				case  2 :
					break;
				case  3 :
					break;
			}
	}
	const onDisplayKey = onDisplay.displayState ? 1 : 0;
	return (
		<motion.div
			className="relative flex flex-col justify-start items-center h-full w-full "
			key={onDisplayKey}
			initial="initial"
			animate="standing"
			custom={onDisplay}
			variants={variants}
		>
			{onDisplay.type === 3 && gimsProps.map((gim) => (
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
			<Menu onDisplay={onDisplay}  selectTitle={selectTitle}/>
			<Soguma
				onDisplay={onDisplay}
				darkTheme={darkTheme}
				onSogumaClick={onSogumaClick}
			/>
		</motion.div>
	);
}
