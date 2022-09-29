import React from 'react'
import { useState } from 'react';
import {  createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth, storage, db} from "./Firebase"
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




const Register = () => {
const [err, setErr] = useState(false)
const handlesubmit = async (e)=>{
     e.preventDefault()
     const displayname = e.target[0].value
     const email = e.target[1].value
     const password = e.target[2].value

     

try{
  const res = await createUserWithEmailAndPassword(auth, email, password)
 


const storageRef = ref(storage, displayname);

const uploadTask = uploadBytesResumable(storageRef, );

  uploadTask.on(
  (error) => {
    setErr(true)
    
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user, {
        displayname
      });
      await setDoc(doc(db, "users", res.user.uid),{
      uid: res.user.id,
      displayname,
      email
    })
  }
);
  })
  
    }catch(err){
      setErr(true)
  }
};
  return (

    <div className="registercontainer">
        <div className="registercard">
            <div className="registerheader">
              
                <h1> Communicon </h1> 
                
                
                

            </div>
            <div className="registerbody">
              <form onSubmit={handlesubmit}>
                <input type="text" className="registerinput"  placeholder='Username'/>
                <input type="text" className="registerinput"  placeholder='Email'/>
                <input type="password" className="registerinput" placeholder='Password' />
                <input type='submit' className='registersubmit' value='Sign Up'/>
              </form>
            </div>
            <div className="registerfooter">
              {err && <span>something went wrong</span>}
              <p>Sign Up With Google </p> 
              <a href='https.google.com'>Already have an account?</a>

            </div>
        </div>
    </div>
  )
}

export default Register