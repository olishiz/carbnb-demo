import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const BottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 'cars',
      label: 'Cars',
      path: '/cars',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17h14v2H5v-2z"></path>
          <path d="M5 11l1.5-4.5h11L19 11"></path>
          <circle cx="7.5" cy="15.5" r="1.5"></circle>
          <circle cx="16.5" cy="15.5" r="1.5"></circle>
          <path d="M5 11h14"></path>
        </svg>
      )
    },
    {
      id: 'account',
      label: 'Account',
      action: () => alert('Account feature coming soon!'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      id: 'more',
      label: 'More',
      action: () => alert('More options coming soon!'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      )
    }
  ]

  const handleClick = (item) => {
    if (item.path) {
      navigate(item.path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (item.action) {
      item.action()
    }
  }

  const isActive = (item) => {
    if (item.path) {
      return location.pathname === item.path
    }
    return false
  }

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border)',
      padding: '8px 0 max(8px, env(safe-area-inset-bottom))',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)'
    }}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: '8px 16px',
            background: 'transparent',
            border: 'none',
            color: isActive(item) ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minWidth: '64px',
            position: 'relative'
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)'
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <div style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease'
          }}>
            {item.icon}
          </div>
          <span style={{
            fontSize: '11px',
            fontWeight: isActive(item) ? '600' : '500',
            letterSpacing: '0.3px'
          }}>
            {item.label}
          </span>
          {isActive(item) && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '32px',
              height: '2px',
              background: 'var(--primary)',
              borderRadius: '0 0 2px 2px'
            }} />
          )}
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
