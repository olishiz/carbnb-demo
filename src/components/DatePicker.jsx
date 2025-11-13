import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import { Calendar } from 'lucide-react'

const DatePicker = ({ selected, onSelect, placeholder = 'Pick a date' }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '15px',
          fontFamily: 'Inter, sans-serif',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          background: 'var(--bg-card)',
          color: selected ? 'var(--text-primary)' : 'var(--text-tertiary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--primary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border)'
        }}
      >
        <span>{selected ? format(selected, 'PPP') : placeholder}</span>
        <Calendar size={18} style={{ color: 'var(--text-tertiary)' }} />
      </button>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              zIndex: 1000,
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              padding: '16px',
              animation: 'fadeIn 0.2s ease'
            }}
          >
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                onSelect(date)
                setIsOpen(false)
              }}
              disabled={{ before: new Date() }}
              styles={{
                root: { fontFamily: 'Inter, sans-serif' },
                caption: { fontSize: '16px', fontWeight: '600', marginBottom: '12px' },
                day: {
                  borderRadius: '6px',
                  transition: 'all 0.2s ease'
                },
                day_selected: {
                  background: 'var(--primary)',
                  color: 'white',
                  fontWeight: '600'
                }
              }}
            />
          </div>
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
          background-color: var(--bg-hover) !important;
        }

        .rdp-button:focus {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }

        .rdp-day_today {
          font-weight: 600;
          color: var(--primary);
        }

        .rdp-head_cell {
          color: var(--text-tertiary);
          font-weight: 600;
          font-size: 14px;
        }

        .rdp-nav_button {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .rdp-nav_button:hover {
          background-color: var(--bg-hover);
        }
      `}</style>
    </div>
  )
}

export default DatePicker
