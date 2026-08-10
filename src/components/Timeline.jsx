import './Timeline.css'
import ScrollReveal from './ScrollReveal'

const timelineData = [
  {
    year: "2021",
    title: "Matriculation",
    subtitle: "Board of Intermediate & Secondary Education",
    desc: "Secured 1100/1100 marks — a perfect score. This achievement laid the foundation for a strong academic journey ahead.",
    type: "education",
    icon: "🎓"
  },
  {
    year: "2021–2023",
    title: "ICS — Physics & Mathematics",
    subtitle: "Punjab Group of Colleges, Lahore",
    desc: "Completed Intermediate with Physics and Mathematics, securing 86%. Developed strong analytical and problem-solving skills.",
    type: "education",
    icon: "📚"
  },
  {
    year: "2023",
    title: "Joined FAST NUCES Lahore",
    subtitle: "BSCS — Computer Science (2023–2027)",
    desc: "Got admitted to one of Pakistan's top CS universities. Started the journey toward becoming a Full Stack & AI Developer.",
    type: "education",
    icon: "🏛️"
  },
  {
    year: "Fall 2023",
    title: "Command-Based Drawing Tablet",
    subtitle: "1st Semester Project — C++ & SFML",
    desc: "Built a drawing tablet where users type commands like fd50, rt90, circle 100 and the system draws accordingly. First major project using Programming Fundamentals.",
    type: "project",
    icon: "🖥️"
  },
  {
    year: "Fall 2024",
    title: "Hospital Management System",
    subtitle: "2nd Semester Project — C++ OOP",
    desc: "Designed a full hospital system with Doctor, Patient, Admin, Nurse and Staff classes using Object Oriented Programming principles.",
    type: "project",
    icon: "🏥"
  },
  {
    year: "Spring 2025",
    title: "User Complaint System",
    subtitle: "3rd Semester Project — Data Structures",
    desc: "Built an efficient complaint management system using core Data Structures concepts like queues and linked lists for handling and prioritizing complaints.",
    type: "project",
    icon: "📋"
  },
  {
    year: "Fall 2025",
    title: "Typing Balloon Game",
    subtitle: "4th Semester Project — Assembly Language",
    desc: "Created a fun typing game in x86 Assembly Language (COAL) where players type words to pop balloons before they escape.",
    type: "project",
    icon: "🎮"
  },
  {
    year: "2025",
    title: "Joined Idyllic Youth Society",
    subtitle: "FAST NUCES — Member",
    desc: "Became an active member of Idyllic Youth, a society at FAST NUCES focused on personal growth, leadership, and community impact.",
    type: "achievement",
    icon: "🌟"
  },
  {
    year: "Spring 2026",
    title: "UnderstandDeen",
    subtitle: "5th Semester Project — Full Stack Web App",
    desc: "Built a complete Islamic web platform with Quran, Hadith, Fiqh rulings, AI chatbot, and Connect to Scholar feature. Fully integrated with SQL Server database.",
    type: "project",
    icon: "🕌"
  },
  {
    year: "Spring 2026",
    title: "AI Text Formality & Subjectivity Analyzer",
    subtitle: "6th Semester Project — Python & TensorFlow",
    desc: "Trained an ML model on 30,000+ multilingual sentences using Kaggle's T4 GPU to analyze and score text for formality and subjectivity.",
    type: "project",
    icon: "🤖"
  },
  {
    year: "Summer 2026",
    title: "PSX Company Analyzer",
    subtitle: "AI-Powered Investment Platform — In Development",
    desc: "Building an AI-powered platform for investors to analyze PSX-listed companies, manage portfolios, and predict future company performance using quarterly data.",
    type: "project",
    icon: "📈",
    current: true
  },
]

function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <div className="timeline-container">
        <ScrollReveal>
          <p className="section-label">// my_journey</p>
          <h2>Timeline</h2>
          <p className="section-sub">
            My academic path, projects, and milestones — from matric to building AI systems.
          </p>
        </ScrollReveal>

        <div className="timeline-list">
          {timelineData.map((item, index) => (
            <ScrollReveal delay={index * 0.08} key={index}>
              <div className={`timeline-item ${item.type} ${item.current ? 'current' : ''}`}>

                {/* Left — Year */}
                <div className="timeline-year">
                  <span>{item.year}</span>
                </div>

                {/* Center — Line & Dot */}
                <div className="timeline-line">
                  <div className="timeline-dot">
                    <span className="timeline-icon">{item.icon}</span>
                  </div>
                </div>

                {/* Right — Content */}
                <div className="timeline-content">
                  {item.current && (
                    <span className="current-badge">🚧 In Progress</span>
                  )}
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Timeline