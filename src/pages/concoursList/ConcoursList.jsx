"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./concoursList.css"

export default function ConcoursList() {
  const [competitions] = useState([
    {
      id: 1,
      title: "Langue Anglaise",
      specialization: "Civilisation",
      year: "2024/2025",
    },
    {
      id: 2,
      title: "Sciences financières et comptabilité",
      specialization: "Comptabilité",
      year: "2024/2025",
    },
  ])

  return (
    <div className="concours-list-page">
      <div className="concours-container">
        {/* Header */}
        <div className="concours-header">
          <div className="concours-title">
            <i className="bx bx-graduation"></i> Gestion des Concours de Doctorats
          </div>
          <div className="concours-count">{competitions.length} concours enregistrés</div>
        </div>

        {/* New Competition Button */}
        <div className="new-concours-container">
          <button className="new-concours-btn">
            <i className="bx bx-plus-circle"></i> Nouveau Concours
          </button>
        </div>

        {/* Competitions List */}
        <div className="competitions-list">
          {competitions.map((competition) => (
            <div key={competition.id} className="competition-card">
              <div className="competition-info">
                <h2 className="competition-title">
                  {competition.title} <span className="specialization">- {competition.specialization}</span>
                </h2>
                <div className="competition-year">
                  <input type="checkbox" checked readOnly /> {competition.year}
                </div>
              </div>

              <div className="competition-actions">
                <Link to={`/admin-dashbord`} className="action-btn import-btn">
                  <i className="bx bx-import"></i> Importer
                </Link>
                <button className="action-btn candidates-btn">
                  <i className="bx bx-user"></i> Candidats
                </button>

                <button className="action-btn pv-btn">
                  <i className="bx bx-file"></i> PV Final
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
