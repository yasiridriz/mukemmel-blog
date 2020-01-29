import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion } from "framer-motion"
import ReactRotatingText from 'react-rotating-text';
import { useEffect } from 'react'

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
const titleVariants = {
  initial: { scale: 1.07, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", delay: 0.2 } },
  exit: {
    scale: 0.6,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
const contentVariants = {
  initial: { scale: 1, y: 60, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  },
}

export default function home() {

  const handleScroll = () => {

  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className="landing container">
      <div className="landing">
        <motion.p initial="initial" animate="enter" exit="exit" variants={contentVariants} className="message"> Hi! My name is <span className="name">Yasir Idriz</span>, <br />a freshman at Gymnasium <br />"Zef Lush Marku" <br />- Skopje, N. Macedonia,<br /> obsessed with <ReactRotatingText items={[`programming`, `basketball`, `swimming`, `learning`]} /></motion.p>
      </div>
      <br />
      <br />
      <br />
      <div className="box">
        <h2 className="title right">Projects</h2>
        <p><Link href="/portfolio"><a> See All <span className="shift"> &rarr;</span> </a></Link></p>
        <br />
        <div className="miniproject">
          <a href="http://fshi.unt.edu.mk" className="noborder" target="_blank">
            <div className="box project-box">
              <h2 className="title right">
                <a className="doubledLink" target="_blank" href="http://fshi.unt.edu.mk">fshi.unt.edu.mk <span className="shift extlink"><sup>&#8599;</sup></span></a>
              </h2>
              <div className="row">
                <motion.img initial="initial" animate="enter" exit="exit" variants={contentVariants} src="../static/images/portfolio/fshi-home.png"></motion.img>

                <p>
                  Website for the <br />Faculty of Informatic Sciences at University of Mother Teresa - Skopje
            </p>
              </div>
              <p>

              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}