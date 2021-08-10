import * as React from "react"

import styles from "./../Form.module.scss"

const RegisterForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <label>Name</label>
      <input placeholder="It will appear in the reviews" type="text"/>
      <label>Email</label>
      <input placeholder="Enter your email" type="text"/>
      <label>Password</label>
      <input placeholder="Enter your password" type="password"/>
      <label>Repeat Password</label>
      <input placeholder="Repeat your password" type="password"/>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
