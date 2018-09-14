import firebase from 'firebase'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID
}

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database()
export default firebase
