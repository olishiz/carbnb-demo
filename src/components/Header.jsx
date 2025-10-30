import React, { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">Carbnb</a>

          {/* Desktop Nav */}
          <nav className="nav">
            <a href="#limousines" onClick={(e) => { e.preventDefault(); scrollToSection('limousines') }}>
              Limousines
            </a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works') }}>
              How It Works
            </a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }}>
              Pricing
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>
              FAQ
            </a>
            <button className="btn btn-primary" onClick={() => scrollToSection('limousines')}>
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
              background: 'var(--gold)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              background: 'var(--gold)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '25px',
              height: '3px',
              background: 'var(--gold)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#limousines" onClick={(e) => { e.preventDefault(); scrollToSection('limousines') }}>
              Limousines
            </a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works') }}>
              How It Works
            </a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }}>
              Pricing
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>
              FAQ
            </a>
            <button className="btn btn-primary" onClick={() => scrollToSection('limousines')} style={{ width: '100%' }}>
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
