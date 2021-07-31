/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import { motion } from "framer-motion"

import styles from "./About.module.scss"

const About: React.FC = () => {
  return (
    <>
      <div className={styles.headerImage}></div>
      <motion.div 
        className={styles.about}
        animate={{opacity:1}}
        initial={{opacity: 0}}
        transition={{duration:.5}}
      >
        <div className={styles.aboutImage}></div>
        <div className={styles.content}>
          <h4>About</h4>
          <p>
              Hi! My name is <span className={styles.name}>Enzo</span> and I built this app in order to don't lose the impressions about a coffee shop so everyone can <span className={styles.underline}>know</span> and <span className={styles.underline}>help to know</span> wich are the better places to 
            <em>
               enjoy and relax with a good cup of Coffee.
            </em>
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default About
