import React from "react";
import axios from "axios";
import { motion } from 'framer-motion';

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

const Post =  props => (
  <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="containter">
    <div>
      <h1> {props.post.title} </h1>
      <h4 style={{"font":"'PT Serif', serif;", "color":"#555"}}> {props.post.subtitle}</h4>
      <p>
        {props.post.content}
      </p>
    </div>
  </motion.div>
);

Post.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://api-yasiridriz.herokuapp.com/api/${query.id}`, {
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

export default Post;