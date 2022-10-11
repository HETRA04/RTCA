import React from 'react'
import { useState } from 'react';
import {  createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth, storage, db} from "./Firebase"
import { addDoc, collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//
import { getFirestore } from 'firebase/firestore';


const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async(e) => {

    
    
    e.preventDefault()
    // User email and password from input field
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    
try{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, displayName);


uploadTask.on(
  (error) => {
    setErr(true)
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user.uid,{
        displayName,
      })
    });
  }
);
}catch(err){
  setErr(true)
}

    
  }
  return (

    <div className="registercontainer">
        <div className="registercard">
            <div className="registerheader">
              
                <h1> Communicon </h1> 
                
            </div>
            <div className="registerbody">
              <form onSubmit={handleSubmit}>
                <input type="text" className="registerinput"  placeholder='Username'/>
                <input type="text" className="registerinput"  placeholder='Email'/>
                <input type="password" className="registerinput" placeholder='Password' />
                <input type='submit' className='registersubmit' value='Sign Up'/>
              </form>
            </div>
            <div className="registerfooter">
              {err && <span>Something Went Wrong</span>}
              <p>Sign Up With Google </p> 
              <p>Already have an account?</p>

            </div>
        </div>
    </div>
  )
}

export default Register