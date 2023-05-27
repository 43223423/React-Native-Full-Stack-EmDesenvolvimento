

import {signOut, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDk4IJo71wlLc9vHIzJ2a90FNH4IIFgfdk",
  authDomain: "banco-62c84.firebaseapp.com",
  projectId: "banco-62c84",
  storageBucket: "banco-62c84.appspot.com",
  messagingSenderId: "330144617693",
  appId: "1:330144617693:web:99da2ebb23d12bbccab734"
};


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const logout = () =>signOut(auth)


export {auth, db, storage, logout}