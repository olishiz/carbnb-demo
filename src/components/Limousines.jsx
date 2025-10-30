import React, { useState } from 'react'

const Limousines = () => {
  const [filter, setFilter] = useState('all')
  const [selectedLimo, setSelectedLimo] = useState(null)
  const [months, setMonths] = useState(12)

  const limousines = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      category: ['business', 'events'],
      basePrice: 8000,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
      features: ['Chauffeur', 'WiFi', 'Premium Sound'],
      capacity: '4 passengers'
    },
    {
      id: 2,
      name: 'BMW 7-Series Executive',
      category: ['business'],
      basePrice: 7500,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      features: ['Chauffeur', 'Executive Interior', 'Privacy Glass'],
      capacity: '4 passengers'
    },
    {
      id: 3,
      name: 'Stretched Lincoln Limousine',
      category: ['wedding', 'events'],
      basePrice: 12000,
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
      features: ['Bar', 'LED Lights', 'Premium Sound'],
      capacity: '8-10 passengers'
    },
    {
      id: 4,
      name: 'Rolls-Royce Phantom',
      category: ['wedding', 'business'],
      basePrice: 15000,
      image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800',
      features: ['Chauffeur', 'Ultra Luxury', 'Champagne Bar'],
      capacity: '4 passengers'
    },
    {
      id: 5,
      name: 'Maybach S-Class',
      category: ['business', 'events'],
      basePrice: 13000,
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
      features: ['Reclining Seats', 'Massage', 'Executive Package'],
      capacity: '4 passengers'
    },
    {
      id: 6,
      name: 'Audi A8 L',
      category: ['business'],
      basePrice: 7000,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      features: ['Tech Package', 'Chauffeur', 'WiFi'],
      capacity: '4 passengers'
    },
    {
      id: 7,
      name: 'Bentley Flying Spur',
      category: ['wedding', 'business'],
      basePrice: 14000,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
      features: ['Handcrafted Interior', 'Chauffeur', 'Premium Bar'],
      capacity: '4 passengers'
    },
    {
      id: 8,
      name: 'Stretched Chrysler 300',
      category: ['wedding', 'events'],
      basePrice: 10000,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      features: ['Party Lights', 'Sound System', 'Bar'],
      capacity: '10 passengers'
    }
  ]

  const calculatePrice = (basePrice, duration) => {
    let discount = 0
    if (duration >= 12 && duration < 24) discount = 0.10 // 10% off
    if (duration >= 24 && duration < 36) discount = 0.15 // 15% off
    if (duration >= 36) discount = 0.20 // 20% off

    return Math.round(basePrice * (1 - discount))
  }

  const filteredLimousines = filter === 'all'
    ? limousines
    : limousines.filter(limo => limo.category.includes(filter))

  const FilterButton = ({ label, value }) => (
    <button
      onClick={() => setFilter(value)}
      style={{
        padding: '12px 24px',
        background: filter === value ? 'var(--gold)' : 'transparent',
        color: filter === value ? 'var(--black)' : 'var(--text-light)',
        border: `2px solid ${filter === value ? 'var(--gold)' : 'rgba(212, 175, 55, 0.3)'}`,
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}
      onMouseEnter={(e) => {
        if (filter !== value) {
          e.currentTarget.style.borderColor = 'var(--gold)'
        }
      }}
      onMouseLeave={(e) => {
        if (filter !== value) {
          e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
        }
      }}
    >
      {label}
    </button>
  )

  return (
    <section id="limousines" style={{ background: '#0a0a0a', padding: '100px 20px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Featured <span className="gold-text">Limousines</span></h2>
          <p>Premium fleet ready for your luxury experience</p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '40px',
          flexWrap: 'wrap'
        }}>
          <FilterButton label="All" value="all" />
          <FilterButton label="Wedding" value="wedding" />
          <FilterButton label="Business" value="business" />
          <FilterButton label="Events" value="events" />
        </div>

        {/* Limousine Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          {filteredLimousines.map((limo) => (
            <div
              key={limo.id}
              style={{
                background: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div style={{
                height: '240px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  src={limo.image}
                  alt={limo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  color: 'var(--gold)',
                  fontWeight: '600'
                }}>
                  {limo.capacity}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '22px',
                  marginBottom: '12px',
                  color: 'var(--text-light)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {limo.name}
                </h3>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  {limo.features.map((feature, idx) => (
                    <span key={idx} style={{
                      fontSize: '12px',
                      padding: '4px 12px',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '12px',
                      color: 'var(--text-gray)'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(212, 175, 55, 0.1)'
                }}>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--text-gray)',
                      marginBottom: '4px'
                    }}>
                      Starting from
                    </div>
                    <div style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: 'var(--gold)',
                      fontFamily: 'Playfair Display, serif'
                    }}>
                      RM{calculatePrice(limo.basePrice, 12).toLocaleString()}
                      <span style={{
                        fontSize: '14px',
                        color: 'var(--text-gray)',
                        fontWeight: 'normal'
                      }}>
                        /mo
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{ padding: '12px 24px', fontSize: '14px' }}
                    onClick={() => setSelectedLimo(limo)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price Calculator */}
        <div style={{
          marginTop: '80px',
          padding: '60px',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '36px',
              marginBottom: '16px',
              fontFamily: 'Playfair Display, serif'
            }}>
              Calculate Your <span className="gold-text">Subscription</span>
            </h3>
            <p style={{ color: 'var(--text-gray)' }}>
              Longer subscriptions get better rates. Save up to 20% with 36+ month plans.
            </p>
          </div>

          <div style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <span style={{ color: 'var(--text-light)', fontSize: '18px' }}>
                Subscription Duration
              </span>
              <span style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: 'var(--gold)',
                fontFamily: 'Playfair Display, serif'
              }}>
                {months} {months === 1 ? 'month' : 'months'}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="60"
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: `linear-gradient(to right, var(--gold) 0%, var(--gold) ${(months / 60) * 100}%, rgba(212, 175, 55, 0.2) ${(months / 60) * 100}%, rgba(212, 175, 55, 0.2) 100%)`,
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none'
              }}
            />

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              fontSize: '12px',
              color: 'var(--text-gray)'
            }}>
              <span>1 month</span>
              <span>60 months</span>
            </div>

            {/* Discount Info */}
            <div style={{
              marginTop: '40px',
              padding: '30px',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '16px',
                color: 'var(--text-gray)',
                marginBottom: '8px'
              }}>
                Your Discount
              </div>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'var(--gold)',
                fontFamily: 'Playfair Display, serif'
              }}>
                {months >= 36 ? '20%' : months >= 24 ? '15%' : months >= 12 ? '10%' : '0%'}
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--text-gray)',
                marginTop: '16px'
              }}>
                {months < 12 && 'Subscribe for 12+ months to get discounts'}
                {months >= 12 && months < 24 && 'Great choice! Extend to 24+ months for 15% off'}
                {months >= 24 && months < 36 && 'Excellent! Go for 36+ months and save 20%'}
                {months >= 36 && 'Maximum savings unlocked! 🎉'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for subscription (placeholder) */}
      {selectedLimo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setSelectedLimo(null)}
        >
          <div
            style={{
              background: '#1a1a1a',
              padding: '40px',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '100%',
              border: '2px solid var(--gold)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              fontSize: '28px',
              marginBottom: '20px',
              fontFamily: 'Playfair Display, serif'
            }}>
              Subscribe to {selectedLimo.name}
            </h3>
            <p style={{
              color: 'var(--text-gray)',
              marginBottom: '30px'
            }}>
              Contact us to complete your subscription. Our team will reach out within 24 hours.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  alert('Thank you! We will contact you shortly.')
                  setSelectedLimo(null)
                }}
              >
                Contact Us
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedLimo(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Limousines
