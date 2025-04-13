import React from 'react'
import './header.css'
import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>
              <Link>                 
                PhdTrack
              </Link>
            </h2>
          </div>

          <nav>
            <ul>
              <li><Link to="/about" >About Us</Link></li>
              <li><Link to="/contact" >Contact Us</Link></li>
              <li><Link >Results</Link></li>
            </ul>
          </nav>

          <div className="start">
            <Link className="start-btn" to='login'>Sign In</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
