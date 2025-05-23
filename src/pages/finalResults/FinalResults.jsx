"use client"

import { useState } from "react"
import "./FinalResults.css"

const calculateDecision = (e1, e2, e3) => {
  const diff = Math.abs(e1 - e2)
  let moyenne = 0

  if (diff <= 3) {
    moyenne = (e1 + e2) / 2
  } else {
    const closest = Math.abs(e1 - e3) <= Math.abs(e2 - e3) ? e1 : e2
    moyenne = (closest + e3) / 2
  }

  return {
    moyenne: Number.parseFloat(moyenne.toFixed(3)),
    decision: moyenne >= 10 ? "Admis(e)" : "Ajourné(e)",
  }
}

const mockData = [
  {
    id: 42,
    nom: "MECHTAB",
    prenom: "khawla",
    epreuve1: 6.0,
    epreuve2: 9.75,
    epreuve3: 0,
    moyenne: 8.813,
    decision: "Admis(e)",
  },
  {
    id: 155,
    nom: "ZEROULOU",
    prenom: "amal",
    epreuve1: 8.0,
    epreuve2: 8.5,
    epreuve3: 0,
    moyenne: 8.375,
    decision: "Admis(e)",
  },
  {
    id: 43,
    nom: "MESSAS",
    prenom: "Abir",
    epreuve1: 12.0,
    epreuve2: 7.0,
    epreuve3: 0,
    moyenne: 8.25,
    decision: "Admis(e)",
  },
]

