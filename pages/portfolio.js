import Layout from '../components/layout';
import Link from 'next/link';
import {motion} from 'framer-motion';
const titleVariants = {
  initial: { scale: 1.07, y: 0, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", delay: 0.2  } },
  exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
const contentVariants = {
  initial: { scale: 1, y: 60, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.5 } },
  exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  },
}

export default function Portfolio() {
  return (
      <motion.div className="container" initial="initial" animate="enter" exit="exit" variants={titleVariants}>
        <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>All of my Projects</span></motion.h1>
      </motion.div>
  );
}