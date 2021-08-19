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

  const addUserToDatabase = () => {
    const currentUser = firebaseApp.auth().currentUser
    const users = firebaseApp.firestore().collection("users")
    return users
      .where("id", "==", currentUser.uid)
      .get()
      .then( doc => {
        if(doc.empty){
          const {uid, displayName, email, photoURL, } = currentUser
          const newUser: User = {
            uid,
            displayName,
            email,
            photoURL,
            totalReviews: 0
          }
          return users.add(newUser)
        }
      })
  }

  async function handleGoogleLogin() {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    await firebaseApp.auth().signInWithPopup(googleProvider)
    return addUserToDatabase()
  }
  async function handleLogout() {
    return firebaseApp.auth().signOut()
  }

  async function handleRegister(user:User, userLogin:UserLogin) {
    return firebaseApp.auth()
      .createUserWithEmailAndPassword(user.email, userLogin.password)
      .then(() => {
        const currentUser = firebaseApp.auth().currentUser
        currentUser.updateProfile({
          displayName: user.displayName
        })
          .then(() => {
            addUserToDatabase()
          })
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
