import { useEffect, useState } from 'react'
import './LoadingScreen.css'

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(onComplete, 500)
          }, 300)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">

        {/* Logo */}
        <div className="loading-logo">&lt;Ali Hassan /&gt;</div>

        {/* Subtitle */}
        <p className="loading-subtitle">Full Stack & AI Developer</p>

        {/* Progress Bar */}
        <div className="loading-bar-wrap">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress number */}
        <p className="loading-percent">{progress}%</p>

      </div>
    </div>
  )
}

export default LoadingScreen