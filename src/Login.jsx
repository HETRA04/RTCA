import React from 'react'

const Login = () => {
  return (
    <div className="logincontainer">
        <div className="logincard">
            <div className="loginheader">
            <h1> Communicon </h1> 

            </div>
            <div className="loginbody">
                <input type="text" className="logininput"  placeholder='Email'/>
                <input type="password" className="logininput" placeholder='Password' />
                <input type='submit' className='loginsubmit' value='Log In'/>

            </div>
            <div className="loginfooter">
              <a href='google.com'>Sign in with google</a>
                
            </div>
        </div>
    </div>
  )
}

export default Login