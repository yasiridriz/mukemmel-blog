import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function Contact() {
    return (
        <Layout>
            <div>
                <h1>Contact with me:</h1>
                <div className="contactbox">
                    <input type="text" placeholder="Your Name" /> <br /> <br />
                    <textarea placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn-main">Send</button>
            </div>

        </Layout>
    );
}