import Image from 'next/Image'
import { wrap } from 'popmotion'
import { useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion'

const images = [
	"/img1.png",
	"/img2.png",
	"/img3.png",
]

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};


export default function ImageDisplayer ({ dataToDisplay }) {
const [[page, direction], setPage] = useState([0, 0]);


const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };


	return (

						<AnimatePresence initial={false} custom={direction}>
						<div className="w-full flex flex-col justify-start items-start  m-10 p-6 overflow-hidden">
									<motion.div
										className="relative w-full p-2 "

										>
			        <motion.img
			          key={page}
			          src={images[imageIndex]}
			          custom={direction}
			          variants={variants}
			          initial="enter"
			          animate="center"
			          exit="exit"
			          transition={{
			            y: { type: "spring", stiffness: 300, damping: 30 },
			            opacity: { duration: 0.2 }
			          }}
			          drag="y"
			          dragConstraints={{ left: 0, right: 0 }}
			          dragElastic={1}
			          onDragEnd={(e, { offset, velocity }) => {
			            const swipe = swipePower(offset.y, velocity.y);

			            if (swipe < -swipeConfidenceThreshold) {
			              paginate(1);
			            } else if (swipe > swipeConfidenceThreshold) {
			              paginate(-1);
			            }
			          }}
			        />
							</motion.div>
				</div>
			      </AnimatePresence>

	)
}
