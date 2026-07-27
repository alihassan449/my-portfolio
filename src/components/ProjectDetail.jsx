import { useParams, useNavigate } from 'react-router-dom'
import { projects } from './Projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>Project not found</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <div className="detail-container">

        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Portfolio
        </button>

        <div className="detail-header">
          <div className="detail-badges">
            {project.featured && <span className="featured-badge">⭐ Featured</span>}
            {project.available === false && <span className="dev-badge">🚧 In Development</span>}
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-tech">
            {project.tech.map(t => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2>Overview</h2>
          <p>{project.docs.overview}</p>
        </div>

        <div className="detail-section">
          <h2>Features</h2>
          <ul>
            {project.docs.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Tech Stack & Details</h2>
          <p>{project.docs.techDetails}</p>
        </div>

        <div className="detail-section">
          <h2>Status</h2>
          <p>{project.docs.status}</p>
        </div>

        <div className="detail-footer">
          {project.github && project.github !== '#' ? (
            <a
              className="github-btn"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          ) : (
            <p className="github-na">GitHub link will be available when the project is released.</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail