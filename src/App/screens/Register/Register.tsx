import * as React from "react"
import { Helmet } from "react-helmet-async"
import { Link, Redirect, useParams } from "react-router-dom"
import RegisterForm from "~/App/components/form/registerForm"
import { useUser } from "~/App/components/user/hooks"

import styles from "./Register.module.scss"

const Register: React.FC = () => {
  const { coffeeId } = useParams<{coffeeId: string}>()
  const user = useUser()

  if(user){
    return <Redirect to="/" />
  }

  return (
    <>
      <Helmet>
        <title>Coffee Smallviews | Register</title>
      </Helmet>
      <div className={styles.formContainer}>
        <h2>Register</h2>
        <RegisterForm/>
        <Link to={ coffeeId ? `/login/${coffeeId}` : "/login"}>Already have an account? Log In</Link>
      </div>
    </>
  )
}

export default Register
