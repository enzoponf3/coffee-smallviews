import * as React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Redirect } from "react-router-dom"

import styles from "./../Form.module.scss"
import { User } from "../../user/types"
import { useRegister } from "../../user/hooks"

const RegisterForm: React.FC = () => {
  const [disabled, setDisabled] = React.useState<boolean>(false)
  const { 
    register, 
    handleSubmit, 
    getValues, 
    formState: {errors} 
  } = useForm()

  interface UserLogin{
    email: string,
    password: string
  }

  interface FormInput{
    user: User,
    userLogin: UserLogin
  }

  const registerUser = useRegister()

  const submit: SubmitHandler<FormInput> = (data) => {
    setDisabled(true)
    data.user.totalReviews = 0
    registerUser(data.user, data.userLogin)
      .then(() => {
        return <Redirect to="/" />
      })
      .catch(() => {
        setDisabled(false)
        alert("Failed to register the user")
      })
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <div className={styles.errorLog}>
        {errors.user?.displayName && <li>{errors.user?.displayName?.message}</li>}
        {errors.user?.email && <li>{errors.user?.email?.message}</li>}
        {errors.userLogin && <li>{errors.userLogin.password?.message}</li> }
        {errors.repeat_password && <li>{errors.repeat_password.message}</li> }
      </div>
      <label>Name</label>
      <input 
        type="text"
        {...register("user.displayName",{
          pattern: {
            value: /(^[a-zA-Z0-9-_\s]+)$/i,
            message: "Allowed caracters: \"a-z\" \"A-Z\" \"0-9\" \"-\" \"_\""
          },
          required: "You must specify a name"
        })} 
        placeholder="It will appear in the reviews" 
      />
      <label>Email</label>
      <input 
        type="email"
        {...register("userLogin.email")}
        {...register("user.email",{required: "You must specify an email"})} 
        placeholder="Enter your email" 
      />
      <label>Password</label>
      <input 
        type="password"
        {...register("userLogin.password",{
          required: "You must specify a password",
          minLength:{
            value: 6,
            message: "Password must have at least 6 characters"
          }
        })}
        placeholder="Enter your password" 
      />
      <label>Repeat Password</label>
      <input 
        type="password"
        {...register("repeat_password",{
          validate: value =>
            value === getValues("userLogin.password") || "The passwords do not match"
        })}
        placeholder="Repeat your password" 
      />
      <button disabled={disabled} type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
