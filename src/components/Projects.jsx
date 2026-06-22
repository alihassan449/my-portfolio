import './Projects.css'
import ScrollReveal from './ScrollReveal'

const projects = [
  {
    title: "AI Text Formality & Subjectivity Analyzer",
    desc: "ML model that analyzes text for formality and subjectivity using a scoring system. Trained on 30k+ multilingual sentences using Kaggle's T4 GPU.",
    tech: ["Python", "TensorFlow", "Kaggle", "NLP", "T4 GPU"],
    github: "#",
    live: "#",
    featured: true,
    available: true
  },
  {
    title: "UnderstandDeen",
    desc: "Full-stack Islamic web app with Quran, Hadith, Fiqh rulings, New Muslim section, AI chatbot, and Connect to Scholar feature. Fully integrated with SQL Server database.",
    tech: ["React", "SQL Server", "Node.js", "AI Chatbot", "REST API"],
    github: "#",
    live: "#",
    featured: true,
    available: true
  },
  {
    title: "Hospital Management System",
    desc: "OOP-based hospital system with Doctor, Patient, Admin, Nurse and Staff classes. Built in C++ with SFML interface library.",
    tech: ["C++", "SFML", "OOP"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "User Complaint System",
    desc: "Complaint management system built using core Data Structures concepts for efficient queuing and handling of user complaints.",
    tech: ["C++", "Data Structures"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Typing Balloon Game",
    desc: "Fun typing game built in Assembly Language (COAL — Computer Organization and Assembly Language course).",
    tech: ["Assembly", "COAL", "x86"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Command-Based Kids Drawing Tablet",
    desc: "Drawing tablet where users type commands like fd50, rt90, circle 100 and the system draws accordingly. Built in C++ with SFML.",
    tech: ["C++", "SFML", "Programming Fundamentals"],
    github: null,
    live: null,
    featured: false,
  }
]

const handleTilt = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width  / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) *  8
  card.style.transform =
    `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}

const resetTilt = (e) => {
  e.currentTarget.style.transform =
    'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)'
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <ScrollReveal>
          <p className="section-label">// selected_work</p>
          <h2>Projects</h2>
          <p className="section-sub">
            Things I've built across full-stack development, AI, and systems programming.
          </p>
        </ScrollReveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollReveal delay={index * 0.1} key={project.title}>
              <div
                className={`project-card ${project.featured ? 'featured' : ''}`}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                {project.featured && (
                  <span className="featured-badge">⭐ Featured</span>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span className="tech-badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects