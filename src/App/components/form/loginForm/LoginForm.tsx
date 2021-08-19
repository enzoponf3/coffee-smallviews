import * as React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import styles from "./../Form.module.scss"
import { useLogin } from "~/App/components/user/hooks"

const LoginForm: React.FC = () => {
  const [disabled, setDisabled] = React.useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const login = useLogin()
  
  interface UserLogin {
    email: string,
    password: string
  }

  const submit: SubmitHandler<UserLogin> = (data) =>{
    setDisabled(true)
    login(data)
      .catch(()=>{
        setDisabled(false)
        alert("Failed to login")
      })
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <div className={styles.errorLog}>
        {errors.password && <li>{errors.password.message}</li>}
      </div>
      
      <label>email</label>
      <input {...register("email")} placeholder="Type your email" type="email" />
      <label>Password</label>
      <input 
        type="password" 
        {...register("password",{
          minLength: {
            value: 6,
            message: "The password must have at least 6 characters"
          }
        })} 
        placeholder="Type your password" 
      />
      <button disabled={disabled} type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
