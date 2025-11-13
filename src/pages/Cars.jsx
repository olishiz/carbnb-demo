import React, { useState } from 'react'
import DatePicker from '../components/DatePicker'
import Swal from 'sweetalert2'

const Cars = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLimo, setSelectedLimo] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBooking, setShowBooking] = useState(false)
  const [bookingStep, setBookingStep] = useState(1) // 1: details, 2: personal info, 3: payment
  const [startDate, setStartDate] = useState(null)

  const limousines = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      category: ['business', 'events'],
      basePrice: 8000,
      images: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200'
      ],
      features: ['Professional Chauffeur', 'WiFi Connectivity', 'Premium Audio System', 'Climate Control', 'Leather Seats', 'Ambient Lighting'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      description: 'Experience ultimate luxury with the Mercedes-Benz S-Class. Perfect for business meetings and special events.'
    },
    {
      id: 2,
      name: 'BMW 7-Series Executive',
      category: ['business'],
      basePrice: 7500,
      images: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200'
      ],
      features: ['Professional Chauffeur', 'Executive Interior', 'Privacy Glass', 'WiFi', 'Massage Seats', 'Rear Entertainment'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Diesel',
      description: 'The BMW 7-Series offers unparalleled comfort and technology for the discerning executive.'
    },
    {
      id: 3,
      name: 'Stretched Lincoln Limousine',
      category: ['wedding', 'events'],
      basePrice: 12000,
      images: [
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200',
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1200',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
        'https://images.unsplash.com/photo-1449130015084-2feae5ecdbb0?w=1200',
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200'
      ],
      features: ['Premium Bar', 'LED Lighting', 'Premium Sound System', 'Privacy Divider', 'Fiber Optic Ceiling', 'Champagne Service'],
      capacity: 10,
      year: 2023,
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: 'Make your special day unforgettable with our stretched Lincoln limousine, perfect for weddings and celebrations.'
    },
    {
      id: 4,
      name: 'Rolls-Royce Phantom',
      category: ['wedding', 'business'],
      basePrice: 15000,
      images: [
        'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=1200',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200'
      ],
      features: ['Professional Chauffeur', 'Starlight Ceiling', 'Champagne Bar', 'Bespoke Interior', 'Rear Theatre', 'Picnic Tables'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: 'The pinnacle of automotive luxury. The Rolls-Royce Phantom is the ultimate statement of success and elegance.'
    },
    {
      id: 5,
      name: 'Maybach S-Class',
      category: ['business', 'events'],
      basePrice: 13000,
      images: [
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200'
      ],
      features: ['Reclining Seats', 'Massage Function', 'Executive Package', 'Refrigerator', 'Ambient Lighting', 'Burmester Sound'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      description: 'The Maybach S-Class combines Mercedes engineering with ultimate luxury and comfort for the most demanding clients.'
    },
    {
      id: 6,
      name: 'Audi A8 L',
      category: ['business'],
      basePrice: 7000,
      images: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200'
      ],
      features: ['Tech Package', 'Professional Chauffeur', 'WiFi', 'Virtual Cockpit', 'Matrix LED', 'Bang & Olufsen'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      description: 'The Audi A8 L offers cutting-edge technology and refined luxury in a sophisticated package.'
    },
    {
      id: 7,
      name: 'Bentley Flying Spur',
      category: ['wedding', 'business'],
      basePrice: 14000,
      images: [
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200'
      ],
      features: ['Handcrafted Interior', 'Professional Chauffeur', 'Premium Bar', 'Rotating Display', 'Naim Audio', 'Mood Lighting'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: 'Experience British luxury at its finest with the handcrafted Bentley Flying Spur.'
    },
    {
      id: 8,
      name: 'Stretched Chrysler 300',
      category: ['wedding', 'events'],
      basePrice: 10000,
      images: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200',
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1200',
        'https://images.unsplash.com/photo-1449130015084-2feae5ecdbb0?w=1200',
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200'
      ],
      features: ['Party Lights', 'Premium Sound System', 'Premium Bar', 'Fiber Optic Lighting', 'LED Dance Floor', 'Privacy Divider'],
      capacity: 10,
      year: 2023,
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: 'Perfect for celebrations and parties, this stretched Chrysler 300 brings the party wherever you go.'
    },
    {
      id: 9,
      name: 'Cadillac Escalade ESV',
      category: ['events', 'business'],
      basePrice: 9500,
      images: [
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200',
        'https://images.unsplash.com/photo-1506015391300-1e458e17e745?w=1200',
        'https://images.unsplash.com/photo-1449130015084-2feae5ecdbb0?w=1200',
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200'
      ],
      features: ['Spacious Interior', 'Professional Chauffeur', 'Entertainment System', 'WiFi', 'Premium Audio', 'Captain Chairs'],
      capacity: 7,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: 'The Cadillac Escalade ESV offers commanding presence and luxury space for executives and families.'
    },
    {
      id: 10,
      name: 'Lexus LS 500h',
      category: ['business'],
      basePrice: 7200,
      images: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200'
      ],
      features: ['Professional Chauffeur', 'Mark Levinson Audio', 'Hybrid Technology', 'Shiatsu Massage', 'Kiriko Glass', 'Climate Concierge'],
      capacity: 4,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      description: 'Japanese precision meets luxury in the Lexus LS 500h, offering refined comfort and hybrid efficiency.'
    },
    {
      id: 11,
      name: 'Range Rover Autobiography',
      category: ['business', 'events'],
      basePrice: 9000,
      images: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200',
        'https://images.unsplash.com/photo-1506015391300-1e458e17e745?w=1200',
        'https://images.unsplash.com/photo-1449130015084-2feae5ecdbb0?w=1200'
      ],
      features: ['Professional Chauffeur', 'Executive Seating', 'Meridian Audio', 'Panoramic Roof', 'Cooled Seats', 'Terrain Response'],
      capacity: 5,
      year: 2024,
      transmission: 'Automatic',
      fuel: 'Diesel',
      description: 'The Range Rover Autobiography combines luxury with capability, perfect for any occasion.'
    },
    {
      id: 12,
      name: 'Hummer H2 Stretch Limo',
      category: ['wedding', 'events'],
      basePrice: 13500,
      images: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200',
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1200',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200'
      ],
      features: ['Party Lighting', 'Premium Bar', 'Sound System', 'Laser Lights', 'Smoke Machine', 'VIP Seating'],
      capacity: 16,
      year: 2023,
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: 'Make a bold statement with the Hummer H2 Stretch Limo, perfect for bachelor parties and celebrations.'
    }
  ]

  const calculatePrice = (basePrice, duration = 12) => {
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
      return 0
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
    <section style={{ background: 'var(--bg-main)', padding: '100px 24px 120px', minHeight: 'calc(100vh - 70px)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="section-header">
          <h2>Premium Limousine Fleet</h2>
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
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
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div
                onClick={() => {
                  setSelectedLimo(limo)
                  setCurrentImageIndex(0)
                  setShowBooking(false)
                  setBookingStep(1)
                  setStartDate(null)
                }}
                style={{
                  height: '240px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'var(--bg-elevated)',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={limo.images[0]}
                  alt={limo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  fontWeight: '600'
                }}>
                  {limo.year}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px' }}>
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
                      background: 'var(--bg-elevated)',
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
                      background: 'var(--bg-elevated)',
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
                      RM{calculatePrice(limo.basePrice).toLocaleString()}
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
                    onClick={() => {
                      setSelectedLimo(limo)
                      setCurrentImageIndex(0)
                      setShowBooking(false)
                      setBookingStep(1)
                      setStartDate(null)
                    }}
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

      {/* Enhanced Modal with Image Gallery and Booking */}
      {selectedLimo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            overflowY: 'auto'
          }}
          onClick={() => {
            setSelectedLimo(null)
            setShowBooking(false)
            setBookingStep(1)
            setStartDate(null)
          }}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              maxWidth: '900px',
              width: '100%',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              maxHeight: '90vh',
              overflowY: 'auto',
              margin: '20px 0'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedLimo(null)
                setShowBooking(false)
                setBookingStep(1)
              }}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              ×
            </button>

            {!showBooking ? (
              <>
                {/* Image Gallery */}
                <div style={{ position: 'relative', marginBottom: '30px' }}>
                  <img
                    src={selectedLimo.images[currentImageIndex]}
                    alt={`${selectedLimo.name} - Image ${currentImageIndex + 1}`}
                    style={{
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                      borderRadius: '20px 20px 0 0'
                    }}
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentImageIndex((currentImageIndex - 1 + selectedLimo.images.length) % selectedLimo.images.length)}
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.6)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      fontSize: '24px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % selectedLimo.images.length)}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.6)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      fontSize: '24px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ›
                  </button>

                  {/* Image Counter */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {currentImageIndex + 1} / {selectedLimo.images.length}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  padding: '0 30px 30px',
                  overflowX: 'auto'
                }}>
                  {selectedLimo.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      style={{
                        width: '80px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: currentImageIndex === idx ? '3px solid var(--primary)' : '3px solid transparent',
                        opacity: currentImageIndex === idx ? 1 : 0.6,
                        transition: 'all 0.2s ease'
                      }}
                    />
                  ))}
                </div>

                {/* Car Details */}
                <div style={{ padding: '0 40px 40px' }}>
                  <h3 style={{
                    fontSize: '32px',
                    marginBottom: '12px',
                    fontWeight: '800',
                    color: 'var(--text-primary)'
                  }}>
                    {selectedLimo.name}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '24px',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}>
                    {selectedLimo.description}
                  </p>

                  {/* Specifications Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '16px',
                    marginBottom: '30px',
                    padding: '24px',
                    background: 'var(--bg-elevated)',
                    borderRadius: '12px'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Capacity</div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>{selectedLimo.capacity} passengers</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Year</div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>{selectedLimo.year}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fuel</div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>{selectedLimo.fuel}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Transmission</div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>{selectedLimo.transmission}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: '700', color: 'var(--text-primary)' }}>Features Included</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {selectedLimo.features.map((feature, idx) => (
                        <span key={idx} style={{
                          fontSize: '14px',
                          padding: '8px 16px',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          color: 'var(--text-secondary)',
                          fontWeight: '500'
                        }}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div style={{
                    background: 'var(--bg-elevated)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Starting from</div>
                        <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--text-primary)' }}>
                          RM{calculatePrice(selectedLimo.basePrice).toLocaleString()}
                          <span style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: '500' }}>/month</span>
                        </div>
                        <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '4px' }}>12-month subscription (10% discount)</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      className="btn btn-primary"
                      style={{ flex: 1, fontSize: '16px', padding: '16px' }}
                      onClick={() => setShowBooking(true)}
                    >
                      Book Now
                    </button>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '16px 32px' }}
                      onClick={() => {
                        setSelectedLimo(null)
                        setShowBooking(false)
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Booking Form will go here
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px', color: 'var(--text-primary)' }}>
                  Book {selectedLimo.name}
                </h3>

                {/* Progress Steps */}
                <div style={{ display: 'flex', marginBottom: '40px', gap: '20px' }}>
                  {['Details', 'Information', 'Payment'].map((step, idx) => (
                    <div key={idx} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: bookingStep > idx ? 'var(--primary)' : bookingStep === idx + 1 ? 'var(--primary)' : 'var(--bg-elevated)',
                        color: bookingStep >= idx + 1 ? 'white' : 'var(--text-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 8px',
                        fontWeight: '700'
                      }}>
                        {idx + 1}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: bookingStep >= idx + 1 ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
                        {step}
                      </div>
                    </div>
                  ))}
                </div>

                {bookingStep === 1 && (
                  <div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                        Subscription Duration
                      </label>
                      <select style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }}>
                        <option value="1">1 Month - RM{selectedLimo.basePrice.toLocaleString()}/mo</option>
                        <option value="12">12 Months - RM{calculatePrice(selectedLimo.basePrice, 12).toLocaleString()}/mo (10% off)</option>
                        <option value="24">24 Months - RM{calculatePrice(selectedLimo.basePrice, 24).toLocaleString()}/mo (15% off)</option>
                        <option value="36">36+ Months - RM{calculatePrice(selectedLimo.basePrice, 36).toLocaleString()}/mo (20% off)</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                        Start Date
                      </label>
                      <DatePicker
                        selected={startDate}
                        onSelect={setStartDate}
                        placeholder="Select your start date"
                      />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                        Additional Notes (Optional)
                      </label>
                      <textarea style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        minHeight: '100px',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }} placeholder="Any special requirements?"></textarea>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button className="btn btn-secondary" onClick={() => setShowBooking(false)}>Back</button>
                      <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setBookingStep(2)}>Continue</button>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>Full Name</label>
                      <input type="text" placeholder="John Doe" style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>Email</label>
                      <input type="email" placeholder="john@example.com" style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>Phone</label>
                      <input type="tel" placeholder="+60 12-345 6789" style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>Address</label>
                      <textarea placeholder="Street address, City, State" style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        minHeight: '80px',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }}></textarea>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button className="btn btn-secondary" onClick={() => setBookingStep(1)}>Back</button>
                      <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setBookingStep(3)}>Continue</button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div>
                    <div style={{
                      background: 'var(--bg-elevated)',
                      padding: '20px',
                      borderRadius: '12px',
                      marginBottom: '30px'
                    }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>Booking Summary</h4>
                      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        Vehicle: {selectedLimo.name}
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Monthly Payment: RM{calculatePrice(selectedLimo.basePrice, 12).toLocaleString()}
                      </div>
                      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>
                          Total Today: RM{calculatePrice(selectedLimo.basePrice, 12).toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>Expiry</label>
                        <input type="text" placeholder="MM/YY" style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          fontSize: '15px',
                          fontFamily: 'Inter, sans-serif',
                          background: 'var(--bg-main)',
                          color: 'var(--text-primary)'
                        }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>CVV</label>
                        <input type="text" placeholder="123" style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          fontSize: '15px',
                          fontFamily: 'Inter, sans-serif',
                          background: 'var(--bg-main)',
                          color: 'var(--text-primary)'
                        }} />
                      </div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '20px', lineHeight: '1.5' }}>
                      By confirming your booking, you agree to our Terms of Service and Privacy Policy. Your payment is secure and encrypted.
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button className="btn btn-secondary" onClick={() => setBookingStep(2)}>Back</button>
                      <button
                        className="btn btn-primary"
                        style={{ flex: 1 }}
                        onClick={async () => {
                          // Show loading
                          Swal.fire({
                            title: 'Processing Payment...',
                            html: 'Please wait while we process your payment',
                            allowOutsideClick: false,
                            didOpen: () => {
                              Swal.showLoading()
                            }
                          })

                          // Simulate payment processing
                          await new Promise(resolve => setTimeout(resolve, 2000))

                          // Show success
                          Swal.fire({
                            icon: 'success',
                            title: 'Booking Confirmed!',
                            html: `<div style="text-align: center; padding: 10px;">
                              <p style="font-size: 16px; margin-bottom: 12px;">Thank you for choosing <strong>${selectedLimo.name}</strong></p>
                              <p style="color: #666; font-size: 14px;">We'll contact you within 24 hours to finalize your subscription and arrange delivery.</p>
                            </div>`,
                            confirmButtonText: 'Great!',
                            confirmButtonColor: '#000000',
                            customClass: {
                              popup: 'swal-custom-popup',
                              confirmButton: 'swal-custom-button'
                            }
                          })

                          setSelectedLimo(null)
                          setShowBooking(false)
                          setBookingStep(1)
                          setStartDate(null)
                        }}
                      >
                        Confirm Payment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Cars
