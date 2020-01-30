import React from "react";
import fetch from "isomorphic-unfetch";
import axioswal from "axioswal";
import Swal from "sweetalert2"
import { motion } from 'framer-motion';
import Router from "next/router";
import Link from 'next/link';
import moment from 'moment';
import { connect } from 'react-redux';
import Disqus from 'disqus-react';
import { useRouter } from 'next/router'

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

const Post = ({ post, isAuthenticated }) => {
  const deletePost = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure to delete the post?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        axioswal.post(process.env.api_uri + process.env.api_delete + `/${post._id}`, {
        }).then((data) => {
          if (data.status === "ok") {

          }
          Router.push('/blog')
        }).catch((err) => {
          console.log("Api call unsucessfull", err);
        })

      }
    })
  };
  const router = useRouter()
  const disqusShortname = 'yasiridriz';
  const disqusConfig = {
    url: 'https://yasiridriz.herokuapp.com' + router.pathname,
    identifier: post._id,
    title: post.title,
  };


  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="post-containter">
      {isAuthenticated &&
        <div className="inlinebuttons">
          <p>
            <button type="button" onClick={deletePost} className="btn-main"><span class="far fa-trash-alt"></span> Delete Post </button>
          </p>
          <p>
            <Link href="/blog/update/[id]" as={`/blog/update/${post._id}`} ><a className="btn-main noborder"><span class="far fa-edit"> </span> Update Post </a></Link>
          </p>
        </div>
      }
      <div>
        <div className="bannerWrapper">
          <img className="banner" src={post.banner}></img>
        </div>
        <h1 className="title"> {post.title} </h1>
        <p style={{"text-align": "right"}}>{moment(post.updated).format('MMMM Do YYYY')}</p>
        <h4 style={{ "font": "'PT Serif', serif", "color": "#555" }}> {post.subtitle}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.content }} class="postContent">

        </div>
        <h1 className="title"></h1>

        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </motion.div>
  )
};

Post.getInitialProps = async ({ req, query }) => {
  // http://localhost:4000/api/
  // https://api-yasiridriz.herokuapp.com/api/
  const res = await fetch(process.env.api_uri + query.id, {
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
const mapStateToProps = (state) => (
  { isAuthenticated: !!state.authentication.token }
);
export default connect(mapStateToProps)(Post);
