import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dato\' Ahmad Rashid',
      title: 'CEO, Tech Innovations Sdn Bhd',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Carbnb transformed how I travel for business. The Mercedes S-Class with a professional chauffeur gives me time to work on the go. Swapping to a Rolls-Royce for special events is seamless. Highly recommended!'
    },
    {
      name: 'Sarah Lim',
      title: 'Wedding Planner',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'I recommend Carbnb to all my wedding clients. The stretch limousines are pristine, chauffeurs are professional, and the flexibility is unbeatable. No other service comes close.'
    },
    {
      name: 'Tan Wei Ming',
      title: 'Entrepreneur',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'Switching from owning to subscribing was the best decision. No depreciation worries, no maintenance hassles, and I can swap between vehicles. Saved over RM50k in year one alone!'
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Medical Consultant',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      text: 'The convenience of having a chauffeur-driven BMW 7-Series without the commitment of buying is perfect for my lifestyle. Customer service is exceptional, and approval was genuinely within 24 hours.'
    },
    {
      name: 'Khairul Azman',
      title: 'Event Organizer',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 5,
      text: 'We use Carbnb for corporate events and VIP transportation. The fleet quality is outstanding, and the all-inclusive package makes budgeting easy. Our clients are always impressed!'
    }
  ]

  const StarRating = ({ rating }) => {
    return (
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', justifyContent: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              color: i < rating ? 'var(--gold)' : 'rgba(212, 175, 55, 0.3)',
              fontSize: '20px'
            }}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section style={{ background: '#000', padding: '100px 20px' }}>
      <div className="container">
        <div className="section-header">
          <h2>What Our <span className="gold-text">Clients Say</span></h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '20px'
          }}>
            <div style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'var(--gold)',
              fontFamily: 'Playfair Display, serif'
            }}>
              4.9
            </div>
            <div>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--gold)', fontSize: '24px' }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-gray)' }}>
                Based on 500+ reviews
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '16px',
                padding: '40px 30px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '3px solid var(--gold)',
                  marginBottom: '20px'
                }}
              />

              <StarRating rating={testimonial.rating} />

              <p style={{
                fontSize: '15px',
                lineHeight: '1.8',
                color: 'var(--text-light)',
                marginBottom: '24px',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>

              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: 'var(--gold)',
                marginBottom: '4px'
              }}>
                {testimonial.name}
              </h4>

              <p style={{
                fontSize: '14px',
                color: 'var(--text-gray)'
              }}>
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              const element = document.getElementById('limousines')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Join Our Happy Clients
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
