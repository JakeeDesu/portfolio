import {motion, useTransform, useViewportScroll} from 'framer-motion'
import { useGetScrollInterval } from './useGetScrollInterval'

const ProjectCover = ({ imageSrc, width }) => {

  const [[yStart, yHalf, yEnd], getScrollRef] = useGetScrollInterval()
	// const [height, width] = useWindowDimensions()

	const { scrollYProgress } = useViewportScroll();
	const boardXoffset = useTransform(scrollYProgress, [yStart, yHalf, yEnd, 1], [ -2000, 0 , 50, 0]);
	const boardScale = useTransform(scrollYProgress, [yStart, yHalf, yEnd, 1], [2.2, 1.8, 1, 1]);
	const boardOpacity = useTransform(scrollYProgress, [yStart, yHalf, yEnd , 1], [0, 0.9, 1, 1]);

  console.log("cover interval : ", [yStart, yHalf, yEnd] )
  return (
    <motion.div ref={getScrollRef}
      className={`${width || "w-full"} bg-gray-100 `}
    >
      <motion.div
        className="relative flex justify-center items-center w-full  pt-full  border-4 border-black bg-black rounded-full"
        style={{
          x: boardXoffset,
          // scale: boardScale,
          opacity: boardOpacity,
        }}
        >
        <hr className="absolute right-full top-1/2 border-2 border-black w-screen"></hr>
        <img  className=" absolute top-0 bottom-0  h-full rounded-full bg-black" src={imageSrc} />
      </motion.div>
    </motion.div>
  )
}
// <motion.div
// className="absolute top-0 w-full h-full bg-black rounded-full"
// >
// </motion.div>

export default ProjectCover
