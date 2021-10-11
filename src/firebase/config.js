import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3q8TahtQyC2sGQnqvzM0y16UZaCeVQUY",
    authDomain: "fir-76ddd.firebaseapp.com",
    projectId: "fir-76ddd",
    storageBucket: "fir-76ddd.appspot.com",
    messagingSenderId: "872612824752",
    appId: "1:872612824752:web:fa87a4f05492639fbddd75",
    measurementId: "G-P0ZK9TK2JY"
  };

 export default firebase.initializeApp(firebaseConfig)
