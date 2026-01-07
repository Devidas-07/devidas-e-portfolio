import React from 'react'

export default function EducationPage () {
  const education = [
    {
      title: 'MCA',
      years: '2024 - 2026',
      school: 'Modern Institute of Business Studies (Savitribai Phule Pune University)',
      current: true
    },
    {
      title: 'BCA',
      years: '2021 - 2024',
      school: 'New Arts Commerce and Science College, Parner (SPPU)'
    },
    {
      title: 'HSC',
      years: '2019 - 2021',
      school: 'New English School Parner'
    }
  ]

  return (
    <section className="py-5">
      <h2 className="mb-4 text-center">Education</h2>

      <div className="timeline mx-auto">
        {education.map((e, idx) => (
          <div key={e.title} className="timeline-item d-flex align-items-start">
            <div className="timeline-marker">
              <span className={`marker ${e.current ? 'marker-current' : ''}`}></span>
            </div>
            <div className="timeline-content ms-3">
              <div className="card shadow-sm p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="mb-1">{e.title} <small className="text-muted">— {e.years}</small></h5>
                </div>
                <p className="mb-0">{e.school}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
