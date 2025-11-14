import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompare } from '../context/CompareContext'
import { calculatePrice } from '../data/limousines'
import { ArrowLeft, Check, X as XIcon } from 'lucide-react'

const Compare = () => {
  const navigate = useNavigate()
  const { compareList, clearCompare } = useCompare()

  if (compareList.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '80px',
        background: 'var(--bg-elevated)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>🚗</div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '12px',
            color: 'var(--text-primary)'
          }}>
            No Vehicles to Compare
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}>
            Add vehicles from the Cars page to start comparing
          </p>
          <button
            onClick={() => navigate('/cars')}
            className="btn btn-primary"
            style={{ padding: '14px 32px' }}
          >
            Browse Cars
          </button>
        </div>
      </div>
    )
  }

  const comparisonFeatures = [
    { label: 'Base Price', key: 'basePrice', format: (val) => `RM${val.toLocaleString()}/mo` },
    { label: '12 Months', key: 'price12', format: (val) => `RM${val.toLocaleString()}/mo` },
    { label: '24 Months', key: 'price24', format: (val) => `RM${val.toLocaleString()}/mo` },
    { label: '36+ Months', key: 'price36', format: (val) => `RM${val.toLocaleString()}/mo` },
    { label: 'Capacity', key: 'capacity', format: (val) => `${val} passengers` },
    { label: 'Year', key: 'year', format: (val) => val },
    { label: 'Transmission', key: 'transmission', format: (val) => val },
    { label: 'Fuel Type', key: 'fuel', format: (val) => val },
    { label: 'Professional Chauffeur', key: 'feature_chauffeur' },
    { label: 'WiFi Connectivity', key: 'feature_wifi' },
    { label: 'Premium Audio', key: 'feature_audio' },
    { label: 'Climate Control', key: 'feature_climate' },
    { label: 'Leather Seats', key: 'feature_leather' },
    { label: 'Entertainment System', key: 'feature_entertainment' },
    { label: 'Privacy Glass', key: 'feature_privacy' },
    { label: 'Massage Seats', key: 'feature_massage' },
    { label: 'Champagne Bar', key: 'feature_bar' },
    { label: '360° Virtual Tour', key: 'virtualTour' }
  ]

  const getFeatureValue = (car, feature) => {
    if (feature.key === 'price12') return calculatePrice(car.basePrice, 12)
    if (feature.key === 'price24') return calculatePrice(car.basePrice, 24)
    if (feature.key === 'price36') return calculatePrice(car.basePrice, 36)
    if (feature.key.startsWith('feature_')) {
      const featureName = feature.label.toLowerCase()
      return car.features.some(f => f.toLowerCase().includes(featureName.split(' ')[0]))
    }
    if (feature.key === 'virtualTour') return !!car.virtualTour
    return car[feature.key]
  }

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '100px',
      paddingBottom: '100px',
      background: 'var(--bg-elevated)'
    }}>
      <div className="container" style={{ maxWidth: '1400px', padding: '0 24px' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <button
              onClick={() => navigate('/cars')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '600',
                background: 'transparent',
                color: 'var(--text-secondary)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '16px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              <ArrowLeft size={16} />
              Back to Cars
            </button>
            <h1 style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              COMPARE LIMOUSINES
            </h1>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-secondary)'
            }}>
              Side-by-side comparison of {compareList.length} vehicles
            </p>
          </div>
          <button
            onClick={clearCompare}
            className="btn btn-secondary"
            style={{ padding: '12px 24px' }}
          >
            Clear All
          </button>
        </div>

        {/* Comparison Table */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              minWidth: '800px',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)' }}>
                  <th style={{
                    padding: '24px',
                    textAlign: 'left',
                    fontWeight: '700',
                    fontSize: '14px',
                    color: 'var(--text-primary)',
                    borderBottom: '1px solid var(--border)',
                    width: '200px',
                    position: 'sticky',
                    left: 0,
                    background: 'var(--bg-elevated)',
                    zIndex: 1
                  }}>
                    FEATURES
                  </th>
                  {compareList.map((car) => (
                    <th key={car.id} style={{
                      padding: '24px',
                      textAlign: 'center',
                      borderBottom: '1px solid var(--border)'
                    }}>
                      <img
                        src={car.images[0]}
                        alt={car.name}
                        style={{
                          width: '100%',
                          maxWidth: '250px',
                          height: '150px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginBottom: '16px'
                        }}
                      />
                      <div style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '4px'
                      }}>
                        {car.name}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: 'var(--text-tertiary)'
                      }}>
                        {car.year}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} style={{
                    background: idx % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-elevated)'
                  }}>
                    <td style={{
                      padding: '16px 24px',
                      fontWeight: '600',
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                      borderBottom: idx < comparisonFeatures.length - 1 ? '1px solid var(--border)' : 'none',
                      position: 'sticky',
                      left: 0,
                      background: idx % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-elevated)',
                      zIndex: 1
                    }}>
                      {feature.label}
                    </td>
                    {compareList.map((car) => {
                      const value = getFeatureValue(car, feature)
                      return (
                        <td key={car.id} style={{
                          padding: '16px 24px',
                          textAlign: 'center',
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          borderBottom: idx < comparisonFeatures.length - 1 ? '1px solid var(--border)' : 'none'
                        }}>
                          {typeof value === 'boolean' ? (
                            <div style={{
                              display: 'flex',
                              justifyContent: 'center'
                            }}>
                              {value ? (
                                <div style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  background: '#10B981',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                  <Check size={14} color="white" />
                                </div>
                              ) : (
                                <div style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  background: '#EF4444',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                  <XIcon size={14} color="white" />
                                </div>
                              )}
                            </div>
                          ) : (
                            <span style={{ fontWeight: '500' }}>
                              {feature.format ? feature.format(value) : value || '-'}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '32px',
          padding: '32px',
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '12px',
            color: 'var(--text-primary)'
          }}>
            Ready to book your limousine?
          </h3>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}>
            Start your luxury limousine subscription today
          </p>
          <button
            onClick={() => navigate('/booking')}
            className="btn btn-primary"
            style={{ padding: '14px 40px', fontSize: '16px' }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Compare
