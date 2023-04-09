import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhmzWgNeZw1dwu_E8bAkLBM2z4xx5C2qM",
    authDomain: "cchang-app-173ef.firebaseapp.com",
    databaseURL: "https://cchang-app-173ef-default-rtdb.firebaseio.com",
    projectId: "cchang-app-173ef",
    storageBucket: "cchang-app-173ef.appspot.com",
    messagingSenderId: "719079992455",
    appId: "1:719079992455:web:0b1288872aaaa638a75c22"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()