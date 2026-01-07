import React from 'react'

const skillCategories = [
  {
    title: 'Languages & Back-end',
    items: [
      { name: 'Java', level: 85, icon: 'fab fa-java' },
      { name: 'T-SQL', level: 80, icon: 'fas fa-database' },
      { name: 'JSON', level: 80, icon: 'fas fa-code' }
    ]
  },
  {
    title: 'Front-end & UI',
    items: [
      { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
      { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
      { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap' }
    ]
  },
  {
    title: 'Data & Cloud',
    items: [
      { name: 'Azure Cloud', level: 75, icon: 'fab fa-microsoft' },
      { name: 'Azure Data Factory', level: 70, icon: 'fas fa-industry' },
      { name: 'Power BI', level: 70, icon: 'fas fa-chart-line' },
      { name: 'Data Warehouse', level: 75, icon: 'fas fa-database' },
      { name: 'Microsoft SSIS', level: 70, icon: 'fas fa-cogs' }
    ]
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'MySQL', level: 80, icon: 'fas fa-database' },
      { name: 'Git & GitHub', level: 85, icon: 'fab fa-git-alt' },
      { name: 'Maven', level: 75, icon: 'fas fa-box' },
      { name: 'VS Code', level: 80, icon: 'fas fa-code' }
    ]
  }
]

function SkillRow ({ s }) {
  return (
    <div className="skill-row mb-3" title={`${s.name} — ${s.level}%`}>
      <div className="d-flex align-items-center mb-1">
        <i className={`${s.icon} skill-icon me-2`} aria-hidden="true" />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center">
            <strong className="skill-name">{s.name}</strong>
            <small className="text-muted">{s.level}%</small>
          </div>
          <div className="progress mt-2" style={{ height: 8 }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${s.level}%` }}
              aria-valuenow={s.level}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills () {
  return (
    <section id="skills" className="py-5">
      <h2 className="mb-4 text-center">Skills</h2>
      <p className="text-center text-muted mb-4">Grouped by area for easier scanning. Hover rows for detail.</p>
      <div className="row g-4">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm skill-card">
              <div className="card-body">
                <h5 className="card-title">{cat.title}</h5>
                <div>
                  {cat.items.map((s) => (
                    <SkillRow key={s.name} s={s} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
