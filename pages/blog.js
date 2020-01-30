import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';
import moment from 'moment';
import { connect } from 'react-redux';
import { useState } from 'react';

const titleVariants = {
  initial: { scale: 1.07, y: 0, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", staggerChildren: 0.2 } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
const contentVariants = {
  initial: { scale: 1, y: 60, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .6, ease: [0.48, 0.15, 0.25, 0.96], delay: .5 } },
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


const PostList = ({ data, isAuthenticated }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // SearchIn = (event) => {
  //   setSearchTerm(event.target.value)
  //   if (searchTerm && searchTerm.length > 1) {
  //     if (searchTerm.length % 2 === 0) {
  //       Search()
  //     }
  //   }
  // }

  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="containter">
      {isAuthenticated && <Link href="/blog/create"><a className="btn-main noborder"><span className="fab fa"></span>Write a post</a></Link>}
      <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Blog</span></motion.h1>
      <motion.div initial="initial" animate="enter" exit="exit" variants={{ initial: { scale: 1.07, y: 0, opacity: 0 }, enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.2 } }, }} >
        <span className="input input--nao">
          <input className="input__field input__field--nao" type="text" id="input-1" placeholder="Search" value={searchTerm} />
          <svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
            preserveAspectRatio="none">
            <path
              d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
          </svg>
        </span>
        <br />
        <br />
        {data.map(post => (
          <Link href="/blog/[id]" as={`/blog/${post._id}`} key={post.id}>
            <a className="noborder">
              <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} key={post._id} className="postItem row">
                <div className="col-xs-12 col-md-4 col-md-push-4" >
                  <img src={post.banner}>
                  </img>
                </div>
                <div className="col-xs-12 col-md-8 col-md-push-8">

                  <h2>{truncate(post.title)}</h2>
                  <span className="updated">- {moment(post.updated).fromNow()}</span>
                  <p className="readmore"><a style={{ "right": "15px", "bottom": "0", "position": "absolute" }} className="doubledLink">Read more <span className="shift" >&rarr;</span></a></p>
                </div>

              </motion.div>
            </a>
          </Link>
        ))}
      </motion.div>
    </motion.div >
  )
};

PostList.getInitialProps = async function () {
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
    data: data
  };
};
const mapStateToProps = (state) => (
  { isAuthenticated: !!state.authentication.token }
);
export default connect(mapStateToProps)(PostList);