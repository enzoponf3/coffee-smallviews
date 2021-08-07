import * as React from "react"

import styles from "./../Form.module.scss"

const LoginForm: React.FC = () => {
  return (
    <div className={styles.wara}>
      <form className={styles.form}>
        <label>email</label>
        <input placeholder="Type your email" type="text" />
        <label>Password</label>
        <input placeholder="Type your password" type="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginForm
