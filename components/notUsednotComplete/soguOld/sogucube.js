import './sogucube.css';
import { motion } from 'framer-motion';


function Sogucube ({title, properties, moveEvent}){

	const defaultStyle={
		backgroundColor : `${properties.color}`,
		height : `${properties.size.h}%`,
		width : `${properties.size.w}%`,
		top : `calc(${properties.posi.y}% - ${properties.size.h / 2}%)`,
		left : `calc(${properties.posi.x}% - ${properties.size.w / 2}%)`,
		transform : `rotate(${properties.rotation}deg)`,

	}

	return (
		<motion.div className="sogucube-container" style={defaultStyle}
			initial={{ opacity : 1, y : -80 , scale : 1}}
			animate={{ opacity: 1, y : [0, 15, -10], scale : 1, rotateZ : properties.rotation, rotateY: [15, -15]}}
			transition={{ yoyo : Infinity, duration : 2 }}
		>
			<h1>{title}</h1>
			{/* <p>bla bla bla</p> */}
		</motion.div>
	);
}

export default Sogucube;
