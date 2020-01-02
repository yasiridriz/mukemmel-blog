import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';
import moment from 'moment';

const titleVariants = {
  initial: { scale: 1.07, y: 0, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", delay: 0.2 } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
const contentVariants = {
  initial: { scale: 1, y: 60, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.5, delay: .2 } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  },
}

const truncate = function (str) {
  return str.length > 160 ? str.substring(0, 160) + "..." : str;
}


const PostList = props => (
  <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="containter">
    <Link href="/blog/create"><a className="btn-main"><span className="fab fa"></span>Write a post</a></Link>
    <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Blog Posts</span></motion.h1>
    <motion.div initial="initial" animate="enter" exit="exit" variants={{ initial: { scale: 1.07, y: 0, opacity: 0 }, enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.2 } }, }} >
      {props.data.map(post => (
        <Link href="/blog/[id]" as={`/blog/${post._id}`}>
          <a class="noborder">
            <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} key={post._id} className="postItem row">
              <div className="col-md-4" >
                <img src="##">
                </img>
              </div>
              <div className="col-md-8">
                <h2>{truncate(post.title)}</h2>
                <span className="updated">- {moment(post.updated).fromNow()}</span>

                <p style={{ color: "#444" }}>{truncate(post.subtitle)}</p>
                <p><a className="doubledLink">Read more <span className="shift">&rarr;</span></a></p>
              </div>
              
            </motion.div>
          </a>
        </Link>
      ))}
    </motion.div>
  </motion.div >
);

PostList.getInitialProps = async function () {
  const res = await fetch('http://localhost:4000/api/', {
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
    data: data
  };
};

export default PostList;