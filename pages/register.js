import React, { useState } from 'react';
import axioswal from 'axioswal';
import Layout from '../components/layout';
import Router from 'next/router'

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

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axioswal
            .post('/api/users', {
                name,
                email,
                password,
            })
            .then((data) => {
                if (data.status === 'ok') {
                    Router.push('/');
                }
            });
    };

    return (
            <div className="box">
                <h3 className="title">Sign up</h3>
                <div className="form-box">

                    <form onSubmit={handleSubmit}>
                        <div className="group">
                            <input type="text" name="name" className="input-default" value={name}
                                onChange={e => setName(e.target.value)} required />
                            <label>Your Name</label>
                        </div>
                        <div className="group">
                            <input type="text" name="email" className="input-default" value={email}
                                onChange={e => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>
                        <div className="group">
                            <input name="password" type="password" className="input-default" value={password}
                                onChange={e => setPassword(e.target.value)} required />
                            <label>Password</label>
                        </div>
                        <div className="group">
                            <input type="submit" value="Send" className="btn-main" />
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default SignupPage;