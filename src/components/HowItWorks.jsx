import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Pick Your Limousine',
      description: 'Browse our premium fleet of Mercedes S-Class, BMW 7-Series, and stretch limousines. Filter by occasion and features.',
      icon: '🚗'
    },
    {
      number: '02',
      title: 'Subscribe in 2 Clicks',
      description: 'Choose your subscription length (1-60 months), fill in basic details, and get approved within 24 hours. No down payment required.',
      icon: '✍️'
    },
    {
      number: '03',
      title: 'Delivered to Your Door',
      description: 'Your limousine arrives at your location with a professional chauffeur. Everything is included: insurance, maintenance, and support.',
      icon: '🚪'
    }
  ]

  return (
    <section id="how-it-works" style={{ background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)', padding: '100px 20px' }}>
      <div className="container">
        <div className="section-header">
          <h2>How It <span className="gold-text">Works</span></h2>
          <p>Three simple steps to your luxury limousine subscription</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          marginTop: '80px',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '2px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                fontSize: '48px',
                position: 'relative',
                zIndex: 2
              }}>
                {step.icon}
              </div>

              <div style={{
                position: 'absolute',
                top: '60px',
                left: '60px',
                fontSize: '120px',
                fontWeight: 'bold',
                color: 'rgba(212, 175, 55, 0.1)',
                fontFamily: 'Playfair Display, serif',
                zIndex: 1,
                lineHeight: 1
              }}>
                {step.number}
              </div>

              <h3 style={{
                fontSize: '24px',
                marginBottom: '16px',
                color: 'var(--gold)',
                fontFamily: 'Playfair Display, serif'
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '16px',
                color: 'var(--text-gray)',
                lineHeight: '1.8',
                maxWidth: '350px',
                margin: '0 auto'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              const element = document.getElementById('limousines')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start Your Subscription
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
