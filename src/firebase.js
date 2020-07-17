import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDi_bCgJoSnNOvIiOBwBtCLvveC_EW08m0",
    authDomain: "instagram-clone-cd014.firebaseapp.com",
    databaseURL: "https://instagram-clone-cd014.firebaseio.com",
    projectId: "instagram-clone-cd014",
    storageBucket: "instagram-clone-cd014.appspot.com",
    messagingSenderId: "258540121171",
    appId: "1:258540121171:web:c2c3d6d3f7fed25f912aa6",
    measurementId: "G-Z1DYDLXWGF"
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export {db, auth, storage}