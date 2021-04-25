import {motion, useTransform, useViewportScroll} from 'framer-motion'
import { useGetScrollInterval } from './useGetScrollInterval'

const ProjectCover = ({ imageSrc, width }) => {


  return (
    <motion.div 
      className={`${width || "w-full"}  `}
    >
      <motion.div
        className="relative flex justify-center items-center w-full  pt-full  border-4 border-black bg-black rounded-full"
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
