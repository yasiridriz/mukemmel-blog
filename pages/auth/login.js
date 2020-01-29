import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/action';
import initialize from '../../utils/initialize';
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
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.5 } },
    exit: {
        scale: 0.6,
        y: 100,
        opacity: 0,
        transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
    },
}

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.authenticate(
            { email: email, password: password },
            'signin'
        );
    };

    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">
            <motion.h3 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">
                <span> Login:</span>
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
                            <button type="submit" className="btn-main" >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};

Login.getInitialProps = async function (ctx) {
    initialize(ctx);
};

export default connect(
    state => state,
    actions
)(Login);