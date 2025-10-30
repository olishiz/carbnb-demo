import React from 'react'

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">Carbnb</a>
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
        </div>
      </div>
    </header>
  )
}

export default Header
