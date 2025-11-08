import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div style={{ background: 'var(--bg-main)' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px 80px',
        background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '24px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              ALL-IN-ONE LIMOUSINE SUBSCRIPTION
            </h1>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              fontWeight: '500'
            }}>
              Better than buying or renting a limousine
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '40px',
              fontSize: '16px',
              color: 'var(--text-primary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>✓</span>
                <span>Subscribe for 1 - 60 months and swap cars when you want</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>✓</span>
                <span>Insurance, road tax, maintenance & Concierge included</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>✓</span>
                <span>No down payment and approval in 24 hours</span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '32px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)' }}>2,000+</div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>happy customers</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)' }}>4.6 ⭐</div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Google Reviews</div>
              </div>
            </div>

            <button
              onClick={() => navigate('/cars')}
              style={{
                padding: '18px 40px',
                fontSize: '16px',
                fontWeight: '700',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Browse Cars
            </button>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section style={{
        padding: '60px 24px',
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container">
          <h3 style={{
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--text-tertiary)',
            marginBottom: '32px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            As Featured In
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap',
            opacity: 0.4
          }}>
            {['The Star', 'The Edge', 'PaulTan', 'Malay Mail', 'New Straits Times'].map((name, idx) => (
              <div key={idx} style={{
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--text-primary)',
                fontFamily: 'serif'
              }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Subscription Includes */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-main)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            YOUR SUBSCRIPTION INCLUDES
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              'Comprehensive insurance',
              'Road tax',
              'Maintenance',
              'Tyres & brakes',
              'Ability to swap cars',
              'Door-to-door service',
              'Concierge delivery'
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '24px',
                textAlign: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px'
                }}>✓</div>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How CarBnb Works */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-elevated)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            HOW CARBNB WORKS
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            maxWidth: '1100px',
            margin: '0 auto 64px'
          }}>
            {[
              {
                number: '1',
                title: 'Select your perfect car',
                description: 'Choose from a wide selection of premium limousines in Malaysia.'
              },
              {
                number: '2',
                title: 'Subscribe in just a few clicks',
                description: 'Reserve your car online, it takes less than 5 minutes!'
              },
              {
                number: '3',
                title: 'We always deliver',
                description: 'Our Concierge Team delivers the car to your doorstep, so you can start your hassle-free driving.'
              }
            ].map((step, idx) => (
              <div key={idx}>
                <div style={{
                  fontSize: '64px',
                  fontWeight: '900',
                  color: 'rgba(0,0,0,0.08)',
                  marginBottom: '16px',
                  lineHeight: '1'
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: 'var(--text-primary)'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/cars')}
              style={{
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: '700',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '2px solid var(--text-primary)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.borderColor = 'var(--text-primary)'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Popular Limousines */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-main)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            POPULAR LIMOUSINE MODELS
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '64px'
          }}>
            From Mercedes S-Class to Rolls-Royce Phantom, we have a limousine for every occasion.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}>
            {[
              { name: 'MERCEDES-BENZ S-CLASS 2024', price: 'RM 7,200', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400' },
              { name: 'BMW 7-SERIES 2024', price: 'RM 6,800', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400' },
              { name: 'ROLLS-ROYCE PHANTOM 2024', price: 'RM 13,500', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=400' },
              { name: 'MAYBACH S-CLASS 2024', price: 'RM 11,700', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400' },
              { name: 'BENTLEY FLYING SPUR 2024', price: 'RM 12,600', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400' },
              { name: 'STRETCHED LINCOLN 2023', price: 'RM 10,800', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400' }
            ].map((car, idx) => (
              <div
                key={idx}
                onClick={() => navigate('/cars')}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <img src={car.image} alt={car.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {car.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>from</p>
                  <p style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {car.price}<span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)' }}>/month</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/cars')}
              style={{
                padding: '18px 40px',
                fontSize: '16px',
                fontWeight: '700',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Browse Cars
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-elevated)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            CONVENIENCE + FLEXIBILITY
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '64px',
            maxWidth: '700px',
            margin: '0 auto 64px'
          }}>
            A CarBnb subscription gives you greater convenience and flexibility than buying or renting a limousine.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              borderCollapse: 'collapse',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <thead>
                <tr style={{ background: 'var(--bg-main)' }}>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', borderBottom: '1px solid var(--border)' }}></th>
                  <th style={{ padding: '20px', textAlign: 'center', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', borderBottom: '1px solid var(--border)' }}>BUY</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', borderBottom: '1px solid var(--border)' }}>RENT</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontWeight: '700', fontSize: '14px', background: 'var(--primary)', color: 'white', borderBottom: '1px solid var(--border)' }}>CARBNB</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Insurance',
                  'Road tax',
                  'Maintenance',
                  'Tyres & brakes',
                  'No down payment',
                  'Flexible contract',
                  '24/7 Emergency Assistance',
                  'Door-to-door service',
                  'Swap vehicles'
                ].map((feature, idx) => (
                  <tr key={idx} style={{ borderBottom: idx < 8 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '16px 20px', fontSize: '15px', color: 'var(--text-primary)' }}>{feature}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <span style={{ color: 'var(--text-tertiary)', fontSize: '18px' }}>-</span>
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      {['Insurance', 'Flexible contract'].includes(feature) ? <span style={{ color: 'var(--primary)', fontSize: '18px' }}>✓</span> : <span style={{ color: 'var(--text-tertiary)', fontSize: '18px' }}>-</span>}
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center', background: 'rgba(0,0,0,0.02)' }}>
                      <span style={{ color: 'var(--primary)', fontSize: '18px' }}>✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Save Time, Save Money */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-main)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            SAVE TIME, SAVE MONEY
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {[
              {
                title: "We've got you covered",
                description: "Our Concierge staff takes care of all the hassle; from road tax and insurance renewals to pick up and delivery for servicing."
              },
              {
                title: "No Down Payment & No Interest",
                description: "With CarBnb there are no loans, no high upfront payments and no interest fees. Enjoy debt-free driving on your terms."
              },
              {
                title: "Swap whenever",
                description: "You don't need multiple cars in your garage, just one CarBnb subscription. Swap cars whenever your needs change."
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '40px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: 'var(--text-primary)'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Save Up To */}
      <section style={{
        padding: '80px 24px',
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '900',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            SAVE UP TO 33% IN THE 1ST YEAR
          </h2>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Never pay for insurance, maintenance or tyres ever again. CarBnb prices are all-inclusive so you can enjoy maximum savings.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '100px 24px', background: 'var(--bg-elevated)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            WHAT OUR SUBSCRIBERS SAY
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                name: 'Nadiah I.',
                car: 'Mercedes-Benz S-Class 2024',
                review: 'I had a great experience with CarBnb for car issuance and the staff were very helpful too in making the process seamless.'
              },
              {
                name: 'Nizam K.',
                car: 'BMW 7-Series 2024',
                review: '5-star professional, efficient & best customer experience by CarBnb.'
              },
              {
                name: 'Oussama S.',
                car: 'Rolls-Royce Phantom 2024',
                review: 'Their seamless process, easy communication, and thorough car inspection left me feeling confident and satisfied. Highly recommended!'
              },
              {
                name: 'Faisal A.',
                car: 'Maybach S-Class 2024',
                review: 'Excellent customer service and prompt communication. Received car in good condition. Shout out to the amazing team!'
              },
              {
                name: 'Ashraf H.',
                car: 'Bentley Flying Spur 2024',
                review: 'Excellent service, friendly team members and superb choice of cars. What more can you ask for? I\'m a happy subscriber and will continue utilise the service for many years to come.'
              },
              {
                name: 'Claire E.',
                car: 'Stretched Lincoln 2023',
                review: 'I chose CarBnb because there\'s a variety of cars and the different lengths of subscriptions tenures.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px'
              }}>
                <div style={{
                  fontSize: '24px',
                  marginBottom: '16px',
                  color: 'var(--primary)'
                }}>★★★★★</div>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  {testimonial.review}
                </p>
                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border)'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--text-tertiary)'
                  }}>
                    {testimonial.car}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 24px 150px', background: 'var(--bg-main)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              'How does CarBnb work?',
              'What\'s included in the monthly price?',
              'What is the concierge service?',
              'Can I join if my driver\'s license is from outside of Malaysia?',
              'Can I buy my CarBnb car?',
              'How do I qualify?'
            ].map((question, idx) => (
              <div key={idx} style={{
                padding: '24px 0',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer'
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {question}
                  <span style={{ fontSize: '24px', color: 'var(--text-tertiary)' }}>+</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              style={{
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: '700',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '2px solid var(--text-primary)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.borderColor = 'var(--text-primary)'
              }}
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
