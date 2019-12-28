import Header from './header';
import Footer from './footer';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Layout = props => (
  <div>
      <Header />
        {props.children}
      <Footer />
  </div>
);

export default Layout;