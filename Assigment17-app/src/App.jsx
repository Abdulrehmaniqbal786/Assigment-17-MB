import React from 'react'
import Signup from './pages/SignUp'
import './App.css'
import { Router_App } from './config/Router_App'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './config/firebase-config'
import { set_user_auth } from './store/slices/user_data_slice'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()


  const check_user = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user hai', uid)
        dispatch(set_user_auth(true))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(set_user_auth(false))
        console.log('user available nh hai', user)
      }
    });
  }

  check_user()


  // signOut(auth)



  return (
   <Router_App />
  )
}

export default App