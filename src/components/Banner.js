import React from "react"
import Typing from "react-typing-animation"

import styles from "../css/banner.module.css"

const Banner = ({ title, children }) => {
  return (
    <div className={styles.banner}>
      <Typing
        speed={90}
        startDelay={1000}>
        <h1 className={styles.title}>{title}</h1>
      </Typing>
      {children}
      <span>Let's build your digital business together</span>
    </div>
  )
}

export default Banner
