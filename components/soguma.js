import { motion } from 'framer-motion'
import Gim from '../components/gim'

export default function Soguma ({ height, width}) {

	return (
		<motion.div className={`relative flex justify-center items-center ${height || "h-1/2"} ${width || "w-1/2"} bg-white border-gray-900 shadow-2xl bg-blue-100`}>
			<Gim />
			<Gim />
			<Gim />
			<Gim />
			<Gim />

		</motion.div>
	);
}
