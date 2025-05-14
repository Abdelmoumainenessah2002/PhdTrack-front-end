import React from 'react'
import './home.css'
import HomeImg from '../../public/home-img.jpg'
import ResultsStatus from '../../components/results status/ResultsStatus'
function Home() {
  return (
    <>
    <section className="home pd-y">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">Track Your Doctorate Journey with Ease</h1>
          <p className="home-desc">
            Welcome to phdTrack, your reliable platform for managing the doctorate competition process. Whether you're applying for a PhD, monitoring your progress, or seeking guidance, our tools and resources are here to support your academic success every step of the way.
          </p>
          <div className="home-img">
            <img src={HomeImg} alt="home" />
          </div>
        </div>
      </div>
    </section>

    <ResultsStatus />
    </>
  )
}

export default Home