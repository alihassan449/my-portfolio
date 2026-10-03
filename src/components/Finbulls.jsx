import './Finbulls.css'
import ScrollReveal from './ScrollReveal'

function Finbulls() {
  return (
    <section className="finbulls" id="finbulls">
      <div className="finbulls-container">
        <ScrollReveal>
          <p className="section-label">// my_company</p>
          <h2>My Company</h2>
          <p className="section-sub">
            Beyond code — I also run a registered investment company.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="finbulls-card">

            {/* Left — Logo */}
            <div className="finbulls-logo-wrap">
              <img
                src="/finbulls-logo.jfif"
                alt="Finbulls Equity Logo"
                className="finbulls-logo"
              />
            </div>

            {/* Right — Info */}
            <div className="finbulls-info">

              <div className="finbulls-badges">
                <span className="finbulls-badge secp">✓ SECP Registered</span>
                <span className="finbulls-badge fbr">✓ FBR Registered</span>
                <span className="finbulls-badge soon">🌐 Website Coming Soon</span>
              </div>

              <h3 className="finbulls-name">Finbulls Equity</h3>
              <p className="finbulls-tagline">Smart Investing in Pakistan's Stock Market</p>

              <p className="finbulls-desc">
                Finbulls Equity is a SECP & FBR registered investment company that invests
                capital in PSX-listed stocks and generates returns for investors. Profits are
                transparently distributed to all investors based on their stake.
              </p>

              <div className="finbulls-services">
                <div className="finbulls-service">
                  <span className="service-icon">📈</span>
                  <div>
                    <p className="service-title">Stock Market Investment</p>
                    <p className="service-desc">Investing capital in PSX-listed companies and distributing profits to investors.</p>
                  </div>
                </div>
                <div className="finbulls-service">
                  <span className="service-icon">🎓</span>
                  <div>
                    <p className="service-title">Market Awareness Sessions</p>
                    <p className="service-desc">Educating people about stock market investing and financial literacy in Pakistan.</p>
                  </div>
                </div>
                <div className="finbulls-service">
                  <span className="service-icon">🤖</span>
                  <div>
                    <p className="service-title">AI-Powered Analysis</p>
                    <p className="service-desc">Building PSX Company Analyzer — an AI tool to help investors make smarter decisions.</p>
                  </div>
                </div>
              </div>

              <div className="finbulls-footer">
                <span className="finbulls-founded">🏢 Founded by Ali Hassan · 2026</span>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Finbulls