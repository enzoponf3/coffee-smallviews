/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import { Helmet } from "react-helmet-async"
import { Link, Redirect, useParams } from "react-router-dom"

import styles from "./Login.module.scss"
import LoginForm from "~/App/components/form/loginForm"
import Spinner from "~/App/components/spinner"
import { useGoogleLogin, useUser } from "~/App/components/user/hooks"

const Login: React.FC = () => {

  const [status, setStatus] = React.useState<"resolved" | "pending">("resolved")

  const { coffeeId } = useParams<{coffeeId: string}>()
  const user = useUser()
  const googleLogin = useGoogleLogin()

  if(user){
    return <Redirect to="/"/>
  }
  
  if(status === "pending"){
    return <Spinner/> 
  } 
  
  return (
    <>
      <Helmet>
        <title>Coffee Smallviews | Log In</title>
      </Helmet>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <button 
          type="button" 
          className={styles.google} 
          onClick={() => {
            setStatus("pending")
            googleLogin()
              .then(() => setStatus("resolved"))
              .catch(() => setStatus("resolved"))
          }}
        >Google</button>
        <div className={styles.separator}>Login using your email</div>
        <LoginForm/>
        <Link to={ coffeeId ? `/register/${coffeeId}` : "/register"}>Don't have an account yet? Register</Link>
      </div>
    </>
  )
}

export default Login
