import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import ContactPage from './pages/ContactPage'

export default function App () {
  const [dark, setDark] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dark')) || false
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark))
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="app">
      <Header dark={dark} setDark={setDark} />
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
