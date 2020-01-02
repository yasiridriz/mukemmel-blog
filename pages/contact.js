import React, { useState } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import axioswal from 'axioswal';
import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';

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


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        axioswal.post('http://localhost:4000/api/sendmail', {
            name: name,
            email: email,
            message: message,

        }).then((data) => {
            if (data.status === 'ok') {
                Router.push('/');
            }
        }).catch((err) => {
            console.log("Api call unsucessfull", err);
        })
    }
    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">
            <motion.h3  initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">Contact with me</motion.h3>
            <motion.p initial="initial" animate="enter" exit="exit" variants={contentVariants}>
                If you need to get in touch with me send me an email to <a href="mailto:yasiridriz@gmail.com"
                >yasiridriz@gmail.com</a>, or send a message directly from below:
                    </motion.p>
            <motion.div className="row" initial="initial" animate="enter" exit="exit" variants={contentVariants}>
                <div className="form-box col-md-6">
                    <form onSubmit={handleSubmit} method="POST" action="/contact">
                        <div className="group">
                            <input type="text" value={name}
                                onChange={e => setName(e.target.value)} className="input-default" required />
                            <label>Full Name</label>
                        </div>
                        <div className="group">
                            <input type="email" value={email}
                                onChange={e => setEmail(e.target.value)} className="input-default" required />
                            <label>Email</label>
                        </div>
                        <div className="group">
                            <textarea value={message}
                                onChange={e => setMessage(e.target.value)} className="input-default" required></textarea>
                            <label>Message</label>
                        </div>
                        <div className="group">
                            <input type="submit" value="Send" className="btn-main" />
                        </div>
                    </form>
                </div>
                {/* <div className="col-md-6">
                    <p>Find me on social media:</p>
                    <br/>
                    <br/>
                    <a href="https://www.facebook.com/jasir.idriz" target="_blank" className="btn-second facebook"><span className="fab fa-facebook"></span> Yasir</a><br/><br/>
                    <a href="https://www.instagram.com/yasiridriz" target="_blank" className="btn-second instagram"><span className="fab fa-instagram"></span> @yasiridriz</a><br/><br/>
                    <a href="https://www.facebook.com/jasir.idriz" target="_blank" className="btn-second linkedin"><span className="fab fa-linkedin"></span> Yasir</a>
                    <a></a>
                    <a></a>
                </div> */}
            </motion.div>

        </motion.div>
    );
}