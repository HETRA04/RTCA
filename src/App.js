import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import Register from './Register';










function App() {
  
  return (
    <div className="App">
      <Register/>
      
      
     </div>
  )
}

export default App;
