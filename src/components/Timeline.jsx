import './Timeline.css'
import ScrollReveal from './ScrollReveal'

const timelineData = [
  {
    year: "2021",
    title: "Matriculation",
    subtitle: "Board of Intermediate & Secondary Education",
    desc: "Completed Matriculation with outstanding results. Built a strong academic foundation in sciences and mathematics.",
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
    year: "2025",
    title: "Joined Idyllic Youth Society",
    subtitle: "FAST NUCES — Member",
    desc: "Became an active member of Idyllic Youth, a society at FAST NUCES focused on personal growth, leadership, and community impact.",
    type: "achievement",
    icon: "🌟"
  },
  {
    year: "Jun–Jul 2026",
    title: "Full Stack Development Intern",
    subtitle: "Progree — 1 Month Internship",
    desc: "Built three production-level projects: a responsive portfolio website using HTML5 and CSS Grid/Flexbox, a CRUD task dashboard connecting React to a Node.js/Express backend, and a secure e-commerce module with JWT authentication, hashed credentials, persistent shopping cart, and Stripe payment integration. Gained hands-on experience with async API calls, secure auth flows, and payment gateway integration.",
    type: "internship",
    icon: "💼",
    certificate: "/internship-certificate.png",
    lor: "/lor.png"
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
  {
    year: "2026",
    title: "Founder & Owner — Finbulls Equity",
    subtitle: "Investment Company — Pakistan Stock Exchange (PSX)",
    desc: "Founded Finbulls Equity, a registered investment company focused on investing in PSX-listed companies. Managing real investment portfolios and building AI-powered tools to support smarter investment decisions.",
    type: "achievement",
    icon: "🏢"
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
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-btn"
                    >
                      View Certificate ↗
                    </a>
                  )}
                  {item.lor && (
                    <a
                      href={item.lor}
                      target="_blank"
                      rel="noreferrer"
                      className="lor-btn"
                    >
                      View Letter of Recommendation ↗
                    </a>
                  )}
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