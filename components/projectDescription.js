import {motion, useTransform, useViewportScroll} from 'framer-motion'

const ProjectDescription = ({ title, text, width }) => {
  return (
    <div className={`${width || "w-full"}`}>
      <motion.div
      className="relative flex justify-center items-center w-full  pt-full border-4 border-black rounded-full"
      >
      <hr className="absolute left-full top-1/2 border-2 border-black w-screen"></hr>
      <div className="absolute flex flex-col justify-start items-center top-0 h-full w-full rounded-full overflow-hidden">
      <h2>{title}</h2>
      <p>{text}</p>
      </div>
      </motion.div>
    </div>
  )
}

export default ProjectDescription
