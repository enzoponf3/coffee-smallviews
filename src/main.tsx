import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import HomeScreen from "./App/screens/Home"
import Layout from "./App/screens/Layout"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Layout>
        <HomeScreen />
      </Layout>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
