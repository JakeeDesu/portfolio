import { motion } from 'framer-motion'

// const function getStyle = ( type ) => {
//
//   switch (type) {
//     case "main":
//       return {
//
//       }
//       break;
//     case "prev":
//
//       break;
//     case "next":
//
//       break;
//     case "onhold":
//
//       break;
//     case "hidden":
//
//       break;
//
//     default:
//
//   }
//
//
//   return
// }


export default function Gim ({ height, width, color, type}) {


  return (
    <motion.div className={`absolute ${ height || "h-4"} ${ width || "w-4"} rounded-full ${ color || "bg-pink-600"}`}
      initial={false}
      animate={{
        top : '50%',
        left : '0%'
      }}
    >
    </motion.div>
  );
}
