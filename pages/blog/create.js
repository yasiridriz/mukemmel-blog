import React, { useState } from 'react';
import axioswal from 'axioswal';
import Router from 'next/router';
import { motion } from 'framer-motion';
import CKEditor from "ckeditor4-react";
import { connect } from 'react-redux';


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


const CreatePost = ({ isAuthenticated }) => {
    const [title, setTitle] = useState('');
    const [banner, setBanner] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        axioswal.post(process.env.api_uri + process.env.api_add, {
            title: title,
            banner: banner,
            content: content,
        }).then((data) => {
            if (data.status === 'ok') {
            }
            Router.push('/blog')
        }).catch((err) => {
            console.log("Api call unsucessfull", err);
        })
    };

    return (
        <div>
            {(isAuthenticated && (
                <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">

                    <motion.h3 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">
                        <span>New Post:</span>
                    </motion.h3>
                    <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} className="form-box">
                        <form onSubmit={handleSubmit} className="form-box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="group">
                                        <input className="input-default" type="text" value={title}
                                            onChange={e => setTitle(e.target.value)} required />
                                        <label htmlFor="title">Title</label>
                                    </div>
                                    <div className="group">
                                        <input className="input-default" type="text" value={banner}
                                            onChange={e => setBanner(e.target.value)} required />
                                        <label htmlFor="banner">Banner</label>
                                    </div>

                                    <br />
                                    <div className="">
                                        <CKEditor
                                            data={content}
                                            onChange={e => setContent(e.editor.getData())}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <button type="submit" className="btn-main">Save</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>

            )) || (
                    <div className="section">
                        <h3>You are not authorized to view this page</h3>
                    </div>
                )}

        </div>
    )
};
const mapStateToProps = (state) => (
    { isAuthenticated: !!state.authentication.token }
);


export default connect(mapStateToProps)(CreatePost);

