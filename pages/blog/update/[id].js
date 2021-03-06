import React, { useState } from 'react';
import axioswal from 'axioswal';
import Router from 'next/router';
import CKEditor from "ckeditor4-react";
import { motion } from 'framer-motion';
import fetch from 'isomorphic-unfetch';
import {connect} from 'react-redux';


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
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.5 } },
    exit: {
        scale: 0.6,
        y: 100,
        opacity: 0,
        transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
    },
}


const Update = ({post, isAuthenticated}) => {

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [banner, setBanner] = useState(post.banner);
    const handleSubmit = (event) => {
        event.preventDefault();
        axioswal.post(process.env.api_uri + process.env.api_update + `/${post._id}`, {
            title: title,
            content: content,
            banner: banner,
            updated: Date.now()
        }).then((data) => {
            if (data.status === 'ok') {
                Router.push(`/blog/${post._id}`)
            }
        }).catch((err) => {
            console.log("Api call unsucessfull", err);
        })
    };


    return (
        <div>
            {(isAuthenticated && (
                <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">

                    <motion.h3 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">
                        <span>Write a new blog post:</span>
                    </motion.h3>
                    <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} className="form-box">
                        <form onSubmit={handleSubmit} className="form-box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="group">
                                        <input className="input-default" type="text" value={title}
                                            onChange={e => { setTitle(e.target.value); }} required />
                                        <label htmlFor="title">Title</label>
                                    </div>
                                    {/* <div className="group" style={{ "background": "#f1f1f1" }}>
                                <input type="file" className="browse-btn" accept=".epub, application/pdf" name="file" />
                                <div className="browse-btn">
                                    Upload banner
                                    </div>
                                <span className="file-info">...</span>
                            </div> */}
                                    <div className="group">
                                        <input className="input-default" type="text" value={banner}
                                            onChange={e => { setBanner(e.target.value); }} required />
                                        <label htmlFor="banner">Banner</label>
                                    </div>
                                    <br />
                                    <div className="">
                                        <CKEditor
                                            data={content}
                                            onChange={e => setContent(e.editor.getData())}
                                        />
                                        {/* <div className="">
                                    <textarea
                                        value={content}
                                        onChange={e => {setContent(e.target.value);}} className="input-default" style={{ "width": "100%" }}>

                                    </textarea>
                                </div> */}


                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <button type="submit" className="btn-main">Save</button>
                            </div>
                        </form>
                    </motion.div>
                    <script type="text/javascript" src="/static/scripts/filebrowser.js"></script>
                </motion.div>
            )) || (
                    <div className="section">
                        <h3>You are not authorized to view this page</h3>
                    </div>
                )
            }
        </div>

    );
};
Update.getInitialProps = async ({ req, query }) => {
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
export default connect(mapStateToProps)(Update);

