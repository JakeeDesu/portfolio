import Image from 'next/image'
import { wrap } from 'popmotion'
import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'


const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			// scale: 1.2,
			opacity: 0
		};
	},
	center: {
		zIndex: 1,
		// scale : 1,
		x: 0,
		opacity: 1
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			// scale : 1.2,
			opacity: 0
		};
	}
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const ImageDisplayer = ({ images }) => {
	const [[page, direction], setPage] = useState([0, 0]);
	const x = useMotionValue(0)

	const dergee = useTransform(x, [-500, 0, 500], [45,0,-45])
	const scaleratio = useTransform(x, [-100, 0, 100], [1.2,1,1.2])
	// We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
	// then wrap that within 0-2 to find our image ID in the array below. By passing an
	// absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
	// detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		//   <>
		<AnimatePresence initial={false} custom={direction}>
			<motion.div className="absolute h-full w-full flex flex-col md:flex-row justify-evenly items-center p-5 cursor-default overflow-hidden"
				key={page}
				custom={direction}
				variants={variants}
				initial="enter"
				animate="center"
				exit="exit"
				transition={{
					x: { type: "spring", stiffness: 300, damping: 30 },
					opacity: { duration: 0.2 },
					// scale: { type: "spring", stiffness: 300, damping: 30 },
				}}
				drag="x"
				dragConstraints={{ left: 0, right: 0, top :0, bottom : 0 }}
				dragElastic={1}
				onDragEnd={(e, { offset, velocity }) => {
					const swipe = swipePower(offset.x, velocity.x);

					if (swipe < -swipeConfidenceThreshold) {
						paginate(1);
					} else if (swipe > swipeConfidenceThreshold) {
						paginate(-1);
					}
				}}
				// style={{ }}
			>
				<div className="h-1/2 md:h-4/5 w-full md:w-4/12 flex justify-center items-center p-5 bg-white bg-opacity-10 shadow-lg rounded-sm" >
					<p>bla bla bla bla bla</p>
				</div>
				{/* <div className="relative w-full md:w-2/3 md:max-w-7xl h-1/2 md:h-full overflow-hidden">
					<Image
					layout="fill"
						width='responsive'
						height="responsive"
						src={images[imageIndex]}
					/>

				</div> */}
				<motion.img
					className="w-full md:w-6/12 md:max-w-7xl h-1/2 md:h-full pointer-events-none rounded-sm"
					src={images[imageIndex]}
					// style={{
					// 	// rotateY : dergee
					// }}
				/>
			</motion.div>
		</AnimatePresence>
		//   </>
	);
};
export default ImageDisplayer