import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is included in the subscription?',
      answer: 'Everything! Your subscription includes the limousine, professional chauffeur service, comprehensive insurance, road tax, regular maintenance, 24/7 customer support, and doorstep delivery. No hidden costs whatsoever.'
    },
    {
      question: 'How does the approval process work?',
      answer: 'Submit your application online with basic details. Our team reviews it within 24 hours. Once approved, choose your delivery date and we bring the limousine to your doorstep with a professional chauffeur.'
    },
    {
      question: 'Can I swap my limousine during the subscription?',
      answer: 'Yes! You can swap your limousine anytime during your subscription period at no extra cost. Perfect for switching between a business vehicle and a wedding limo based on your needs.'
    },
    {
      question: 'Is there a down payment required?',
      answer: 'No down payment needed! Just pay your monthly subscription fee and enjoy your luxury limousine experience immediately.'
    },
    {
      question: 'What happens if the vehicle needs maintenance?',
      answer: 'All maintenance is included and handled by us. If servicing is needed, we provide a replacement limousine so you experience zero downtime.'
    },
    {
      question: 'Can I cancel my subscription early?',
      answer: 'Yes, you can cancel with 30 days notice. Early cancellation fees may apply depending on your subscription length and terms agreed upon at signup.'
    },
    {
      question: 'Do I need to pay for fuel and tolls?',
      answer: 'Fuel and tolls are included for chauffeur-driven services within the agreed usage limits. Extended trips may have additional charges as per your subscription agreement.'
    },
    {
      question: 'What types of limousines are available?',
      answer: 'We offer Mercedes S-Class, BMW 7-Series, Rolls-Royce Phantom, Maybach, Bentley, Audi A8, and stretch limousines. All vehicles are regularly maintained and less than 3 years old.'
    },
    {
      question: 'How long can I subscribe for?',
      answer: 'Subscriptions range from 1 to 60 months. Longer subscriptions get better rates – save up to 20% with 36+ month plans.'
    },
    {
      question: 'Is the chauffeur available 24/7?',
      answer: 'Chauffeur availability depends on your subscription package. Standard packages include 8-12 hours daily service, while premium packages offer 24/7 availability.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" style={{ background: '#0a0a0a', padding: '100px 20px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked <span className="gold-text">Questions</span></h2>
          <p>Everything you need to know about Carbnb subscriptions</p>
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '60px auto 0'
        }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: '16px',
                background: openIndex === index ? 'rgba(212, 175, 55, 0.05)' : '#000',
                border: `1px solid ${openIndex === index ? 'var(--gold)' : 'rgba(212, 175, 55, 0.2)'}`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '24px 28px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-light)',
                  fontSize: '18px',
                  fontWeight: '600',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold)'
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.color = 'var(--text-light)'
                  }
                }}
              >
                <span style={{
                  color: openIndex === index ? 'var(--gold)' : 'inherit',
                  paddingRight: '20px'
                }}>
                  {faq.question}
                </span>
                <span style={{
                  fontSize: '24px',
                  color: 'var(--gold)',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                  flexShrink: 0
                }}>
                  +
                </span>
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, padding 0.3s ease'
                }}
              >
                <div style={{
                  padding: '0 28px 24px',
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'var(--text-gray)'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          background: 'rgba(212, 175, 55, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <h3 style={{
            fontSize: '24px',
            marginBottom: '12px',
            fontFamily: 'Playfair Display, serif'
          }}>
            Still have questions?
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-gray)',
            marginBottom: '24px'
          }}>
            Our team is here to help. Contact us anytime.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              const element = document.getElementById('footer')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
