import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseconfig = {
  apiKey: "AIzaSyD00jybDCBdFFqdNaRbKrGqyxBU8Qyc4L0",
  authDomain: "communicon.firebaseapp.com",
  projectId: "communicon",
  storageBucket: "communicon.appspot.com",
  messagingSenderId: "191690547295",
  appId: "1:191690547295:web:1099778f7925a78a5d3bea",
  measurementId: "G-39T4VK45B4"
  }

export const app = initializeApp(firebaseconfig)
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()