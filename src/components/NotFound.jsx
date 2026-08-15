import { useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="notfound-page">
      <div className="notfound-container">

        <div className="notfound-code">404</div>

        <div className="notfound-glitch-line">
          <span className="notfound-label">// page_not_found</span>
        </div>

        <h1 className="notfound-title">Lost in the Matrix</h1>
        <p className="notfound-desc">
          Looks like this page doesn't exist or was moved. 
          Don't worry — let's get you back on track.
        </p>

        <div className="notfound-actions">
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Go Back Home
          </button>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            ← Previous Page
          </button>
        </div>

        {/* Animated background dots */}
        <div className="notfound-dots">
          {[...Array(12)].map((_, i) => (
            <div className="notfound-dot" key={i} style={{
              animationDelay: `${i * 0.2}s`,
              left: `${(i * 8) + 4}%`
            }} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default NotFound