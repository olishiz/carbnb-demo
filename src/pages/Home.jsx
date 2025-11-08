import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div style={{ background: 'var(--bg-main)' }}>
      {/* Hero Section - Modern & Bold */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px 80px',
        background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(0, 0, 0, 0.05)',
              borderRadius: '100px',
              marginBottom: '32px',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--primary)'
              }}></div>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--primary)',
                letterSpacing: '0.3px'
              }}>
                Malaysia's Premier Limousine Service
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}>
              Your Luxury Ride,{' '}
              <span style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Simplified
              </span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              maxWidth: '600px'
            }}>
              Subscribe to premium limousines with professional chauffeurs. All-inclusive pricing, flexible terms, zero hassle.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}>
              <button
                onClick={() => navigate('/cars')}
                style={{
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.15)'
                }}
              >
                Browse Fleet
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)'
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Learn More
              </button>
            </div>

            {/* Stats Row */}
            <div style={{
              display: 'flex',
              gap: '48px',
              flexWrap: 'wrap'
            }}>
              {[
                { number: '12+', label: 'Luxury Vehicles' },
                { number: '24/7', label: 'Support' },
                { number: '100%', label: 'All-Inclusive' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: 'var(--primary)',
                    marginBottom: '4px',
                    letterSpacing: '-0.02em'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-tertiary)',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions - Clean Grid */}
      <section style={{
        padding: '100px 24px',
        background: 'var(--bg-main)'
      }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              marginBottom: '16px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              Everything You Need, Included
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              No hidden fees. No surprises. Just pure luxury on your terms.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                title: 'Professional Chauffeur',
                description: 'Experienced, vetted drivers at your service 24/7'
              },
              {
                title: 'All-Inclusive Pricing',
                description: 'Insurance, maintenance, and fuel all covered'
              },
              {
                title: 'Flexible Terms',
                description: 'Subscribe from 1 to 60 months with no commitment'
              },
              {
                title: 'Easy Swaps',
                description: 'Change vehicles anytime to suit your needs'
              },
              {
                title: '24h Approval',
                description: 'Get approved and driving within 24 hours'
              },
              {
                title: 'Doorstep Delivery',
                description: 'We bring your limousine directly to you'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = 'var(--primary-light)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--primary)',
                  marginBottom: '20px'
                }}></div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: 'var(--text-primary)'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Step by Step */}
      <section id="how-it-works" style={{
        padding: '100px 24px',
        background: 'var(--bg-elevated)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              marginBottom: '16px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              How It Works
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Get your luxury limousine in three simple steps
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                step: '01',
                title: 'Choose Your Vehicle',
                description: 'Browse our premium fleet and select the perfect limousine for your needs. Compare features, pricing, and availability.',
                color: '#000000'
              },
              {
                step: '02',
                title: 'Complete Subscription',
                description: 'Fill out a simple online form and get instant approval. Choose your subscription term and start date.',
                color: '#1A1A1A'
              },
              {
                step: '03',
                title: 'Start Riding',
                description: 'Your limousine arrives with a professional chauffeur at your doorstep. Enjoy the luxury, we handle everything else.',
                color: '#333333'
              }
            ].map((step, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Step Number */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: step.color,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: '900',
                  marginBottom: '24px',
                  boxShadow: `0 8px 24px ${step.color}40`
                }}>
                  {step.step}
                </div>

                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: 'var(--text-primary)'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <button
              onClick={() => navigate('/cars')}
              style={{
                padding: '18px 40px',
                fontSize: '17px',
                fontWeight: '600',
                background: 'var(--gradient-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.15)'
              }}
            >
              View Our Fleet
            </button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Preview */}
      <section style={{
        padding: '100px 24px',
        background: 'var(--bg-main)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '800',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                Featured Fleet
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)'
              }}>
                Premium limousines ready for subscription
              </p>
            </div>
            <button
              onClick={() => navigate('/cars')}
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: '600',
                background: 'transparent',
                color: 'var(--primary)',
                border: '2px solid var(--primary)',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--primary)'
              }}
            >
              View All Vehicles →
            </button>
          </div>

          {/* Vehicle Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                name: 'Mercedes-Benz S-Class',
                price: 'RM7,200',
                image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600',
                type: 'Business Class'
              },
              {
                name: 'Rolls-Royce Phantom',
                price: 'RM13,500',
                image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600',
                type: 'Ultra Luxury'
              },
              {
                name: 'Stretched Lincoln',
                price: 'RM10,800',
                image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600',
                type: 'Event Special'
              }
            ].map((car, idx) => (
              <div
                key={idx}
                onClick={() => navigate('/cars')}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  height: '240px',
                  overflow: 'hidden',
                  background: 'var(--bg-elevated)'
                }}>
                  <img
                    src={car.image}
                    alt={car.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {car.type}
                  </div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: 'var(--text-primary)'
                  }}>
                    {car.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '6px'
                  }}>
                    <span style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: 'var(--text-primary)'
                    }}>
                      {car.price}
                    </span>
                    <span style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)'
                    }}>
                      /month
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Bold */}
      <section style={{
        padding: '100px 24px',
        background: 'var(--bg-dark)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: '900',
              marginBottom: '24px',
              color: 'var(--text-white)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Ready to Experience Luxury?
            </h2>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Join hundreds of satisfied clients who chose CarBnb for their luxury transportation needs.
            </p>
            <button
              onClick={() => navigate('/cars')}
              style={{
                padding: '20px 48px',
                fontSize: '18px',
                fontWeight: '700',
                background: 'white',
                color: 'var(--primary)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 255, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)'
              }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
