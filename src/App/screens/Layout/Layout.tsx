import * as React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import styles from "./Layout.module.scss"
import logo from "~/favicon.svg"
import HomeScreen from "../Home"
import Spinner from "~/App/components/spinner"
import About from "../About"

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Router>
        <header className={styles.header}>
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
        </header>
        <Switch>
          <Route exact path="/"><main><HomeScreen/></main></Route>
          <Route path="/review/:reviewId"></Route>
          <Route path="/about" ><main><About/></main></Route>
        </Switch>
      </Router>
      <footer>
          &copy; Ponf3 | 2021
      </footer>
    </div>
  )
}

export default Layout
