"use client"

import { useState } from "react"
import "./LinkNames.css"

const mockStudents = [
  {
    id: 1,
    nom: "Sidi Ali",
    prenom: "Abderrahmane",
    naissance: "1991-05-16",
    epreuve1: 0.25,
    epreuve2: 0.25,
    epreuve3: "",
    moyenne: 0.25,
  },
  {
    id: 2,
    nom: "Brahimi",
    prenom: "Karim",
    naissance: "1990-11-23",
    epreuve1: "",
    epreuve2: "",
    epreuve3: "",
    moyenne: "",
  },
  {
    id: 3,
    nom: "Benali",
    prenom: "Lamia",
    naissance: "1992-02-12",
    epreuve1: "",
    epreuve2: "",
    epreuve3: "",
    moyenne: "",
  },
  {
    id: 4,
    nom: "Mansouri",
    prenom: "Yasmine",
    naissance: "1993-07-05",
    epreuve1: "",
    epreuve2: "",
    epreuve3: "",
    moyenne: "",
  },
  {
    id: 5,
    nom: "Bouaziz",
    prenom: "Mohammed",
    naissance: "1991-12-30",
    epreuve1: "",
    epreuve2: "",
    epreuve3: "",
    moyenne: "",
  },
]

const LinkNames = () => {
  const [students, setStudents] = useState(mockStudents)
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("students")

  const handleSelect = (student) => {
    setSelected({ ...student })
  }

  const handleChange = (e) => {
    setSelected((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = () => {
    setStudents((prev) => prev.map((s) => (s.id === selected.id ? selected : s)))
    alert("Modifications enregistrées")
  }

  const filtered = students.filter((s) => `${s.nom} ${s.prenom}`.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="link-names-page">
      <div className="link-names-container">
        <div className="header-section">
          <div className="header-title">
            <i className="bx bx-link"></i> Code en cours
          </div>
          <div className="code-badge">101</div>
        </div>

        

        <div className="scores-panel">
          <div className="score-item">
            <div className="score-label">Correction 1</div>
            <div className="score-value">0.25</div>
          </div>
          <div className="score-item">
            <div className="score-label">Correction 2</div>
            <div className="score-value">0.25</div>
          </div>
          <div className="score-item">
            <div className="score-label">Correction 3</div>
            <div className="score-value">Non saisie</div>
          </div>
          <div className="score-item">
            <div className="score-label">Moyenne</div>
            <div className="score-value average">0.25</div>
          </div>
        </div>

        <div className="search-section">
          <div className="search-container">
            <i className="bx bx-search search-icon"></i>
            <input
              type="text"
              placeholder="Rechercher un candidat..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">Rechercher</button>
          </div>
        </div>

        <div className="students-table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de naissance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr key={student.id} onClick={() => handleSelect(student)}>
                  <td>{student.id}</td>
                  <td>{student.nom}</td>
                  <td>{student.prenom}</td>
                  <td>{student.naissance ? new Date(student.naissance).toLocaleDateString("fr-FR") : "-"}</td>
                  <td>
                    <button className="link-btn">
                      <i className="bx bx-link"></i> Lier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Modifier les informations du candidat</h3>
              <button className="close-btn" onClick={() => setSelected(null)}>
                <i className="bx bx-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Nom</label>
                <input name="nom" value={selected.nom} onChange={handleChange} placeholder="Nom" />
              </div>
              <div className="form-group">
                <label>Prénom</label>
                <input name="prenom" value={selected.prenom} onChange={handleChange} placeholder="Prénom" />
              </div>
              <div className="form-group">
                <label>Date de naissance</label>
                <input name="naissance" value={selected.naissance} onChange={handleChange} type="date" />
              </div>
              <div className="form-group">
                <label>Epreuve 1</label>
                <input
                  name="epreuve1"
                  value={selected.epreuve1}
                  onChange={handleChange}
                  placeholder="Epreuve 1"
                  type="number"
                  step="0.01"
                />
              </div>
              <div className="form-group">
                <label>Epreuve 2</label>
                <input
                  name="epreuve2"
                  value={selected.epreuve2}
                  onChange={handleChange}
                  placeholder="Epreuve 2"
                  type="number"
                  step="0.01"
                />
              </div>
              <div className="form-group">
                <label>Epreuve 3</label>
                <input
                  name="epreuve3"
                  value={selected.epreuve3}
                  onChange={handleChange}
                  placeholder="Epreuve 3"
                  type="number"
                  step="0.01"
                />
              </div>
              <div className="form-group">
                <label>Moyenne</label>
                <input
                  name="moyenne"
                  value={selected.moyenne}
                  onChange={handleChange}
                  placeholder="Moyenne"
                  type="number"
                  step="0.01"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setSelected(null)}>
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

export default LinkNames
