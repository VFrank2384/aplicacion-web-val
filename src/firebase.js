// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyB_IcJFgel4vSKl6K08J7scItm6HwNTZbQ",
  authDomain: "aplicacion-web-d0eb5.firebaseapp.com",
  projectId: "aplicacion-web-d0eb5",
  storageBucket: "aplicacion-web-d0eb5.appspot.com",
  messagingSenderId: "1003428653816",
  appId: "1:1003428653816:web:ba195f7c56fbee0605a90d",
  measurementId: "G-CSX16PV74W"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}
export default app;