
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrTRzbbUbY5MxkhsAE3bfRadqTltd5ebw",
  authDomain: "futurepro-23a3e.firebaseapp.com",
  projectId: "futurepro-23a3e",
  storageBucket: "futurepro-23a3e.appspot.com",
  messagingSenderId: "804143304360",
  appId: "1:804143304360:web:98a1fdb9ada7f8bc537c9d",
  measurementId: "G-NHSJTLH656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();

