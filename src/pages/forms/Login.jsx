import React from 'react'
import './forms.css'
export default function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <h2>Login</h2>
        <p className='only-admin'>This page is only for admins, please don't try to access it if you are not an admin.</p>

        <form className="login-form" action="#">

          <div className="input-box">
            <input type="text" id="email" placeholder="Enter your email" required />
          </div>

          <div className="input-box">
            <input type="password" id="password" placeholder="Enter your password" required />
            <a href="/forgot-password" className="forgot">Forgot password?</a>
          </div>

          <div className="input-box button" style={{ marginTop: '38px' }}>
            <input type="submit" value="Login" />
          </div>

        </form>
      </div>
    </div>
  )
}