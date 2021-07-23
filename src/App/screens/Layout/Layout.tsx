import * as React from "react"

import styles from "./Layout.module.scss"
import logo from "~/favicon.svg"
const Layout: React.FC = ({children}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Coffee Smallview
          <img src={logo} alt="app logo"/>
        </h1>
        <ul>
          <li>Home</li>
          <li>Reviews</li>
          <li>About</li>
          <div>
            <a href="#">Log in</a>
          </div>
        </ul>
        <div className={styles.burger}><span>Y</span></div>
      </header>
      <main>
        {children}
      </main>
      <footer>
          &copy; Ponf3 | 2021
      </footer>
    </div>
  )
}

export default Layout
