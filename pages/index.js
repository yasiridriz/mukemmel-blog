import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion } from "framer-motion"
import ReactRotatingText from 'react-rotating-text';
import { useEffect } from 'react'

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
const titleVariants = {
  initial: { scale: 1.07, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", delay: 0.2 } },
  exit: {
    scale: 0.6,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
const contentVariants = {
  initial: { scale: 1, y: 60, x: -60, opacity: 0 },
  enter: { scale: 1, y: 0, x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.5 } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  },
}

export default function home() {

  const handleScroll = () => {

  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className="landing container" >
      <div className="landing" >
        <motion.p initial="initial" animate="enter" exit="exit" variants={contentVariants} className="message"> Hi! My name is <span className="name">Yasir Idriz</span>, <br />a freshman at Gymnasium <br />"Zef Lush Marku" <br />- Skopje, N. Macedonia,<br /> obsessed with <ReactRotatingText items={[`programming`, `basketball`, `swimming`, `learning`]} /></motion.p>
        {/* <div className="sigcontainer">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="559.000000pt" height="614.000000pt" viewBox="0 0 559.000000 614.000000"
            preserveAspectRatio="xMidYMid meet" className="signature">

            <g transform="translate(0.000000,614.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path className="signature stroke" d="M3905 6113 c-343 -42 -814 -179 -1276 -373 -77 -31 -139 -55 -139 -51 0 3 14 59 30 125 35 140 37 169 9 197 -25 25 -60 20 -139 -22 -134 -71 -315 -242 -603 -569 -223 -253 -237 -266 -402 -387 -205 -149 -327 -254 -540 -465 l-191 -187 -24 94 c-13 52 -27 95 -31 95 -4 0 -24 -15 -44 -34 l-36 -35 2 -136 2 -137 -84 -106 c-165 -208 -275 -375 -364 -553 -44 -87 -54 -122 -36 -133 28 -18 259 193 436 398 50 58 93 105 96 105 3 1 23 -65 44 -146 114 -450 314 -1001 366 -1011 22 -4 78 45 63 55 -64 48 -271 638 -378 1083 -17 67 -22 108 -16 114 5 5 11 8 13 5 2 -2 27 -78 56 -169 224 -703 568 -1404 872 -1776 133 -163 295 -298 424 -354 74 -33 161 -37 211 -12 61 31 133 100 167 161 l32 56 6 -160 c10 -240 52 -423 148 -643 104 -240 288 -484 504 -667 139 -117 255 -193 431 -281 238 -118 462 -182 608 -172 55 3 72 9 116 41 57 42 92 103 92 159 0 59 -38 166 -102 288 -103 197 -177 302 -635 900 -359 470 -616 828 -825 1153 -94 145 -117 187 -112 207 12 54 141 364 221 533 47 98 82 181 79 184 -26 27 -159 -224 -287 -542 -27 -66 -52 -121 -56 -122 -9 -3 -24 22 -191 312 -122 212 -256 477 -250 495 1 5 24 -5 50 -23 66 -47 156 -86 229 -99 115 -20 206 18 327 135 114 112 174 243 192 426 10 93 3 249 -16 348 -5 29 -4 33 15 33 47 0 131 69 164 135 21 43 36 128 38 220 1 44 4 84 6 88 3 5 24 -20 46 -55 52 -80 160 -188 211 -212 80 -38 141 -20 233 66 l52 50 80 -66 c186 -155 375 -387 623 -766 133 -202 297 -471 418 -685 242 -429 382 -614 603 -800 l58 -48 26 20 c15 10 28 24 30 29 2 6 -42 50 -98 99 -164 145 -308 330 -466 605 -323 561 -436 745 -616 1005 -198 287 -377 493 -541 623 -39 31 -73 57 -75 59 -2 1 7 39 19 85 45 164 37 440 -19 643 l-18 65 82 65 c165 129 315 306 315 372 0 57 -93 84 -235 66z m144 -80 c19 -12 22 -20 17 -46 -9 -45 -69 -132 -137 -198 -56 -56 -187 -155 -193 -148 -2 2 -18 35 -35 72 -41 92 -97 183 -144 234 l-38 42 38 10 c21 5 79 17 128 27 189 35 316 37 364 7z m-1573 -99 c7 -27 -12 -132 -42 -232 l-16 -53 -168 -84 c-182 -91 -378 -201 -514 -289 -47 -30 -86 -53 -86 -50 0 21 478 541 563 613 80 69 177 121 223 121 28 0 35 -4 40 -26z m971 -3 c52 -32 148 -175 198 -294 l16 -38 -38 -15 c-25 -11 -58 -15 -98 -12 -74 5 -112 30 -151 102 -24 43 -29 66 -32 142 -3 57 0 99 7 113 15 27 55 28 98 2z m-163 -38 c-11 -26 -15 -61 -12 -122 4 -107 39 -187 100 -231 60 -43 110 -47 199 -15 41 15 81 29 90 32 33 10 79 -250 79 -439 0 -108 -13 -221 -29 -247 -6 -9 -24 -2 -72 29 -91 59 -283 153 -370 180 -41 12 -82 30 -91 39 -10 9 -29 61 -43 116 -38 146 -86 309 -95 318 -4 4 -22 -4 -40 -19 -31 -26 -32 -30 -26 -79 3 -29 24 -108 46 -177 45 -141 47 -153 24 -144 -30 12 -287 7 -424 -8 -294 -32 -311 3 -191 379 l42 130 142 59 c211 87 626 232 674 235 9 1 8 -9 -3 -36z m-884 -300 c0 -5 -23 -80 -52 -168 -46 -141 -52 -170 -52 -248 -1 -73 -3 -86 -16 -81 -8 3 -42 12 -75 21 -103 27 -186 -5 -289 -111 -74 -76 -125 -199 -127 -306 -2 -102 -11 -101 -58 8 -24 56 -49 102 -55 102 -17 0 -66 -52 -66 -71 0 -30 81 -271 147 -438 63 -160 151 -358 308 -689 89 -189 146 -355 209 -612 136 -551 150 -1020 35 -1182 -44 -61 -138 -61 -265 1 -181 88 -355 264 -552 558 -185 276 -413 742 -578 1181 -59 158 -184 536 -184 558 0 8 189 242 420 519 458 550 421 513 665 661 117 70 559 303 578 304 4 0 7 -3 7 -7z m-1078 -712 c-92 -109 -264 -316 -382 -459 -118 -144 -217 -261 -220 -262 -3 0 -17 43 -31 96 l-26 96 84 91 c107 117 238 242 378 361 114 97 345 275 357 276 4 0 -68 -89 -160 -199z m1673 188 c38 -5 76 -15 83 -22 7 -8 16 -60 21 -132 16 -210 -15 -396 -68 -403 -32 -5 -77 16 -96 44 -8 13 -27 56 -41 95 -54 149 -189 409 -213 409 -4 0 -24 -16 -45 -35 -25 -23 -36 -40 -32 -52 11 -38 18 -93 12 -93 -4 0 -37 24 -74 54 -37 29 -87 66 -112 82 l-45 28 155 17 c183 19 357 23 455 8z m-743 -51 c180 -86 371 -245 524 -438 33 -41 69 -95 81 -120 49 -105 63 -417 25 -562 -40 -150 -113 -262 -198 -304 -49 -24 -62 -26 -142 -22 -72 3 -99 10 -156 36 -197 92 -325 274 -460 649 -97 272 -93 594 9 734 41 55 78 71 165 67 62 -3 89 -10 152 -40z m1161 -88 c54 -27 137 -75 183 -105 l84 -55 -20 -40 c-24 -46 -45 -60 -95 -60 -68 0 -151 58 -229 159 -41 53 -106 160 -106 174 0 11 81 -22 183 -73z m-2768 -858 c-9 -19 -19 18 -29 98 -5 43 -4 43 16 -18 11 -36 17 -70 13 -80z m-94 7 l18 -102 -86 -101 c-48 -56 -148 -163 -223 -238 -178 -181 -197 -183 -110 -11 27 54 79 145 115 203 72 114 256 363 263 355 2 -2 13 -50 23 -106z m1908 -1181 c61 -103 111 -196 111 -206 0 -11 -7 -39 -16 -63 -9 -24 -33 -111 -54 -194 l-38 -150 -6 90 c-11 155 -36 324 -72 495 -47 225 -48 226 -42 220 3 -3 56 -89 117 -192z m277 -445 c222 -339 464 -670 1045 -1433 217 -284 315 -431 395 -595 92 -186 110 -312 48 -335 -99 -38 -375 31 -639 160 -225 109 -396 231 -565 402 -462 467 -622 1082 -464 1778 19 84 54 200 59 200 2 0 57 -80 121 -177z" />
              <path d="M4364 5259 c-19 -22 -19 -22 4 -8 12 8 22 17 22 21 0 12 -6 9 -26 -13z" />
            </g>
          </svg>

        </div> */}

      </div>
      <br />
      <br />
      <br />
      <div className="box">
        <h2 className="title right">Projects</h2>
        <p><Link href="/portfolio"><a> See All <span className="shift"> &rarr;</span> </a></Link></p>
        <br/>
        <div className="miniproject">
          <a href="http://fshi.unt.edu.mk" className="noborder" target="_blank">
            <div className="box project-box">
              <h2 className="title right">
                <a className="doubledLink" target="_blank" href="http://fshi.unt.edu.mk">fshi.unt.edu.mk <span className="shift extlink"><sup>&#8599;</sup></span></a>
              </h2>
              <div className="row">
                <motion.img initial="initial" animate="enter" exit="exit" variants={contentVariants} src="../static/images/portfolio/fshi-home.png"></motion.img>

                <p>
                  Website for the <br />Faculty of Informatic Sciences at University of Mother Teresa - Skopje
            </p>
              </div>
              <p>

              </p>
            </div>
          </a>
        </div>
      </div>
    </div>

  );
}