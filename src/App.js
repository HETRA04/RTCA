import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import Register from './Register';
import Login from './Login'
import Home from './Home'










function App() {
  
  return (
    <div className="App">
      <Home/>
      
      
     </div>
  )
}

export default App;
