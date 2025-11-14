import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { limousines, calculatePrice } from '../data/limousines'
import { ChevronLeft, ChevronRight, Check, Calendar, CreditCard, User, Mail, Phone, MapPin, X } from 'lucide-react'
import DatePicker from '../components/DatePicker'
import Swal from 'sweetalert2'
import { useAuth } from '../context/AuthContext'

const BookingDetail = () => {
  const { carId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [car, setCar] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [bookingStep, setBookingStep] = useState(1)
  const [months, setMonths] = useState(12)
  const [startDate, setStartDate] = useState(null)

  // Form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  useEffect(() => {
    const foundCar = limousines.find(l => l.id === parseInt(carId))
    if (!foundCar) {
      navigate('/cars')
      return
    }
    setCar(foundCar)

    // Pre-fill form if user is logged in
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.user_metadata?.full_name || '',
        email: user.email || '',
        phone: user.user_metadata?.phone || ''
      }))
    }
  }, [carId, navigate, user])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [bookingStep])

  if (!car) {
    return <div>Loading...</div>
  }

  const monthlyPrice = calculatePrice(car.basePrice, months)
  const totalPrice = monthlyPrice * months

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    // Validate payment fields
    if (!formData.cardName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Please fill in all payment details',
        confirmButtonColor: '#000000'
      })
      return
    }

    // Show loading
    Swal.fire({
      title: 'Processing Payment...',
      html: 'Please wait while we process your payment',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success and wait for user to dismiss
    await Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed!',
      html: `<div style="text-align: center; padding: 10px;">
        <p style="font-size: 16px; margin-bottom: 12px;">Thank you for choosing <strong>${car.name}</strong></p>
        <p style="color: #666; font-size: 14px;">We'll contact you within 24 hours to finalize your subscription and arrange delivery.</p>
      </div>`,
      confirmButtonText: 'Great!',
      confirmButtonColor: '#000000',
      customClass: {
        popup: 'swal-custom-popup',
        confirmButton: 'swal-custom-button'
      }
    })

    // Navigate back to cars page
    navigate('/cars')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      paddingTop: '70px',
      paddingBottom: '100px'
    }}>
      {/* Back Button */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <button
          onClick={() => navigate('/cars')}
          className="btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            fontSize: '15px',
            fontWeight: '600',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          <ChevronLeft size={20} />
          Back to Cars
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: bookingStep === 1 ? '1fr' : '1fr 1fr',
        gap: '30px',
        alignItems: 'flex-start'
      }}>
        {/* Left Column - Car Details */}
        <div>
          {/* Car Images */}
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#000',
            marginBottom: '24px'
          }}>
            <img
              src={car.images[currentImageIndex]}
              alt={car.name}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />

            {car.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={24} color="#000" />
                </button>
                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={24} color="#000" />
                </button>

                {/* Image indicators */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px'
                }}>
                  {car.images.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      style={{
                        width: currentImageIndex === index ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Car Info */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '12px'
            }}>
              {car.name}
            </h1>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              {car.description}
            </p>

            {/* Specs */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                padding: '12px',
                background: 'var(--bg-primary)',
                borderRadius: '8px'
              }}>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Capacity
                </p>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {car.capacity} Passengers
                </p>
              </div>
              <div style={{
                padding: '12px',
                background: 'var(--bg-primary)',
                borderRadius: '8px'
              }}>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Year
                </p>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {car.year}
                </p>
              </div>
              <div style={{
                padding: '12px',
                background: 'var(--bg-primary)',
                borderRadius: '8px'
              }}>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Transmission
                </p>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {car.transmission}
                </p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Features
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '8px'
              }}>
                {car.features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <Check size={16} color="#000" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div style={{
          position: 'sticky',
          top: '90px'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px'
          }}>
            {/* Stepper */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              position: 'relative'
            }}>
              {/* Progress line */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '25px',
                right: '25px',
                height: '2px',
                background: 'var(--border)',
                zIndex: 0
              }}>
                <div style={{
                  height: '100%',
                  background: '#000',
                  width: bookingStep === 1 ? '0%' : bookingStep === 2 ? '50%' : '100%',
                  transition: 'width 0.3s ease'
                }} />
              </div>

              {[1, 2, 3].map((step) => (
                <div key={step} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: step <= bookingStep ? '#000' : 'var(--bg-primary)',
                    border: `2px solid ${step <= bookingStep ? '#000' : 'var(--border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step <= bookingStep ? 'white' : 'var(--text-tertiary)',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    marginBottom: '8px'
                  }}>
                    {step < bookingStep ? <Check size={20} /> : step}
                  </div>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: step <= bookingStep ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    textAlign: 'center'
                  }}>
                    {step === 1 ? 'Duration' : step === 2 ? 'Details' : 'Payment'}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Duration Selection */}
            {bookingStep === 1 && (
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '20px'
                }}>
                  Choose Subscription Duration
                </h2>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}>
                    Number of Months: {months}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={months}
                    onChange={(e) => setMonths(parseInt(e.target.value))}
                    style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: '3px',
                      outline: 'none',
                      marginBottom: '8px'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: 'var(--text-tertiary)'
                  }}>
                    <span>1 month</span>
                    <span>60 months</span>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    Start Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onSelect={setStartDate}
                    placeholder="Select start date"
                  />
                </div>

                {/* Pricing Summary */}
                <div style={{
                  padding: '20px',
                  background: 'var(--bg-primary)',
                  borderRadius: '8px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                      Base Price
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      ${car.basePrice.toLocaleString()}/mo
                    </span>
                  </div>
                  {months >= 12 && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}>
                      <span style={{ fontSize: '15px', color: '#22c55e' }}>
                        Long-term Discount
                      </span>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: '#22c55e' }}>
                        -{months >= 36 ? '20' : months >= 24 ? '15' : '10'}%
                      </span>
                    </div>
                  )}
                  <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Monthly Payment
                    </span>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)' }}>
                      ${monthlyPrice.toLocaleString()}
                    </span>
                  </div>
                  <div style={{
                    marginTop: '8px',
                    textAlign: 'right'
                  }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      Total: ${totalPrice.toLocaleString()} for {months} months
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!startDate) {
                      Swal.fire({
                        icon: 'error',
                        title: 'Start Date Required',
                        text: 'Please select a start date',
                        confirmButtonColor: '#000000'
                      })
                      return
                    }
                    setBookingStep(2)
                  }}
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: '600',
                    background: 'var(--bg-dark)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Continue to Details
                </button>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {bookingStep === 2 && (
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '20px'
                }}>
                  Your Details
                </h2>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    Full Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-tertiary)'
                    }} />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="John Doe"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 44px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-tertiary)'
                    }} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="you@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 44px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    Phone Number
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={18} style={{
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-tertiary)'
                    }} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 44px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={18} style={{
                      position: 'absolute',
                      left: '14px',
                      top: '14px',
                      color: 'var(--text-tertiary)'
                    }} />
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="123 Main Street"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 44px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr',
                  gap: '12px',
                  marginBottom: '24px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '8px'
                    }}>
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="New York"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '8px'
                    }}>
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      placeholder="10001"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => setBookingStep(1)}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '16px',
                      fontSize: '16px',
                      fontWeight: '600',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      // Validate all fields
                      if (!formData.fullName || !formData.email || !formData.phone ||
                          !formData.address || !formData.city || !formData.zipCode) {
                        Swal.fire({
                          icon: 'error',
                          title: 'Missing Information',
                          text: 'Please fill in all fields',
                          confirmButtonColor: '#000000'
                        })
                        return
                      }
                      setBookingStep(3)
                    }}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '16px',
                      fontSize: '16px',
                      fontWeight: '600',
                      background: 'var(--bg-dark)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {bookingStep === 3 && (
              <div>
                {/* Stripe Payment Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'linear-gradient(135deg, #635BFF 0%, #0A2540 100%)',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      Secure Payment powered by
                    </div>
                    <svg width="60" height="25" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="20" fill="white" fontSize="20" fontWeight="700" fontFamily="system-ui">Stripe</text>
                    </svg>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.9)'
                  }}>
                    <span>🔒</span>
                    <span>256-bit SSL Encrypted</span>
                  </div>
                </div>

                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '20px'
                }}>
                  Payment Information
                </h2>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={formData.cardName}
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                    placeholder="John Doe"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    Card Number
                  </label>
                  <div style={{ position: 'relative' }}>
                    <CreditCard size={18} style={{
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-tertiary)'
                    }} />
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 44px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr',
                  gap: '12px',
                  marginBottom: '24px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '8px'
                    }}>
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '8px'
                    }}>
                      CVV
                    </label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      placeholder="123"
                      maxLength="4"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div style={{
                  padding: '20px',
                  background: 'var(--bg-primary)',
                  borderRadius: '8px',
                  marginBottom: '24px'
                }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}>
                    Order Summary
                  </h3>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {car.name}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      Duration
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      {months} months
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--border)'
                  }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      Monthly Payment
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      ${monthlyPrice.toLocaleString()}/mo
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Total Amount
                    </span>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)' }}>
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => setBookingStep(2)}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '16px',
                      fontSize: '16px',
                      fontWeight: '600',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePayment}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '16px',
                      fontSize: '16px',
                      fontWeight: '600',
                      background: 'linear-gradient(135deg, #635BFF 0%, #0A2540 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetail
