"use client"

import { useState } from "react"
import "./admindashbord.css"

export default function Admindashbord() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedFile) {
      alert("Veuillez sélectionner un fichier")
      return
    }

    setIsUploading(true)
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false)
      alert("Importation réussie!")
      setSelectedFile(null)
    }, 1500)
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="header">
          <div className="header-title">
            <i className="bx bx-import"></i> Importation des Candidats
          </div>
          <button className="retour-btn">
            <i className="bx bx-arrow-back"></i> Retour
          </button>
        </div>

        {/* Concours Title */}
        <div className="concours-title">
          <i className="bx bx-graduation"></i> Concours : Mathématiques appliquées - Mathématiques appliquées
          (2024/2025)
        </div>

        <div className="content-container">
          <div className="content-row">
            {/* Instructions Section */}
            <div className="instructions-section">
              <div className="section-header">
                <i className="bx bx-info-circle"></i> Instructions
              </div>
              <ul className="instruction-list">
                <li>
                  Le fichier Excel doit contenir les colonnes suivantes dans l'ordre :{" "}
                  <span className="highlight">Id, Nom, Prénom, Date Naiss, Amphi</span>
                </li>
                <li>
                  Format des dates : <span className="highlight">JJ/MM/AAAA</span>
                </li>
                <li>
                  Téléchargez notre{" "}
                  <a href="#" className="model-link">
                    modèle Excel
                  </a>{" "}
                  pour être sûr du format
                </li>
              </ul>
            </div>

            {/* Important Section */}
            <div className="important-section">
              <div className="section-header">
                <i className="bx bx-error-circle"></i> Important
              </div>
              <ul className="important-list">
                <li>
                  <i className="bx bx-check-shield"></i> Vérifiez les ID uniques
                </li>
                <li>
                  <i className="bx bx-calendar"></i> Format des dates strict
                </li>
                <li>
                  <i className="bx bx-columns"></i> Respectez l'ordre des colonnes
                </li>
              </ul>
            </div>
          </div>

          {/* File Upload Section */}
          <form onSubmit={handleSubmit}>
            <div className="file-upload-section">
              <div className="file-label">
                <i className="bx bx-file"></i> Fichier Excel (.xlsx)
              </div>
              <div className="file-input-container">
                <input type="file" id="excel-file" accept=".xlsx" onChange={handleFileChange} className="file-input" />
                <label htmlFor="excel-file" className="file-input-label">
                  Choose File
                </label>
                <span className="file-name">{selectedFile ? selectedFile.name : "No file chosen"}</span>
              </div>
              <div className="file-info">Taille maximale : 5MB - Format accepté : .xlsx</div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button type="submit" className="import-btn" disabled={isUploading}>
                {isUploading ? (
                  <>
                    <i className="bx bx-loader-alt bx-spin"></i> Importation...
                  </>
                ) : (
                  <>
                    <i className="bx bx-upload"></i> Importer
                  </>
                )}
              </button>
              <button type="button" className="cancel-btn">
                <i className="bx bx-x"></i> Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
