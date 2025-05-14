import React from 'react'
import './about.css'
import Dots from '../../public/dots.webp'
import AboutImg1 from '../../public/about-our-vision-img1.avif'
import AboutImg2 from '../../public/about-our-vision-img2.avif'
import CheckBlue from '../../public/check-blue.webp'
import Team from '../../public/team.avif'
export default function About() {
  return (
    <>
    <section className="about-big-title pd-y">
        <div className="container">
            <h1>About Us </h1>
        </div>
    </section>

    <section className="about-vision pd-y">
      <div className="container">
        <div className="about-vision-content">

          {/* Text Content */}
          <div className="about-vision-item">
            <h6 className="about-vision-semi-title">Our Vision</h6>
            <h1 className="about-vision-title">Empowering Academic Excellence through Smart PhD Management</h1>

            <div className="about-vision-item-desc">
              <i className='bx bx-check'></i>
              <h3 className="about-vision-item-desc-title">Personalized Process</h3>
              <p className="about-vision-item-desc-desc">
                Every doctoral journey is unique. phdTrack provides a tailored platform to guide candidates through every step of the PhD competition process, from application to final results.
              </p>
            </div>

            <div className="about-vision-item-desc">
              <i className='bx bx-cog'></i>
              <h3 className="about-vision-item-desc-title">Smart & Transparent</h3>
              <p className="about-vision-item-desc-desc">
                We leverage smart tools to simplify registration, document submission, and result tracking — ensuring transparency, accuracy, and real-time status updates for all candidates.
              </p>
            </div>

            <div className="about-vision-item-desc">
              <i className='bx bx-trophy'></i>
              <h3 className="about-vision-item-desc-title">Driven by Excellence</h3>
              <p className="about-vision-item-desc-desc">
                Our goal is to support academic institutions and applicants by enhancing efficiency, reducing stress, and maintaining the highest standards throughout the PhD selection journey.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="about-vision-item about-vision-item2">
            <div className="about-vision-item-img1">
              <img src={Dots} alt="" />
            </div>
            <div className="about-vision-item-img2">
              <img src={AboutImg1} alt="about-img" />
            </div>
            <div className="about-vision-item-img3">
              <img src={AboutImg2} alt="about-img" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="OurVision pd-y">
      <div className="container">

        <div className="dots">
          <img src={Dots} alt="dots" />
        </div>

        <div className="team">
          <img src={Team} alt="team" />
        </div>

        <div className="our-vision">
          <h5>
            Streamlined PhD Management
          </h5>
        </div>

        <div className="check-blue">
          <img src={CheckBlue} alt="check blue" />
        </div>

        <div className="OurVision-content">
          <h1 className="OurVision-content-title">
            TRANSFORMING DOCTORATE COMPETITIONS <br /> THROUGH TECHNOLOGY
          </h1>
          <h4 className="OurVision-content-semi-title">
            Simple, Transparent and Accessible
          </h4>
          <div className="OurVision-content-desc">
            At phdTrack, we envision a world where doctoral admissions are clear, streamlined, and stress-free. Our platform simplifies every step of the competition process — from application to result — with fairness, transparency, and modern tools to support candidates and institutions alike.
          </div>
        </div>

      </div>
    </section>

    <section className="testimonial pd-y" style={{ margin: '500px 0 0 0' }}>
      <div className="container">
        <div className="testimonial-content">

          <div className="testimonial-item">
            <h6 className="testimonail-title">Registered Candidates</h6>
            <h3 className="testimonail-number">12,000+</h3>
            <p className="testimonail-desc">Applicants currently <br /> participating in PhD competition</p>
          </div>

          <div className="testimonial-item">
            <h6 className="testimonail-title">Data Accuracy</h6>
            <h3 className="testimonail-number">99.8%</h3>
            <p className="testimonail-desc">Verified data processing <br /> during submission and evaluation</p>
          </div>

          <div className="testimonial-item">
            <h6 className="testimonail-title">Partner Institutions</h6>
            <h3 className="testimonail-number">35+</h3>
            <p className="testimonail-desc">Universities integrated <br /> into the phdTrack system</p>
          </div>

          <div className="testimonial-item">
            <h6 className="testimonail-title">Support Inquiries Handled</h6>
            <h3 className="testimonail-number">5,200+</h3>
            <p className="testimonail-desc">Administrative requests <br /> resolved by support team</p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
