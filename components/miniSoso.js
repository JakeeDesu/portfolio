import { motion } from 'framer-motion'

const miniSosoTheme = {
  head : 'absolute top-0 left-0',
  hair : 'absolute bottom-3/4 h-3/4 w-3/4',
  eye : 'absolute h-1/2 w-1/2 top-1/4 ',
  eyelash : 'absolute w-3/4 h-3/4 top-1/4 '

}

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
const scaleFactor = Math.random();
const variants={
  start : {
    opacity : scaleFactor,
    scale : scaleFactor,
    y: 500 * scaleFactor,
    x: 500 * scaleFactor,
    transition :{
      delay : Math.random() * 2,
    }
  },
  animation : {
    opacity : scaleFactor,
    scale : scaleFactor * 0.8,
    y: [500 * scaleFactor, -100 * scaleFactor, 1000 * scaleFactor],
    x: [500 * scaleFactor, -1000 * scaleFactor, 400 * scaleFactor],
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
const hairVariants={
  start : {
    y: 0,
    x: 0,
    transition :{
      delay : Math.random() * 2,
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
      delay : Math.random() * 2,
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
    <div className={`relative flex justify-center ${height} ${width}`}
      variants={variants}
      initial="start"
      animate="animation"
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
    </div>
  );
}
