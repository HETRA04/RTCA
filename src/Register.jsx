import React from 'react'




const Register = () => {
  return (
    <div className="registercontainer">
        <div className="registercard">
            <div className="registerheader">
              
                <h1> Communicon </h1> 
                
                
                

            </div>
            <div className="registerbody">
                <input type="text" className="registerinput"  placeholder='Username'/>
                <input type="text" className="registerinput"  placeholder='Email'/>
                <input type="password" className="registerinput" placeholder='Password' />
                <input type='submit' className='registersubmit' value='Sign Up'/>

            </div>
            <div className="registerfooter">
              <p>Sign Up With Google </p> 
              <a href='https.google.com'>Already have an account?</a>

            </div>
        </div>
    </div>
  )
}

export default Register