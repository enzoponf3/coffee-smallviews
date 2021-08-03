import * as React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import styles from "./Layout.module.scss"
import logo from "~/favicon.svg"
import linkedinLogo from "~/assets/icons/linkedin.svg"
import githubLogo from "~/assets/icons/github.svg"
import Spinner from "~/App/components/spinner"
import HomeScreen from "../Home"
import About from "../About"
import Review from "../Review"

const Layout: React.FC = () => {
  return (
    <>
      <Router>
        <header className={styles.header}>
          <div className={styles.headerContainer}>

            <NavLink to="/">
              <h1>Coffee Smallview
                <img src={logo} alt="app logo"/>
              </h1>
            </NavLink>
            <ul>
              <li><NavLink exact to="/" activeClassName={styles.activeLink}>Home</NavLink></li>
              <li><NavLink exact to="/about" activeClassName={styles.activeLink}>About</NavLink></li>
              <div>
                <a href="#">Log in</a>
              </div>
            </ul>
            <div className={styles.burger}><span>Y</span></div>
          </div>
        </header>
        <Switch>
          <Route exact path="/"><main><HomeScreen/></main></Route>
          <Route path="/review/:reviewId"><main><Review/></main></Route>
          <Route path="/about" ><main><About/></main></Route>
        </Switch>
      </Router>
      <footer>
        <div className={styles.logos}>
          <a target="_blank" href="https://www.linkedin.com/in/enzo-ponferrada" rel="noreferrer">
            <i><img src={linkedinLogo} alt="linkedIn" /></i>
          </a>
          <a target="_blank" href="https://github.com/enzoponf3" rel="noreferrer">
            <i><img src={githubLogo} alt="github" /></i>
          </a>
        </div>
        <span>Made with ❤ by <a target="_blank" href="https://enzoponferrada.com.ar" rel="noreferrer">Ponf3</a></span>
        <span className={styles.copy}>&copy; Coffe Smallviews 2021</span> 
      </footer>
    </>
  )
}

export default Layout
