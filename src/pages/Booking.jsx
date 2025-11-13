import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { limousines, calculatePrice } from '../data/limousines'
import DatePicker from '../components/DatePicker'
import Swal from 'sweetalert2'
import { Check } from 'lucide-react'

const Booking = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCar, setSelectedCar] = useState(null)
  const [formData, setFormData] = useState({
    // Booking Details
    duration: '12',
    startDate: null,

    // Personal Details
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',

    // Payment Details
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    billingCity: '',
    billingZipCode: ''
  })

  const steps = [
    { number: 1, title: 'Select Car', description: 'Choose your limousine' },
    { number: 2, title: 'Your Details', description: 'Personal information' },
    { number: 3, title: 'Payment', description: 'Complete checkout' }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNext = () => {
    if (currentStep === 1 && !selectedCar) {
      Swal.fire({
        icon: 'warning',
        title: 'Select a Car',
        text: 'Please select a limousine to continue',
        confirmButtonColor: '#000000'
      })
      return
    }
    setCurrentStep(currentStep + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
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
    await new Promise(resolve => setTimeout(resolve, 2500))

    // Show success
    await Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed!',
      html: `<div style="text-align: center; padding: 10px;">
        <p style="font-size: 16px; margin-bottom: 12px;">Thank you for choosing <strong>${selectedCar.name}</strong></p>
        <p style="color: #666; font-size: 14px;">We'll contact you within 24 hours to finalize your subscription and arrange delivery.</p>
        <p style="color: #666; font-size: 14px; margin-top: 12px;">Confirmation email sent to <strong>${formData.email}</strong></p>
      </div>`,
      confirmButtonText: 'Back to Home',
      confirmButtonColor: '#000000',
      customClass: {
        popup: 'swal-custom-popup',
        confirmButton: 'swal-custom-button'
      }
    })

    navigate('/')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-elevated)', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: '800', marginBottom: '12px', color: 'var(--text-primary)' }}>
            COMPLETE YOUR BOOKING
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Just a few steps to reserve your luxury limousine
          </p>
        </div>

        {/* Stepper */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {/* Progress Line */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '0',
              right: '0',
              height: '2px',
              background: 'var(--border)',
              zIndex: 0
            }}>
              <div style={{
                height: '100%',
                background: 'var(--primary)',
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                transition: 'width 0.3s ease'
              }} />
            </div>

            {/* Steps */}
            {steps.map((step) => (
              <div key={step.number} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                flex: 1
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: currentStep >= step.number ? 'var(--primary)' : 'var(--bg-card)',
                  border: `2px solid ${currentStep >= step.number ? 'var(--primary)' : 'var(--border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: currentStep >= step.number ? 'white' : 'var(--text-tertiary)',
                  fontWeight: '700',
                  fontSize: '16px',
                  marginBottom: '12px',
                  transition: 'all 0.3s ease'
                }}>
                  {currentStep > step.number ? <Check size={24} /> : step.number}
                </div>
                <div style={{ textAlign: 'center', maxWidth: '120px' }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: currentStep >= step.number ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    marginBottom: '4px'
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--text-tertiary)',
                    display: window.innerWidth < 768 ? 'none' : 'block'
                  }}>
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          padding: 'clamp(24px, 5vw, 48px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          {/* Step 1: Car Selection */}
          {currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: 'var(--text-primary)' }}>
                Choose Your Limousine
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
                marginBottom: '32px'
              }}>
                {limousines.map((car) => (
                  <div
                    key={car.id}
                    onClick={() => setSelectedCar(car)}
                    style={{
                      border: selectedCar?.id === car.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: selectedCar?.id === car.id ? 'rgba(0,0,0,0.02)' : 'var(--bg-card)',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCar?.id !== car.id) {
                        e.currentTarget.style.transform = 'translateY(-4px)'
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {selectedCar?.id === car.id && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                      }}>
                        <Check size={20} color="white" />
                      </div>
                    )}
                    <img src={car.images[0]} alt={car.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>
                        {car.name}
                      </h3>
                      <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>
                        {car.capacity} passengers • {car.fuel}
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)' }}>
                        RM{car.basePrice.toLocaleString()}
                        <span style={{ fontSize: '14px', color: 'var(--text-tertiary)', fontWeight: '500' }}>/mo</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Car Details */}
              {selectedCar && (
                <div style={{
                  padding: '24px',
                  background: 'var(--bg-elevated)',
                  borderRadius: '12px',
                  marginBottom: '32px',
                  border: '1px solid var(--border)'
                }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                    Subscription Details
                  </h3>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Subscription Duration
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-card)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="1">1 Month - RM{selectedCar.basePrice.toLocaleString()}/mo</option>
                      <option value="12">12 Months - RM{calculatePrice(selectedCar.basePrice, 12).toLocaleString()}/mo (10% off)</option>
                      <option value="24">24 Months - RM{calculatePrice(selectedCar.basePrice, 24).toLocaleString()}/mo (15% off)</option>
                      <option value="36">36+ Months - RM{calculatePrice(selectedCar.basePrice, 36).toLocaleString()}/mo (20% off)</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Start Date
                    </label>
                    <DatePicker
                      selected={formData.startDate}
                      onSelect={(date) => setFormData({ ...formData, startDate: date })}
                      placeholder="Select your start date"
                    />
                  </div>
                  <div style={{
                    padding: '16px',
                    background: 'var(--bg-card)',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Monthly Payment: RM{calculatePrice(selectedCar.basePrice, parseInt(formData.duration)).toLocaleString()}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => navigate('/')}
                  className="btn btn-secondary"
                  style={{ padding: '14px 28px' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleNext}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px' }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {currentStep === 2 && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: 'var(--text-primary)' }}>
                Your Information
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Full Name <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '15px',
                      fontFamily: 'Inter, sans-serif',
                      background: 'var(--bg-main)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Email <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '15px',
                      fontFamily: 'Inter, sans-serif',
                      background: 'var(--bg-main)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Phone <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+60 12-345 6789"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '15px',
                      fontFamily: 'Inter, sans-serif',
                      background: 'var(--bg-main)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <div style={{ gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Address <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street address"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '15px',
                      fontFamily: 'Inter, sans-serif',
                      background: 'var(--bg-main)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    City <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Kuala Lumpur"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '15px',
                      fontFamily: 'Inter, sans-serif',
                      background: 'var(--bg-main)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Zip Code <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="50000"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '15px',
                      fontFamily: 'Inter, sans-serif',
                      background: 'var(--bg-main)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleBack}
                  className="btn btn-secondary"
                  style={{ padding: '14px 28px' }}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px' }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: 'var(--text-primary)' }}>
                Payment Details
              </h2>

              {/* Order Summary */}
              <div style={{
                padding: '24px',
                background: 'var(--bg-elevated)',
                borderRadius: '12px',
                marginBottom: '32px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  Order Summary
                </h3>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <img src={selectedCar.images[0]} alt={selectedCar.name} style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'var(--text-primary)' }}>
                      {selectedCar.name}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                      {formData.duration} month subscription
                    </div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Monthly Payment</span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      RM{calculatePrice(selectedCar.basePrice, parseInt(formData.duration)).toLocaleString()}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Security Deposit</span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      RM{(calculatePrice(selectedCar.basePrice, parseInt(formData.duration)) * 2).toLocaleString()}
                    </span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>Total Due Today</span>
                      <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)' }}>
                        RM{(calculatePrice(selectedCar.basePrice, parseInt(formData.duration)) * 3).toLocaleString()}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                      First month + refundable security deposit
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  Card Information
                </h3>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Name on Card <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Card Number <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                        Expiry Date <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          fontSize: '15px',
                          fontFamily: 'Inter, sans-serif',
                          background: 'var(--bg-main)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                        CVV <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength="3"
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          fontSize: '15px',
                          fontFamily: 'Inter, sans-serif',
                          background: 'var(--bg-main)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  Billing Address
                </h3>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Billing Address <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      placeholder="Street address"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        background: 'var(--bg-main)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                        City <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="billingCity"
                        value={formData.billingCity}
                        onChange={handleInputChange}
                        placeholder="Kuala Lumpur"
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          fontSize: '15px',
                          fontFamily: 'Inter, sans-serif',
                          background: 'var(--bg-main)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                        Zip Code <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="billingZipCode"
                        value={formData.billingZipCode}
                        onChange={handleInputChange}
                        placeholder="50000"
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          fontSize: '15px',
                          fontFamily: 'Inter, sans-serif',
                          background: 'var(--bg-main)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div style={{
                padding: '16px',
                background: 'var(--bg-elevated)',
                borderRadius: '8px',
                marginBottom: '24px',
                fontSize: '12px',
                color: 'var(--text-tertiary)',
                lineHeight: '1.6'
              }}>
                By clicking "Complete Payment", you agree to our Terms of Service and Privacy Policy. Your payment is secure and encrypted. The security deposit is fully refundable at the end of your subscription.
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleBack}
                  className="btn btn-secondary"
                  style={{ padding: '14px 28px' }}
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '16px' }}
                >
                  Complete Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Booking
