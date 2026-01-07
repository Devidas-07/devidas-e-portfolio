import React from 'react'

export default function AboutPage () {
  return (
    <section id="about" className="py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h3 className="mb-1">Hello!</h3>
          <h1 className="mb-1">Devidas Sabale</h1>
          <h5 className="text-muted mb-3">IT Analyst — Cognizant Technology Solutions Pvt Ltd</h5>
          <p className="lead">I am an IT Analyst currently working at Cognizant. I build robust, data-driven and maintainable applications using Java, cloud and analytics technologies. My experience spans back-end engineering, data integration, and visualization. I enjoy solving difficult problems and improving user experiences.</p>
          <div className="mt-4">
            <a href="/images/Resume.docx" className="btn btn-primary me-2">Download CV</a>
            <a href="/contact" className="btn btn-outline-danger">Contact</a>
          </div>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img src="/images/deva-removebg.png" className="img-fluid rounded-circle shadow" alt="Devidas" style={{ maxWidth: 260 }} />
        </div>
      </div>
    </section>
  )
}
