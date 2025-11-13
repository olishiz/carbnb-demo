import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionsRef = useRef([])
  const [carouselIndex, setCarouselIndex] = useState(0)

  const cars = [
    { name: 'MERCEDES-BENZ S-CLASS 2024', price: 'RM 7,200', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400' },
    { name: 'BMW 7-SERIES 2024', price: 'RM 6,800', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400' },
    { name: 'ROLLS-ROYCE PHANTOM 2024', price: 'RM 13,500', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=400' },
    { name: 'MAYBACH S-CLASS 2024', price: 'RM 11,700', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400' },
    { name: 'BENTLEY FLYING SPUR 2024', price: 'RM 12,600', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400' },
    { name: 'STRETCHED LINCOLN 2023', price: 'RM 10,800', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400' },
    { name: 'CADILLAC ESCALADE 2024', price: 'RM 9,500', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400' }
  ]

  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
  const totalPages = Math.ceil(cars.length / itemsPerPage)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const getSectionStyle = (sectionName, delay = 0) => ({
    opacity: visibleSections.has(sectionName) ? 1 : 0,
    transform: visibleSections.has(sectionName) ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  })

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToSlide = (index) => {
    setCarouselIndex(index)
  }

  return (
    <div style={{ background: 'var(--bg-main)' }}>
      {/* Hero Section with Split Layout */}
      <section
        ref={addToRefs}
        data-section="hero"
        style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 24px 80px',
          background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
          position: 'relative',
          overflow: 'hidden',
          ...getSectionStyle('hero')
        }}>
        <div className="container" style={{ maxWidth: '1400px', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div>
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: '800',
                lineHeight: '1.15',
                marginBottom: '24px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                All-in-one limousine subscription
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

            {/* Right Hero Image */}
            <div style={{
              display: window.innerWidth >= 768 ? 'block' : 'none',
              position: 'relative'
            }}>
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800"
                alt="Luxury Limousine"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section
        ref={addToRefs}
        data-section="featured"
        style={{
          padding: '60px 24px',
          background: 'var(--bg-elevated)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          ...getSectionStyle('featured')
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
            As featured in
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

      {/* Your Subscription Includes with Car Image */}
      <section
        ref={addToRefs}
        data-section="subscription"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-main)',
          ...getSectionStyle('subscription')
        }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
            gap: '64px',
            alignItems: 'center'
          }}>
            {/* Left - Features Grid */}
            <div>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 42px)',
                fontWeight: '800',
                marginBottom: '64px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                Your subscription includes
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px'
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

            {/* Right - Car Image */}
            <div style={{
              display: window.innerWidth >= 1024 ? 'flex' : 'none',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                src="https://images.unsplash.com/photo-1563720223809-4e4c00bbe058?w=600"
                alt="Luxury Car Interior"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How CarBnb Works */}
      <section
        ref={addToRefs}
        data-section="howItWorks"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-elevated)',
          ...getSectionStyle('howItWorks')
        }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            How CarBnb works
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

      {/* Popular Limousines with Carousel */}
      <section
        ref={addToRefs}
        data-section="popularCars"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-main)',
          ...getSectionStyle('popularCars')
        }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Popular limousine models
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '64px'
          }}>
            From Mercedes S-Class to Rolls-Royce Phantom, we have a limousine for every occasion.
          </p>

          {/* Carousel Container */}
          <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Carousel Track */}
            <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
              <div style={{
                display: 'flex',
                transform: `translateX(-${carouselIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}>
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    style={{
                      minWidth: '100%',
                      display: 'grid',
                      gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
                      gap: '32px',
                      padding: '0 8px'
                    }}
                  >
                    {cars.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((car, idx) => (
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
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'white',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white'
              }}
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'white',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white'
              }}
            >
              ›
            </button>
          </div>

          {/* Carousel Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '32px'
          }}>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: carouselIndex === idx ? 'var(--primary)' : 'var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
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
      <section
        ref={addToRefs}
        data-section="comparison"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-elevated)',
          ...getSectionStyle('comparison')
        }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Convenience + Flexibility
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
      <section
        ref={addToRefs}
        data-section="saveTime"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-main)',
          ...getSectionStyle('saveTime')
        }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Save time, save money
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
                description: "Our Concierge staff takes care of all the hassle; from road tax and insurance renewals to pick up and delivery for servicing.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400"
              },
              {
                title: "No Down Payment & No Interest",
                description: "With CarBnb there are no loans, no high upfront payments and no interest fees. Enjoy debt-free driving on your terms.",
                image: "https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=400"
              },
              {
                title: "Swap whenever",
                description: "You don't need multiple cars in your garage, just one CarBnb subscription. Swap cars whenever your needs change.",
                image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400"
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '32px' }}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Save Up To */}
      <section
        ref={addToRefs}
        data-section="saveBanner"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-main)',
          ...getSectionStyle('saveBanner')
        }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
            gap: '48px',
            alignItems: 'center',
            background: 'var(--primary)',
            borderRadius: '16px',
            padding: '60px',
            color: 'white'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '900',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}>
                Save up to 33% in the 1st year
              </h2>
              <p style={{
                fontSize: '18px',
                opacity: 0.9,
                lineHeight: '1.6'
              }}>
                Never pay for insurance, maintenance or tyres ever again. CarBnb prices are all-inclusive so you can enjoy maximum savings.
              </p>
            </div>
            <div style={{
              display: window.innerWidth >= 768 ? 'flex' : 'none',
              justifyContent: 'center'
            }}>
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500"
                alt="Savings"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={addToRefs}
        data-section="testimonials"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-elevated)',
          ...getSectionStyle('testimonials')
        }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            What our subscribers say
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
      <section
        ref={addToRefs}
        data-section="faq"
        style={{
          padding: '100px 24px',
          background: 'var(--bg-main)',
          ...getSectionStyle('faq')
        }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Frequently Asked Questions
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

      {/* Final CTA Section */}
      <section
        ref={addToRefs}
        data-section="finalCTA"
        style={{
          padding: '100px 24px 150px',
          background: 'var(--bg-elevated)',
          textAlign: 'center',
          ...getSectionStyle('finalCTA')
        }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '900',
            marginBottom: '32px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            Love it. Drive it. <span style={{ fontStyle: 'italic' }}>CarBnb it.</span>
          </h2>

          <button
            onClick={() => navigate('/cars')}
            style={{
              padding: '20px 48px',
              fontSize: '18px',
              fontWeight: '700',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-hover)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--primary)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            Browse Cars
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
