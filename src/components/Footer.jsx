import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" style={{
      background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)',
      padding: '80px 20px 40px'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '60px'
        }}>
          {/* Brand Column */}
          <div>
            <h3 style={{
              fontSize: '32px',
              fontFamily: 'Playfair Display, serif',
              color: 'var(--gold)',
              marginBottom: '16px'
            }}>
              Carbnb
            </h3>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-gray)',
              lineHeight: '1.8',
              marginBottom: '24px'
            }}>
              Malaysia's premier luxury limousine subscription service. Experience the finest vehicles without the commitment.
            </p>
            <div style={{
              fontSize: '18px',
              fontStyle: 'italic',
              color: 'var(--gold)',
              fontFamily: 'Playfair Display, serif'
            }}>
              Love it. Ride it. Carbnb it.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--text-light)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { label: 'Limousines', href: '#limousines' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'About Us', href: '#' },
                { label: 'Contact', href: '#footer' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        const element = document.getElementById(link.href.substring(1))
                        if (element) element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    style={{
                      color: 'var(--text-gray)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--gold)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-gray)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--text-light)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'start',
                gap: '12px'
              }}>
                <span style={{ color: 'var(--gold)', fontSize: '20px' }}>📍</span>
                <span style={{ color: 'var(--text-gray)', fontSize: '15px', lineHeight: '1.6' }}>
                  Kuala Lumpur, Malaysia
                </span>
              </li>
              <li style={{
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ color: 'var(--gold)', fontSize: '20px' }}>📞</span>
                <a
                  href="tel:+60123456789"
                  style={{
                    color: 'var(--text-gray)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-gray)'}
                >
                  +60 12-345 6789
                </a>
              </li>
              <li style={{
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ color: 'var(--gold)', fontSize: '20px' }}>✉️</span>
                <a
                  href="mailto:hello@carbnb.my"
                  style={{
                    color: 'var(--text-gray)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-gray)'}
                >
                  hello@carbnb.my
                </a>
              </li>
              <li style={{
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ color: 'var(--gold)', fontSize: '20px' }}>🌐</span>
                <a
                  href="https://www.carbnb.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-gray)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-gray)'}
                >
                  www.carbnb.my
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--text-light)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { icon: 'facebook', label: 'Facebook' },
                { icon: 'instagram', label: 'Instagram' },
                { icon: 'twitter', label: 'Twitter' },
                { icon: 'linkedin', label: 'LinkedIn' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={`https://${social.icon}.com/carbnb`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold)',
                    textDecoration: 'none',
                    fontSize: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--black)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'
                    e.currentTarget.style.color = 'var(--gold)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {social.icon === 'facebook' && 'f'}
                  {social.icon === 'instagram' && 'i'}
                  {social.icon === 'twitter' && 't'}
                  {social.icon === 'linkedin' && 'in'}
                </a>
              ))}
            </div>

            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: 'rgba(212, 175, 55, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-gray)',
                marginBottom: '12px'
              }}>
                Subscribe to our newsletter
              </p>
              <button
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px'
                }}
                onClick={() => alert('Newsletter subscription coming soon!')}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-gray)',
            margin: 0
          }}>
            © {currentYear} Carbnb.my. All rights reserved.
          </p>

          <div style={{
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <a
              href="#"
              style={{
                fontSize: '14px',
                color: 'var(--text-gray)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-gray)'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: '14px',
                color: 'var(--text-gray)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-gray)'}
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{
                fontSize: '14px',
                color: 'var(--text-gray)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-gray)'}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
