
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion'
import ImageDisplayer from '../components/soguma  suplies/imageDisplayer'
import Contact from './contact'
import Description from './soguma  suplies/description'
import MiniSoso from './soguma  suplies/miniSoso'
import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from "react-icons/si";


export const HomeBoard = ({ onDisplay, coverImage, fullName, bio }) => {

	const { scrollYProgress } = useViewportScroll();

	const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);
	const boardYoffset = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);
	// const boardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [1, 0.4, 0, 0]);

	return (
		<motion.div className="relative flex md:flex-row flex-col justify-around items-center w-full h-2/3 top-0 left-0 "
			animate={onDisplay.displayState ? {
				opacity: 1,
				y: 0,
			} : {
					opacity: 0.5,
					y: -0
				}}
			transition={{
				y: { type: "spring", duration: 1 },
				duration: 1,
			}}

		>
			<motion.div className="relative flex flex-col justify-center items-center h-full md:w-1/3 w-full "
				style={{
					scale: boardScale,
					y: boardYoffset,
					// opacity : boardOpacity
				}}>
				<ImageDisplayer
					onDisplay={onDisplay}
					imageSrc={coverImage}
					containerWidth=" w-6/12 "
					width="w-full max-w-6xl"
					rounded
					border
				/>
				{/* <Description
			color="bg-white"
			focus={onDisplay.displayState}
			imageSrc={coverImage}
			containerWidth=" w-6/12 "
			width="w-full max-w-6xl"
			title="hamid"
			text="zabzoub"
			/> */}
				<div className=" flex flex-col justify-center items-center w-full h-1/2  my-5 bg-blck md:bg-gry-700 rounded-sm shadow-soft2ark">
					<div className="w-11/12 h-1/6 flex justify-center md:justify-start items-center mx-10 text-gray-400 md:text-blac text-2xl md:text-3xl">
						<h2>{"Hi There !"}</h2>
					</div>
					<div className="w-11/12 h-5/6 text-gray-400 md:text-2xl text-xl md:text-blck text-center md:text-left">
						<p className="m-4">My name is <span className="text-gray-100 whitespace-nowrap">Hamza Mhindate</span>, <br/>im a <br className="hidden"/><span className="text-gray-100">Digital Architect</span> ...<br/><span className="text-xl"></span></p>
					</div>
				</div>
			</motion.div>
			<motion.div className="relative flex flex-row justify-end items-center h-full md:w-1/3 w-full bg-sogumaGren "
				style={{
					scale: boardScale,
					y: boardYoffset,
					// opacity : boardOpacity
				}}>
				<div className="absolute bottom-16 right-44">
					<MiniSoso
						width="w-34"
						height="h-34"
					/>
				</div>
				<Contact
				onDisplay={onDisplay}
				title={"contact me"}
				containerWidth=" md:w-28 lg:w-36 h-screen hidden md:flex justify-start"
				width="w-full max-w-4xl"
				color="bg-black text-white"
				media={[ { link : "",  text : "hamza.mhindate@gmail.com", icon : SiGmail }, { link : "https://ma.linkedin.com/in/hamza-mhindate-47a86a158",  text : "Hamza Mhindate", icon : SiLinkedin }, { link : "https://github.com/JakeeDesu",  text : "JakeeDesu", icon : SiGithub }, { link : "https://twitter.com/JakeeDesu", text : "Soguma", icon : SiTwitter } ]}
				/>
			</motion.div>
		</motion.div>
	)
}