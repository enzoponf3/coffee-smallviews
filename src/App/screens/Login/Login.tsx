/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import { Helmet } from "react-helmet-async"
import { Link, useParams } from "react-router-dom"
import LoginForm from "~/App/components/form/loginForm"
import RegisterForm from "~/App/components/form/registerForm"

import styles from "./Login.module.scss"

const Login: React.FC = () => {
  const { coffeeId } = useParams<{coffeeId: string}>()

  return (
    <>
      <Helmet>
        <title>Coffee Smallviews | Log In</title>
      </Helmet>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <LoginForm/>
        <Link to={ coffeeId ? `/register/${coffeeId}` : "/register"}>Don't have an account yet? Register</Link>
      </div>
    </>
  )
}

export default Login
