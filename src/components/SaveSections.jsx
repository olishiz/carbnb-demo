import React from 'react'

const SaveSections = () => {
  return (
    <section style={{ background: '#000', padding: '100px 20px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {/* Save Money */}
          <div style={{
            padding: '50px 40px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '20px'
            }}>
              💰
            </div>
            <h3 style={{
              fontSize: '32px',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, serif',
              color: 'var(--gold)'
            }}>
              Save up to 40%
            </h3>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-gray)',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              In your first year compared to traditional leasing or buying. No down payment, no hidden costs, no depreciation worries.
            </p>
            <div style={{
              fontSize: '18px',
              color: 'var(--text-light)',
              fontWeight: '600'
            }}>
              Year 1 Savings: <span className="gold-text">RM 48,000+</span>
            </div>
          </div>

          {/* No Loans */}
          <div style={{
            padding: '50px 40px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '20px'
            }}>
              🚫
            </div>
            <h3 style={{
              fontSize: '32px',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, serif',
              color: 'var(--gold)'
            }}>
              No Loans, No Interest
            </h3>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-gray)',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              Forget about bank loans, credit checks, or interest rates. Simple monthly subscription with everything included.
            </p>
            <div style={{
              fontSize: '18px',
              color: 'var(--text-light)',
              fontWeight: '600'
            }}>
              Interest Saved: <span className="gold-text">0% Forever</span>
            </div>
          </div>

          {/* Swap Anytime */}
          <div style={{
            padding: '50px 40px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '20px'
            }}>
              🔄
            </div>
            <h3 style={{
              fontSize: '32px',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, serif',
              color: 'var(--gold)'
            }}>
              Swap for Any Occasion
            </h3>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-gray)',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              Wedding this month? Business trip next? Switch between limousines based on your needs. Ultimate flexibility.
            </p>
            <div style={{
              fontSize: '18px',
              color: 'var(--text-light)',
              fontWeight: '600'
            }}>
              Swap Fee: <span className="gold-text">Free</span>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div style={{
          marginTop: '80px',
          padding: '60px',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
          borderRadius: '20px',
          border: '2px solid var(--gold)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '48px',
            marginBottom: '20px',
            fontFamily: 'Playfair Display, serif'
          }}>
            Love it. <span className="gold-text">Ride it.</span> Carbnb it.
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'var(--text-gray)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Join hundreds of satisfied clients experiencing luxury without the commitment. Your dream limousine is just a subscription away.
          </p>
          <button
            className="btn btn-primary"
            style={{
              padding: '20px 50px',
              fontSize: '18px'
            }}
            onClick={() => {
              const element = document.getElementById('limousines')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default SaveSections
