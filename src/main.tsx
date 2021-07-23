import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import HomeScreen from "./App/screens/Home"
import Layout from "./App/screens/Layout"
ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <HomeScreen />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
)
