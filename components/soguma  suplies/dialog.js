import { motion, useViewportScroll, useTransform } from 'framer-motion'

const variants={
    start : {
        opacity : 0,
        scale : 0.5,
        transition :{
            scale: { type: 'spring', duration: 0.5 },
            duration: 1,
        }
    },
    animate :{
        opacity : [0, 0.8],
        scale : [1, 1.2],
        transition : {
            duration: 1,
            opacity : { duration: 1, yoyo: Infinity },
            scale : { duration: 1, yoyo: Infinity },
        }
    }
}

export const Dialog = ({ text }) => {

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0,1], [1, 0.5]);
    const opacity = useTransform(scrollYProgress, [0,0.05,0.1, 0.2,1], [1,0, 0,0,0]);

    return (
        <motion.div className="absolute right-1/4 top-1/4  flex justify-center items-center  w-2/12 h-full "
            style={{
                scale : scale,
                opacity : opacity
            }}
        >
            <motion.div className="relative flex justify-center items-center w-full  pt-full "
                        initial="start"
                        animate="animate"
                        variants={variants}
            >
                <img className="absolute top-0 bottom-0  h-full object-contain" src={"/dialog.png"} />
                <div className="absolute flex justify-center items-center text-black text-xl lg:text-3xl font-black w-full h-full top-0  " >
                    <h1>{text}</h1>

                </div>
            </motion.div>
        </motion.div>
    )
} 