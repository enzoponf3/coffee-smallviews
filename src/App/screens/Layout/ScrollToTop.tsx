import * as React from "react"
import { useLocation, withRouter } from "react-router-dom"

import styles from "./ScrollToTop.module.scss"


const ScrollToTop: React.FC = () => {
  const {pathname} = useLocation()
  React.useEffect(() => {
    window.scrollTo(0,0)
  },[pathname])

  return null
}

export default withRouter(ScrollToTop)
