import React from 'react'

const ComparisonTable = () => {
  const features = [
    { name: 'Professional Chauffeur', buy: false, rent: false, carbnb: true },
    { name: 'All-Inclusive Package', buy: false, rent: false, carbnb: true },
    { name: 'Insurance & Road Tax', buy: false, rent: 'Partial', carbnb: true },
    { name: 'Maintenance Included', buy: false, rent: false, carbnb: true },
    { name: 'Swap Vehicles', buy: false, rent: false, carbnb: true },
    { name: 'No Down Payment', buy: false, rent: true, carbnb: true },
    { name: '24/7 Support', buy: false, rent: 'Limited', carbnb: true },
    { name: 'Doorstep Delivery', buy: false, rent: false, carbnb: true },
    { name: 'Flexible Duration', buy: false, rent: 'Limited', carbnb: true }
  ]

  const CheckIcon = () => (
    <span style={{ color: 'var(--gold)', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
  )

  const CrossIcon = () => (
    <span style={{ color: '#666', fontSize: '24px' }}>✗</span>
  )

  const renderCell = (value) => {
    if (value === true) return <CheckIcon />
    if (value === false) return <CrossIcon />
    return <span style={{ color: 'var(--text-gray)', fontSize: '14px' }}>{value}</span>
  }

  return (
    <section style={{ background: '#000', padding: '100px 20px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Why Choose <span className="gold-text">Carbnb</span></h2>
          <p>Compare traditional options with our all-inclusive subscription model</p>
        </div>

        <div style={{
          marginTop: '60px',
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: '0 12px',
            minWidth: '700px'
          }}>
            <thead>
              <tr>
                <th style={{
                  textAlign: 'left',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--text-light)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  Feature
                </th>
                <th style={{
                  textAlign: 'center',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--text-light)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  Buy
                </th>
                <th style={{
                  textAlign: 'center',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--text-light)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  Rent
                </th>
                <th style={{
                  textAlign: 'center',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--gold)',
                  fontFamily: 'Playfair Display, serif',
                  background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '12px 12px 0 0'
                }}>
                  Carbnb ⭐
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} style={{
                  background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent'
                }}>
                  <td style={{
                    padding: '20px',
                    fontSize: '15px',
                    color: 'var(--text-light)',
                    borderRadius: '8px 0 0 8px'
                  }}>
                    {feature.name}
                  </td>
                  <td style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    {renderCell(feature.buy)}
                  </td>
                  <td style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    {renderCell(feature.rent)}
                  </td>
                  <td style={{
                    padding: '20px',
                    textAlign: 'center',
                    background: 'rgba(212, 175, 55, 0.05)',
                    borderRadius: '0 8px 8px 0'
                  }}>
                    {renderCell(feature.carbnb)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            fontSize: '28px',
            marginBottom: '16px',
            color: 'var(--gold)',
            fontFamily: 'Playfair Display, serif'
          }}>
            Ready to Experience Luxury?
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-gray)',
            marginBottom: '30px'
          }}>
            No loans, no interest, no hassle. Just pure luxury at your fingertips.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              const element = document.getElementById('limousines')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Browse Limousines
          </button>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
