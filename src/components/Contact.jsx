import './Contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

// 🔴 Replace these three values with your own from EmailJS dashboard
const SERVICE_ID  = 'service_2uc1x8o'
const TEMPLATE_ID = 'template_qxt6ell'
const PUBLIC_KEY  = 'YS532vv3SiZxnUaY8'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('idle')
  // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.')
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="section-label">// get_in_touch</p>
        <h2>Contact Me</h2>
        <p className="section-sub">
          Whether you have an internship opportunity, a project idea,
          or just want to connect — my inbox is always open.
        </p>

        <div className="contact-grid">

          {/* Left side - links */}
          <div className="contact-links">
            <a href="mailto:alihassan2110361@gmail.com" className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">alihassan2110361@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/alihassan449" target="_blank" className="contact-item">
              <span className="contact-icon">⌥</span>
              <div>
                <div className="contact-item-label">GitHub</div>
                <div className="contact-item-value">https://github.com/alihassan449</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ali-hassan916" target="_blank" className="contact-item">
              <span className="contact-icon">in</span>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">https://linkedin.com/in/ali-hassan916</div>
              </div>
            </a>

            {/* CV Download card */}
            <a href="/cv.pdf" download className="contact-item cv-card">
              <span className="contact-icon cv-icon">↓</span>
              <div>
                <div className="contact-item-label">Resume / CV</div>
                <div className="contact-item-value">Download my CV</div>
              </div>
              <span className="cv-badge">PDF</span>
            </a>
          </div>

          {/* Right side - form */}
          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn send-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <p className="form-success">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="form-error">
                  ✗ Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact