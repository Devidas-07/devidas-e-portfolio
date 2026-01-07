import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Header ({ dark, setDark }) {
  return (
    <nav className={`navbar navbar-expand-lg ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm fixed-top`}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/about">Devidas Sabale</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/skills">Skills</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/education">Education</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          <div className="d-flex align-items-center ms-3">
            <button className={`btn btn-sm ${dark ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
              {dark ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />} 
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