const FinalResults = () => {
  const [data, setData] = useState([...mockData].sort((a, b) => b.moyenne - a.moyenne))
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({})
  const [activeTab, setActiveTab] = useState("withScores")

  const handleEditClick = (student) => {
    setEditing(student.id)
    setFormData({ ...student })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = () => {
    const { moyenne, decision } = calculateDecision(
      Number.parseFloat(formData.epreuve1),
      Number.parseFloat(formData.epreuve2),
      Number.parseFloat(formData.epreuve3),
    )

    setData((prev) =>
      [...prev.map((el) => (el.id === editing ? { ...formData, id: el.id, moyenne, decision } : el))].sort(
        (a, b) => b.moyenne - a.moyenne,
      ),
    )
    setEditing(null)
  }

  const handleUploadNamesOnly = (e) => {
    const file = e.target.files[0]
    if (!file) return
    window.location.href = "/link-names"
  }

  const handleUploadWithScores = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target.result
      const rows = text
        .trim()
        .split("\n")
        .map((row) => row.split(","))
      const header = rows[0]

      const newData = rows.slice(1).map((row) => {
        const obj = {}
        header.forEach((key, i) => {
          obj[key.trim()] = row[i].trim()
        })

        const { moyenne, decision } = calculateDecision(
          Number.parseFloat(obj.epreuve1),
          Number.parseFloat(obj.epreuve2),
          Number.parseFloat(obj.epreuve3),
        )

        return {
          id: Number.parseInt(obj.id),
          nom: obj.nom,
          prenom: obj.prenom,
          epreuve1: Number.parseFloat(obj.epreuve1),
          epreuve2: Number.parseFloat(obj.epreuve2),
          epreuve3: Number.parseFloat(obj.epreuve3),
          moyenne,
          decision,
        }
      })

      setData([...data, ...newData].sort((a, b) => b.moyenne - a.moyenne))
    }

    reader.readAsText(file)
  }

  // Calculate statistics
  const stats = {
    present: data.length,
    excluded: 0,
    absent: 74,
    total: data.length + 74,
  }

  return (
    <div className="final-results-page">
      <div className="final-results-container">
        <div className="header-section">
          <div className="header-title">
            <i className="bx bx-file"></i> Procès-Verbal Final
          </div>
          <div className="competition-info">
            <span className="competition-tag">Langue Anglaise</span>
            <span className="competition-tag">Civilisation</span>
            <span className="competition-tag year-tag">2024/2025</span>
          </div>
          
        </div>

        <div className="stats-section">
          <div className="stat-card present">
            <div className="stat-icon">
              <i className="bx bx-check-circle"></i>
            </div>
            <div className="stat-info">
              <div className="stat-label">Présents</div>
              <div className="stat-value">{stats.present}</div>
            </div>
          </div>

          <div className="stat-card excluded">
            <div className="stat-icon">
              <i className="bx bx-x-circle"></i>
            </div>
            <div className="stat-info">
              <div className="stat-label">Exclus</div>
              <div className="stat-value">{stats.excluded}</div>
            </div>
          </div>

          <div className="stat-card absent">
            <div className="stat-icon">
              <i className="bx bx-user-x"></i>
            </div>
            <div className="stat-info">
              <div className="stat-label">Absents</div>
              <div className="stat-value">{stats.absent}</div>
            </div>
          </div>

          <div className="stat-card total">
            <div className="stat-icon">
              <i className="bx bx-group"></i>
            </div>
            <div className="stat-info">
              <div className="stat-label">Total</div>
              <div className="stat-value">{stats.total}</div>
            </div>
          </div>
        </div>

        <div className="info-alert">
          <i className="bx bx-info-circle"></i>
          En cas d'égalité, veuillez saisir les moyennes Master et Licence des candidats concernés dans l'interface
          Admin.
        </div>

        <div className="upload-panel">
          <button className="upload-btn" onClick={() => document.getElementById("upload-names").click()}>
            <i className="bx bx-upload"></i> Téléverser noms uniquement
          </button>
          <input type="file" id="upload-names" accept=".csv" hidden onChange={handleUploadNamesOnly} />

          <button className="upload-btn" onClick={() => document.getElementById("upload-full").click()}>
            <i className="bx bx-upload"></i> Téléverser noms + notes
          </button>
          <input type="file" id="upload-full" accept=".csv" hidden onChange={handleUploadWithScores} />
        </div>

        <div className="results-table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th className="rank-column">Rang</th>
                <th className="candidate-column">Candidat</th>
                <th>Epreuve 1</th>
                <th>Epreuve 2</th>
                {activeTab === "withScores" && <th>Epreuve 3</th>}
                <th>Moyenne</th>
                <th>Décision</th>
                <th className="action-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr key={el.id}>
                  <td className="rank-column">
                    <div className="rank-circle">{index + 1}</div>
                  </td>
                  <td className="candidate-column">
                    <div className="candidate-info">
                      <div className="candidate-icon">
                        <i className="bx bx-user-circle"></i>
                      </div>
                      <div className="candidate-details">
                        <div className="candidate-name">{el.nom}</div>
                        <div className="candidate-firstname">{el.prenom}</div>
                        <div className="candidate-id">ID: {el.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>{el.epreuve1.toFixed(2)}</td>
                  <td>{el.epreuve2.toFixed(2)}</td>
                  {activeTab === "withScores" && <td>{el.epreuve3 ? el.epreuve3.toFixed(2) : "-"}</td>}
                  <td className="average-column">{el.moyenne.toFixed(3)}</td>
                  <td>
                    <span className={`decision-badge ${el.decision === "Admis(e)" ? "success" : "fail"}`}>
                      {el.decision}
                    </span>
                  </td>
                  <td className="action-column">
                    <button className="edit-btn" onClick={() => handleEditClick(el)}>
                      <i className="bx bx-edit-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editing && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Modifier les notes du candidat</h3>
              <button className="close-btn" onClick={() => setEditing(null)}>
                <i className="bx bx-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Nom</label>
                <input name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
              </div>
              <div className="form-group">
                <label>Prénom</label>
                <input name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" />
              </div>
              <div className="form-group">
                <label>Epreuve 1</label>
                <input
                  name="epreuve1"
                  value={formData.epreuve1 || ""}
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  min="0"
                  max="20"
                />
              </div>
              <div className="form-group">
                <label>Epreuve 2</label>
                <input
                  name="epreuve2"
                  value={formData.epreuve2 || ""}
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  min="0"
                  max="20"
                />
              </div>
              <div className="form-group">
                <label>Epreuve 3</label>
                <input
                  name="epreuve3"
                  value={formData.epreuve3 || ""}
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  min="0"
                  max="20"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setEditing(null)}>
                Annuler
              </button>
              <button className="save-btn" onClick={handleSave}>
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FinalResults
