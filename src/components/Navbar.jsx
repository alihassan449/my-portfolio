import './Navbar.css'
import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['hero', 'skills', 'timeline', 'finbulls', 'projects', 'contact']
      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="nav-logo">&lt;Ali Hassan /&gt;</div>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="#hero"     className={activeSection === 'hero'     ? 'active' : ''}>Home</a></li>
        <li><a href="#skills"   className={activeSection === 'skills'   ? 'active' : ''}>Skills</a></li>
        <li><a href="#timeline" className={activeSection === 'timeline' ? 'active' : ''}>Timeline</a></li>
        <li><a href="#finbulls" className={activeSection === 'finbulls' ? 'active' : ''}>Company</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#contact"  className={activeSection === 'contact'  ? 'active' : ''}>Contact</a></li>
      </ul>

      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="menu-icon"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="14" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 3" className="outer-ring" />
          <polygon points="16,6 24,11 24,21 16,26 8,21 8,11" stroke="#06b6d4" strokeWidth="1.2" fill="none" className="hex" />
          <circle cx="16" cy="16" r="2.5" fill="#06b6d4" className="center-dot" />
          <line x1="16" y1="9"  x2="16" y2="13" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
          <line x1="16" y1="19" x2="16" y2="23" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
          <line x1="9"  y1="16" x2="13" y2="16" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
          <line x1="19" y1="16" x2="23" y2="16" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#hero"      className={activeSection === 'hero'     ? 'active' : ''} onClick={closeMenu}>Home</a>
          <a href="#skills"    className={activeSection === 'skills'   ? 'active' : ''} onClick={closeMenu}>Skills</a>
          <a href="#timeline"  className={activeSection === 'timeline' ? 'active' : ''} onClick={closeMenu}>Timeline</a>
          <a href="#finbulls" className={activeSection === 'finbulls' ? 'active' : ''} onClick={closeMenu}>Company</a>
          <a href="#projects"  className={activeSection === 'projects' ? 'active' : ''} onClick={closeMenu}>Projects</a>
          <a href="#contact"   className={activeSection === 'contact'  ? 'active' : ''} onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar