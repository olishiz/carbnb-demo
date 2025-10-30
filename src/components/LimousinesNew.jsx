import React, { useState } from 'react'

const LimousinesNew = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLimo, setSelectedLimo] = useState(null)
  const [sortBy, setSortBy] = useState('featured')

  const limousines = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      category: ['business', 'events'],
      basePrice: 8000,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
      features: ['Chauffeur', 'WiFi', 'Premium Audio', 'Climate Control'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Hybrid'
    },
    {
      id: 2,
      name: 'BMW 7-Series Executive',
      category: ['business'],
      basePrice: 7500,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      features: ['Chauffeur', 'Executive Interior', 'Privacy Glass', 'WiFi'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Diesel'
    },
    {
      id: 3,
      name: 'Stretched Lincoln Limousine',
      category: ['wedding', 'events'],
      basePrice: 12000,
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
      features: ['Bar', 'LED Lighting', 'Premium Sound', 'Privacy Divider'],
      capacity: 10,
      year: 2023,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 4,
      name: 'Rolls-Royce Phantom',
      category: ['wedding', 'business'],
      basePrice: 15000,
      image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800',
      features: ['Chauffeur', 'Ultra Luxury', 'Champagne Bar', 'Starlight Ceiling'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 5,
      name: 'Maybach S-Class',
      category: ['business', 'events'],
      basePrice: 13000,
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
      features: ['Reclining Seats', 'Massage', 'Executive Package', 'Refrigerator'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Hybrid'
    },
    {
      id: 6,
      name: 'Audi A8 L',
      category: ['business'],
      basePrice: 7000,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      features: ['Tech Package', 'Chauffeur', 'WiFi', 'Virtual Cockpit'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Hybrid'
    },
    {
      id: 7,
      name: 'Bentley Flying Spur',
      category: ['wedding', 'business'],
      basePrice: 14000,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
      features: ['Handcrafted Interior', 'Chauffeur', 'Premium Bar', 'Rotating Display'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 8,
      name: 'Stretched Chrysler 300',
      category: ['wedding', 'events'],
      basePrice: 10000,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      features: ['Party Lights', 'Sound System', 'Bar', 'Fiber Optic Lighting'],
      capacity: 10,
      year: 2023,
      transmission: 'Automatic',
      fuel: 'Petrol'
    }
  ]

  const calculatePrice = (basePrice, duration) => {
    let discount = 0
    if (duration >= 12 && duration < 24) discount = 0.10
    if (duration >= 24 && duration < 36) discount = 0.15
    if (duration >= 36) discount = 0.20
    return Math.round(basePrice * (1 - discount))
  }

  const filteredLimousines = limousines
    .filter(limo => filter === 'all' || limo.category.includes(filter))
    .filter(limo =>
      limo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      limo.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.basePrice - b.basePrice
      if (sortBy === 'price-high') return b.basePrice - a.basePrice
      if (sortBy === 'capacity') return b.capacity - a.capacity
      return 0 // featured
    })

  const FilterButton = ({ label, value }) => (
    <button
      onClick={() => setFilter(value)}
      style={{
        padding: '10px 20px',
        background: filter === value ? 'var(--primary)' : 'var(--bg-card)',
        color: filter === value ? 'white' : 'var(--text-secondary)',
        border: `1px solid ${filter === value ? 'var(--primary)' : 'var(--border)'}`,
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.2s ease',
        fontFamily: 'Inter, sans-serif'
      }}
      onMouseEnter={(e) => {
        if (filter !== value) {
          e.currentTarget.style.background = 'var(--bg-hover)'
          e.currentTarget.style.borderColor = 'var(--border-light)'
        }
      }}
      onMouseLeave={(e) => {
        if (filter !== value) {
          e.currentTarget.style.background = 'var(--bg-card)'
          e.currentTarget.style.borderColor = 'var(--border)'
        }
      }}
    >
      {label}
    </button>
  )

  return (
    <section id="limousines" style={{ background: 'var(--bg-elevated)', padding: '100px 24px' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="section-header">
          <h2>Premium <span className="gradient-text">Limousine</span> Fleet</h2>
          <p>Discover our collection of luxury limousines, each meticulously maintained and ready for your journey</p>
        </div>

        {/* Search and Filters */}
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Search Bar */}
          <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Search limousines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                color: 'var(--text-primary)',
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <FilterButton label="All" value="all" />
            <FilterButton label="Wedding" value="wedding" />
            <FilterButton label="Business" value="business" />
            <FilterButton label="Events" value="events" />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '12px 16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              outline: 'none',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="capacity">Capacity</option>
          </select>
        </div>

        {/* Results Count */}
        <div style={{
          marginBottom: '32px',
          color: 'var(--text-secondary)',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {filteredLimousines.length} limousine{filteredLimousines.length !== 1 ? 's' : ''} available
        </div>

        {/* Limousine Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '24px'
        }}>
          {filteredLimousines.map((limo) => (
            <div
              key={limo.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--border-light)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div style={{
                height: '240px',
                overflow: 'hidden',
                position: 'relative',
                background: 'var(--bg-main)'
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
                {/* Year Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: 'white',
                  fontWeight: '600'
                }}>
                  {limo.year}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px' }}>
                {/* Name and Capacity */}
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontWeight: '700',
                    letterSpacing: '-0.01em'
                  }}>
                    {limo.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    fontSize: '13px',
                    color: 'var(--text-tertiary)'
                  }}>
                    <span>{limo.capacity} passengers</span>
                    <span>•</span>
                    <span>{limo.fuel}</span>
                    <span>•</span>
                    <span>{limo.transmission}</span>
                  </div>
                </div>

                {/* Features */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {limo.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} style={{
                      fontSize: '12px',
                      padding: '5px 10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      {feature}
                    </span>
                  ))}
                  {limo.features.length > 3 && (
                    <span style={{
                      fontSize: '12px',
                      padding: '5px 10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      +{limo.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price and CTA */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border)'
                }}>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--text-tertiary)',
                      marginBottom: '4px'
                    }}>
                      From
                    </div>
                    <div style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em'
                    }}>
                      RM{calculatePrice(limo.basePrice, 12).toLocaleString()}
                      <span style={{
                        fontSize: '14px',
                        color: 'var(--text-tertiary)',
                        fontWeight: '500'
                      }}>
                        /mo
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{ padding: '12px 20px', fontSize: '14px' }}
                    onClick={() => setSelectedLimo(limo)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredLimousines.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: 'var(--text-secondary)'
          }}>
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>No limousines found</h3>
            <p style={{ fontSize: '15px' }}>Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedLimo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
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
              background: 'var(--bg-card)',
              padding: '40px',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              border: '1px solid var(--border)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              fontSize: '28px',
              marginBottom: '8px',
              fontWeight: '800'
            }}>
              {selectedLimo.name}
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              fontSize: '15px'
            }}>
              Premium limousine subscription available now
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '24px',
              padding: '20px',
              background: 'var(--bg-darker)',
              borderRadius: '12px'
            }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Capacity</div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>{selectedLimo.capacity} passengers</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Year</div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>{selectedLimo.year}</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Fuel</div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>{selectedLimo.fuel}</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Transmission</div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>{selectedLimo.transmission}</div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: '600' }}>Features Included</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedLimo.features.map((feature, idx) => (
                  <span key={idx} style={{
                    fontSize: '13px',
                    padding: '6px 12px',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-secondary)'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  alert('Thank you! We will contact you within 24 hours.')
                  setSelectedLimo(null)
                }}
              >
                Request Subscription
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

export default LimousinesNew
