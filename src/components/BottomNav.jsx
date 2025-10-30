import React, { useState } from 'react'

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      id: 'cars',
      label: 'Cars',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17h14v2H5v-2z"></path>
          <path d="M5 11l1.5-4.5h11L19 11"></path>
          <circle cx="7.5" cy="15.5" r="1.5"></circle>
          <circle cx="16.5" cy="15.5" r="1.5"></circle>
          <path d="M5 11h14"></path>
        </svg>
      ),
      action: () => {
        const element = document.getElementById('limousines')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      id: 'account',
      label: 'Account',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      action: () => alert('Account feature coming soon!')
    },
    {
      id: 'more',
      label: 'More',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      ),
      action: () => {
        const element = document.getElementById('faq')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  ]

  const handleClick = (item) => {
    setActiveTab(item.id)
    item.action()
  }

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(22, 22, 22, 0.95)',
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
            color: activeTab === item.id ? 'var(--primary)' : 'var(--text-secondary)',
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
            fontWeight: activeTab === item.id ? '600' : '500',
            letterSpacing: '0.3px'
          }}>
            {item.label}
          </span>
          {activeTab === item.id && (
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
