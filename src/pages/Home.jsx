import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero Section */}
      <section className="hero fade-in">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Premium Limousine Service</div>

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
              <button className="btn btn-primary" onClick={() => navigate('/cars')}>
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

      {/* Features Section */}
      <section style={{ background: 'var(--bg-elevated)', padding: '80px 24px' }}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Carbnb</h2>
            <p>All-inclusive limousine subscription with no hidden costs</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginTop: '48px'
          }}>
            {[
              { title: 'Professional Chauffeur', desc: 'Experienced drivers at your service 24/7' },
              { title: 'All-Inclusive Package', desc: 'Insurance, maintenance, and road tax included' },
              { title: 'Flexible Subscription', desc: 'Subscribe from 1 to 60 months, cancel anytime' },
              { title: 'No Down Payment', desc: 'Start your subscription without upfront costs' },
              { title: 'Doorstep Delivery', desc: 'We bring the limousine directly to you' },
              { title: 'Swap Anytime', desc: 'Change vehicles based on your needs' }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: 'var(--text-primary)'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ background: 'var(--bg-main)', padding: '80px 24px' }}>
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to your luxury limousine subscription</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            marginTop: '48px'
          }}>
            {[
              { number: '01', title: 'Choose Your Limousine', desc: 'Browse our premium fleet and select the perfect vehicle for your needs' },
              { number: '02', title: 'Subscribe in Minutes', desc: 'Complete your subscription online with instant approval within 24 hours' },
              { number: '03', title: 'Enjoy Your Ride', desc: 'Your limousine arrives with a professional chauffeur, fully insured and maintained' }
            ].map((step, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '32px',
                  fontWeight: '800'
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: 'var(--text-primary)'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  maxWidth: '320px',
                  margin: '0 auto'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn btn-primary" onClick={() => navigate('/cars')}>
              View Our Fleet
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'var(--bg-elevated)',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            Ready to Experience Luxury?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Start your limousine subscription today. No down payment, no hidden fees, just pure luxury.
          </p>
          <button className="btn btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }} onClick={() => navigate('/cars')}>
            Browse Limousines
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
