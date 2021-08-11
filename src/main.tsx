import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import HomeScreen from "./App/screens/Home"
import Layout from "./App/screens/Layout"
import { HelmetProvider } from "react-helmet-async"
import {Provider as UserProvider} from "~/App/components/user/context"
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <Layout>
          <HomeScreen />
        </Layout>
      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
