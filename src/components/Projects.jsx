import './Projects.css'
import ScrollReveal from './ScrollReveal'
import { useNavigate } from 'react-router-dom'

const projects = [
  {
    id: "psx-company-analyzer",
    title: "PSX Company Analyzer",
    desc: "An AI-powered platform for investors to analyze PSX-listed companies. Features include company performance analysis, portfolio & trade management, and an AI model that predicts future company performance based on previous quarterly results.",
    tech: ["React", "Python", "AI/ML", "Vite", "Fast API"],
    github: "https://github.com/alihassan449/PSX-Analyzer-Web-App.git",
    live: "#",
    featured: true,
    available: false,
    docs: {
      overview: "PSX Company Analyzer is an AI-powered investment platform designed to help investors make smarter decisions about PSX-listed companies. The platform simplifies complex financial data into clear insights.",
      features: [
        "Company performance analysis with detailed financial metrics",
        "Portfolio & trade management for tracking your investments",
        "AI model that predicts future company performance based on previous quarterly results",
      ],
      techDetails: "Built with React and Vite on the frontend, FastAPI on the backend, and a Python-based AI/ML model trained on historical quarterly data from PSX-listed companies.",
      status: "Currently in active development. Core features are being built and the AI model is being trained.",
    }
  },
  {
    id: "ai-text-analyzer",
    title: "AI Text Formality & Subjectivity Analyzer",
    desc: "ML model that analyzes text for formality and subjectivity using a scoring system. Trained on 30k+ multilingual sentences using Kaggle's T4 GPU.",
    tech: ["Python", "TensorFlow", "Kaggle", "NLP", "T4 GPU"],
    github: "#",
    live: "#",
    featured: true,
    available: true,
    docs: {
      overview: "A machine learning model that analyzes any given text and scores it for formality and subjectivity. Useful for content writers, editors, and researchers.",
      features: [
        "Formality scoring from casual to formal",
        "Subjectivity detection — objective vs opinionated text",
        "Trained on 30,000+ multilingual sentences",
      ],
      techDetails: "Built with Python and TensorFlow. Trained on Kaggle using T4 GPU for faster model training. Uses NLP techniques for text preprocessing and feature extraction.",
      status: "Completed.",
    }
  },
  {
    id: "understand-deen",
    title: "UnderstandDeen",
    desc: "Full-stack Islamic web app with Quran, Hadith, Fiqh rulings, New Muslim section, AI chatbot, and Connect to Scholar feature. Fully integrated with SQL Server database.",
    tech: ["React", "SQL Server", "Node.js", "AI Chatbot", "REST API"],
    github: "https://github.com/alihassan449/understand-deen",
    live: "#",
    featured: true,
    available: true,
    docs: {
      overview: "UnderstandDeen is a full-stack Islamic web application built to help Muslims and new Muslims learn and understand their religion in a structured and accessible way.",
      features: [
        "Quran and Hadith browser",
        "Fiqh rulings section",
        "Dedicated New Muslim section",
        "AI chatbot for Islamic Q&A",
        "Connect to Scholar feature for live guidance",
      ],
      techDetails: "Frontend built with React, backend with Node.js and REST APIs, and data stored in SQL Server database.",
      status: "Completed.",
    }
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    desc: "OOP-based hospital system with Doctor, Patient, Admin, Nurse and Staff classes. Built in C++ with SFML interface library.",
    tech: ["C++", "SFML", "OOP"],
    github: null,
    live: null,
    featured: false,
    docs: {
      overview: "An OOP-based hospital management system that simulates real hospital operations with different user roles.",
      features: [
        "Doctor, Patient, Admin, Nurse and Staff class hierarchy",
        "Role-based access and operations",
        "Graphical interface using SFML",
      ],
      techDetails: "Built entirely in C++ using Object Oriented Programming principles. SFML library used for the graphical interface.",
      status: "Completed.",
    }
  },
  {
    id: "user-complaint-system",
    title: "User Complaint System",
    desc: "Complaint management system built using core Data Structures concepts for efficient queuing and handling of user complaints.",
    tech: ["C++", "Data Structures"],
    github: null,
    live: null,
    featured: false,
    docs: {
      overview: "A complaint management system that uses core data structures to efficiently queue and handle user complaints.",
      features: [
        "Queue-based complaint handling",
        "Priority management for urgent complaints",
        "Efficient data structure implementation",
      ],
      techDetails: "Built in C++ using Data Structures concepts like queues and linked lists.",
      status: "Completed.",
    }
  },
  {
    id: "typing-balloon-game",
    title: "Typing Balloon Game",
    desc: "Fun typing game built in Assembly Language (COAL — Computer Organization and Assembly Language course).",
    tech: ["Assembly", "COAL", "x86"],
    github: null,
    live: null,
    featured: false,
    docs: {
      overview: "A fun and interactive typing game where players type words to pop balloons before they fly away. Built as a course project for COAL.",
      features: [
        "Real-time typing detection",
        "Balloon animations",
        "Score tracking",
      ],
      techDetails: "Built entirely in x86 Assembly Language (COAL) as part of the Computer Organization and Assembly Language course.",
      status: "Completed.",
    }
  },
  {
    id: "kids-drawing-tablet",
    title: "Command-Based Kids Drawing Tablet",
    desc: "Drawing tablet where users type commands like fd50, rt90, circle 100 and the system draws accordingly. Built in C++ with SFML.",
    tech: ["C++", "SFML", "Programming Fundamentals"],
    github: null,
    live: null,
    featured: false,
    docs: {
      overview: "A command-based drawing tablet for kids where they type simple commands and the system draws shapes and patterns accordingly.",
      features: [
        "Command-based drawing (fd50, rt90, circle 100, etc.)",
        "Real-time rendering of shapes",
        "Kid-friendly and simple interface",
      ],
      techDetails: "Built in C++ with SFML library for graphics rendering.",
      status: "Completed.",
    }
  },
]

const handleTilt = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) * 8
  card.style.transform =
    `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}

const resetTilt = (e) => {
  e.currentTarget.style.transform =
    'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)'
}

function Projects() {
  const navigate = useNavigate()

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
                onClick={() => navigate(`/project/${project.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <span className="card-arrow">↗</span>
                {project.featured && (
                  <span className="featured-badge">⭐ Featured</span>
                )}

                {project.available === false && (
                  <span className="dev-badge">🚧 In Development</span>
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

export { projects }
export default Projects