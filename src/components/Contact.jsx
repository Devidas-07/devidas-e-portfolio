import React from 'react'

export default function Contact () {
  return (
    <section id="contact" className="py-5">
      <div className="text-center">
        <h2>Contact Me</h2>
        <p className="text-muted">Have a project to discuss? Reach out via email or on GitHub / LinkedIn.</p>
        <div className="mt-3">
          <a className="btn btn-outline-primary me-2" href="mailto:devasabale16@gmail.com"><i className="fas fa-envelope me-2"/>devasabale16@gmail.com</a>
          <a className="btn btn-outline-secondary me-2" href="https://github.com/Devidas-07" target="_blank" rel="noreferrer"><i className="fab fa-github me-2"/>GitHub</a>
          <a className="btn btn-outline-info" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin me-2"/>LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
