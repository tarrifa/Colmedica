import * as firebase from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv38xkck8uDtp-d8f9hdIJ1kCWpCRoSvA",
  authDomain: "senior-care-583d2.firebaseapp.com",
  projectId: "senior-care-583d2",
  storageBucket: "senior-care-583d2.appspot.com",
  messagingSenderId: "138944132170",
  appId: "1:138944132170:web:f535966dd08cc4382a22b3",
  measurementId: "G-X05RX5ZP4N"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
   
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export{db,auth};