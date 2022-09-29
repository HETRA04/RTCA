import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Register from "./Register"
import { useAuthState } from 'react-firebase-hooks/auth';










function App() {
  
  return (
    <div className="App">
      <Register/>
      
      
     </div>
  )
}

export default App;
