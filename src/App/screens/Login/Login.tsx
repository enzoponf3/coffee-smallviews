import * as React from "react"
import LoginForm from "~/App/components/form/loginForm"
import RegisterForm from "~/App/components/form/registerForm"

import styles from "./Login.module.scss"

const Login: React.FC = () => {
  const [login, setLogin] = React.useState<boolean>(true)

  return (
    <div className={styles.formContainer}>
      <button type="button" onClick={() => setLogin(!login)}>Switch Form</button>
      {
        login 
          ? <>
            <h2>Login</h2>
            <LoginForm/>
          </>
          : <>
            <h2>Register</h2>
            <RegisterForm/>
          </>
      }
    </div>
  )
}

export default Login
