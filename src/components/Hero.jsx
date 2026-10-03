import './Hero.css'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">

        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge-dot"></span>
          Open to Internships & Job Opportunities
        </motion.div>

        {/* Glitch Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Hi, I'm{' '}
          <span className="glitch gradient-text" data-text="Ali Hassan">
            Ali Hassan
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          className="typing-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="typing-prefix">$ I build →&nbsp;</span>
          <TypeAnimation
            sequence={[
              'Full Stack Web Apps.',
              1500,
              'AI-Powered Systems.',
              1500,
              'REST APIs & Backends.',
              1500,
              'Machine Learning Models.',
              1500,
              'Investment Tools for PSX.',
              1500,
              'Things that matter.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className="typed-text"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Computer Science student at FAST NUCES, Lahore & Founder of Finbulls Equity — a registered PSX investment company. Passionate about building intelligent systems and scalable web applications that solve real problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="/cv.pdf" download className="btn btn-secondary">
            Download CV ↓
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
  className="hero-stats"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.4 }}
>
  <div className="stat">
    <div className="stat-num">6+</div>
    <div className="stat-label">Projects</div>
  </div>
  <div className="stat">
    <div className="stat-num">3rd</div>
    <div className="stat-label">Year CS Student</div>
  </div>
  <div className="stat">
    <div className="stat-num">2</div>
    <div className="stat-label">Live Projects</div>
  </div>
  <div className="stat">
    <div className="stat-num">30k+</div>
    <div className="stat-label">AI Training Sentences</div>
  </div>
</motion.div>

      </div>
    </section>
  )
}

export default Hero