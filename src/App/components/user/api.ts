import app from "~/firebase"
import { User } from "./types"

export default {
  get: (userId: string): Promise<User> => {
    const db = app.firestore()
    return db.collection("users").where("id", "==", userId) 
  }
}