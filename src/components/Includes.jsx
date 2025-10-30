import React from 'react'

const Includes = () => {
  const features = [
    { icon: '👔', title: 'Professional Chauffeur', desc: 'Experienced drivers at your service' },
    { icon: '🛡️', title: 'Full Insurance', desc: 'Comprehensive coverage included' },
    { icon: '📋', title: 'Road Tax', desc: 'All taxes handled for you' },
    { icon: '🔧', title: 'Maintenance', desc: 'Regular servicing included' },
    { icon: '🔄', title: 'Swap Anytime', desc: 'Change vehicles as needed' },
    { icon: '🚪', title: 'Door-to-Door', desc: 'Delivered to your location' },
    { icon: '📞', title: '24/7 Support', desc: 'Always here to help' }
  ]

  return (
    <section style={{ background: '#0a0a0a', padding: '80px 20px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Everything <span className="gold-text">Included</span></h2>
          <p>All-in-one subscription with no hidden costs or surprises</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(212, 175, 55, 0.05)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px',
                padding: '40px 30px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)'
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{
                fontSize: '20px',
                marginBottom: '10px',
                color: 'var(--gold)'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-gray)',
                lineHeight: '1.6'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Includes
