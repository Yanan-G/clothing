import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA13IotddR640D-MUQLOys-2WCRTBVEQB4",
    authDomain: "clothing-db-5c9ff.firebaseapp.com",
    databaseURL: "https://clothing-db-5c9ff.firebaseio.com",
    projectId: "clothing-db-5c9ff",
    storageBucket: "clothing-db-5c9ff.appspot.com",
    messagingSenderId: "180315075195",
    appId: "1:180315075195:web:4bac3947481008dd6768de"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;