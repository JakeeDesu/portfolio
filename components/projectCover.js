import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useGetScrollInterval } from './useGetScrollInterval'

const ProjectCover = ({ animationValues, containerWidth, width, getRef, imageSrc, interval, values }) => {
  const { scrollYProgress } = useViewportScroll();
  console.log("cover interval : ", interval, " cover values : ", values)
  const xOffset = useTransform(scrollYProgress, interval, animationValues['x']);
  const yOffset = useTransform(scrollYProgress, interval, animationValues['y']);
  const scale = useTransform(scrollYProgress, interval, animationValues['scale']);

  return (
    <div ref={getRef} className={`relative flex flex-col items-start justify-center ${containerWidth || " w-full "}`}>
      <motion.div
        ref={getRef}
        className={`${width || "w-full"}  `}
        style={{
          x: xOffset,
          y: yOffset,
          scale : scale
        }}
      >
        <div
          className="relative flex justify-center items-center w-full  pt-full  border-4 border-black bg-black rounded-full"
        >
          <hr className="absolute right-full top-1/2 border-2 border-black w-screen"></hr>
          <img className=" absolute top-0 bottom-0  h-full rounded-full bg-black" src={imageSrc} />
        </div>
      </motion.div>
    </div>
  )
}
export default ProjectCover
