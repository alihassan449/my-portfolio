import './Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

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
    {/* Outer rotating ring */}
    <circle
      cx="16" cy="16" r="14"
      stroke="#06b6d4"
      strokeWidth="1"
      strokeDasharray="4 3"
      className="outer-ring"
    />
    {/* Inner hexagon */}
    <polygon
      points="16,6 24,11 24,21 16,26 8,21 8,11"
      stroke="#06b6d4"
      strokeWidth="1.2"
      fill="none"
      className="hex"
    />
    {/* Center dot */}
    <circle
      cx="16" cy="16" r="2.5"
      fill="#06b6d4"
      className="center-dot"
    />
    {/* Cross lines inside */}
    <line x1="16" y1="9"  x2="16" y2="13" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
    <line x1="16" y1="19" x2="16" y2="23" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
    <line x1="9"  y1="16" x2="13" y2="16" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
    <line x1="19" y1="16" x2="23" y2="16" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
  </svg>
</button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#hero"     onClick={closeMenu}>Home</a>
          <a href="#skills"   onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact"  onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar