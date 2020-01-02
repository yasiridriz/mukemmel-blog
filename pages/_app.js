import React from 'react';
import App from 'next/app';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Layout from '../components/layout';
import {AnimatePresence, motion} from 'framer-motion';

Router.events.on('routeChangeStart', () => { NProgress.start() })
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    )
    
  }
}
export default MyApp