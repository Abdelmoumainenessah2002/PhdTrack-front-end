import "./header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>
              <Link to="/">PhdTrack</Link>
            </h2>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/concours-list">Concours</Link>
              </li>
            </ul>
          </nav>

          <div className="start">
            <Link className="start-btn" to="/login">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
