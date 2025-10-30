import React from 'react'

const Hero = () => {
  const scrollToLimousines = () => {
    const element = document.getElementById('limousines')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero fade-in">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">🚗 Premium Limousine Service</div>

          <h1>
            Your Luxury Limousine <br/>
            <span className="gradient-text">Subscription Service</span>
          </h1>

          <h2>
            Professional chauffeur-driven limousines. Subscribe from 1-60 months with ultimate flexibility.
          </h2>

          <div className="hero-features">
            <div className="hero-feature">Professional Chauffeur</div>
            <div className="hero-feature">Full Insurance Coverage</div>
            <div className="hero-feature">Maintenance Included</div>
            <div className="hero-feature">Doorstep Delivery</div>
            <div className="hero-feature">No Down Payment</div>
            <div className="hero-feature">24h Approval</div>
          </div>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToLimousines}>
              Browse Limousines
            </button>
            <button className="btn btn-secondary" onClick={() => {
              const element = document.getElementById('how-it-works')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}>
              How It Works
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">1-60</div>
              <div className="stat-label">Months Flexibility</div>
            </div>
            <div className="stat">
              <div className="stat-number">24h</div>
              <div className="stat-label">Quick Approval</div>
            </div>
            <div className="stat">
              <div className="stat-number">0%</div>
              <div className="stat-label">Down Payment</div>
            </div>
            <div className="stat">
              <div className="stat-number">40%</div>
              <div className="stat-label">Save Year 1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
