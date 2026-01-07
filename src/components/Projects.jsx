import React from 'react'

const projects = [
  { title: 'Clone of IPL website', img: '/images/ipl.png', link: 'https://github.com/Devidas-07/ipl-website-clone-' },
  { title: 'Book Store Management System', img: '/images/bookStore.png', link: 'https://github.com/Devidas-07/Book-Store-Management-System' },
  { title: 'Parner Premier League', img: '/images/ppl.png', link: 'https://github.com/Devidas-07/ppl-website' },
  { title: 'To Do Application', img: '/images/to-do-app.png', link: 'https://github.com/Devidas-07/To-Do-Application' },
  { title: 'Background Color Changer', img: '/images/bg-changer.png', link: 'https://github.com/Devidas-07/background-changer' },
  { title: 'Random Background Changer', img: '/images/random-bg-changer.png', link: 'https://github.com/Devidas-07/random-bg-changer' }
]

export default function Projects () {
  return (
    <section id="portfolio" className="py-5">
      <h2 className="mb-4 text-center">My Projects</h2>
      <div className="row g-4">
        {projects.map((p) => (
          <div key={p.title} className="col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={p.img} className="card-img-top" alt={p.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-muted mb-3">Technologies: see repo</p>
                <a href={p.link} className="mt-auto btn btn-primary">Source Code <i className="fab fa-github ms-2" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
