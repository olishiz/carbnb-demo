import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompare } from '../context/CompareContext'
import { X, ArrowRight } from 'lucide-react'

const CompareBar = () => {
  const navigate = useNavigate()
  const { compareList, removeFromCompare, clearCompare } = useCompare()

  if (compareList.length === 0) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px',
      left: 0,
      right: 0,
      background: 'var(--bg-dark)',
      borderTop: '1px solid var(--border)',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
      zIndex: 999,
      animation: 'slideUp 0.3s ease'
    }}>
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container" style={{ padding: '16px 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          {/* Left Side - Compare Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
                Compare Vehicles ({compareList.length}/3)
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                {compareList.length < 2 ? 'Add at least 2 vehicles to compare' : 'Ready to compare'}
              </div>
            </div>
          </div>

          {/* Middle - Selected Cars */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flex: 1,
            overflow: 'auto',
            maxWidth: '600px'
          }}>
            {compareList.map((car) => (
              <div
                key={car.id}
                style={{
                  position: 'relative',
                  minWidth: '120px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <button
                  onClick={() => removeFromCompare(car.id)}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'rgba(0,0,0,0.7)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.9)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.7)'
                  }}
                >
                  <X size={14} color="white" />
                </button>
                <img
                  src={car.images[0]}
                  alt={car.name}
                  style={{
                    width: '100%',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
                <div style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'white',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {car.name}
                </div>
              </div>
            ))}

            {/* Empty Slots */}
            {Array.from({ length: 3 - compareList.length }).map((_, idx) => (
              <div
                key={`empty-${idx}`}
                style={{
                  minWidth: '120px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px dashed rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)'
                }}
              >
                +
              </div>
            ))}
          </div>

          {/* Right Side - Actions */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={clearCompare}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: '600',
                background: 'transparent',
                color: 'white',
                border: '1.5px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Clear All
            </button>
            <button
              onClick={() => navigate('/compare')}
              disabled={compareList.length < 2}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: '600',
                background: compareList.length >= 2 ? 'white' : 'rgba(255,255,255,0.2)',
                color: compareList.length >= 2 ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                border: 'none',
                borderRadius: '8px',
                cursor: compareList.length >= 2 ? 'pointer' : 'not-allowed',
                fontFamily: 'Inter, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (compareList.length >= 2) {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,255,255,0.3)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Compare Now
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareBar
