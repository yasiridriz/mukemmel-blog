import React, { useState } from 'react';
import axioswal from 'axioswal';
import { motion } from 'framer-motion';
import Router from 'next/router';

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

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axioswal.post(process.env.api_uri + process.env.api_user_reg, {
            email: email,
            password: password,
            password2: password2,
        }).then((data) => {
            if (data.status === 'ok') {
            }
            Router.push('/auth/login')
        }).catch((err) => {
            console.log("Api call unsucessfull", err);
        })
    };

    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">
            <motion.h3 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">
                <span>New User:</span>
            </motion.h3>
            <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} className="form-box">
                <div className="form-box col-md-12">
                    <form onSubmit={handleSubmit} method="POST" className="form-box">
                        <div className="group">
                            <input type="email" value={email}
                                onChange={e => setEmail(e.target.value)} className="input-default" required />
                            <label>Email </label>
                        </div>
                        <div className="group">
                            <input value={password}
                                onChange={e => setPassword(e.target.value)} type="password" className="input-default" required />
                            <label>Password</label>
                        </div>
                        <div className="group">
                            <input value={password2}
                                onChange={e => setPassword2(e.target.value)} type="password" className="input-default" required />
                            <label>Confirm Password</label>
                        </div>
                        <div className="group">
                            <button type="submit" className="btn-main" >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Register;