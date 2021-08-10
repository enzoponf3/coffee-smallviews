import * as React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import styles from "./Layout.module.scss"
import logo from "~/favicon.svg"
import penLogo from "~/assets/icons/edit_white_24dp.svg"
import linkedinLogo from "~/assets/icons/linkedin.svg"
import githubLogo from "~/assets/icons/github.svg"
import Home from "../Home"
import Add from "../Add"
import Login from "../Login"
import Review from "../Review"
import ScrollToTop from "./ScrollToTop"
import Register from "../Register"

const Layout: React.FC = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <header className={styles.header}>
          <nav className={styles.headerContainer}>
            <NavLink to="/">
              <h1>Coffee Smallview
                <img src={logo} alt="app logo"/>
              </h1>
            </NavLink>
            <div>
              <NavLink exact to="/add" >Review<i><img src={penLogo} alt="pen" /></i></NavLink>
              <NavLink to="/login">Log In</NavLink>
            </div>
          </nav>
        </header>
        <Switch>
          <Route exact path="/"><main><Home/></main></Route>
          <Route exact path="/add" ><main><Add/></main></Route>
          <Route exact path="/add/:coffeeId" render={()=> <main><Add/></main> }/>
          <Route exact path="/login"><main><Login/></main></Route>
          <Route exact path="/login/:coffeeId"><main><Login/></main></Route>
          <Route exact path="/register"><main><Register/></main></Route>
          <Route exact path="/register/:coffeeId"><main><Register/></main></Route>
          <Route exact path="/review/:coffeeId"><main><Review/></main></Route>
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
