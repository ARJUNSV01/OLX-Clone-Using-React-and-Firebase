import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import {AuthContext,FirebaseContext} from '../store/Context'

const firebaseConfig = {
    apiKey: "AIzaSyD4kRMtl19ZQV36dM85eLxvKfckNqMiEic",
    authDomain: "olx-clone-bf082.firebaseapp.com",
    projectId: "olx-clone-bf082",
    storageBucket: "olx-clone-bf082.appspot.com",
    messagingSenderId: "689461186453",
    appId: "1:689461186453:web:30ba2434462b0a7f01709c",
    measurementId: "G-L69BEHPEE5"
  };
export default firebase.initializeApp(firebaseConfig)
