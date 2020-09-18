import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCUqxkF65S9HVgQPlindu6UdcCXS3u9cY8",
  authDomain: "hardcoders-recette-app.firebaseapp.com",
  databaseURL: "https://hardcoders-recette-app.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
