import { motion, useTransform, useViewportScroll} from 'framer-motion'
import SogumaVx from './sogumaVx'
import SogumaVxPhone from './sogumaVxPhone'

const SoguEye = ({ onDisplay, itemsToDisplay, displayItem, darkTheme }) => {

	const { scrollYProgress } = useViewportScroll();
	const sogumaScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);
	const sogumaYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);

	return (
		<motion.div className="absolute flex justify-center items-end md:items-start md:h-100 lg:h-100 md:top-1/4 top-0 h-1/3 lg:top-1/3 w-full z-20 pointer-events-none  "
		style={onDisplay.displayState ?
			{
				scale: sogumaScale,
				y: sogumaYoffset
			} : {
				scale: 1,
				y: 0
			}
		}>
		<SogumaVx repos={itemsToDisplay} setOnDisplay={displayItem} onDisplay={onDisplay} darkTheme={darkTheme} />
		<SogumaVxPhone repos={itemsToDisplay}  setOnDisplay={displayItem} onDisplay={onDisplay} darkTheme={darkTheme} />
	</motion.div>
	)
}

export default SoguEye
