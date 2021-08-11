import * as React from "react"
import firebase from "firebase"

import firebaseApp from "~/firebase"
import { User } from "./types"

interface UserLogin{
    email: string
    password: string
}

export interface Context {
    state:{
        user: User | undefined
    }
    actions:{
        login: (userLogin: UserLogin) => Promise<void>
        googleLogin: () => Promise<void>
        logout: () => Promise<void>
        register: (user:User, userLogin:UserLogin) => Promise<void>
    }
    
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<User>()

  React.useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setUser)
  },[])

  async function handleLogin(userLogin:UserLogin){
    if(userLogin){
      return firebaseApp.auth()
        .signInWithEmailAndPassword(userLogin.email,userLogin.password)
    }
  }

  async function handleGoogleLogin() {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebaseApp.auth().signInWithPopup(googleProvider)
      .then(result => {
        if(!result.user.totalReviews){
          firebaseApp.auth().currentUser().updateProfile({
            totalReviews: 0
          })
        }
      })  
  }

  async function handleLogout() {
    return firebaseApp.auth().signOut()
  }

  async function handleRegister(user:User, userLogin:UserLogin) {
    return firebaseApp.auth().createUserWithEmailAndPassword(userLogin.email, userLogin.password)
      .then(userCredential => {
        firebaseApp.auth().currentUser().updateProfile({
          displayName: user.username,
          totalReviews: 0
        })
        setUser(userCredential.user)
      })
  }

  const state: Context["state"] = {
    user
  }
  const actions = {
    login: handleLogin,
    googleLogin: handleGoogleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>

}
export {UserContext as default, UserProvider as Provider}
