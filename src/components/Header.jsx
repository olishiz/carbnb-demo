import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { User } from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  const handleHomeScroll = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">Carbnb</Link>

          {/* Desktop Nav */}
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/cars">Cars</Link>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); handleHomeScroll('how-it-works') }}>
              How It Works
            </a>
            <Link to="/account" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              background: user ? 'var(--bg-card)' : 'transparent',
              border: user ? '1px solid var(--border)' : 'none',
              transition: 'all 0.2s ease'
            }}>
              <User size={18} />
              {user ? 'Account' : 'Sign In'}
            </Link>
            <button className="btn btn-primary" onClick={() => navigate('/booking')}>
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              background: 'var(--text-primary)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              background: 'var(--text-primary)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              background: 'var(--text-primary)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/cars" onClick={() => setMobileMenuOpen(false)}>Cars</Link>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); handleHomeScroll('how-it-works') }}>
              How It Works
            </a>
            <Link to="/account" onClick={() => setMobileMenuOpen(false)} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center',
              padding: '12px',
              background: user ? 'var(--bg-card)' : 'transparent',
              border: user ? '1px solid var(--border)' : 'none',
              borderRadius: '8px',
              margin: '8px 0'
            }}>
              <User size={18} />
              {user ? 'Account' : 'Sign In'}
            </Link>
            <button className="btn btn-primary" onClick={() => { navigate('/booking'); setMobileMenuOpen(false) }} style={{ width: '100%' }}>
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
