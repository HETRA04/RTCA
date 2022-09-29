import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseconfig = {
    apiKey: "AIzaSyCxFEcwvyw71RtSAeh3GI-YTZyUcS05T44",
    authDomain: "chatapp-9ea55.firebaseapp.com",
    projectId: "chatapp-9ea55",
    storageBucket: "chatapp-9ea55.appspot.com",
    messagingSenderId: "932648553494",
    appId: "1:932648553494:web:039818cafe1b2834f17937",
    measurementId: "G-J4RXV6KC7J"
  }

export const app = initializeApp(firebaseconfig)
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()