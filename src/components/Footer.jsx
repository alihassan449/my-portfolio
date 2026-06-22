import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        <span className="footer-mono">// built with</span> React + Vite
        &nbsp;·&nbsp;
        <span className="footer-mono">// deployed on</span> Netlify
      </p>
      <p className="footer-copy">© 2025 YourName. All rights reserved.</p>
    </footer>
  )
}

export default Footer