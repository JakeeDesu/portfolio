import { motion } from 'framer-motion'

const miniSosoTheme = {
  head : 'absolute top-0 left-0',
  hair : 'absolute bottom-3/4 h-3/4 w-3/4',
  eye : 'absolute h-1/2 w-1/2 top-1/4 ',
  eyelash : 'absolute w-3/4 h-3/4 top-1/4 '

}
const scaleFactor =  Math.random() * 2;

const eyelashVariants={
  start : {
    y: 10,
    x: 0,
  },
  animation : {
    y: [3, 3, 3, 3],
    x: [0, 0, 0, 0],
    transition : {
      x : {
        yoyo : Infinity,
        duration : 1
      },
      y : {
        yoyo : Infinity,
        duration : 2
      }
    }
  }
}

const variants={
  start : {
    opacity : 0,
    scale : 0,
    transition : {
      delay: 3,
      duration : 10
    }
  },
  animation : {
    opacity : [0.5, 0.2],
    scale : 0.5,
    boxShadow : "0 0px 30px 5px rgba(255, 255, 255, 0.2)",
    y: [0, 40 * 2, -5 * 2, 5 * 2, 0],
    x: [0, 5 * 2, 1 * 2, -1 * 2, 0],
    transition : {
      opacity : {
        repeat : Infinity,
        repeatType : 'mirror',
        duration : 3
      },
      x : {
        type : 'spring',
        repeat : Infinity,
        repeatType : 'mirror',
        duration : 5
      },
      y : {
        type : 'spring',
        repeat : Infinity,
        repeatType : 'mirror',
        duration : 5
      },
    }
  }
}
const hairVariants={
  start : {
    y: 0,
    x: 0,
    transition :{
      delay : 2,
    }
  },
  animation : {
    y: [-0, -10, -5],
    x: [0, 0, 0],
    transition : {
      x : {
        yoyo : Infinity,
        duration : 3
      },
      y : {
        yoyo : Infinity,
        duration : 3
      }
    }
  }
}
const eyeVariants={
  start : {
    y: 0,
    x: 0,
    transition :{
      delay : 2,
    }
  },
  animation : {
    y: [0, 0, 0, 0, 0, 0, 0],
    x: [10, 8, 8, 8, 8,0, -10],
    transition : {
      x : {
        yoyo : Infinity,
        duration : 2
      },
      y : {
        yoyo : Infinity,
        duration : 3
      }
    }
  }
}

export default function MiniSoso({ height, width }) {


  return (
    <motion.div className={`relative flex justify-center rounded-full ${height} ${width}`}
      variants={variants}
      initial="start"
      animate="animation"
      drag
      dragConstraints={{
        top : 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      // whileHover={{
      //   opacity : 1,
      //   scale : 1.2,
      //   transition : {
      //     duration : 0.3
      //   }
      //   // boxShadow : '0 0px 20px 8px rgba(255, 255, 255, 0.5)',
      // }}
    >
      <motion.img className={miniSosoTheme.head} src="/soso-head.svg"
      />
      <motion.img className={miniSosoTheme.hair} src="/soso-hair.svg"
        variants={hairVariants}
        initial="start"
        animate="animation"
      />
      <motion.img className={miniSosoTheme.eye} src="/soso-eye.svg"
        variants={eyeVariants}
        initial="start"
        animate="animation"
      />
      <motion.img className={miniSosoTheme.eyelash} src="/soso-eyelash.svg"
        variants={eyelashVariants}
        initial="start"
        animate="animation"
      />
    </motion.div>
  );
}
