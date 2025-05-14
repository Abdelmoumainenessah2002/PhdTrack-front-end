import React from 'react'
import './forms.css'
export default function Forgot() {
  return (
    <div className="forgot-pass login">
      <div className="wrapper">
        <h2>Reset Password</h2>
        <p style={{ marginTop: '10px' }}>
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form className="login-form" action="#">

          <div className="input-box">
            <input type="text" id="email" placeholder="Enter your email" required />
          </div>

          <div className="input-box button">
            <input type="submit" value="Reset Password" />
          </div>

        </form>
      </div>
    </div>
  )
}
