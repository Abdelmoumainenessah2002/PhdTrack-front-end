import React from 'react'
import './footer.css'
import Cards from '../../public/cards.webp'

export default function Footer() {
  return (
    <footer className="pd-y">
      <div className="container">
        <div className="footer-content">

          <div className="footer-item">
            <h2 className="footer-title">PhdTrack</h2>
            <ul>
              <li>
                <a href="#">
                  <i className='bx bxl-facebook-circle social-icon' data-color="#1877F2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='bx bxl-twitter social-icon' data-color="#1DA1F2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='bx bxl-youtube social-icon' data-color="#FF0000"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h6 className="footer-item-title">Platform</h6>
            <p className="footer-item-links"><a href="#">How it works</a></p>
            <p className="footer-item-links"><a href="#">Competition Rules</a></p>
            <p className="footer-item-links"><a href="#">Important Dates</a></p>
            <p className="footer-item-links"><a href="#">Jury Members</a></p>
            <p className="footer-item-links"><a href="#">Results</a></p>
          </div>

          <div className="footer-item">
            <h6 className="footer-item-title">About</h6>
            <p className="footer-item-links"><a href="#">Our Mission</a></p>
            <p className="footer-item-links"><a href="#">The Team</a></p>
            <p className="footer-item-links"><a href="#">Development Story</a></p>
            <p className="footer-item-links"><a href="#">FAQs</a></p>
            <p className="footer-item-links"><a href="#">Contact</a></p>
          </div>

          <div className="footer-item">
            <h6 className="footer-item-title">Contact Information</h6>
            <p className="footer-item-links">contact@PhdTrack.com</p>
            <p className="footer-item-links" style={{ margin: '10px 0' }}>
              Université Abbas Laghrour, Khenchela
            </p>
            <p className="footer-item-links">+213-795-24-13-82</p>
            <img src={Cards} alt="cards" className="footer-item-cards" style={{ margin: '10px 0' }} />
          </div>

        </div>
      </div>
    </footer>
  )
}
