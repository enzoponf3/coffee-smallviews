import * as React from "react"

import UserContext, {Context} from "./context"

export function useUser(): Context["state"]["user"]{
  const {
    state: { user }
  } = React.useContext(UserContext)
  return user
}

export function useLogin(): Context["actions"]["login"]{
  const {
    actions: { login }
  } = React.useContext(UserContext)
  return login
}

export function useGoogleLogin(): Context["actions"]["googleLogin"]{
  const {
    actions: { googleLogin }
  } = React.useContext(UserContext)
  return googleLogin
}

export function useLogout(): Context["actions"]["logout"]{
  const {
    actions: { logout }
  } = React.useContext(UserContext)
  return logout
}

export function useRegister(): Context["actions"]["register"]{
  const {
    actions: { register }
  } = React.useContext(UserContext)
  return register
}
