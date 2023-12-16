import React from 'react'
import './CSS/LoginSignup.css'

const Login= () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-field'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='E-Mail'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id=''/>
          <p>By contuning , I agree to the terms of use & policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
