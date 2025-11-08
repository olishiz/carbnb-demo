import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  const handleNavigation = (path, sectionId = null) => {
    if (path) {
      navigate(path)
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer style={{
      background: 'var(--bg-elevated)',
      borderTop: '1px solid var(--border)',
      padding: '80px 20px 40px'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand Column */}
          <div>
            <Link to="/" style={{
              fontSize: '28px',
              fontWeight: '800',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              display: 'block'
            }}>
              Carbnb
            </Link>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '20px'
            }}>
              Malaysia's premier luxury limousine subscription service. Experience the finest vehicles with ultimate flexibility.
            </p>
            <div style={{
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-primary)',
              fontStyle: 'italic'
            }}>
              Love it. Ride it. Carbnb it.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Limousines', path: '/cars' },
                { label: 'How It Works', path: '/', sectionId: 'how-it-works' },
                { label: 'About Us', path: '/' },
                { label: 'Contact', path: '/' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <button
                    onClick={() => handleNavigation(link.path, link.sectionId)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'color 0.2s ease',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <span style={{
                  color: 'var(--text-tertiary)',
                  fontSize: '13px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Address
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                  Kuala Lumpur, Malaysia
                </span>
              </li>
              <li style={{
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <span style={{
                  color: 'var(--text-tertiary)',
                  fontSize: '13px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Phone
                </span>
                <a
                  href="tel:+60123456789"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  +60 12-345 6789
                </a>
              </li>
              <li style={{
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <span style={{
                  color: 'var(--text-tertiary)',
                  fontSize: '13px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Email
                </span>
                <a
                  href="mailto:hello@carbnb.my"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  hello@carbnb.my
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={`https://${social.name.toLowerCase()}.com/carbnb`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--text-primary)'
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.borderColor = 'var(--text-primary)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-card)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: 'var(--bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--border)'
            }}>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                marginBottom: '12px',
                fontWeight: '500'
              }}>
                Subscribe to our newsletter
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  fontSize: '14px',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  background: 'var(--bg-main)',
                  color: 'var(--text-primary)',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
              <button
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '10px',
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
          borderTop: '1px solid var(--border)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-tertiary)',
            margin: 0
          }}>
            © {currentYear} Carbnb.my. All rights reserved.
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <a
              href="#"
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
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
