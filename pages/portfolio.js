import { motion } from 'framer-motion';


const titleVariants = {
  initial: { scale: 1.07, y: 0, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", staggerChildren: 0.2 } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
const contentVariants = {
  initial: { scale: 1, y: 60, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .6, ease: [0.48, 0.15, 0.25, 0.96], delay: .5 } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  },
}


export default function Portfolio() {
  return (
    <div className="portfolio" >
      <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Projects</span></motion.h1>

      <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants}>
        <a href="http://localhost:3000/static/images/portfolio/CV.pdf" target="_blank" className="btn-main noborder">See my CV </a>
        <br />
        <br />
        <a href="http://fshi.unt.edu.mk" className="noborder" target="_blank">
          <div className="box project-box">
            <h2 className="title right">
              <a className="doubledLink" target="_blank" href="http://fshi.unt.edu.mk">fshi.unt.edu.mk <span className="shift extlink"><sup>&#8599;</sup></span></a>
            </h2>
            <div className="row">
              <div className="col-xs-12 col-md-6 col-md-push-6">
                <img src="../static/images/portfolio/fshi-home.png"></img>
              </div>
              <div className="col-xs-12 col-md-6 col-md-push-6">
                <h1 style={{ "font-family": "'Playfair Display', serif" }}>
                  Website for the <br />Faculty of Informatic Sciences at University of Mother Teresa - Skopje
                </h1>
              </div>


            </div>
            <p>

            </p>
          </div>
        </a>
      </motion.div>
    </div>
  );
}