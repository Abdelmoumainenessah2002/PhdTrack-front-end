import React from 'react'
import { Link } from 'react-router-dom'
import './ResultsStatus.css'
import Waiting from '../../public/processing.png'
import survey from '../../public/survey.png'

export default function ResultsStatus() {
  return (
    <section className="results-status-section">
      {/* Waiting for results */}
      <div className="waiting-status">
        <img src={Waiting} height={50} alt="Waiting for results" className="status-image" />
        <h2>Results Not Yet Available</h2>
        <p>Please wait until the exam correction process is complete.</p>
      </div>

      {/* Results have been displayed */}
      <div className="displayed-status">
        <img src={survey} height={50} alt="Results displayed" className="status-image" />
        <h2>Results Have Been Displayed</h2>
        <h2>Results Are Available</h2>
        <p>Your results are now available. Click below to check them.</p>
        <Link to="/results" className="results-link">View Results</Link>
      </div>
    </section>
  )
}
