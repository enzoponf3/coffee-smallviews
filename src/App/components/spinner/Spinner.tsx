import * as React from "react"

import styles from "./Spinner.module.scss"

const Spinner: React.FC = () => {
  return (
  //Credit: https://dribbble.com/shots/5092176-Newton-Loader}
    <div className={styles.spinner}>
      <span className={styles.dot}></span>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>    )
}

export default Spinner
