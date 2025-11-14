import React, { useState } from 'react'
import DatePicker from '../components/DatePicker'
import VirtualTour from '../components/VirtualTour'
import Swal from 'sweetalert2'
import { limousines, calculatePrice } from '../data/limousines'
import { useCompare } from '../context/CompareContext'
import { Plus, Eye } from 'lucide-react'

const Cars = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLimo, setSelectedLimo] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBooking, setShowBooking] = useState(false)
  const [bookingStep, setBookingStep] = useState(1) // 1: details, 2: personal info, 3: payment
  const [startDate, setStartDate] = useState(null)
  const [showVirtualTour, setShowVirtualTour] = useState(null)
  const { addToCompare, isInCompare } = useCompare()

  const handleAddToCompare = (car, e) => {
    e.stopPropagation()
    const result = addToCompare(car)
    if (result.success) {
      Swal.fire({
        icon: 'success',
        title: 'Added to Comparison',
        text: `${car.name} has been added to comparison`,
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Cannot Add',
        text: result.message,
        confirmButtonColor: '#000000'
      })
    }
  }

  const handleVirtualTour = (car, e) => {
    e.stopPropagation()
    setShowVirtualTour(car)
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

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <button
                    onClick={(e) => handleAddToCompare(limo, e)}
                    disabled={isInCompare(limo.id)}
                    style={{
                      flex: 1,
                      padding: '10px 16px',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: isInCompare(limo.id) ? 'var(--bg-elevated)' : 'transparent',
                      color: isInCompare(limo.id) ? 'var(--text-tertiary)' : 'var(--text-primary)',
                      border: `1.5px solid ${isInCompare(limo.id) ? 'var(--border)' : 'var(--primary)'}`,
                      borderRadius: '8px',
                      cursor: isInCompare(limo.id) ? 'not-allowed' : 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isInCompare(limo.id)) {
                        e.currentTarget.style.background = 'var(--primary)'
                        e.currentTarget.style.color = 'white'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isInCompare(limo.id)) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--text-primary)'
                      }
                    }}
                  >
                    <Plus size={16} />
                    {isInCompare(limo.id) ? 'Added' : 'Compare'}
                  </button>
                  <button
                    onClick={(e) => handleVirtualTour(limo, e)}
                    style={{
                      flex: 1,
                      padding: '10px 16px',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: 'transparent',
                      color: 'var(--text-primary)',
                      border: '1.5px solid var(--primary)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--primary)'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }}
                  >
                    <Eye size={16} />
                    360° Tour
                  </button>
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

                          // Show success and wait for user to dismiss
                          await Swal.fire({
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

                          // Close modal after user dismisses the alert
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

      {/* Virtual Tour Modal */}
      {showVirtualTour && (
        <VirtualTour
          tourUrl={showVirtualTour.virtualTour}
          carName={showVirtualTour.name}
          onClose={() => setShowVirtualTour(null)}
        />
      )}
    </section>
  )
}

export default Cars
