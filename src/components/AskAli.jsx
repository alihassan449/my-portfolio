import { useState } from 'react'
import './AskAli.css'

const QA = [
  {
    question: "Who is Ali Hassan?",
    answer: "Ali Hassan is a Full Stack & AI Developer and a CS student at FAST NUCES Lahore (BSCS 2023–2027). He is passionate about building intelligent systems and scalable web applications that solve real problems."
  },
  {
    question: "What are his skills?",
    answer: "Frontend: React, HTML5, CSS3, Vite\nBackend: Node.js, Express, FastAPI\nAI/ML: Python, TensorFlow, NLP\nDatabase: SQL Server\nOther: JWT Auth, Stripe, REST APIs, Git, C++, Assembly"
  },
  {
    question: "What projects has he built?",
    answer: "1. PSX Company Analyzer — AI-powered investment platform (In Development)\n2. AI Text Formality & Subjectivity Analyzer — ML model trained on 30k+ sentences\n3. UnderstandDeen — Full-stack Islamic web app with AI chatbot\n4. Hospital Management System — C++ OOP\n5. User Complaint System — C++ Data Structures\n6. Typing Balloon Game — Assembly Language\n7. Command-Based Kids Drawing Tablet — C++ & SFML"
  },
  {
    question: "How to contact Ali?",
    answer: "📧 Email: alihassan2110361@gmail.com\n💼 LinkedIn: linkedin.com/in/ali-hassan916\n🐙 GitHub: github.com/alihassan449"
  },
  {
    question: "Is Ali available for work?",
    answer: "Yes! Ali is currently open to both internships and full-time job opportunities. Feel free to reach out via email or LinkedIn."
  },
  {
    question: "Tell me about his internship?",
    answer: "Ali did a Full Stack Development internship at Progree (June–July 2026). He built a responsive portfolio website, a CRUD task dashboard (React + Node.js), and a secure e-commerce module with JWT auth, shopping cart, and Stripe payment integration."
  }
]

function AskAli() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Ask Ali 👋 Click any question below to learn about Ali Hassan!"
    }
  ])
  const [answered, setAnswered] = useState([])

  const handleQuestion = (qa) => {
    if (answered.includes(qa.question)) return

    setMessages(prev => [
      ...prev,
      { role: 'user', content: qa.question },
      { role: 'assistant', content: qa.answer }
    ])
    setAnswered(prev => [...prev, qa.question])
  }

  const handleReset = () => {
    setMessages([{
      role: 'assistant',
      content: "Hi! I'm Ask Ali 👋 Click any question below to learn about Ali Hassan!"
    }])
    setAnswered([])
  }

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        className={`askali-bubble ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Ask Ali chatbot"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="askali-window">

          {/* Header */}
          <div className="askali-header">
            <div className="askali-header-info">
              <div className="askali-avatar">A</div>
              <div>
                <p className="askali-name">Ask Ali</p>
                <p className="askali-status">● Online</p>
              </div>
            </div>
            <button className="askali-reset" onClick={handleReset}>↺</button>
          </div>

          {/* Messages */}
          <div className="askali-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`askali-msg ${msg.role}`}>
                {msg.content.split('\n').map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Questions */}
          <div className="askali-questions">
            {QA.map((qa, i) => (
              <button
                key={i}
                className={`askali-q-btn ${answered.includes(qa.question) ? 'answered' : ''}`}
                onClick={() => handleQuestion(qa)}
              >
                {qa.question}
              </button>
            ))}
          </div>

        </div>
      )}
    </>
  )
}

export default AskAli