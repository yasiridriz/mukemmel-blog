import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
    return (
        <Layout>
                <div className="box">
                    <h3 class="title">Contact with me</h3>
                    <p>
                        If you need to get in touch with me send me an email to <Link href="mailto:yasiridriz@gmail.com"><a
                        >yasiridriz@gmail.com</a></Link>, or send a message directly from below:
                    </p>
                    <div class="row">
                        <div class="form-box col-md-6">
                            <form method="POST" action="/contact">
                                <div class="group">
                                    <input type="text" name="name" class="input-default" required />
                                    <label>Full Name</label>
                                </div>
                                <div class="group">
                                    <input type="text" name="email" class="input-default" required />
                                    <label>Email</label>
                                </div>
                                <div class="group">
                                    <textarea name="message" class="input-default" required></textarea>
                                    <label>Message</label>
                                </div>
                                <div class="group">
                                    <input type="submit" value="Send" className="btn-main"/>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">

                        </div>
                    </div>

                </div>
        </Layout>
    );
}