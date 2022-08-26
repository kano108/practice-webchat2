// old version(3 package ma error avti hatai )
// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"

// new version
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from "./config"

firebase.initializeApp(config)

const auth=firebase.auth()
const db=firebase.firestore()

export {auth , db}
