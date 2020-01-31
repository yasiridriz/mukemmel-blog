import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion } from "framer-motion"
import ReactRotatingText from 'react-rotating-text';
import { useEffect } from 'react';
import moment from 'moment';


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

const truncate = function (str) {
  return str.length > 80 ? str.substring(0, 80) + "..." : str;
}

const home = ({ post }) => {

  const handleScroll = () => {

  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="landing container">
      <div className="landing">
        <motion.p initial="initial" animate="enter" exit="exit" variants={contentVariants} className="message"> Hi! My name is <span className="name">Yasir Idriz</span>, <br />a freshman at Gymnasium <br />"Zef Lush Marku" <br />- Skopje, N. Macedonia,<br /> obsessed with <br className="obsessedwithnewline" /><ReactRotatingText items={[`programming`, `basketball`, `swimming`, `learning`]} /></motion.p>
      </div>
      <br />
      <br />
      <br />
      <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} className="box project">
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
                <div className="col-xs-12 col-md-6 col-md-push-6">
                  <img src="../static/images/portfolio/fshi-home.png"></img>
                </div>
                <div className="col-xs-12 col-md-6 col-md-push-6">
                  <h1 style={{ "font-family": "'Playfair Display', serif" }}>
                    Website for the <br />Faculty of Informatic Sciences at University of Mother Teresa - Skopje
                </h1>
                </div>


              </div>
              <p>

              </p>
            </div>
          </a>
        </div>
      </motion.div>
      <br />
      <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} className="box">
        <h2 className="title">Blog</h2>
        <p style={{ "text-align": "right" }}><Link href="/blog"><a> See All <span className="shift"> &rarr;</span> </a></Link></p>
        <Link href="/blog/[id]" as={`/blog/${post[0]._id}`}>
          <a className="noborder">
            <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} key={post._id} className="postItem row">
              <div className="col-xs-12 col-md-3 col-md-push-4" >
                <div className="imgContainer">
                  <img src={post[0].banner}>
                  </img>
                </div>
              </div>
              <div className="col-xs-12 col-md-9 col-md-push-8">
                <div className="postDetails">
                  <h2>{truncate(post[0].title)}</h2>
                  <span className="updated">- {moment(post.updated).fromNow()}</span>
                  <p className="readmore"><a className="doubledLink"> Read more <span className="shift" >&rarr;</span></a></p>
                </div>
              </div>

            </motion.div>
          </a>
        </Link>
      </motion.div>
    </motion.div>
  );
}

home.getInitialProps = async function () {
  const res = await fetch(process.env.api_uri, {
    method: 'get',
    dataType: 'json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json()

  console.log(data);

  return {
    post: data
  };
};

export default home;